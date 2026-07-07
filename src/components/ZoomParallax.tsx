import { useTransform, motion, useMotionValue } from 'motion/react';
import { useRef, useEffect } from 'react';

interface ImageItem {
  src: string;
  alt?: string;
  title?: string;
}

interface ZoomParallaxProps {
  /** Array of images to be displayed in the parallax effect max 7 images */
  images: ImageItem[];
}

export function ZoomParallax({ images }: ZoomParallaxProps) {
  const container = useRef<HTMLDivElement>(null);
  const scrollYProgress = useMotionValue(0);

  useEffect(() => {
    const parent = container.current?.closest('.overflow-y-auto') || window;
    
    const handleScroll = () => {
      if (!container.current) return;
      
      let scrollTop = 0;
      let viewportHeight = window.innerHeight;
      
      if (parent === window) {
        scrollTop = window.scrollY;
        viewportHeight = window.innerHeight;
      } else {
        const p = parent as HTMLElement;
        scrollTop = p.scrollTop;
        viewportHeight = p.clientHeight;
      }
      
      const offsetTop = container.current.offsetTop;
      const totalHeight = container.current.offsetHeight;
      
      const scrollableDistance = totalHeight - viewportHeight;
      if (scrollableDistance <= 0) return;
      
      const currentScroll = scrollTop - offsetTop;
      const progress = Math.min(Math.max(currentScroll / scrollableDistance, 0), 1);
      
      scrollYProgress.set(progress);
    };

    parent.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    window.addEventListener('resize', handleScroll);
    
    // Also run a few times on a timer to ensure correct calculations if content finishes loading or layout shifts
    const timers = [100, 500, 1000].map(delay => setTimeout(handleScroll, delay));
    
    return () => {
      parent.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      timers.forEach(clearTimeout);
    };
  }, [scrollYProgress]);

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const scales = [scale4, scale5, scale6, scale5, scale6, scale8, scale9];

  return (
    <div ref={container} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
        {images.map(({ src, alt, title }, index) => {
          const scale = scales[index % scales.length];

          return (
            <motion.div
              key={index}
              style={{ scale }}
              className={`absolute top-0 flex h-full w-full items-center justify-center ${
                index === 1 ? '[&>div]:!-translate-y-[30vh] [&>div]:!translate-x-[5vw] [&>div]:!h-[30vh] [&>div]:!w-[35vw]' : ''
              } ${
                index === 2 ? '[&>div]:!-translate-y-[10vh] [&>div]:!-translate-x-[25vw] [&>div]:!h-[45vh] [&>div]:!w-[20vw]' : ''
              } ${
                index === 3 ? '[&>div]:!translate-x-[27.5vw] [&>div]:!h-[25vh] [&>div]:!w-[25vw]' : ''
              } ${
                index === 4 ? '[&>div]:!translate-y-[27.5vh] [&>div]:!translate-x-[5vw] [&>div]:!h-[25vh] [&>div]:!w-[20vw]' : ''
              } ${
                index === 5 ? '[&>div]:!translate-y-[27.5vh] [&>div]:!-translate-x-[22.5vw] [&>div]:!h-[25vh] [&>div]:!w-[30vw]' : ''
              } ${
                index === 6 ? '[&>div]:!translate-y-[22.5vh] [&>div]:!translate-x-[25vw] [&>div]:!h-[15vh] [&>div]:!w-[15vw]' : ''
              }`}
            >
              <div className="relative h-[25vh] w-[25vw] overflow-hidden rounded-lg border border-white/5 shadow-2xl group">
                <img
                  src={src || '/placeholder.svg'}
                  alt={alt || `Parallax image ${index + 1}`}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Elegant dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80" />
                
                {/* Elegant text caption overlay */}
                {title && (
                  <div className="absolute bottom-4 left-4 right-4 flex flex-col pointer-events-none select-none">
                    <span className="text-[9px] font-mono tracking-[0.2em] text-[#e8702a] uppercase font-semibold">
                      {index === 0 ? 'Digital Hub' : `Stage 0${index}`}
                    </span>
                    <span className="text-sm font-medium tracking-tight text-white mt-0.5">
                      {title}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
