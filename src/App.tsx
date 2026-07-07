import { useEffect, useRef, useState } from 'react';
import { Menu, X, ArrowRight, Layers, Sparkles } from 'lucide-react';
import RevealLayer from './components/RevealLayer';
import CardCarousel from './components/CardCarousel';
import ExpandableCardDemo from '@/components/ui/expandable-card-demo-standard';
import CardHoverEffectDemo from '@/components/card-hover-effect-demo';
import AnimatedTestimonialsDemo from '@/components/animated-testimonials-demo';
import { FAQSection } from './components/FAQSection';
import { TimelineDemo } from './components/Timeline';
import KineticTeamHybrid from './components/KineticTeamHybrid';
import { ZoomParallax } from './components/ZoomParallax';
import Footer from './components/Footer';

// New Template Collection Imports
import CategoryPage from './components/CategoryPage';
import TemplatePreviewPage from './components/TemplatePreviewPage';
import PlansSection from '@/components/PlansSection';
import ContactSection from '@/components/ContactSection';
import PrismaLandingPage from './components/PrismaLandingPage';
import { TEMPLATE_CATEGORIES } from './data/templatesData';
import { TransparentLogo } from './components/TransparentLogo';
const logoImg = "/logo img.png";

const BG_IMAGE_1 = "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260609_195923_b0ba8ace-1d1d-4f2c-9a28-1ab84b330680.png&w=1280&q=85";
const BG_IMAGE_2 = "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260609_201152_bba90a12-bf12-459f-91f0-51f237dbaf3b.png&w=1280&q=85";

const PARALLAX_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
    alt: 'Digital Dimensions Core',
    title: 'Platform Core',
  },
  {
    src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1280&auto=format&fit=crop&q=80',
    alt: 'Creation Stage',
    title: 'Creation',
  },
  {
    src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80',
    alt: 'Development Stage',
    title: 'Development',
  },
  {
    src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80',
    alt: 'Innovation Stage',
    title: 'Innovation',
  },
  {
    src: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80',
    alt: 'Tasking Stage',
    title: 'Tasking',
  },
  {
    src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=80',
    alt: 'Building Stage',
    title: 'Building',
  },
  {
    src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80',
    alt: 'Polishing Stage',
    title: 'Polishing',
  },
];

export default function App() {
  const mouse = useRef({ x: -999, y: -999 });
  const smooth = useRef({ x: -999, y: -999 });
  const rafRef = useRef<number | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: -999, y: -999 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(() => window.location.pathname);
  const [activeTab, setActiveTab] = useState(() => {
    const path = window.location.pathname.toLowerCase();
    if (path === '/about') {
      return 'About';
    }
    if (
      path === '/fieldguides' || 
      path === '/field-guides' || 
      TEMPLATE_CATEGORIES.some(c => c.route.toLowerCase() === path) ||
      path.startsWith('/template-preview')
    ) {
      return 'Field Guides';
    }
    if (path === '/plans') {
      return 'Plans';
    }
    if (path === '/contact') {
      return 'Contact';
    }
    return 'Course';
  });

  const navigate = (path: string, search: string = '') => {
    const fullPath = search ? `${path}${search}` : path;
    window.history.pushState({}, '', fullPath);
    setCurrentPath(path);
    
    const pathLower = path.toLowerCase();
    if (pathLower === '/' || pathLower === '') {
      setActiveTab('Course');
    } else if (pathLower === '/plans') {
      setActiveTab('Plans');
    } else if (pathLower === '/contact') {
      setActiveTab('Contact');
    } else if (pathLower === '/about') {
      setActiveTab('About');
    } else {
      setActiveTab('Field Guides');
    }
  };

  const handleTabChange = (item: string) => {
    setActiveTab(item);
    if (item === 'Field Guides') {
      navigate('/field-guides');
    } else if (item === 'Plans') {
      navigate('/plans');
    } else if (item === 'Contact') {
      navigate('/contact');
    } else if (item === 'About') {
      navigate('/about');
    } else {
      navigate('/');
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.toLowerCase();
      setCurrentPath(window.location.pathname);
      
      if (path === '/about') {
        setActiveTab('About');
      } else if (
        path === '/fieldguides' || 
        path === '/field-guides' || 
        TEMPLATE_CATEGORIES.some(c => c.route.toLowerCase() === path) ||
        path.startsWith('/template-preview')
      ) {
        setActiveTab('Field Guides');
      } else if (path === '/plans') {
        setActiveTab('Plans');
      } else if (path === '/contact') {
        setActiveTab('Contact');
      } else {
        setActiveTab('Course');
      }
    };
    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (mouse.current.x === -999 && mouse.current.y === -999) {
        // Initialize immediately to prevent scrolling or jumping from offscreen
        mouse.current = { x: e.clientX, y: e.clientY };
        smooth.current = { x: e.clientX, y: e.clientY };
        setCursorPos({ x: e.clientX, y: e.clientY });
      } else {
        mouse.current = { x: e.clientX, y: e.clientY };
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches && e.touches[0]) {
        const t = e.touches[0];
        if (mouse.current.x === -999 && mouse.current.y === -999) {
          mouse.current = { x: t.clientX, y: t.clientY };
          smooth.current = { x: t.clientX, y: t.clientY };
          setCursorPos({ x: t.clientX, y: t.clientY });
        } else {
          mouse.current = { x: t.clientX, y: t.clientY };
        }
      }
    };

    const updateSmoothPosition = () => {
      if (mouse.current.x !== -999 && mouse.current.y !== -999) {
        if (smooth.current.x === -999) {
          smooth.current = { ...mouse.current };
          setCursorPos({ x: smooth.current.x, y: smooth.current.y });
        } else {
          // Linear interpolation (lerp) for smooth trailing effect
          const dx = mouse.current.x - smooth.current.x;
          const dy = mouse.current.y - smooth.current.y;
          if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
            smooth.current.x += dx * 0.1;
            smooth.current.y += dy * 0.1;
            setCursorPos({ x: smooth.current.x, y: smooth.current.y });
          }
        }
      }
      rafRef.current = requestAnimationFrame(updateSmoothPosition);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchstart', handleTouchMove, { passive: true });
    rafRef.current = requestAnimationFrame(updateSmoothPosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchstart', handleTouchMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const navItems = ['Course', 'Field Guides', 'Plans', 'Contact'];

  const getRouteInfo = () => {
    const path = currentPath.toLowerCase();
    
    // Check if it's a category
    const category = TEMPLATE_CATEGORIES.find(c => c.route.toLowerCase() === path);
    if (category) {
      return { type: 'category' as const, data: category };
    }
    
    // Check if it's a template preview
    if (path.startsWith('/template-preview')) {
      const urlParams = new URLSearchParams(window.location.search);
      const id = urlParams.get('id');
      if (id) {
        for (const cat of TEMPLATE_CATEGORIES) {
          const templ = cat.templates.find(t => t.id.toLowerCase() === id.toLowerCase());
          if (templ) {
            return { type: 'preview' as const, data: templ };
          }
        }
      }
    }
    
    return { type: 'fieldguides' as const, data: null };
  };

  const routeInfo = getRouteInfo();

  return (
    <div className="h-screen w-full bg-black text-white tracking-[-0.02em] select-none overflow-y-auto overflow-x-hidden scroll-smooth" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Navigation (fixed, over hero) */}
      <nav id="navbar" className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between p-4 sm:p-5">
        {/* Left branding */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleTabChange('Course')}>
          <TransparentLogo 
            src={logoImg} 
            alt="Catalyst Kalpana Logo" 
            className="h-24 sm:h-32 w-auto object-contain -mt-3 sm:-mt-4 relative z-50" 
          />
        </div>

        {/* Center Pill Navigation (hidden on mobile, visible on desktop/md) */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-2 py-1.5 items-center gap-1 shadow-lg shadow-black/20">
          {navItems.map((item) => {
            const isActive = activeTab === item;
            return (
              <button
                key={item}
                onClick={() => handleTabChange(item)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'text-white bg-white/25 shadow-sm'
                    : 'text-white/80 hover:bg-white/10 hover:text-white'
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>

        {/* Right Desktop CTA - removed sign up */}
        <div className="hidden md:block w-24" />

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white hover:text-white/80 focus:outline-none z-50 p-2 transition-transform duration-300 active:scale-90"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation Drawer Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[90] flex flex-col justify-center items-center gap-8 md:hidden transition-all duration-300">
          <div className="flex flex-col items-center gap-2 mb-4 cursor-pointer" onClick={() => { handleTabChange('Course'); setIsMobileMenuOpen(false); }}>
            <TransparentLogo 
              src={logoImg} 
              alt="Catalyst Kalpana Logo" 
              className="h-36 sm:h-44 w-auto object-contain" 
            />
          </div>

          <div className="flex flex-col items-center gap-5">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  handleTabChange(item);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-xl font-medium tracking-wide transition-colors ${
                  activeTab === item ? 'text-[#e8702a]' : 'text-white hover:text-white/80'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* No sign up button */}
        </div>
      )}

      {/* Dynamic Tab Views */}
      {activeTab === 'Field Guides' ? (
        <div className="relative w-full min-h-screen bg-black">
          {routeInfo.type === 'category' ? (
            <CategoryPage 
              category={routeInfo.data} 
              onBack={() => navigate('/field-guides')} 
              onSelectTemplate={(t) => navigate('/template-preview', `?id=${t.id}`)} 
            />
          ) : routeInfo.type === 'preview' ? (
            <TemplatePreviewPage 
              template={routeInfo.data} 
              onBack={() => {
                const cat = TEMPLATE_CATEGORIES.find(c => c.templates.some(t => t.id === routeInfo.data.id));
                if (cat) {
                  navigate(cat.route);
                } else {
                  navigate('/field-guides');
                }
              }} 
            />
          ) : (
            <section
              id="field-guides-view"
              className="relative w-full min-h-screen bg-[#000000] text-white pt-24 pb-16 px-4 md:px-8 overflow-y-auto"
            >
              <div className="max-w-4xl mx-auto flex flex-col gap-8 mt-4">
                <div className="text-center flex flex-col gap-2 max-w-xl mx-auto mb-2">
                  <span className="text-[10px] tracking-[0.3em] font-mono font-semibold text-[#e8702a] uppercase">
                    PARTNER WORKSPACES
                  </span>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold tracking-tight text-white">
                    Our Template Collection
                  </h2>
                  <p className="text-white/50 text-sm font-light">
                    Browse premium, production-ready website templates hand-designed for your industry sector.
                  </p>
                </div>
                <div className="w-full bg-neutral-950/50 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/5 shadow-2xl">
                  <ExpandableCardDemo onSelectCategory={(route) => navigate(route)} />
                </div>
                <CardHoverEffectDemo />
              </div>
            </section>
          )}
        </div>
      ) : activeTab === 'About' ? (
        <PrismaLandingPage onNavigateToFieldGuides={() => handleTabChange('Field Guides')} />
      ) : activeTab === 'Plans' ? (
        <PlansSection />
      ) : activeTab === 'Contact' ? (
        <ContactSection />
      ) : (
        <>
          <section
            className="relative w-full overflow-hidden h-screen bg-black"
            style={{ height: '100dvh' }}
          >
            {/* Base Layer Image (z-10) with Ken Burns slow zoom out */}
            <div
              id="base-image"
              className="absolute inset-0 bg-center bg-cover bg-no-repeat z-10 hero-zoom pointer-events-none"
              style={{ backgroundImage: `url(${BG_IMAGE_1})` }}
            />

            {/* Vignette Overlay (z-20) to ground the typography and graphics in premium contrast */}
            <div
              id="vignette-overlay"
              className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 z-20 pointer-events-none"
            />

            {/* Reveal Layer (z-30) - Second image revealed within a feathered, soft ambient spotlight */}
            <RevealLayer
              image={BG_IMAGE_2}
              cursorX={cursorPos.x}
              cursorY={cursorPos.y}
            />

            {/* Front-most Vignette/Contrast Enhancer (z-40) */}
            <div
              id="top-vignette"
              className="absolute inset-0 bg-black/10 z-40 pointer-events-none"
            />

            {/* Content Overlay */}

            {/* Centered Heading (z-50) */}
            <div
              id="hero-heading"
              className="absolute top-[14%] left-0 right-0 flex flex-col items-center text-center px-5 pointer-events-none z-50"
            >
              {/* Brand Tagline Header */}

              <h1 className="text-white leading-[0.95] flex flex-col items-center">
                <span
                  className="block font-playfair italic font-normal text-5xl sm:text-7xl md:text-8xl hero-anim hero-reveal"
                  style={{ animationDelay: '0.25s', letterSpacing: '-0.05em' }}
                >
                  Shaping
                </span>
                <span
                  className="block font-normal text-5xl sm:text-7xl md:text-8xl -mt-1 hero-anim hero-reveal"
                  style={{ animationDelay: '0.42s', letterSpacing: '-0.08em' }}
                >
                  Digital Dimensions
                </span>
              </h1>
            </div>

            {/* Bottom-left paragraph (z-50) */}
            <div
               id="bottom-left-desc"
               className="hidden sm:block absolute bottom-14 left-10 md:left-14 max-w-[260px] z-50 hero-anim hero-fade"
               style={{ animationDelay: '0.7s' }}
            >
              <p className="text-sm text-white/80 leading-relaxed font-light">
                Designing meaningful experiences through creativity, technology, and purposeful innovation.
              </p>
            </div>

            {/* Bottom-right block (z-50) */}
            <div
               id="bottom-right-desc"
               className="absolute bottom-10 sm:bottom-24 left-5 right-5 sm:left-auto sm:right-10 md:right-14 max-w-full sm:max-w-[260px] flex flex-col items-start gap-4 sm:gap-5 z-50 hero-anim hero-fade"
               style={{ animationDelay: '0.85s' }}
            >
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light">
                Uncovering the true potential of brands through thoughtful design and powerful digital experiences.
              </p>
              <button
                id="start-digging-btn"
                onClick={() => handleTabChange('About')}
                className="bg-[#e8702a] hover:bg-[#d2611f] text-white text-sm font-medium px-7 py-3 rounded-full transition-all hover:scale-[1.03] active:scale-95 hover:shadow-lg hover:shadow-[#e8702a]/30 flex items-center gap-2 group cursor-pointer pointer-events-auto"
              >
                <span>Explore</span>
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Ambient indicator/hint at bottom of screen */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none text-white/30 text-[10px] tracking-[0.2em] font-mono flex flex-col items-center gap-1.5 animate-pulse hidden sm:flex">
              <span>MOVE CURSOR TO REVEAL STRATUM</span>
              <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
            </div>

          </section>

          {/* Zoom Parallax Section */}
          <ZoomParallax images={PARALLAX_IMAGES} />

          {/* Section 2: What Do We Create */}
          <section
            id="animated-testimonials-view"
            className="dark relative w-full bg-black text-white pt-24 pb-12 flex flex-col items-center justify-start overflow-hidden"
          >
            <div className="flex flex-col gap-6 w-full mt-4">
              <div className="text-center flex flex-col gap-2 max-w-3xl mx-auto px-4">
                <span className="text-[10px] tracking-[0.3em] font-mono font-semibold text-[#e8702a] uppercase">OUR PORTFOLIO</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair italic font-normal tracking-tight text-white leading-tight">
                  What Do We Create
                </h2>
                <p className="text-white/60 text-sm max-w-lg mx-auto leading-relaxed">
                  A showcase of our high-end digital design systems, 3D visual environments, and advanced model integrations.
                </p>
              </div>
              <div className="w-full">
                <AnimatedTestimonialsDemo />
              </div>
            </div>
          </section>

          {/* Kinetic Team Section */}
          <section id="kinetic-team-view" className="w-full bg-black text-white">
            <KineticTeamHybrid />
          </section>

          {/* Timeline Section */}
          <section
            id="timeline-view"
            className="relative w-full bg-black text-white py-12 flex flex-col items-center justify-start overflow-hidden"
          >
            <TimelineDemo />
          </section>

          {/* Section 4 & 5: Mission/Vision Paragraphs & FAQ */}
          <section
            id="narrative-faq-view"
            className="dark relative w-full bg-black text-white pb-24 flex flex-col items-center justify-start"
          >
            <div className="flex flex-col gap-6 w-full">
              {/* Mission and Vision Narrative Content */}
              <div className="max-w-3xl mx-auto px-6 border-t border-white/5 pt-16 space-y-8 text-white/75 text-base sm:text-lg leading-relaxed font-light text-center sm:text-left">
                <p>
                  At Catalyst Kalpana, our mission is to create opportunities for growth through technology and innovation. We build digital solutions that help brands establish a strong online presence and grow with confidence.Focuses on creating scalable websites and platforms that support businesses as they expand and evolve.
                </p>
                <p>
                  Believing in connecting people through meaningful digital experiences and helping every brand build a unique identity. Committed to motivating startups, supporting new ideas, and creating the right path for long term success.
                </p>
                <p>
                  Useful for everyone from college going student to highly experienced peson. Our goal is to make modern technology accessible to everyone and empower people to turn their ideas into lasting success.
                </p>
                <p>
                  We don't believe in following the crowd. We create innovative solutions designed for today's digital world and tomorrow's possibilities.
                </p>
              </div>

              {/* FAQ Section */}
              <div className="w-full mt-8 border-t border-white/5 pt-12">
                <FAQSection />
              </div>
            </div>
          </section>
        </>
      )}

      {/* Footer */}
      <Footer onTabChange={handleTabChange} activeTab={activeTab} />
    </div>
  );
}
