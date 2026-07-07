import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-4 md:px-8">
      <div className="text-center flex flex-col gap-2 max-w-xl mx-auto mb-10">
        <span className="text-[9px] tracking-[0.25em] font-mono text-[#e8702a] font-bold uppercase">
          ENGINEERING PRINCIPLES
        </span>
        <h3 className="text-xl sm:text-2xl font-sans font-bold text-white tracking-tight">
          Why Choose Our Templates
        </h3>
        <p className="text-xs text-white/50 leading-relaxed font-light">
          Every framework we bootstrap is engineered under strict speed, safety and user-retention guidelines.
        </p>
      </div>
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "PageSpeed Certified",
    description:
      "Handcrafted semantic structures targeting a flawless 100/100 Core Web Vitals rating. Faster load speeds translate directly to lower customer bounce rates.",
    link: "#",
  },
  {
    title: "SEO Engineered Heading Layers",
    description:
      "Built with perfect heading tag hierarchies, instant schema markup generators, and lightning-fast server rendering, ensuring priority ranking on Google searches.",
    link: "#",
  },
  {
    title: "Responsive Across Device Viewports",
    description:
      "Rigorous physical testing across mobile browsers, tablets, and wide screens. Fluid elements stretch beautifully to guarantee user-retention.",
    link: "#",
  },
  {
    title: "Sleek Micro-Interactions",
    description:
      "Captivate your prospective leads with spring-loaded physical animations, responsive parallax layers, and smooth inertial page-scroll overlays.",
    link: "#",
  },
  {
    title: "Integrated Onboarding Funnels",
    description:
      "Direct client intake forms, interactive calendars, responsive tables, and instant email triggers engineered directly into each core layout.",
    link: "#",
  },
  {
    title: "Scalable Serverless Deployments",
    description:
      "Fully optimized to run on modern low-latency CDNs with automatic scaling capabilities, keeping operations safe, reliable, and completely hands-free.",
    link: "#",
  },
];
