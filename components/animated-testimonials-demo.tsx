import React from "react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "We design and build rich interactive user interfaces, engaging 3D web animations, and responsive components that captivate users immediately.",
      name: "Interactive",
      designation: "Immersive User Interfaces & Motion Systems",
      src: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1200&auto=format&fit=crop",
    },
    {
      quote:
        "Our highly optimized digital platforms are engineered for record-breaking conversion, performance, and international scale.",
      name: "Best Selling",
      designation: "High-Conversion E-Commerce & Product Pages",
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    },
    {
      quote:
        "Crafting deeply polished, high-fidelity 3D assets, organic models, and natural textures that render flawlessly in the browser.",
      name: "3D Polish",
      designation: "Organic 3D Landscapes & Spatial Rendering",
      src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    },
    {
      quote:
        "Architecting robust cloud-native databases, persistent local syncing, and secure, high-performance API structures.",
      name: "Database Integration",
      designation: "Secure Databases & Real-time Cloud Sync",
      src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
    },
    {
      quote:
        "Integrating advanced artificial intelligence models, smart search grounding, and automated natural language processing engines.",
      name: "AI Integration",
      designation: "Gemini APIs & Smart Language Agents",
      src: "https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=1200&auto=format&fit=crop",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
