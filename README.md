# Everleigh Birthday Landing Page 🎉

A vibrant, animated birthday landing page built with React, TypeScript, and Tailwind CSS featuring a Gen Z aesthetic with floating emojis, gradient text, and smooth animations.

## Features

- 🎨 **Modern Design System**: Custom gradients, animations, and Gen Z-inspired aesthetic
- 🐱 **AI Background Removal**: Automatically processed cat image with transparent background
- ✨ **Floating Animations**: Corner emojis with smooth vertical floating effect
- 🎯 **Responsive Layout**: Mobile-first design that looks great on all devices
- 💅 **Interactive Elements**: Hover effects, smooth transitions, and card animations
- ⚡ **Fast Performance**: Built with Vite for optimal loading speed

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Icon library
- **@huggingface/transformers** - AI background removal

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
ev-website/
├── src/
│   ├── assets/          # Images (cat photos)
│   ├── components/      # UI components (Button, Card)
│   ├── lib/            # Utilities (background removal)
│   ├── pages/          # Page components (Index)
│   ├── index.css       # Global styles & animations
│   └── main.tsx        # App entry point
├── index.html          # HTML template with SEO meta
├── tailwind.config.ts  # Tailwind configuration
├── vite.config.ts      # Vite configuration
└── package.json        # Dependencies

```

## Customization

### Colors
Edit the HSL color tokens in `src/index.css`:
- `--hero-start` / `--hero-end` - Hero gradient background
- `--gradient-dance` - Multi-color gradient for heading
- `--gradient-fun` - Pink to orange gradient

### Animations
Adjust keyframes in `src/index.css`:
- `float` - Emoji floating animation (50px vertical movement)
- `fade-in` - Fade in entrance
- `pulse` - Pulsing glow effect

### Content
Update text and emojis in `src/pages/Index.tsx`

## License

MIT

## Credits

Created for Everleigh's 13th birthday 🎂

