"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { TEMPLATE_CATEGORIES } from "@/src/data/templatesData";

interface ExpandableCardDemoProps {
  onSelectCategory?: (route: string) => void;
}

export default function ExpandableCardDemo({ onSelectCategory }: ExpandableCardDemoProps) {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  // Map our template categories to the card layout
  const cards = TEMPLATE_CATEGORIES.map((cat) => ({
    title: cat.title,
    description: cat.description,
    src: cat.src,
    route: cat.route,
    ctaText: "Play",
    content: () => (
      <div className="flex flex-col gap-2 font-sans">
        <p className="text-sm text-neutral-400 leading-relaxed font-light">
          We construct lightning-fast, high-end {cat.title.toLowerCase()} platforms specifically integrated for your enterprise. Each setup features responsive bento grids, customized interactions, and automatic lead workflows to keep you ahead of the competition.
        </p>
        <p className="text-sm text-neutral-400 leading-relaxed font-light mt-1">
          Explore the curated templates in this collection to find the structure that matches your visual identity and business metrics perfectly.
        </p>
      </div>
    )
  }));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 h-full w-full z-40 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-50 p-4">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-4 right-4 items-center justify-center bg-white/15 hover:bg-white/20 border border-white/10 rounded-full h-8 w-8 text-white cursor-pointer transition-colors"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-fit flex flex-col bg-neutral-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
            >
              <motion.div layoutId={`image-${active.title}-${id}`} className="relative h-60 w-full">
                <img
                  src={active.src}
                  alt={active.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent" />
              </motion.div>

              <div className="p-6">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-lg text-white font-sans"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-xs text-white/50 mt-1 font-light"
                    >
                      Explore the collection
                    </motion.p>
                  </div>

                  <motion.button
                    layoutId={`button-${active.title}-${id}`}
                    onClick={() => {
                      if (onSelectCategory) {
                        onSelectCategory(active.route);
                      }
                      setActive(null);
                    }}
                    className="px-5 py-2.5 text-xs rounded-full font-bold bg-[#e8702a] text-white hover:bg-[#d2611f] transition-all cursor-pointer hover:scale-105"
                  >
                    {active.ctaText}
                  </motion.button>
                </div>
                <div className="pt-4 relative border-t border-white/5 mt-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-300 text-xs sm:text-sm h-fit max-h-40 flex flex-col items-start gap-4 overflow-y-auto pr-2"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full flex flex-col gap-3">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-3 sm:p-4 flex flex-col sm:flex-row justify-between items-center bg-neutral-950/20 hover:bg-neutral-900/60 border border-white/0 hover:border-white/5 rounded-2xl cursor-pointer transition-all duration-300"
          >
            <div className="flex gap-4 flex-col sm:flex-row items-center sm:items-start text-center sm:text-left w-full sm:w-auto">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={80}
                  height={80}
                  src={card.src}
                  alt={card.title}
                  className="h-16 w-16 sm:h-12 sm:w-12 rounded-xl object-cover object-center"
                />
              </motion.div>
              <div className="flex-1 min-w-0 pr-2">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-semibold text-white text-base font-sans"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-white/50 text-xs mt-1 font-light line-clamp-1"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              onClick={(e) => {
                e.stopPropagation();
                if (onSelectCategory) {
                  onSelectCategory(card.route);
                }
              }}
              className="px-4 py-2 text-xs rounded-full font-bold bg-white/5 hover:bg-[#e8702a] hover:text-white text-white/80 mt-4 sm:mt-0 transition-all cursor-pointer hover:scale-105"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
