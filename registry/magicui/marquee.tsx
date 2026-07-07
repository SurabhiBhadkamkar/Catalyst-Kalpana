import React from "react";
import { cn } from "@/src/lib/utils"; // since @ maps to root, and lib is inside src, we import from "@/src/lib/utils"

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  vertical?: boolean;
  repeat?: number;
  children?: React.ReactNode;
}

export function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  vertical = false,
  repeat = 4,
  children,
}: MarqueeProps) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee-y {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(calc(-100% - var(--gap, 1rem)));
          }
        }
        @keyframes marquee-y-reverse {
          from {
            transform: translateY(calc(-100% - var(--gap, 1rem)));
          }
          to {
            transform: translateY(0);
          }
        }
        .animate-marquee-y {
          animation: marquee-y var(--duration, 40s) linear infinite;
        }
        .animate-marquee-y-reverse {
          animation: marquee-y-reverse var(--duration, 40s) linear infinite;
        }
      `}} />
      <div
        className={cn(
          "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
          vertical ? "flex-col" : "flex-row",
          className
        )}
      >
        {Array.from({ length: repeat }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "flex shrink-0 justify-around [gap:var(--gap)]",
              vertical
                ? "flex-col animate-marquee-y"
                : "flex-row animate-marquee-x",
              reverse && (vertical ? "animate-marquee-y-reverse" : "animate-marquee-x-reverse"),
              pauseOnHover && "group-hover:[animation-play-state:paused]"
            )}
          >
            {children}
          </div>
        ))}
      </div>
    </>
  );
}
