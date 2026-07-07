import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

// Custom type interfaces
interface TextSegment {
  text: string;
  className?: string;
}

interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
  style?: React.CSSProperties;
  key?: any;
}

interface WordsPullUpMultiStyleProps {
  segments: TextSegment[];
  className?: string;
}

// WordsPullUp component: Splits text by spaces, each word slides up
export function WordsPullUp({ text, className, showAsterisk, style }: WordsPullUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const words = text.split(" ");
  
  return (
    <div ref={ref} className={cn("inline-flex flex-wrap justify-center", className)} style={style}>
      {words.map((word, index) => {
        const isLastWord = index === words.length - 1;
        const hasAsterisk = showAsterisk && isLastWord;
        
        return (
          <span key={index} className="overflow-hidden inline-block mr-[0.25em] py-1 relative leading-[0.85]">
            <motion.span
              initial={{ y: "100%", opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="inline-block relative"
            >
              {word}
              {hasAsterisk && (
                <span className="absolute top-[0.65em] -right-[0.3em] text-[0.31em] pointer-events-none">
                  *
                </span>
              )}
            </motion.span>
          </span>
        );
      })}
    </div>
  );
}

// WordsPullUpMultiStyle component: Takes segments and preserves classnames
export function WordsPullUpMultiStyle({ segments, className }: WordsPullUpMultiStyleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const allWords: { word: string; className?: string }[] = [];
  segments.forEach((seg) => {
    const words = seg.text.split(" ");
    words.forEach((w) => {
      if (w) {
        allWords.push({ word: w, className: seg.className });
      }
    });
  });

  return (
    <div ref={ref} className={cn("inline-flex flex-wrap justify-center", className)}>
      {allWords.map(({ word, className: wordClass }, index) => {
        return (
          <span key={index} className="overflow-hidden inline-block mr-[0.25em] py-1">
            <motion.span
              initial={{ y: "100%", opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1]
              }}
              className={cn("inline-block", wordClass)}
            >
              {word}
            </motion.span>
          </span>
        );
      })}
    </div>
  );
}

// Individual animated letter for scroll text reveal
interface AnimatedLetterProps {
  char: string;
  index: number;
  totalChars: number;
  scrollYProgress: any;
  key?: any;
}

const AnimatedLetter = ({ char, index, totalChars, scrollYProgress }: AnimatedLetterProps) => {
  const charProgress = index / totalChars;
  const start = Math.max(0, charProgress - 0.1);
  const end = Math.min(1, charProgress + 0.05);
  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

  return (
    <motion.span style={{ opacity }} className="inline-block select-none">
      {char === " " ? "\u00A0" : char}
    </motion.span>
  );
};

// ScrollTextReveal component: Characters progressively fade in based on scroll position
function ScrollTextReveal({ text }: { text: string }) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"]
  });

  const chars = text.split("");
  const totalChars = chars.length;

  return (
    <p 
      ref={containerRef} 
      className="text-[#DEDBC8] text-xs sm:text-sm md:text-base leading-relaxed tracking-wide text-center max-w-2xl mx-auto flex flex-wrap justify-center gap-x-[0.1em] gap-y-0.5"
    >
      {chars.map((char, index) => (
        <AnimatedLetter 
          key={index} 
          char={char} 
          index={index} 
          totalChars={totalChars} 
          scrollYProgress={scrollYProgress} 
        />
      ))}
    </p>
  );
}

interface PrismaLandingPageProps {
  onNavigateToFieldGuides?: () => void;
}

// Main Prisma Landing Page Component
export default function PrismaLandingPage({ onNavigateToFieldGuides }: PrismaLandingPageProps) {
  const featuresRef = useRef<HTMLDivElement>(null);
  const isFeaturesInView = useInView(featuresRef, { once: true, margin: "-100px" });

  const headingSegments = [
    { text: "We are Catalyst Kalpana—", className: "font-normal text-white" },
    { text: "a team of designers, developers, and innovators", className: "italic font-serif text-[#DEDBC8]" },
    { text: "creating modern digital solutions that help businesses grow, connect, and succeed.", className: "font-normal text-white" }
  ];

  const featuresHeaderSegments = [
    { text: "Studio-grade workflows for visionary creators.", className: "text-[#DEDBC8] block w-full text-center" },
    { text: "Built for pure vision. Powered by art.", className: "text-gray-500 block w-full text-center mt-2" }
  ];

  return (
    <div className="w-full bg-black min-h-screen text-[#E1E0CC] selection:bg-[#DEDBC8] selection:text-black">
      
      {/* SECTION 1: HERO */}
      <section className="h-screen w-full p-4 md:p-6 flex flex-col relative box-border" style={{ height: "100dvh" }}>
        <div className="flex-1 w-full rounded-2xl md:rounded-[2rem] overflow-hidden relative bg-neutral-950 flex flex-col justify-end p-6 md:p-12">
          
          {/* Background Video */}
          <video 
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover absolute inset-0 z-0 pointer-events-none"
          />

          {/* Noise Overlay */}
          <div className="noise-overlay opacity-[0.7] mix-blend-overlay pointer-events-none absolute inset-0 z-10" />

          {/* Gradient Overlay */}
          <div className="bg-gradient-to-b from-black/30 via-transparent to-black/60 absolute inset-0 z-20 pointer-events-none" />

          {/* Hero Content (bottom-aligned) */}
          <div className="relative z-30 w-full mt-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end w-full">
              
              {/* Left col: Giant Heading */}
              <div className="col-span-1 lg:col-span-8 flex flex-col items-start leading-none">
                <WordsPullUp 
                  text="Catalyst Kalpana" 
                  showAsterisk
                  className="text-[16vw] sm:text-[14vw] md:text-[12vw] lg:text-[10vw] xl:text-[9vw] 2xl:text-[8vw] font-medium leading-[0.85] tracking-[-0.07em] select-none"
                  style={{ color: "#E1E0CC" } as any}
                />
              </div>

              {/* Right col: Button only */}
              <div className="col-span-1 lg:col-span-4 flex flex-col items-start lg:pl-4 mb-2">
                <motion.button
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  onClick={onNavigateToFieldGuides}
                  className="bg-[#DEDBC8] hover:bg-[#e1dfd3] text-black font-semibold text-sm sm:text-base px-6 py-2 sm:py-2.5 rounded-full inline-flex items-center gap-2 group transition-all duration-300 cursor-pointer shadow-lg hover:gap-3"
                >
                  <span>See More</span>
                  <div className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <ArrowRight size={16} className="text-[#DEDBC8]" />
                  </div>
                </motion.button>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: ABOUT */}
      <section className="bg-black py-24 sm:py-32 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center relative z-20">
        <div className="bg-[#101010] rounded-[2rem] p-8 md:p-16 max-w-6xl w-full border border-white/5 text-center flex flex-col items-center gap-8 shadow-2xl relative">
          
          {/* Section top label */}
          <span className="text-[#DEDBC8] text-[10px] sm:text-xs tracking-[0.3em] uppercase font-mono font-bold select-none">
            Visual arts
          </span>

          {/* Staggered Heading */}
          <WordsPullUpMultiStyle 
            segments={headingSegments}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-3xl mx-auto leading-[1.1] sm:leading-[0.95] md:leading-[0.9] tracking-tight"
          />

          {/* Divider */}
          <div className="w-12 h-px bg-white/10 my-4" />

          {/* Character Scroll Reveal paragraph */}
          <ScrollTextReveal 
            text="With hands-on experience in web development, UI/UX design, AI integration, and modern technologies, we create digital solutions that are innovative, scalable, and user-focused."
          />

        </div>
      </section>

      {/* SECTION 3: FEATURES */}
      <section className="min-h-screen bg-black py-24 sm:py-32 relative flex flex-col justify-center">
        
        {/* Subtle Background Noise */}
        <div className="bg-noise opacity-[0.15] absolute inset-0 pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto w-full px-4 md:px-8 relative z-10">
          
          {/* Header */}
          <div className="mb-16 sm:mb-24">
            <WordsPullUpMultiStyle 
              segments={featuresHeaderSegments}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-relaxed text-center tracking-wide"
            />
          </div>

          {/* 4-Column Grid */}
          <div 
            ref={featuresRef} 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-3 md:gap-2 items-stretch"
          >
            
            {/* Card 1: Video Card */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={isFeaturesInView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0 * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-3xl overflow-hidden p-6 flex flex-col justify-end min-h-[350px] lg:h-[480px] group/feat shadow-xl border border-white/5"
            >
              <video 
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4"
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover absolute inset-0 z-0 pointer-events-none"
              />
              <div className="bg-black/50 absolute inset-0 z-10 transition-opacity duration-300 group-hover/feat:opacity-40" />
              <div className="relative z-20">
                <p 
                  className="text-lg sm:text-xl font-medium tracking-wide"
                  style={{ color: "#E1E0CC" }}
                >
                  Your creative canvas.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Storyboard Card */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={isFeaturesInView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.8, delay: 1 * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#212121] rounded-3xl p-6 sm:p-8 flex flex-col min-h-[350px] lg:h-[480px] border border-white/5 shadow-xl justify-between group/card"
            >
              <div>
                <img 
                  src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85" 
                  alt="Storyboard icon" 
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl mb-6 object-cover"
                />
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-[#E1E0CC] font-semibold text-lg sm:text-xl tracking-tight">Project Storyboard.</h3>
                  <span className="text-[#E1E0CC]/30 font-mono text-xs sm:text-sm">01</span>
                </div>
                
                <ul className="flex flex-col gap-3">
                  {[
                    "Real-time interactive canvas",
                    "Cinematic aspect ratio guides",
                    "Collaborative moodboard sharing",
                    "Integrated shot lists"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-400">
                      <Check size={14} className="text-[#DEDBC8] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <a className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#DEDBC8]/80 hover:text-[#DEDBC8] transition-colors cursor-pointer">
                  <span>Learn more</span>
                  <ArrowRight size={14} className="transform rotate-[-45deg] transition-transform duration-300 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5" />
                </a>
              </div>
            </motion.div>

            {/* Card 3: Critiques Card */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={isFeaturesInView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.8, delay: 2 * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#212121] rounded-3xl p-6 sm:p-8 flex flex-col min-h-[350px] lg:h-[480px] border border-white/5 shadow-xl justify-between group/card"
            >
              <div>
                <img 
                  src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85" 
                  alt="Critique icon" 
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl mb-6 object-cover"
                />
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-[#E1E0CC] font-semibold text-lg sm:text-xl tracking-tight">Smart Critiques.</h3>
                  <span className="text-[#E1E0CC]/30 font-mono text-xs sm:text-sm">02</span>
                </div>
                
                <ul className="flex flex-col gap-3">
                  {[
                    "Instant AI visual composition analysis",
                    "Creative feedback loops",
                    "Seamless post-production integrations"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-400">
                      <Check size={14} className="text-[#DEDBC8] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <a className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#DEDBC8]/80 hover:text-[#DEDBC8] transition-colors cursor-pointer">
                  <span>Learn more</span>
                  <ArrowRight size={14} className="transform rotate-[-45deg] transition-transform duration-300 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5" />
                </a>
              </div>
            </motion.div>

            {/* Card 4: Immersion Card */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={isFeaturesInView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.8, delay: 3 * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#212121] rounded-3xl p-6 sm:p-8 flex flex-col min-h-[350px] lg:h-[480px] border border-white/5 shadow-xl justify-between group/card"
            >
              <div>
                <img 
                  src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85" 
                  alt="Immersion icon" 
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl mb-6 object-cover"
                />
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-[#E1E0CC] font-semibold text-lg sm:text-xl tracking-tight">Immersion Capsule.</h3>
                  <span className="text-[#E1E0CC]/30 font-mono text-xs sm:text-sm">03</span>
                </div>
                
                <ul className="flex flex-col gap-3">
                  {[
                    "Distraction-free focus modes",
                    "Ambient cinematic soundscapes",
                    "Optimized calendar synchronization"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-400">
                      <Check size={14} className="text-[#DEDBC8] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <a className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#DEDBC8]/80 hover:text-[#DEDBC8] transition-colors cursor-pointer">
                  <span>Learn more</span>
                  <ArrowRight size={14} className="transform rotate-[-45deg] transition-transform duration-300 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5" />
                </a>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

    </div>
  );
}
