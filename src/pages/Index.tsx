import { Sparkles, Music, Cat, Flame } from 'lucide-react';
import { Card } from '@/components/ui/card';
import everleighCat from '@/assets/everleigh-cat-nobg.png';

const Index = () => {
  const grumpyCatUrl = everleighCat;

  return (
    <div className="min-h-screen bg-gradient-hero font-body">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        {/* Floating emojis */}
        <div className="absolute top-32 left-[25%] text-5xl md:text-8xl float-emoji opacity-75">🎉</div>
        <div className="absolute top-48 right-[25%] text-5xl md:text-8xl float-emoji opacity-75" style={{ animationDelay: '0.5s' }}>
          ✨
        </div>
        <div className="absolute bottom-40 left-[20%] text-5xl md:text-8xl float-emoji opacity-75" style={{ animationDelay: '1s' }}>
          💃
        </div>
        <div className="absolute bottom-32 right-[25%] text-5xl md:text-8xl float-emoji opacity-75" style={{ animationDelay: '1.5s' }}>
          🔥
        </div>

        <div className="relative z-10 text-center max-w-4xl animate-fade-in">
          {/* Grumpy Cat Hero */}
          <div className="mb-8 relative inline-block">
            {/* Radial glow */}
            <div className="absolute -inset-24 rounded-full" style={{
              background: 'radial-gradient(closest-side, rgba(255,153,102,0.6), rgba(255,153,102,0) 70%)'
            }} />
            <img
              src={grumpyCatUrl}
              alt="Grumpy birthday cat"
              className="relative w-64 h-64 mx-auto object-contain drop-shadow-2xl hover:scale-125 transition-transform duration-300 ease-[cubic-bezier(.22,.61,.36,1)]"
            />
          </div>

          <h1 className="font-heading font-extrabold text-7xl md:text-9xl mb-6 bg-gradient-dance bg-clip-text text-transparent leading-tight" style={{ letterSpacing: '-0.02em' }}>
            EVERLEIGH
          </h1>

          <p className="text-2xl md:text-3xl font-bold text-foreground mb-4">🔥 RED HAIR DON'T CARE 🔥</p>

          <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto mb-8">
            Dancer | Future cat mom | Living my best life
          </p>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading font-black text-5xl md:text-6xl text-center mb-4 bg-gradient-fun bg-clip-text text-transparent">
            THE VIBE CHECK
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-xl">aka things you should know</p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Dance Card */}
            <Card className="p-8 bg-card border-4 border-primary/30 hover:border-primary hover:shadow-xl transition-all hover:-translate-y-2 hover:scale-105 animate-fade-in">
              <div className="text-center mb-4">
                <div className="inline-flex p-4 bg-gradient-dance rounded-2xl mb-4 shadow-glow">
                  <Music className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-black text-2xl mb-3">DANCE LIFE</h3>
                <div className="text-5xl mb-4">💃</div>
              </div>
              <p className="text-muted-foreground leading-relaxed text-center">
                When that music hits different and you just KNOW you're about to absolutely slay the competition.
              </p>
            </Card>

            {/* Red Hair Card */}
            <Card className="p-8 bg-card border-4 border-destructive/30 hover:border-destructive hover:shadow-xl transition-all hover:-translate-y-2 hover:scale-105 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-center mb-4">
                <div className="inline-flex p-4 bg-gradient-to-br from-destructive to-primary rounded-2xl mb-4 shadow-glow">
                  <Flame className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-black text-2xl mb-3">RED HAIR ERA</h3>
                <div className="text-5xl mb-4">🔥</div>
              </div>
              <p className="text-muted-foreground leading-relaxed text-center">
                Bright red hair is not a phase, it's a LIFESTYLE. Main character energy unlocked. The icon everyone wants to be.
              </p>
            </Card>

            {/* Cat Dreams Card */}
            <Card className="p-8 bg-card border-4 border-secondary/30 hover:border-secondary hover:shadow-xl transition-all hover:-translate-y-2 hover:scale-105 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-center mb-4">
                <div className="inline-flex p-4 bg-gradient-fun rounded-2xl mb-4 shadow-glow">
                  <Cat className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-black text-2xl mb-3">FUTURE CAT MOM</h3>
                <div className="text-5xl mb-4">😾</div>
              </div>
              <p className="text-muted-foreground leading-relaxed text-center">
                One day soon there WILL be a grumpy cat to adopt and love. That's literally the dream. Manifesting it.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-12 bg-gradient-dance text-primary-foreground border-0 shadow-2xl">
            <h2 className="font-heading font-black text-4xl text-center mb-12">THE STATS</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl md:text-6xl font-black mb-2">13</div>
                <div className="text-sm md:text-base opacity-90">Years of Being Iconic</div>
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-black mb-2">∞</div>
                <div className="text-sm md:text-base opacity-90">Dance Competitions Won</div>
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-black mb-2">100%</div>
                <div className="text-sm md:text-base opacity-90">Main Character Energy</div>
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-black mb-2">1</div>
                <div className="text-sm md:text-base opacity-90">Cat (Coming Soon™)</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <p className="text-3xl font-black font-heading bg-gradient-fun bg-clip-text text-transparent">THRIVING</p>
          <div className="flex items-center justify-center gap-3 text-muted-foreground flex-wrap">
            <Sparkles className="w-5 h-5 text-primary" />
            <p className="font-heading text-lg">Living proof that you can dance your way through life and look good doing it</p>
            <Sparkles className="w-5 h-5 text-primary" />
          </div>
          <p className="text-4xl">💅✨🔥</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;


