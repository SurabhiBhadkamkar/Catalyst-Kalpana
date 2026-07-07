"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[22rem] sm:h-[26rem] md:h-[30rem] w-full rounded-md flex flex-col antialiased bg-black items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
       "Working with Cataylst Kalpana was one of the best decisions we made for our business. The team understood our vision from day one and transformed it into a website that is modern, fast, and visually stunning. Their attention to detail and commitment to quality exceeded every expectation.",
    name: "Anushka Shinde",
    title: "Mumbai",
  },
  {
    quote:
      "We were looking for more than just a website—we wanted a digital experience that reflected our brand. Catalyst Kalpana delivered exactly that. Their creativity, technical expertise, and clear communication made the entire process smooth and enjoyable.",
    name: "Priya pande",
    title: "Mumbai",
  },
  {
    quote: "The professionalism and dedication shown throughout the project were truly impressive. Every design element felt purposeful, and the final product perfectly balanced aesthetics with functionality. We couldn't be happier with the outcome.",
    name: "Vandana Sharma",
    title: "Mumbai",
  },
  {
    quote:
     "From the initial concept to the final launch, the Catalyst Kalpana team consistently exceeded our expectations. They listened carefully to our feedback, suggested valuable improvements, and created a website that not only looks incredible but also performs flawlessly across all devices.",
    name: "Rhon Joshi",
    title: "Mumbai",
  },
  {
    quote:
    "What impressed us most was their ability to understand our business goals and translate them into a beautiful, user-friendly website. The combination of modern design, smooth animations, and excellent performance has significantly improved our online presence.",
    name: "Hardik Shinde",
    title: "Mumbai",
  },
];
