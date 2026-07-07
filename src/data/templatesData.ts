export interface Template {
  id: string;
  name: string;
  category: string;
  shortDesc: string;
  longDesc: string;
  tech: string[];
  image: string;
  accentColor: string;
  features: string[];
  // For the rich live template simulation preview
  layoutType: 'restaurant' | 'healthcare' | 'corporate' | 'realestate' | 'fitness' | 'startup' | 'foodservice';
  demoData: {
    heroTitle: string;
    heroSubtitle: string;
    sections: { title: string; content: string; details?: string[] }[];
  };
}

export interface Category {
  id: string;
  title: string;
  route: string;
  description: string;
  src: string;
  templates: Template[];
}

export const TEMPLATE_CATEGORIES: Category[] = [
  {
    id: 'restaurants-cafes',
    title: 'Restaurants & Cafés',
    route: '/restaurant-templates',
    description: 'Delectable layouts designed for fine dining, local bistros, cozy coffee shops, and gourmet grills.',
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=80',
    templates: [
      {
        id: 'gourmet-hub',
        name: 'Gourmet Hub',
        category: 'Restaurants & Cafés',
        shortDesc: 'Ultra-premium dark aesthetic website with real-time reservation scheduling, interactive dynamic menus, and video parallax integration.',
        longDesc: 'Gourmet Hub is crafted for modern high-end restaurants seeking an online experience as refined as their culinary offerings. It features custom transitions, lazy-loaded menu elements, and an integrated reservation inquiry system that triggers local client outreach.',
        tech: ['React 18', 'Tailwind CSS', 'Framer Motion', 'Lucide Icons'],
        image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&auto=format&fit=crop&q=80',
        accentColor: '#e8702a',
        features: ['Interactive PDF & Grid Menu', 'Automated Reservation Table Booking', 'Chef Spotlight Carousel', 'Immersive Ambient Dark Styling'],
        layoutType: 'restaurant',
        demoData: {
          heroTitle: 'Epicurean Excellence Redefined',
          heroSubtitle: 'Savor meticulously prepared dishes in an unforgettable luxury atmosphere.',
          sections: [
            { title: 'The Tasting Menu', content: 'Crafted with premium handpicked ingredients sourced daily from local organic producers.' },
            { title: 'Our Story', content: 'Founded with a simple vision: to bring authentic Michelin-starred culinary artistry to the heart of the city.' },
            { title: 'Private Dining Rooms', content: 'Perfect for exclusive business dinners, anniversaries, or private gatherings up to 40 guests.' }
          ]
        }
      },
      {
        id: 'bistro-co',
        name: 'Bistro & Co',
        category: 'Restaurants & Cafés',
        shortDesc: 'A warm, neighborhood-focused cafe layout with blackboard-style menu boards, customer reviews, and direct social feeds.',
        longDesc: 'Designed to bring out the local charm of bistros, bakeries, and craft cafes. Bistro & Co emphasizes warm lighting, handwriting-styled typography accents, and organic layout sections perfect for showcasing fresh pastries and handcrafted beverages.',
        tech: ['Vite', 'Tailwind CSS', 'React', 'Motion'],
        image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop&q=80',
        accentColor: '#d97706',
        features: ['Chalkboard Design Aesthetics', 'Live Barista Schedule', 'Instagram Feed Grid', 'Responsive Touch-friendly Menus'],
        layoutType: 'restaurant',
        demoData: {
          heroTitle: 'Warm Coffee & Fresh Conversations',
          heroSubtitle: 'Your comfortable sanctuary for exceptional coffee, artisan tea, and freshly baked pastries.',
          sections: [
            { title: 'Artisan Brews', content: 'Single-origin beans roasted weekly in micro-batches to guarantee tasting perfection.' },
            { title: 'Daily Bakeries', content: 'Sourdough breads, golden croissants, and fruit tarts prepared at 4:00 AM every single morning.' }
          ]
        }
      },
      {
        id: 'sizzle-grill',
        name: 'Sizzle Grill',
        category: 'Restaurants & Cafés',
        shortDesc: 'High-contrast energetic layout with smoky fire animations, steak sliders, and direct booking triggers.',
        longDesc: 'Sizzle Grill brings high excitement and visual energy to BBQ joints, grills, and casual steakhouses. It utilizes dramatic bold typography, red/orange active highlights, and stunning close-up grill photography cards.',
        tech: ['React', 'Tailwind CSS', 'Motion'],
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80',
        accentColor: '#dc2626',
        features: ['Searing Flame Scroll Animations', 'Custom Rib & Steak Customizer', 'Group Catering Order Builder', 'Customer Wall of Reviews'],
        layoutType: 'restaurant',
        demoData: {
          heroTitle: 'Flame-Kissed Masters of Smoke',
          heroSubtitle: 'Legendary wood-fired steaks, baby back ribs, and house-made barbecue glazes.',
          sections: [
            { title: 'On the Pit', content: 'Smoked slow and low for up to 16 hours over seasoned hickory and pecan wood logs.' },
            { title: 'The Smokehouse Feast', content: 'Feeds up to 6 people with pulled pork, brisket, burnt ends, and four premium sides.' }
          ]
        }
      }
    ]
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    route: '/healthcare-templates',
    description: 'Clean, reliable and professional templates for hospitals, wellness therapists, and dental practitioners.',
    src: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&auto=format&fit=crop&q=80',
    templates: [
      {
        id: 'carepoint-clinique',
        name: 'CarePoint Clinique',
        category: 'Healthcare',
        shortDesc: 'Clinical white-and-blue design system containing smart appointment schedulers, interactive doctor rosters, and patient resource grids.',
        longDesc: 'Designed to establish trust and professional clarity immediately. CarePoint is fully optimized for private practices, diagnostic clinics, and regional health systems requiring clear access to services and scheduling modules.',
        tech: ['React 18', 'Tailwind CSS', 'Lucide Icons', 'Motion'],
        image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80',
        accentColor: '#2563eb',
        features: ['Real-time Dr. Appointment Schedulers', 'Medical Records Access UI Mockup', 'Interactive Treatment Information Finder', 'HIPAA-Aligned Inquiry Design'],
        layoutType: 'healthcare',
        demoData: {
          heroTitle: 'Compassionate Care, Advanced Medicine',
          heroSubtitle: 'Your health is our life-long commitment. Meet our specialized team of physicians.',
          sections: [
            { title: 'Primary Care Services', content: 'Comprehensive health assessments, immunization, preventive care, and health management for your family.' },
            { title: 'Specialty Medicine', content: 'Advanced cardiology, neurology, pediatrics, and orthopedic treatment using modern equipment.' },
            { title: 'Emergency Resources', content: 'On-site emergency care and fast diagnostic imaging available 24/7 with zero wait times.' }
          ]
        }
      },
      {
        id: 'apex-dental',
        name: 'Apex Dental',
        category: 'Healthcare',
        shortDesc: 'A bright, welcoming dental clinic template featuring pricing calculators, patient form downloads, and interactive treatment slides.',
        longDesc: 'Apex Dental removes dental clinic anxiety with beautiful, smiling team cards, calming mint-green color tones, comprehensive service summaries, and clear client review sections.',
        tech: ['Vite', 'React', 'Tailwind CSS'],
        image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&auto=format&fit=crop&q=80',
        accentColor: '#0d9488',
        features: ['Before / After Smile Slider', 'Dental Treatment Pricing Guides', 'New Patient Online Intake Forms', 'Calming Pastel Mint Theme'],
        layoutType: 'healthcare',
        demoData: {
          heroTitle: 'Crafting Beautiful, Confident Smiles',
          heroSubtitle: 'Modern, pain-free dental care for patients of all ages. Schedule your cleanup today.',
          sections: [
            { title: 'Cosmetic Dentistry', content: 'Teeth whitening, porcelain veneers, and complete smile makeovers overseen by expert cosmetologists.' },
            { title: 'General Dentistry', content: 'Painless cleanings, root canals, composites, and dental health preservation.' }
          ]
        }
      },
      {
        id: 'vitalis-wellness',
        name: 'Vitalis Wellness',
        category: 'Healthcare',
        shortDesc: 'Minimalist earthy template for wellness centers, holistic therapists, acupuncture, and massage practices.',
        longDesc: 'Vitalis Wellness utilizes beautiful forest greens, warm cream tones, high-end nature photography, and smooth sliding transitions to cultivate a feeling of calmness and relaxation.',
        tech: ['React', 'Framer Motion', 'Tailwind CSS'],
        image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop&q=80',
        accentColor: '#16a34a',
        features: ['Relaxing Ambient Sound Integration', 'Therapist Bios & Specialties', 'Spa Packages Pricing Grid', 'Interactive Mindful Breathing Guide'],
        layoutType: 'healthcare',
        demoData: {
          heroTitle: 'Restore Harmony to Mind & Body',
          heroSubtitle: 'Experience physical rejuvenation and mental clarity through organic healing therapies.',
          sections: [
            { title: 'Holistic Massage', content: 'Swedish, deep tissue, and hot stone therapies tailored specifically to dissolve physical stress nodes.' },
            { title: 'Mindfulness Classes', content: 'Weekly meditation sessions, somatic breathing, and yoga for self-healing and daily stress relief.' }
          ]
        }
      }
    ]
  },
  {
    id: 'corporate-business',
    title: 'Corporate & Business',
    route: '/corporate-business-templates',
    description: 'Sleek, executive web experiences for consulting firms, enterprise agencies, and modern law firms.',
    src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80',
    templates: [
      {
        id: 'nova-consulting',
        name: 'Nova Consulting',
        category: 'Corporate & Business',
        shortDesc: 'Sophisticated executive dark and light grids, consulting service panels, partner logs, and interactive stat counters.',
        longDesc: 'Designed to elevate corporate authority and clarify service streams. Nova Consulting pairs elegant serif headings with high-contrast dark sections, presenting case studies with premium visual precision.',
        tech: ['React', 'Tailwind CSS', 'Framer Motion'],
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80',
        accentColor: '#4f46e5',
        features: ['Executive Case Studies Showcase', 'Bento-Grid Global Statistics', 'Partner Logo Carousel', 'Consultation Scheduling CTA'],
        layoutType: 'corporate',
        demoData: {
          heroTitle: 'Strategic Insights, Sustainable Growth',
          heroSubtitle: 'We guide global enterprises through digital transformations and structural optimizations.',
          sections: [
            { title: 'Management Consulting', content: 'Aligning corporate strategies, restructuring operations, and accelerating go-to-market scaling.' },
            { title: 'Financial Advisors', content: 'Risk mitigation, capital allocation, audit systems, and global asset navigation.' },
            { title: 'Digital Transformation', content: 'Migrating legacy infrastructures into modern cloud nodes powered by AI and smart systems.' }
          ]
        }
      },
      {
        id: 'nexus-ventures',
        name: 'Nexus Ventures',
        category: 'Corporate & Business',
        shortDesc: 'Tech-forward dark theme for venture capital, private equity, and startup incubator landing pages.',
        longDesc: 'Featuring modern dark-slate gradients, glowing interactive investment charts, and clean portfolio grids. Nexus Ventures highlights your assets with professional VC styling.',
        tech: ['Vite', 'React', 'Tailwind CSS', 'Motion'],
        image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=80',
        accentColor: '#6366f1',
        features: ['Active Holdings Grid Filter', 'Interactive Pitch Deck Submissions', 'LP Investment Portals Mockup', 'Futuristic Technical Grids'],
        layoutType: 'corporate',
        demoData: {
          heroTitle: 'Backing the Founders of Tomorrow',
          heroSubtitle: 'We lead Seed and Series-A rounds for high-potential technology and deep-tech startups.',
          sections: [
            { title: 'Our Core Sectors', content: 'Investing in Artificial Intelligence, ClimateTech, Quantum Computing, and SaaS architectures.' },
            { title: 'Portfolio Benefits', content: 'Providing instant recruiting support, operational mentorship, and follow-on financing channels.' }
          ]
        }
      },
      {
        id: 'apex-legal',
        name: 'Apex Legal',
        category: 'Corporate & Business',
        shortDesc: 'Prestigious serif-focused layout for boutique law firms, corporate lawyers, and defense counsels.',
        longDesc: 'A layout that conveys absolute authority, trust, and legal expertise. Featuring dark emerald colors, serif typography, detailed practice area cards, and lawyer consultation modules.',
        tech: ['React', 'Tailwind CSS', 'Lucide Icons'],
        image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&auto=format&fit=crop&q=80',
        accentColor: '#047857',
        features: ['Attorney Profiles Grid', 'Practice Area Dynamic Finder', 'Confidential Case Evaluator Form', 'Premium Legal Blog Design'],
        layoutType: 'corporate',
        demoData: {
          heroTitle: 'Unwavering Protection, Elite Counsel',
          heroSubtitle: 'Defending your commercial interests and personal assets with exceptional litigating strategies.',
          sections: [
            { title: 'Corporate Litigation', content: 'Shareholder disputes, intellectual property conflicts, mergers and acquisitions defense.' },
            { title: 'IP & Patents', content: 'Protecting your creative assets, software proprietary nodes, and global designs.' }
          ]
        }
      }
    ]
  },
  {
    id: 'real-estate',
    title: 'Real Estate',
    route: '/real-estate-templates',
    description: 'Breathtaking property galleries, filter tools, and agent networks designed for premium brokers.',
    src: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=80',
    templates: [
      {
        id: 'haven-estates',
        name: 'Haven Estates',
        category: 'Real Estate',
        shortDesc: 'A masterclass in luxury residential real estate, including wide property gallery sliders, floorplan modules, and active agent cards.',
        longDesc: 'Haven Estates is built for luxury brokerages displaying premium apartments, private villas, and high-end penthouses. It utilizes gorgeous white margins, smooth slide animations, and rich property details widgets.',
        tech: ['React', 'Tailwind CSS', 'Motion'],
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=80',
        accentColor: '#d97706',
        features: ['Interactive Property Filters', 'Full-screen Photo Sliders', 'Virtual Tour Video Embed UI', 'Direct Agent Inquiry Triggers'],
        layoutType: 'realestate',
        demoData: {
          heroTitle: 'Discover Your Ultimate Sanctuary',
          heroSubtitle: 'An curated collection of luxury estates, penthouses, and private beachfront retreats.',
          sections: [
            { title: 'Featured Property: Villa Horizon', content: 'A breathtaking 6-bedroom architectural masterwork in Malibu featuring infinity pool and private helipad.' },
            { title: 'The Penthouses', content: 'Sky-high luxury residences overlooking Manhattan skyline with bespoke concierge services.' },
            { title: 'Our Broker Network', content: 'Elite real estate consultants with over 30 combined years of elite market leadership.' }
          ]
        }
      },
      {
        id: 'verdant-homes',
        name: 'Verdant Homes',
        category: 'Real Estate',
        shortDesc: 'An eco-friendly sustainable housing development layout with solar metrics, neighborhood maps, and smart home details.',
        longDesc: 'Verdant Homes highlights green architecture, sustainable building materials, and modern community-centric real estate. It pairs leaf-green accents with spacious earthy backgrounds.',
        tech: ['Vite', 'React', 'Tailwind CSS'],
        image: 'https://images.unsplash.com/photo-1448630360428-654a95b31f40?w=800&auto=format&fit=crop&q=80',
        accentColor: '#15803d',
        features: ['Solar Savings Calculator', 'Neighborhood Walkability Maps', 'E-Home Automation Specs', 'Green Certifications Drawer'],
        layoutType: 'realestate',
        demoData: {
          heroTitle: 'Living in Harmony with Nature',
          heroSubtitle: 'Net-zero carbon residential neighborhood with smart solar loops and community gardens.',
          sections: [
            { title: 'Net-Zero Standard', content: 'Our smart homes generate 100% of their electricity on-site utilizing Tesla roofing tiles.' },
            { title: 'Organic Communities', content: 'Flanked by 40 acres of preserved woodland, running trails, and community greenhouses.' }
          ]
        }
      },
      {
        id: 'apex-commercial',
        name: 'Apex Commercial',
        category: 'Real Estate',
        shortDesc: 'A professional commercial property agency platform with lease trackers, office layout drawers, and corporate contact forms.',
        longDesc: 'Tailored for corporate real estate, retail leasing, and industrial office spaces. It features a bold, professional steel-blue design, robust metrics display, and fast inquiry CTA.',
        tech: ['React', 'Tailwind CSS', 'Framer Motion'],
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80',
        accentColor: '#0f172a',
        features: ['Commercial Yield Graph Calculator', 'Interactive Floor Planners', 'Tenant Services Drawer', 'Corporate Lease Matchmaking Tool'],
        layoutType: 'realestate',
        demoData: {
          heroTitle: 'Elite Spaces for Scaling Enterprises',
          heroSubtitle: 'Prime commercial offices, industrial logistics hubs, and retail flagship stores.',
          sections: [
            { title: 'Corporate Headquarters', content: 'A-grade office towers located directly in primary central business districts.' },
            { title: 'Retail Expansion', content: 'High-visibility storefront spaces located in busy metropolitan shopping sectors.' }
          ]
        }
      }
    ]
  },
  {
    id: 'fitness-wellness',
    title: 'Fitness & Wellness',
    route: '/fitness-wellness-templates',
    description: 'High-energy gym websites, serene yoga studio layouts, and professional trainer portfolios.',
    src: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop&q=80',
    templates: [
      {
        id: 'pulse-fitness',
        name: 'Pulse Fitness',
        category: 'Fitness & Wellness',
        shortDesc: 'High-intensity dynamic animations, neon highlighting, live class schedulers, and integrated trainer profiles.',
        longDesc: 'Designed to inject physical energy right into the screen. Pulse Fitness uses high-contrast typography, energetic neon accents, and interactive grids showing physical routines and pricing tiers.',
        tech: ['React', 'Tailwind CSS', 'Motion'],
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop&q=80',
        accentColor: '#e8702a',
        features: ['Interactive Exercise Timetables', 'Trainer Bio & Certification Sliders', 'Customizable Membership Tiers', 'Dynamic BMI Intake Calculator'],
        layoutType: 'fitness',
        demoData: {
          heroTitle: 'Transform Your Physical Potential',
          heroSubtitle: 'Push past your limitations with world-class coaches and state-of-the-art weights.',
          sections: [
            { title: 'The Gym Floor', content: 'Equipped with heavy-duty power racks, 100lb dumbbells, and custom athletic turf sections.' },
            { title: 'Coached Classes', content: 'Savage HIIT, kettlebell strength, powerlifting camps, and cardio endurance classes.' },
            { title: 'Personal Guidance', content: 'Bespoke nutrition planning and weekly body composition scans with elite trainers.' }
          ]
        }
      },
      {
        id: 'zen-yoga-space',
        name: 'Zen Yoga Space',
        category: 'Fitness & Wellness',
        shortDesc: 'A tranquil, minimalist yoga platform using pastel backgrounds, serene transitions, and master class registrations.',
        longDesc: 'Cultivating mindfulness from the first click. Zen Yoga Space pairs peaceful sage greens and cream colors with rounded cards, fluid fade-ins, and direct reservation modules for yoga workshops.',
        tech: ['Vite', 'React', 'Tailwind CSS', 'Motion'],
        image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&auto=format&fit=crop&q=80',
        accentColor: '#14b8a6',
        features: ['Sound-healing Player Mock', 'Class Intake Signups', 'Chakra & Breath Tutorials', 'Minimalist Class Timetables'],
        layoutType: 'fitness',
        demoData: {
          heroTitle: 'Breathe, Align, and Heal',
          heroSubtitle: 'A quiet, peaceful sanctuary to reconnect with your breath and build somatic flexibility.',
          sections: [
            { title: 'Vinyasa Flow', content: 'Aligning breath and movement to stretch your muscle tissue and calm down nervous responses.' },
            { title: 'Yin & Restorative', content: 'Slowing down to hold postures for longer, helping repair deep joints and release fascia.' }
          ]
        }
      },
      {
        id: 'primal-crossfit',
        name: 'Primal CrossFit',
        category: 'Fitness & Wellness',
        shortDesc: 'Aggressive, high-contrast dark theme built for box gyms, CrossFit communities, and strongman training centers.',
        longDesc: 'Featuring bold orange text over absolute dark backgrounds, textured overlays, and direct scheduling of daily workouts (WOD). It matches physical grit with elite digital speed.',
        tech: ['React', 'Tailwind CSS', 'Lucide Icons'],
        image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop&q=80',
        accentColor: '#ea580c',
        features: ['Daily WOD Tracker Card', 'PR Weightlifting Logs', 'CrossFit Class Scheduler', 'Sponsor Product Placement Hub'],
        layoutType: 'fitness',
        demoData: {
          heroTitle: 'Forge Elite Physical Stamina',
          heroSubtitle: 'No excuses, no shortcuts. Just heavy lifting, intense conditioning, and real communities.',
          sections: [
            { title: 'The Primal Box', content: '12,000 square feet of climbing ropes, lifting platforms, assault bikes, and rowing machines.' },
            { title: 'Daily WOD', content: 'Constantly varied, high-intensity functional movements executed under the clock.' }
          ]
        }
      }
    ]
  },
  {
    id: 'startups',
    title: 'Startups',
    route: '/startup-templates',
    description: 'High-converting landing pages for tech SaaS, developers, artificial intelligence, and fintech platforms.',
    src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=80',
    templates: [
      {
        id: 'saasify-pro',
        name: 'SaaSify Pro',
        category: 'Startups',
        shortDesc: 'A state-of-the-art tech landing page with dynamic interactive feature tabs, dynamic billing calculators, and live demo integrations.',
        longDesc: 'SaaSify Pro is the perfect software landing page built to drive conversions. It includes beautiful product dashboard screenshots, glowing borders, high-contrast CTA sections, and a responsive accordion FAQ section.',
        tech: ['React 18', 'Tailwind CSS', 'Framer Motion'],
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80',
        accentColor: '#2563eb',
        features: ['Interactive Monthly / Annual Pricing Tabs', 'Dashboard Interface Simulator', 'Sleek Features Bento Grid', 'Direct Software Sign-up Flows'],
        layoutType: 'startup',
        demoData: {
          heroTitle: 'Streamline Your Team Workflows',
          heroSubtitle: 'The central hub for tracking tasks, communicating asynchronously, and compiling code.',
          sections: [
            { title: 'Task Boards', content: 'Manage sprints with beautiful, drag-and-drop Kanban layouts and automated dependency updates.' },
            { title: 'Unified Inbox', content: 'Stop switching between Slack and Gmail. Keep all conversations tied directly to project files.' },
            { title: 'Custom Automation', content: 'Trigger API calls, database cleanups, or email updates using our drag-and-drop pipeline designer.' }
          ]
        }
      },
      {
        id: 'aura-ai',
        name: 'Aura AI',
        category: 'Startups',
        shortDesc: 'Futuristic developer-focused landing page with code execution previews, neon glows, and interactive neural nodes.',
        longDesc: 'Designed specifically for AI, ML, and API developer startups. Featuring dark cyberpunk grids, terminal log displays, copyable code containers, and sleek technical typography.',
        tech: ['React', 'Framer Motion', 'Tailwind CSS', 'Lucide Icons'],
        image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?w=800&auto=format&fit=crop&q=80',
        accentColor: '#a855f7',
        features: ['Interactive API Console Playground', 'Terminal Animation Emulator', 'gRPC & REST Speed Benchmarks', 'Secure Developer Keys UI Mockup'],
        layoutType: 'startup',
        demoData: {
          heroTitle: 'Deploy LLM Agents in 2 Lines of Code',
          heroSubtitle: 'High-performance AI inference pipelines with pre-integrated Google Gemini models and semantic vector stores.',
          sections: [
            { title: 'Inference Engine', content: 'Achieve sub-50ms latency across 40 distinct visual and text models deployed globally.' },
            { title: 'Agent Orchastration', content: 'Chain logic, ground models with live search datasets, and deploy active background cron bots.' }
          ]
        }
      },
      {
        id: 'payflow',
        name: 'PayFlow',
        category: 'Startups',
        shortDesc: 'Sleek fintech layout displaying modern transaction ledgers, analytics graphs, and multi-currency exchange tables.',
        longDesc: 'PayFlow combines the safety of financial tech with beautiful digital accessibility. Featuring a dark obsidian palette, emerald active metrics, and crisp, elegant product mockups.',
        tech: ['Vite', 'React', 'Tailwind CSS', 'Recharts'],
        image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&auto=format&fit=crop&q=80',
        accentColor: '#10b981',
        features: ['Interactive Revenue Graph', 'Multi-currency Send Flow Mock', 'Merchant Fees Transparency Tab', 'Mobile App Download Section'],
        layoutType: 'startup',
        demoData: {
          heroTitle: 'The Future of Borderless Banking',
          heroSubtitle: 'Send, receive, and swap currencies instantly with zero hidden fees. Built for global scaling teams.',
          sections: [
            { title: 'Global Ledgers', content: 'Hold over 30 distinct currencies, swap instantly using interbank exchange rates.' },
            { title: 'Smart Expense Cards', content: 'Issue digital corporate credit cards to employees with pre-configured spending limits.' }
          ]
        }
      }
    ]
  },
  {
    id: 'food-servicing',
    title: 'Food Servicing',
    route: '/food-servicing-templates',
    description: 'Perfect for meal subscription kits, high-volume caterers, bakeries, and direct-to-door food services.',
    src: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&auto=format&fit=crop&q=80',
    templates: [
      {
        id: 'crave-delivery',
        name: 'Crave Delivery',
        category: 'Food Servicing',
        shortDesc: 'High-end meal prep delivery website, including custom order builders, nutritional tracking displays, and flexible weekly subscription widgets.',
        longDesc: 'Crave Delivery brings direct-to-consumer food subscription business alive. It features structured ingredient cards, customizable macro configurations, interactive calendar schedulers, and beautiful food grids.',
        tech: ['React', 'Tailwind CSS', 'Framer Motion'],
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop&q=80',
        accentColor: '#f97316',
        features: ['Interactive Subscription Builder', 'Comprehensive Macro-Nutrient Metrics', 'Flexible Calendar Delivery Schedulers', 'Direct Checkout Inquiry Action'],
        layoutType: 'foodservice',
        demoData: {
          heroTitle: 'Artisan Chef Meals, Delivered Fresh',
          heroSubtitle: 'Chef-prepared premium meals delivered to your doorstep. Ready to eat in under 3 minutes.',
          sections: [
            { title: 'How It Works', content: 'Choose your menu plan, our chefs prepare meals using fresh organic ingredients, and we deliver weekly.' },
            { title: 'Custom Dieting', content: 'Choose Keto, high-protein, vegetarian, or gluten-free. We calibrate macros to match your physique goals.' },
            { title: 'Eco-Friendly Pack', content: 'Delivered in fully insulated, compostable cooler packages to guarantee freshness and preserve planet health.' }
          ]
        }
      },
      {
        id: 'daily-prep',
        name: 'Daily Prep',
        category: 'Food Servicing',
        shortDesc: 'A rustic catering and bulk event servicing template with custom menu planners, package sliders, and dynamic head-count counters.',
        longDesc: 'Tailored for wedding caterers, business lunch providers, and bulk gourmet services. It includes responsive pricing calculators based on party size, premium menu selection widgets, and detailed event sheets.',
        tech: ['Vite', 'React', 'Tailwind CSS'],
        image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=800&auto=format&fit=crop&q=80',
        accentColor: '#ca8a04',
        features: ['Party Pricing Guest Calculator', 'Bespoke Package Selection Tabs', 'Catering Request Forms', 'High-Res Food Platter Cards'],
        layoutType: 'foodservice',
        demoData: {
          heroTitle: 'Legendary Catering for Landmark Events',
          heroSubtitle: 'Professional, elegant gourmet catering packages crafted to create lasting memories.',
          sections: [
            { title: 'Corporate Packages', content: 'Elevated hot lunch bars, networking platters, and coffee stations for your enterprise assemblies.' },
            { title: 'Wedding & Gala Banquets', content: 'Plated 5-course gourmet dining plans custom-designed by Michelin-starred culinary teams.' }
          ]
        }
      },
      {
        id: 'sweet-delights',
        name: 'Sweet Delights',
        category: 'Food Servicing',
        shortDesc: 'A dreamy, highly illustrative website template for custom cake bakers, boutique bakeries, and sweet tables.',
        longDesc: 'Featuring soft warm pastel colors, gorgeous cake galleries, customizable tier configuration calculators, and clear allergen indicators.',
        tech: ['React', 'Tailwind CSS', 'Motion'],
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&auto=format&fit=crop&q=80',
        accentColor: '#ec4899',
        features: ['Custom Birthday Cake Customizer', 'Macarons & Cupcakes Selection Grids', 'Detailed Allergen Warning Modals', 'Bespoke Sweet Table Planners'],
        layoutType: 'foodservice',
        demoData: {
          heroTitle: 'Handcrafted Sweetness in Every Bite',
          heroSubtitle: 'Artisan custom cakes, cupcakes, and french macarons prepared with premium organic chocolates.',
          sections: [
            { title: 'Custom Sculpted Cakes', content: 'Give us your dream design. We sculpt jaw-dropping birthday, wedding, and event cakes.' },
            { title: 'Bespoke Dessert Bars', content: 'An curated arrangement of tarts, shooter cups, cookies, and macarons customized to match your wedding color palette.' }
          ]
        }
      }
    ]
  }
];
