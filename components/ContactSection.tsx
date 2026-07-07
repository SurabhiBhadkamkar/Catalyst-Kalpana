import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Phone, Mail, Sparkles } from 'lucide-react';

export default function ContactSection() {
  const phone = '9082699149';
  const email = 'catalystkalpana@gmail.com';

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <section className="relative w-full min-h-screen bg-black text-white pt-24 pb-20 px-4 md:px-8 overflow-y-auto flex items-center justify-center">
      {/* Subtle dotted grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            'radial-gradient(rgba(255,255,255,0.08) 0.8px, transparent 0.8px)',
          backgroundSize: '14px 14px',
          maskImage:
            'radial-gradient(circle at 50% 50%, rgba(0,0,0,1), rgba(0,0,0,0.1) 70%, rgba(0,0,0,0) 100%)',
        }}
      />

      {/* Radial spotlight */}
      <div
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[100vmin] w-[100vmin] rounded-full z-0',
          'bg-[radial-gradient(ellipse_at_center,rgba(232,112,42,0.1),transparent_50%)]',
          'blur-[50px]',
        )}
      />

      <div className="max-w-xl w-full mx-auto flex flex-col items-center gap-10 relative z-10 hero-anim hero-reveal">
        {/* Contact Header */}
        <div className="text-center flex flex-col gap-3 max-w-md mx-auto">
          <span className="text-[10px] tracking-[0.3em] font-mono font-semibold text-[#e8702a] uppercase">
            CONNECT WITH CATALYST KALPANA
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold tracking-tight text-white">
            Let's build something exceptional
          </h2>
          <p className="text-white/50 text-sm font-light leading-relaxed">
            Have an idea, project, or general inquiry? Get in touch directly. We are always ready to collaborate on innovative digital design systems and solutions.
          </p>
        </div>

        {/* Contact Info Card */}
        <div className="w-full bg-neutral-900/40 backdrop-blur-md rounded-2xl border border-white/5 p-6 sm:p-8 flex flex-col gap-6 shadow-2xl transition-all duration-300 hover:border-white/10">
          
          {/* Phone Detail */}
          <div className="flex items-center gap-4 p-4 rounded-xl bg-neutral-950/40 border border-white/5 transition-all hover:bg-neutral-950/60 group">
            <div className="p-3 rounded-lg bg-white/[0.02] border border-white/10 group-hover:border-[#e8702a]/30 group-hover:bg-[#e8702a]/10 transition-all duration-300">
              <Phone className="h-5 w-5 text-white/70 group-hover:text-[#e8702a] transition-colors" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-mono uppercase tracking-wider text-white/40">Direct Call</span>
              <a href={`tel:${phone}`} className="text-white font-medium hover:text-[#e8702a] transition-colors text-base sm:text-lg">
                +91 {phone}
              </a>
            </div>
          </div>

          {/* Email Detail */}
          <div className="flex items-center gap-4 p-4 rounded-xl bg-neutral-950/40 border border-white/5 transition-all hover:bg-neutral-950/60 group">
            <div className="p-3 rounded-lg bg-white/[0.02] border border-white/10 group-hover:border-[#e8702a]/30 group-hover:bg-[#e8702a]/10 transition-all duration-300">
              <Mail className="h-5 w-5 text-white/70 group-hover:text-[#e8702a] transition-colors" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-mono uppercase tracking-wider text-white/40">Inquiries</span>
              <a href={`mailto:${email}`} className="text-white font-medium hover:text-[#e8702a] transition-colors text-base sm:text-lg break-all">
                {email}
              </a>
            </div>
          </div>

          {/* Button Section */}
          <div className="flex flex-col items-center pt-2 gap-2">
            <Button
              onClick={handleEmailClick}
              size="sm"
              className={cn(
                'font-semibold text-white cursor-pointer px-6 py-2.5 rounded-lg text-xs tracking-wider uppercase font-mono transition-all duration-300',
                'bg-gradient-to-b from-[#e8702a] to-orange-600 hover:from-[#f37a34] hover:to-orange-700 shadow-[0_10px_20px_rgba(232,112,42,0.15)] border border-[#e8702a]/20',
              )}
            >
              Email now
            </Button>
            <p className="text-[10px] text-white/30 font-mono mt-1">Average response time: &lt; 24 hours</p>
          </div>

        </div>

        {/* Secondary Info / Location & Visual Sign */}
        <div className="flex items-center gap-2 text-white/40 text-xs font-mono">
          <Sparkles className="h-4 w-4 text-[#e8702a]" />
          <span>Mumbai, India &bull; Available Worldwide</span>
        </div>
      </div>
    </section>
  );
}
