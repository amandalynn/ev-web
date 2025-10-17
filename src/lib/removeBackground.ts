import { pipeline, env } from '@huggingface/transformers';

// Configure transformers.js to always download models
env.allowLocalModels = false;
env.useBrowserCache = false;

const MAX_IMAGE_DIMENSION = 1024;

function resizeImageIfNeeded(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, image: HTMLImageElement) {
  let width = image.naturalWidth;
  let height = image.naturalHeight;

  if (width > MAX_IMAGE_DIMENSION || height > MAX_IMAGE_DIMENSION) {
    if (width > height) {
      height = Math.round((height * MAX_IMAGE_DIMENSION) / width);
      width = MAX_IMAGE_DIMENSION;
    } else {
      width = Math.round((width * MAX_IMAGE_DIMENSION) / height);
      height = MAX_IMAGE_DIMENSION;
    }

    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(image, 0, 0, width, height);
    return true;
  }

  canvas.width = width;
  canvas.height = height;
  ctx.drawImage(image, 0, 0);
  return false;
}

export const removeBackground = async (imageElement: HTMLImageElement): Promise<Blob> => {
  try {
    const device = (typeof navigator !== 'undefined' && 'gpu' in navigator) ? 'webgpu' : 'wasm';
    // Use RMBG model which is specifically trained for background removal
    const segmenter = await pipeline('image-segmentation', 'Xenova/modnet', { device });

    // Convert HTMLImageElement to canvas
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Could not get canvas context');

    // Resize image if needed and draw it to canvas
    resizeImageIfNeeded(canvas, ctx, imageElement);

    // Get image data as base64
    const imageData = canvas.toDataURL('image/jpeg', 0.8);

    // Process the image with the segmentation model
    const result = await segmenter(imageData);
    if (!result || !Array.isArray(result) || result.length === 0 || !result[0].mask) {
      throw new Error('Invalid segmentation result');
    }

    // Create a new canvas for the masked image
    const outputCanvas = document.createElement('canvas');
    outputCanvas.width = canvas.width;
    outputCanvas.height = canvas.height;
    const outputCtx = outputCanvas.getContext('2d');
    if (!outputCtx) throw new Error('Could not get output canvas context');

    // Draw original image
    outputCtx.drawImage(canvas, 0, 0);

    // Apply the mask with threshold + feathering for cleaner edges
    const outputImageData = outputCtx.getImageData(0, 0, outputCanvas.width, outputCanvas.height);
    const data = outputImageData.data;
    const mask = result[0].mask.data as Float32Array | number[];
    const threshold = 0.5; // pixels above this are considered background
    const feather = 6; // pixels

    // First pass: create binary mask and distance field initialization
    const width = outputCanvas.width;
    const height = outputCanvas.height;
    const binary: Uint8Array = new Uint8Array(mask.length);
    for (let i = 0; i < mask.length; i++) {
      binary[i] = mask[i] > threshold ? 1 : 0; // 1 = background
    }

    // Simple feather: for each pixel near boundary, reduce alpha gradually
    // Compute a naive box blur distance approximation in a small window
    const tmpAlpha: Uint8Array = new Uint8Array(mask.length);
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const idx = y * width + x;
        let minNeighbor = 255;
        for (let dy = -feather; dy <= feather; dy++) {
          const ny = y + dy;
          if (ny < 0 || ny >= height) continue;
          for (let dx = -feather; dx <= feather; dx++) {
            const nx = x + dx;
            if (nx < 0 || nx >= width) continue;
            const nidx = ny * width + nx;
            const val = binary[nidx] ? 0 : 255; // subject=255
            // Keep minimum in neighborhood to erode edges a bit
            if (val < minNeighbor) minNeighbor = val;
          }
        }
        tmpAlpha[idx] = minNeighbor;
      }
    }

    for (let i = 0; i < tmpAlpha.length; i++) {
      data[i * 4 + 3] = tmpAlpha[i];
    }
    outputCtx.putImageData(outputImageData, 0, 0);

    // Convert canvas to blob
    return new Promise((resolve, reject) => {
      outputCanvas.toBlob(
        (blob) => {
          if (blob) resolve(blob);
          else reject(new Error('Failed to create blob'));
        },
        'image/png',
        1.0
      );
    });
  } catch (error) {
    console.error('Error removing background:', error);
    throw error;
  }
};

export const loadImage = (file: Blob): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = URL.createObjectURL(file);
  });
};

export const loadImageFromUrl = (url: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    // Only set CORS for remote URLs; same-origin assets don't need it and
    // some browsers may treat it differently
    if (/^https?:\/\//i.test(url)) {
      img.crossOrigin = 'anonymous';
    }
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = url;
  });
};


