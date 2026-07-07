import {
  useMotionValueEvent,
  motion,
  useMotionValue,
  useTransform,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const scrollYProgress = useMotionValue(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref, data]);

  useEffect(() => {
    const parent = containerRef.current?.closest('.overflow-y-auto') || window;
    
    const handleScroll = () => {
      if (!containerRef.current) return;
      
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
      
      const offsetTop = containerRef.current.offsetTop;
      const totalHeight = containerRef.current.offsetHeight;
      
      // Calculate scroll progress from start of component to end of component
      const currentScroll = scrollTop - offsetTop + (viewportHeight * 0.35);
      const scrollableDistance = totalHeight - (viewportHeight * 0.5);
      
      if (scrollableDistance <= 0) return;
      
      const progress = Math.min(Math.max(currentScroll / scrollableDistance, 0), 1);
      scrollYProgress.set(progress);
    };

    parent.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    window.addEventListener('resize', handleScroll);
    
    const timers = [100, 300, 800].map(delay => setTimeout(handleScroll, delay));
    
    return () => {
      parent.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      timers.forEach(clearTimeout);
    };
  }, [scrollYProgress]);

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-black font-sans md:px-10 border-t border-white/5"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair italic font-normal tracking-tight text-white mb-4 max-w-4xl">
          Our Working Workflow
        </h2>
        <p className="text-white/60 text-sm md:text-base max-w-md font-light leading-relaxed">
          We follow a precise, structured process to deliver high-end, responsive digital products from initial concepts to global production.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-black flex items-center justify-center border border-white/10">
                <div className="h-4 w-4 rounded-full bg-white/20 border border-white/10 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-semibold text-white/40">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-white/50">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent via-white/10 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-[#e8702a] via-white/40 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export function TimelineDemo() {
  const data = [
    {
      title: "Requirement",
      content: (
        <div>
          <p className="text-white/70 text-xs md:text-sm font-light mb-6 max-w-xl">
            Our journey begins with deep requirements gathering, comprehensive workshops, and client interviews. We establish unambiguous goals, functional specs, and brand directions.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?w=800&auto=format&fit=crop&q=80"
              alt="Requirement Gathering"
              referrerPolicy="no-referrer"
              className="rounded-lg object-cover h-24 md:h-44 lg:h-56 w-full border border-white/5 shadow-2xl transition-transform duration-300 hover:scale-[1.02]"
            />
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80"
              alt="Collaboration Session"
              referrerPolicy="no-referrer"
              className="rounded-lg object-cover h-24 md:h-44 lg:h-56 w-full border border-white/5 shadow-2xl transition-transform duration-300 hover:scale-[1.02]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Planning",
      content: (
        <div>
          <p className="text-white/70 text-xs md:text-sm font-light mb-6 max-w-xl">
            We architect comprehensive sitemaps, system user-flows, interactive wireframe mockups, and strategic design systems to plan an intuitive, frictionless digital journey.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&auto=format&fit=crop&q=80"
              alt="Strategic Planning"
              referrerPolicy="no-referrer"
              className="rounded-lg object-cover h-24 md:h-44 lg:h-56 w-full border border-white/5 shadow-2xl transition-transform duration-300 hover:scale-[1.02]"
            />
            <img
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&auto=format&fit=crop&q=80"
              alt="Wireframing & UX"
              referrerPolicy="no-referrer"
              className="rounded-lg object-cover h-24 md:h-44 lg:h-56 w-full border border-white/5 shadow-2xl transition-transform duration-300 hover:scale-[1.02]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Developing",
      content: (
        <div>
          <p className="text-white/70 text-xs md:text-sm font-light mb-6 max-w-xl">
            Our engineers build responsive frontends and reliable full-stack systems using React 18, Vite, and gorgeous motion design elements. We focus on clean, high-performance modular structures.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&auto=format&fit=crop&q=80"
              alt="Writing Code"
              referrerPolicy="no-referrer"
              className="rounded-lg object-cover h-24 md:h-44 lg:h-56 w-full border border-white/5 shadow-2xl transition-transform duration-300 hover:scale-[1.02]"
            />
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80"
              alt="Frontend Engineering"
              referrerPolicy="no-referrer"
              className="rounded-lg object-cover h-24 md:h-44 lg:h-56 w-full border border-white/5 shadow-2xl transition-transform duration-300 hover:scale-[1.02]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Testing",
      content: (
        <div>
          <p className="text-white/70 text-xs md:text-sm font-light mb-6 max-w-xl">
            We run systematic tests on multiple physical displays, verify touch-action responsiveness, audit load speeds, and conduct complete cross-browser security checks.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80"
              alt="Code Optimization"
              referrerPolicy="no-referrer"
              className="rounded-lg object-cover h-24 md:h-44 lg:h-56 w-full border border-white/5 shadow-2xl transition-transform duration-300 hover:scale-[1.02]"
            />
            <img
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80"
              alt="UI Validation"
              referrerPolicy="no-referrer"
              className="rounded-lg object-cover h-24 md:h-44 lg:h-56 w-full border border-white/5 shadow-2xl transition-transform duration-300 hover:scale-[1.02]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Approval",
      content: (
        <div>
          <p className="text-white/70 text-xs md:text-sm font-light mb-6 max-w-xl">
            Presenting high-fidelity interactive builds to partners, gathering actionable layout feedback, polishing micro-interactions, and signing off with complete peace of mind.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80"
              alt="Stakeholder Approval"
              referrerPolicy="no-referrer"
              className="rounded-lg object-cover h-24 md:h-44 lg:h-56 w-full border border-white/5 shadow-2xl transition-transform duration-300 hover:scale-[1.02]"
            />
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop&q=80"
              alt="Design Review"
              referrerPolicy="no-referrer"
              className="rounded-lg object-cover h-24 md:h-44 lg:h-56 w-full border border-white/5 shadow-2xl transition-transform duration-300 hover:scale-[1.02]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Deployment",
      content: (
        <div>
          <p className="text-white/70 text-xs md:text-sm font-light mb-6 max-w-xl">
            Bootstrapping deployment environments, setting up automated CI/CD build channels, and launching scalable container nodes for instant, lag-free user access.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80"
              alt="Cloud Ingress Management"
              referrerPolicy="no-referrer"
              className="rounded-lg object-cover h-24 md:h-44 lg:h-56 w-full border border-white/5 shadow-2xl transition-transform duration-300 hover:scale-[1.02]"
            />
            <img
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80"
              alt="Data Infrastructure"
              referrerPolicy="no-referrer"
              className="rounded-lg object-cover h-24 md:h-44 lg:h-56 w-full border border-white/5 shadow-2xl transition-transform duration-300 hover:scale-[1.02]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Domain",
      content: (
        <div>
          <p className="text-white/70 text-xs md:text-sm font-light mb-6 max-w-xl">
            Optimizing DNS, configuring global CDN route rules, and deploying automated SSL certificates to ensure high-security brand visibility and faster lookups.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80"
              alt="Domain Connection"
              referrerPolicy="no-referrer"
              className="rounded-lg object-cover h-24 md:h-44 lg:h-56 w-full border border-white/5 shadow-2xl transition-transform duration-300 hover:scale-[1.02]"
            />
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80"
              alt="Branded Workspace"
              referrerPolicy="no-referrer"
              className="rounded-lg object-cover h-24 md:h-44 lg:h-56 w-full border border-white/5 shadow-2xl transition-transform duration-300 hover:scale-[1.02]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Maintenance",
      content: (
        <div>
          <p className="text-white/70 text-xs md:text-sm font-light mb-6 max-w-xl">
            Providing ongoing system tracking, dependency patching, automated data backups, and performance optimizations to make sure your asset is always ahead of the curve.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=80"
              alt="Regular Backup & Audit"
              referrerPolicy="no-referrer"
              className="rounded-lg object-cover h-24 md:h-44 lg:h-56 w-full border border-white/5 shadow-2xl transition-transform duration-300 hover:scale-[1.02]"
            />
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80"
              alt="System Health Checking"
              referrerPolicy="no-referrer"
              className="rounded-lg object-cover h-24 md:h-44 lg:h-56 w-full border border-white/5 shadow-2xl transition-transform duration-300 hover:scale-[1.02]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Product",
      content: (
        <div>
          <p className="text-white/70 text-xs md:text-sm font-light mb-6 max-w-xl">
            Launch complete! A stellar, customized digital storefront and design ecosystem perfectly aligned with your customers, optimized for high conversion rates.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80"
              alt="Final Premium Ecosystem"
              referrerPolicy="no-referrer"
              className="rounded-lg object-cover h-24 md:h-44 lg:h-56 w-full border border-white/5 shadow-2xl transition-transform duration-300 hover:scale-[1.02]"
            />
            <img
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80"
              alt="Visual Satisfaction"
              referrerPolicy="no-referrer"
              className="rounded-lg object-cover h-24 md:h-44 lg:h-56 w-full border border-white/5 shadow-2xl transition-transform duration-300 hover:scale-[1.02]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
