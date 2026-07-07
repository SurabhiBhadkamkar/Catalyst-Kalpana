import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink, ShieldCheck, Sparkles, Code2, Star } from 'lucide-react';
import { Category, Template } from '../data/templatesData';
import { cn } from "@/lib/utils";
import { Marquee } from "@/registry/magicui/marquee";

const reviews = [
  {
    name: "Sarah Jenkins",
    company: "Cafe Lumiere",
    body: "The premium design work and layout choices are absolutely phenomenal.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    rating: 5,
  },
  {
    name: "David Chen",
    company: "Apex Healthcare",
    body: "Bespoke customizations saved us months of development. High conversion rates!",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    rating: 5,
  },
  {
    name: "Elena Rostova",
    company: "Rostov Real Estate",
    body: "Extremely fast loading speed and modern aesthetic. Highly recommended!",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
    rating: 5,
  },
  {
    name: "Marcus Aurelius",
    company: "Zen Fitness",
    body: "Stunning layouts, smooth animation, and highly performant across all screens.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
    rating: 5,
  },
  {
    name: "Oliver Thompson",
    company: "SaaS Rocket",
    body: "Outstanding design systems. The visual details are world-class and perfect.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    rating: 5,
  }
];

const firstRow = reviews.slice(0, Math.ceil(reviews.length / 2));
const secondRow = reviews.slice(Math.ceil(reviews.length / 2));

const ReviewCard = ({
  img,
  name,
  company,
  body,
  rating = 5,
}: {
  key?: any;
  img: string;
  name: string;
  company: string;
  body: string;
  rating?: number;
}) => {
  return (
    <figure
      className={cn(
        "relative w-full cursor-pointer overflow-hidden rounded-2xl border p-4 transition-all duration-300",
        "border-white/5 bg-white/[0.01] backdrop-blur-md",
        "hover:border-[#e8702a]/30 hover:bg-white/[0.04] hover:shadow-[0_0_20px_rgba(232,112,42,0.12)] group/card"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <img className="rounded-full object-cover border border-white/10" width="36" height="36" alt={name} src={img} referrerPolicy="no-referrer" />
        <div className="flex flex-col min-w-0">
          <figcaption className="text-xs font-semibold text-white/95 group-hover/card:text-[#e8702a] transition-colors truncate">
            {name}
          </figcaption>
          <p className="text-[10px] font-mono text-white/40 truncate">{company}</p>
        </div>
      </div>
      
      {/* Stars rating */}
      <div className="flex items-center gap-0.5 mt-2 text-[#e8702a]">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={10} fill="#e8702a" strokeWidth={0} />
        ))}
      </div>

      <blockquote className="mt-2 text-[11px] text-white/70 leading-relaxed font-sans italic line-clamp-3">
        "{body}"
      </blockquote>
    </figure>
  );
};

export function MarqueeDemoVertical() {
  return (
    <div className="relative flex flex-col gap-4 w-full h-[650px] overflow-hidden rounded-3xl bg-neutral-950/20 border border-white/5 p-3">
      {/* Independent vertical marquee that allows pausing on hover and vertical automatic scroll */}
      <div className="flex-1 overflow-hidden relative">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black via-black/40 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
        
        <div className="flex flex-row gap-3 h-full justify-center">
          <Marquee pauseOnHover vertical className="[--duration:25s] flex-1">
            {firstRow.map((review, i) => (
              <ReviewCard key={i} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover vertical className="[--duration:25s] flex-1">
            {secondRow.map((review, i) => (
              <ReviewCard key={i} {...review} />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}

interface CategoryPageProps {
  category: Category;
  onBack: () => void;
  onSelectTemplate: (template: Template) => void;
}

export default function CategoryPage({ category, onBack, onSelectTemplate }: CategoryPageProps) {
  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Navigation Breadcrumb / Back button */}
        <button
          onClick={onBack}
          className="group flex items-center gap-2 text-white/50 hover:text-[#e8702a] text-sm font-mono tracking-wider transition-colors mb-8 cursor-pointer"
        >
          <ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-1" />
          <span>BACK TO ALL CATEGORIES</span>
        </button>

        {/* Split layout: 80-85% Templates & Header list, 15-20% Reviews on desktop */}
        <div className="flex flex-col lg:flex-row gap-8 items-start relative">
          
          {/* Left Column (80% on desktop) */}
          <div className="w-full lg:w-[80%] flex flex-col">
            
            {/* Category Header */}
            <div className="flex flex-col gap-3 mb-12">
              <span className="text-[10px] tracking-[0.3em] font-mono font-semibold text-[#e8702a] uppercase">
                TEMPLATE COLLECTION
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-sans font-extrabold text-white tracking-tight">
                {category.title}
              </h1>
              <p className="text-white/60 text-base max-w-2xl font-light leading-relaxed mt-2">
                {category.description}
              </p>
            </div>

            {/* Templates Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {category.templates.map((template, idx) => (
                <motion.div
                  key={template.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group flex flex-col bg-neutral-950/40 border border-white/5 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:border-[#e8702a]/30 hover:shadow-3xl hover:shadow-[#e8702a]/5"
                >
                  {/* Card Image Container */}
                  <div className="relative h-56 sm:h-64 overflow-hidden bg-neutral-900">
                    <img
                      src={template.image}
                      alt={template.name}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.05]"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Visual Accent Corner Overlay */}
                    <div 
                      className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" 
                    />

                    <div className="absolute top-4 right-4 flex items-center justify-center bg-black/60 backdrop-blur-md border border-white/10 rounded-full px-3 py-1 text-[10px] font-mono tracking-wider text-white">
                      {template.tech[0]}
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex flex-col">
                      <span className="text-[10px] font-mono tracking-widest text-[#e8702a] uppercase font-bold">
                        PREMIUM SPEC
                      </span>
                      <h3 className="text-lg font-medium text-white tracking-tight mt-0.5">
                        {template.name}
                      </h3>
                    </div>
                  </div>

                  {/* Card Contents */}
                  <div className="flex flex-col flex-1 p-6 gap-5 bg-neutral-950/20">
                    <p className="text-white/60 text-xs sm:text-sm font-light leading-relaxed line-clamp-3">
                      {template.shortDesc}
                    </p>

                    {/* Tech Tags list */}
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {template.tech.map((t) => (
                        <span
                          key={t}
                          className="bg-white/5 border border-white/5 rounded-md px-2 py-0.5 text-[9px] font-mono tracking-wide text-white/50"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Divider */}
                    <div className="w-full h-px bg-white/5 my-1" />

                    {/* Action Buttons */}
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-white/40 tracking-wider">
                        READY FOR LAUNCH
                      </span>
                      
                      <button
                        onClick={() => onSelectTemplate(template)}
                        className="flex items-center gap-1.5 bg-[#e8702a] hover:bg-[#d2611f] text-white text-xs font-semibold px-4 py-2 rounded-full transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-md shadow-[#e8702a]/10 cursor-pointer"
                      >
                        <span>View Live Demo</span>
                        <ExternalLink size={12} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Dedicated Reviews Sidebar (20% width on desktop, no title, sticky aligned with heading) */}
          <div className="w-full lg:w-[20%] shrink-0 lg:sticky lg:top-[100px] self-start">
            <style dangerouslySetInnerHTML={{ __html: `
              .no-scrollbar::-webkit-scrollbar {
                display: none;
              }
              .no-scrollbar {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }
            `}} />
            <MarqueeDemoVertical />
          </div>

        </div>

        {/* Feature Highlights bottom banner */}
        <div className="mt-20 p-8 rounded-3xl bg-neutral-950/40 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="bg-[#e8702a]/10 p-3 rounded-2xl border border-[#e8702a]/20">
              <Sparkles className="text-[#e8702a]" size={24} />
            </div>
            <div>
              <h4 className="text-lg font-medium text-white">Bespoke Customizations Included</h4>
              <p className="text-sm text-white/50 mt-1 max-w-xl font-light">
                Every website template chosen from our catalog is fully customized by Catalyst Kalpana. We tune colors, align branding, connect custom forms, and integrate custom copywriting specifically for your business.
              </p>
            </div>
          </div>
          <button
            onClick={onBack}
            className="w-full md:w-auto shrink-0 border border-white/10 hover:border-[#e8702a] text-white hover:text-white text-xs font-semibold px-6 py-3 rounded-full transition-all duration-300 cursor-pointer text-center"
          >
            All Categories
          </button>
        </div>

      </div>
    </div>
  );
}
