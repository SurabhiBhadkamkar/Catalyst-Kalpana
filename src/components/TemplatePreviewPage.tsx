import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, Laptop, Tablet, Smartphone, Mail, Sparkles, 
  CheckCircle2, Server, Star, Globe, ShieldCheck, ShoppingCart, 
  HeartHandshake, Calendar, Flame, Coffee, Activity, Dumbbell, 
  Building, Rocket, ArrowRight
} from 'lucide-react';
import { Template } from '../data/templatesData';

interface TemplatePreviewPageProps {
  template: Template;
  onBack: () => void;
}

type DeviceType = 'desktop' | 'tablet' | 'mobile';

export default function TemplatePreviewPage({ template, onBack }: TemplatePreviewPageProps) {
  const [device, setDevice] = useState<DeviceType>('desktop');
  const [activeTab, setActiveTab] = useState<string>('Home');
  const [interactiveCounter, setInteractiveCounter] = useState<number>(1);
  const [bmiHeight, setBmiHeight] = useState<string>('175');
  const [bmiWeight, setBmiWeight] = useState<string>('70');
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  // Trigger default mailto client
  const handleChooseTemplate = () => {
    const to = 'catalystkalpana@gmail.com';
    const subject = encodeURIComponent(`Website Template Inquiry - ${template.name}`);
    const body = encodeURIComponent(
      `Hello Catalyst Kalpana Team,\n\n` +
      `I am interested in the ${template.name}.\n\n` +
      `Business Name:\n\n` +
      `Business Type:\n\n` +
      `Additional Requirements:\n\n` +
      `Contact Number:\n\n` +
      `Thank you.`
    );
    
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  };

  // Compute calculated BMI
  const calculatedBmi = () => {
    const h = parseFloat(bmiHeight) / 100;
    const w = parseFloat(bmiWeight);
    if (isNaN(h) || isNaN(w) || h <= 0) return '0.0';
    return (w / (h * h)).toFixed(1);
  };

  // Get active device width
  const getDeviceWidth = () => {
    if (device === 'mobile') return 'max-w-[390px]';
    if (device === 'tablet') return 'max-w-[768px]';
    return 'max-w-full';
  };

  // Render the actual Simulated Live Website
  const renderSimulatedWebsite = () => {
    const accent = template.accentColor;
    
    // Header component
    const renderSimulatedHeader = (logoIcon: React.ReactNode, title: string, links: string[]) => (
      <header className="bg-neutral-900 border-b border-white/5 py-4 px-4 sm:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg text-white" style={{ backgroundColor: accent }}>
            {logoIcon}
          </div>
          <span className="font-sans text-white font-extrabold text-lg tracking-tight">{title}</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-4 text-xs text-white/70">
            {links.map((link) => (
              <button 
                key={link} 
                onClick={() => setActiveTab(link)}
                className={`transition-colors font-medium cursor-pointer hover:text-white ${activeTab === link ? 'text-white underline' : ''}`}
              >
                {link}
              </button>
            ))}
          </div>
          <button 
            onClick={() => alert("Simulated Consultation booking initiated. In production, this launches your custom lead form!")}
            className="text-[10px] sm:text-xs font-semibold px-3 py-1.5 rounded-full text-white transition-all hover:scale-[1.02]"
            style={{ backgroundColor: accent }}
          >
            Book Now
          </button>
        </div>
      </header>
    );

    // Render depending on category design layout
    switch (template.layoutType) {
      case 'restaurant':
        return (
          <div className="w-full min-h-[500px] bg-black text-white flex flex-col font-sans select-none">
            {renderSimulatedHeader(<Coffee size={16} />, template.name, ['Home', 'Menu', 'Reviews'])}
            
            {activeTab === 'Home' && (
              <div className="flex-1 flex flex-col">
                {/* Hero banner inside simulated layout */}
                <div className="relative py-20 px-6 text-center flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${template.image})` }}>
                  <div className="absolute inset-0 bg-black/80" />
                  <div className="relative z-10 max-w-xl flex flex-col items-center">
                    <span className="text-[10px] tracking-[0.2em] font-mono font-bold uppercase" style={{ color: accent }}>
                      ESTABLISHED 2026
                    </span>
                    <h1 className="text-2xl sm:text-4xl font-sans font-extrabold tracking-tight text-white mt-2 leading-tight">
                      {template.demoData.heroTitle}
                    </h1>
                    <p className="text-white/70 text-xs sm:text-sm mt-3 font-light max-w-md leading-relaxed">
                      {template.demoData.heroSubtitle}
                    </p>
                    <button 
                      onClick={() => setActiveTab('Menu')}
                      className="mt-6 px-6 py-2.5 rounded-full text-xs font-semibold hover:scale-105 transition-transform flex items-center gap-1 cursor-pointer"
                      style={{ backgroundColor: accent }}
                    >
                      <span>Explore Menu</span>
                      <ArrowRight size={12} />
                    </button>
                  </div>
                </div>

                {/* Subsections */}
                <div className="p-8 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-neutral-950/40">
                  {template.demoData.sections.map((sec, i) => (
                    <div key={i} className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                      <h3 className="text-sm font-semibold text-white/90 font-mono tracking-wider" style={{ color: accent }}>
                        {sec.title}
                      </h3>
                      <p className="text-xs text-white/60 mt-1.5 leading-relaxed font-light">
                        {sec.content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'Menu' && (
              <div className="p-8 flex-1 flex flex-col gap-6 bg-neutral-950/20">
                <div className="text-center">
                  <h3 className="text-lg font-sans font-bold text-white">Culinary Selections</h3>
                  <p className="text-xs text-white/50">Handcrafted gourmet recipes tailored specifically by our head chefs.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto w-full">
                  {[
                    { name: 'Truffle Wood-fired Rigatoni', price: '$28', desc: 'Handcrafted pasta tossed in premium Italian truffle cream, chives, and parmesan reggiano.' },
                    { name: 'Searing Tomahawk (12oz)', price: '$54', desc: 'Prime angus dry-aged steak grilled with garlic compound butter and fresh rosemary springs.' },
                    { name: 'Organic Lemon Basil Scone', price: '$9', desc: 'Freshly baked flaky pastry topped with organic lemon glaze, honey, and garden sweet basil.' },
                    { name: 'Barista Single-Origin Espresso', price: '$6', desc: 'Creamy slow double-shot espresso brewed from Ethiopian hand-sorted micro-lot beans.' }
                  ].map((item, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-start justify-between">
                      <div>
                        <h4 className="text-xs font-semibold text-white">{item.name}</h4>
                        <p className="text-[10px] text-white/50 mt-1">{item.desc}</p>
                      </div>
                      <span className="text-xs font-mono font-bold" style={{ color: accent }}>{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'Reviews' && (
              <div className="p-8 flex-1 flex flex-col gap-6 bg-neutral-950/20 text-center items-center justify-center">
                <div className="max-w-md bg-white/[0.02] border border-white/5 p-6 rounded-2xl">
                  <div className="flex gap-1 justify-center mb-3">
                    {[1,2,3,4,5].map(star => <Star key={star} size={14} className="fill-amber-400 text-amber-400" />)}
                  </div>
                  <p className="text-xs italic text-white/80 leading-relaxed font-light">
                    "This is hands down the absolute finest dining experience of my life. The Truffle Rigatoni had unbelievable flavor, and the website's digital booking system made securing our Friday night table incredibly simple!"
                  </p>
                  <span className="block text-[10px] font-mono text-white/40 uppercase tracking-widest mt-3">— Isabella Vance, Food Critic</span>
                </div>
              </div>
            )}
          </div>
        );

      case 'healthcare':
        return (
          <div className="w-full min-h-[500px] bg-slate-900 text-slate-100 flex flex-col font-sans select-none">
            {renderSimulatedHeader(<Activity size={16} />, template.name, ['Home', 'Services', 'Appointment'])}

            {activeTab === 'Home' && (
              <div className="flex-1 flex flex-col">
                <div className="p-8 sm:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-slate-950/50">
                  <div className="flex flex-col items-start text-left">
                    <span className="text-[10px] tracking-[0.2em] font-mono font-bold uppercase" style={{ color: accent }}>
                      TRUSTED HEALTH EXPERTS
                    </span>
                    <h1 className="text-2xl sm:text-3xl font-sans font-extrabold text-white mt-2 leading-tight tracking-tight">
                      {template.demoData.heroTitle}
                    </h1>
                    <p className="text-slate-300 text-xs sm:text-sm mt-3 font-light leading-relaxed">
                      {template.demoData.heroSubtitle}
                    </p>
                    <button 
                      onClick={() => setActiveTab('Appointment')}
                      className="mt-6 px-6 py-2.5 rounded-full text-xs font-semibold hover:scale-105 transition-transform flex items-center gap-1 cursor-pointer"
                      style={{ backgroundColor: accent }}
                    >
                      <span>Book Online Intake</span>
                      <Calendar size={12} />
                    </button>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 h-48 sm:h-64">
                    <img src={template.image} alt="Clinic interior" className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* Subsections */}
                <div className="p-8 grid grid-cols-1 sm:grid-cols-3 gap-6 bg-slate-900">
                  {template.demoData.sections.map((sec, i) => (
                    <div key={i} className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                      <h3 className="text-sm font-semibold text-white/90" style={{ color: accent }}>
                        {sec.title}
                      </h3>
                      <p className="text-xs text-slate-300/75 mt-1.5 leading-relaxed font-light">
                        {sec.content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'Services' && (
              <div className="p-8 flex-1 flex flex-col gap-6 bg-slate-950/20">
                <div className="text-center">
                  <h3 className="text-lg font-sans font-bold text-white">Clinical Specialties</h3>
                  <p className="text-xs text-slate-400">Exceptional therapeutic and preventive dental, physical and wellness programs.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto w-full">
                  {[
                    { title: 'Full Diagnostic Imaging & Testing', desc: 'Our onsite diagnostic suite provides comprehensive metrics with same-day digital processing.' },
                    { title: 'Chronic Treatment & Management', desc: 'Bespoke patient guidance systems designed to preserve comfort, mobility, and healthy cellular functions.' },
                    { title: 'Artistic Cosmetic Sculpting', desc: 'Revitalize structural and smiling confidence utilizing safe, modern and minimally invasive methodologies.' },
                    { title: 'Somatic Stress Integration', desc: 'Calming alternative therapies designed specifically to release nervous trauma and physical knots.' }
                  ].map((service, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-white/[0.01] border border-white/5">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accent }} />
                        <h4 className="text-xs font-semibold text-white">{service.title}</h4>
                      </div>
                      <p className="text-[10px] text-slate-400 mt-1.5 leading-relaxed font-light">{service.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'Appointment' && (
              <div className="p-8 flex-1 flex flex-col items-center justify-center bg-slate-950/20">
                <div className="w-full max-w-sm bg-slate-950/50 border border-white/10 p-6 rounded-2xl shadow-xl flex flex-col gap-4 text-left">
                  <h3 className="text-sm font-semibold text-white">Interactive Appointment Request</h3>
                  <p className="text-[11px] text-slate-400 -mt-2">Simulating our direct patient portal onboarding flow.</p>
                  
                  {formSubmitted ? (
                    <div className="py-6 text-center flex flex-col items-center gap-2">
                      <CheckCircle2 size={32} className="text-emerald-500" />
                      <h4 className="text-xs font-semibold text-white">Appointment Logged Successfully</h4>
                      <p className="text-[10px] text-slate-400">Our health representatives will dial you within 1 hour.</p>
                      <button onClick={() => setFormSubmitted(false)} className="text-[10px] font-mono text-blue-400 underline mt-2">Book Another</button>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-3">
                      <div>
                        <label className="block text-[9px] font-mono text-slate-400 uppercase">Selected Department</label>
                        <select className="w-full bg-white/5 border border-white/10 rounded-lg p-2 text-xs text-white focus:outline-none">
                          <option>Primary Consultation & Assessment</option>
                          <option>Dentistry & Orthodontic Care</option>
                          <option>Holistic Body Therapy & Acupuncture</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[9px] font-mono text-slate-400 uppercase">Preferred Date</label>
                        <input type="date" defaultValue="2026-07-08" className="w-full bg-white/5 border border-white/10 rounded-lg p-2 text-xs text-white focus:outline-none" />
                      </div>
                      <button 
                        onClick={() => setFormSubmitted(true)}
                        className="w-full text-xs font-semibold py-2.5 rounded-lg text-white transition-all hover:opacity-90 mt-2 cursor-pointer"
                        style={{ backgroundColor: accent }}
                      >
                        Submit Request
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        );

      case 'corporate':
        return (
          <div className="w-full min-h-[500px] bg-[#0c0f16] text-slate-100 flex flex-col font-sans select-none">
            {renderSimulatedHeader(<Server size={16} />, template.name, ['Home', 'Case Studies', 'Partners'])}

            {activeTab === 'Home' && (
              <div className="flex-1 flex flex-col">
                <div className="p-8 sm:p-12 text-center flex flex-col items-center justify-center bg-gradient-to-b from-[#121824] to-[#0c0f16]">
                  <span className="text-[9px] tracking-[0.3em] font-mono text-[#4f46e5] font-bold uppercase bg-[#4f46e5]/10 px-3 py-1 rounded-full border border-[#4f46e5]/20">
                    EXECUTIVE ADVISORY PLATFORM
                  </span>
                  <h1 className="text-3xl sm:text-4xl font-sans font-extrabold tracking-tight text-white mt-4 max-w-xl leading-tight">
                    {template.demoData.heroTitle}
                  </h1>
                  <p className="text-slate-400 text-xs sm:text-sm mt-3 font-light max-w-md leading-relaxed">
                    {template.demoData.heroSubtitle}
                  </p>
                  
                  {/* Interactive statistics slider widget */}
                  <div className="mt-8 bg-white/[0.02] border border-white/5 rounded-2xl p-4 flex gap-6 sm:gap-12 justify-center shadow-lg">
                    <div>
                      <span className="block text-xl font-mono font-bold text-white">99.8%</span>
                      <span className="text-[9px] font-mono uppercase text-slate-500 tracking-wider">SLA uptime</span>
                    </div>
                    <div className="border-r border-white/10" />
                    <div>
                      <span className="block text-xl font-mono font-bold text-white">$4.2B+</span>
                      <span className="text-[9px] font-mono uppercase text-slate-500 tracking-wider">assets advised</span>
                    </div>
                    <div className="border-r border-white/10" />
                    <div>
                      <span className="block text-xl font-mono font-bold text-white">40+</span>
                      <span className="text-[9px] font-mono uppercase text-slate-500 tracking-wider">global ports</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 grid grid-cols-1 sm:grid-cols-3 gap-4 bg-slate-950/40">
                  {template.demoData.sections.map((sec, i) => (
                    <div key={i} className="p-4 rounded-xl bg-white/[0.01] border border-white/5 text-left">
                      <h4 className="text-xs font-semibold text-white flex items-center gap-1.5">
                        <CheckCircle2 size={12} className="text-indigo-400" />
                        {sec.title}
                      </h4>
                      <p className="text-[11px] text-slate-400 mt-1 leading-relaxed font-light">
                        {sec.content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'Case Studies' && (
              <div className="p-8 flex-1 flex flex-col gap-6">
                <div className="text-center">
                  <h3 className="text-lg font-sans font-bold text-white">Strategic Case Portfolios</h3>
                  <p className="text-xs text-slate-400">Verifiable operational outcomes engineered for world-leading organizations.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto w-full text-left">
                  {[
                    { client: 'Apex Logistic Systems', metric: '+142% Delivery Speeds', desc: 'Redesigning routing mechanics, scaling server clusters to handle millions of geographic queries per second.' },
                    { client: 'Nova Strategic Asset Advisors', metric: '$120M Annual Cost Savings', desc: 'Restructuring complex supply-chain protocols and cloud infrastructures, optimizing operational waste.' }
                  ].map((study, idx) => (
                    <div key={idx} className="p-5 rounded-xl bg-white/[0.02] border border-white/5">
                      <span className="text-[9px] font-mono text-indigo-400 tracking-wider uppercase font-bold">{study.client}</span>
                      <h4 className="text-xs font-semibold text-white mt-0.5">{study.metric}</h4>
                      <p className="text-[10px] text-slate-400 mt-1.5 leading-relaxed font-light">{study.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'Partners' && (
              <div className="p-8 flex-1 flex flex-col items-center justify-center text-center gap-6">
                <h3 className="text-sm font-mono tracking-widest text-slate-500 uppercase">Trusted by Enterprise Pioneers</h3>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 items-center max-w-xl opacity-65">
                  {['Google', 'Stripe', 'Netflix', 'Meta', 'Amazon', 'Microsoft'].map((partner) => (
                    <span key={partner} className="font-mono text-xs text-white/60 hover:text-white font-bold tracking-wider">{partner}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        );

      case 'realestate':
        return (
          <div className="w-full min-h-[500px] bg-neutral-900 text-white flex flex-col font-sans select-none">
            {renderSimulatedHeader(<Building size={16} />, template.name, ['Home', 'Properties', 'Inquire'])}

            {activeTab === 'Home' && (
              <div className="flex-1 flex flex-col">
                <div className="relative py-24 px-6 text-center bg-cover bg-center" style={{ backgroundImage: `url(${template.image})` }}>
                  <div className="absolute inset-0 bg-black/80" />
                  <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
                    <span className="text-[10px] tracking-[0.2em] font-mono font-bold uppercase" style={{ color: accent }}>
                      EXCLUSIVE PROPERTY BROKERS
                    </span>
                    <h1 className="text-2xl sm:text-4xl font-sans font-extrabold tracking-tight text-white mt-2 leading-tight">
                      {template.demoData.heroTitle}
                    </h1>
                    <p className="text-white/70 text-xs sm:text-sm mt-3 font-light max-w-md leading-relaxed">
                      {template.demoData.heroSubtitle}
                    </p>
                    <button 
                      onClick={() => setActiveTab('Properties')}
                      className="mt-6 px-6 py-2.5 rounded-full text-xs font-semibold hover:scale-105 transition-transform flex items-center gap-1 cursor-pointer"
                      style={{ backgroundColor: accent }}
                    >
                      <span>Browse Listings</span>
                      <ArrowRight size={12} />
                    </button>
                  </div>
                </div>

                <div className="p-6 grid grid-cols-1 sm:grid-cols-3 gap-4 bg-neutral-950/40 text-left">
                  {template.demoData.sections.map((sec, i) => (
                    <div key={i} className="p-4 rounded-xl bg-white/[0.01] border border-white/5">
                      <h4 className="text-xs font-semibold text-white/90" style={{ color: accent }}>{sec.title}</h4>
                      <p className="text-[11px] text-white/50 mt-1 leading-relaxed font-light">{sec.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'Properties' && (
              <div className="p-8 flex-1 flex flex-col gap-6 bg-neutral-950/20 text-left">
                <div className="text-center">
                  <h3 className="text-lg font-sans font-bold text-white">Active Global Portfolios</h3>
                  <p className="text-xs text-white/50">Luxury high-rise penthouses, waterfront villas, and bespoke architectures.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto w-full">
                  {[
                    { title: 'Villa Horizon, Malibu', price: '$14,200,000', specs: '6 beds • 8 baths • 9,400 sqft', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&fit=crop' },
                    { title: 'Manhattan Sky Penthouse', price: '$8,950,000', specs: '3 beds • 4 baths • 4,200 sqft', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&fit=crop' }
                  ].map((listing, idx) => (
                    <div key={idx} className="p-3 bg-white/[0.02] border border-white/5 rounded-xl flex gap-4">
                      <img src={listing.image} className="w-20 h-20 rounded-lg object-cover" />
                      <div className="flex flex-col justify-center">
                        <h4 className="text-xs font-semibold text-white">{listing.title}</h4>
                        <span className="text-xs font-mono font-bold mt-1" style={{ color: accent }}>{listing.price}</span>
                        <p className="text-[10px] text-white/40 mt-1">{listing.specs}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'Inquire' && (
              <div className="p-8 flex-1 flex flex-col items-center justify-center text-center gap-4 bg-neutral-950/20">
                <div className="max-w-md bg-white/[0.02] border border-white/5 p-6 rounded-2xl">
                  <h4 className="text-sm font-semibold text-white mb-2">Request Property Brochure</h4>
                  <p className="text-xs text-white/60 leading-relaxed font-light mb-4">
                    Our luxury property advisors will send floorplans, virtual tour videos, and tax structures directly to your mailbox within 24 hours.
                  </p>
                  <button 
                    onClick={handleChooseTemplate}
                    className="px-6 py-2.5 rounded-full text-xs font-semibold text-white flex items-center gap-2 mx-auto cursor-pointer"
                    style={{ backgroundColor: accent }}
                  >
                    <Mail size={14} />
                    <span>Inquire Now</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        );

      case 'fitness':
        return (
          <div className="w-full min-h-[500px] bg-neutral-950 text-white flex flex-col font-sans select-none">
            {renderSimulatedHeader(<Dumbbell size={16} />, template.name, ['Home', 'Timetable', 'BMI Calculator'])}

            {activeTab === 'Home' && (
              <div className="flex-1 flex flex-col">
                <div className="relative py-24 px-6 text-center bg-cover bg-center" style={{ backgroundImage: `url(${template.image})` }}>
                  <div className="absolute inset-0 bg-black/85" />
                  <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
                    <span className="text-[10px] tracking-[0.2em] font-mono font-bold uppercase bg-[#ea580c]/10 text-[#ea580c] border border-[#ea580c]/20 px-3 py-1 rounded-full">
                      ELITE PERFORMANCE ATHLETICS
                    </span>
                    <h1 className="text-2xl sm:text-4xl font-sans font-extrabold text-white mt-4 leading-tight tracking-tight">
                      {template.demoData.heroTitle}
                    </h1>
                    <p className="text-white/70 text-xs sm:text-sm mt-3 font-light max-w-md leading-relaxed">
                      {template.demoData.heroSubtitle}
                    </p>
                    <button 
                      onClick={() => setActiveTab('BMI Calculator')}
                      className="mt-6 px-6 py-2.5 rounded-full text-xs font-semibold hover:scale-105 transition-transform flex items-center gap-1 cursor-pointer"
                      style={{ backgroundColor: accent }}
                    >
                      <span>Calculate BMI</span>
                      <Activity size={12} />
                    </button>
                  </div>
                </div>

                <div className="p-6 grid grid-cols-1 sm:grid-cols-3 gap-4 bg-neutral-950 text-left">
                  {template.demoData.sections.map((sec, i) => (
                    <div key={i} className="p-4 rounded-xl bg-white/[0.01] border border-white/5">
                      <h4 className="text-xs font-semibold text-white" style={{ color: accent }}>{sec.title}</h4>
                      <p className="text-[11px] text-white/50 mt-1 leading-relaxed font-light">{sec.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'Timetable' && (
              <div className="p-8 flex-1 flex flex-col gap-6 bg-neutral-900 text-left">
                <div className="text-center">
                  <h3 className="text-lg font-sans font-bold text-white">Daily Workout Timetables</h3>
                  <p className="text-xs text-white/50">Constantly varied athletic programs coached by certified masters.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto w-full">
                  {[
                    { day: 'MONDAY', time: '6:00 AM • 5:00 PM', coach: 'Coach David Vance', focus: 'Olympic Weightlifting Power' },
                    { day: 'WEDNESDAY', time: '7:00 AM • 6:30 PM', coach: 'Coach Sarah Miller', focus: 'High-Intensity Cardio HIIT' },
                    { day: 'FRIDAY', time: '6:30 AM • 4:00 PM', coach: 'Coach Liam Reed', focus: 'Gymnastic Flexibility & Mobility' }
                  ].map((classItem, idx) => (
                    <div key={idx} className="p-4 bg-white/[0.01] border border-white/5 rounded-xl flex flex-col gap-2">
                      <span className="text-[9px] font-mono font-bold uppercase tracking-wider" style={{ color: accent }}>{classItem.day}</span>
                      <div>
                        <h4 className="text-xs font-semibold text-white">{classItem.focus}</h4>
                        <p className="text-[10px] text-white/40 mt-1">{classItem.time}</p>
                      </div>
                      <span className="text-[9px] font-mono text-white/30">{classItem.coach}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'BMI Calculator' && (
              <div className="p-8 flex-1 flex flex-col items-center justify-center bg-neutral-900 text-left">
                <div className="w-full max-w-sm bg-neutral-950 border border-white/10 p-5 rounded-2xl flex flex-col gap-4">
                  <h3 className="text-sm font-semibold text-white">Interactive BMI Calculator</h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[9px] font-mono text-white/40 uppercase">Height (cm)</label>
                      <input 
                        type="range" min="120" max="220" 
                        value={bmiHeight} 
                        onChange={(e) => setBmiHeight(e.target.value)}
                        className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#ea580c]" 
                      />
                      <span className="block text-xs font-mono font-semibold text-white mt-1">{bmiHeight} cm</span>
                    </div>
                    <div>
                      <label className="block text-[9px] font-mono text-white/40 uppercase">Weight (kg)</label>
                      <input 
                        type="range" min="40" max="150" 
                        value={bmiWeight} 
                        onChange={(e) => setBmiWeight(e.target.value)}
                        className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#ea580c]" 
                      />
                      <span className="block text-xs font-mono font-semibold text-white mt-1">{bmiWeight} kg</span>
                    </div>
                  </div>

                  <div className="bg-white/[0.01] border border-white/5 p-4 rounded-xl text-center">
                    <span className="block text-[9px] font-mono text-white/30 uppercase">Your Calculated Body Mass Index</span>
                    <span className="block text-3xl font-mono font-bold mt-1" style={{ color: accent }}>{calculatedBmi()}</span>
                    <span className="block text-[10px] text-white/50 mt-1">
                      {parseFloat(calculatedBmi()) < 18.5 ? 'Underweight Range' : parseFloat(calculatedBmi()) < 25 ? 'Healthy Weight Range' : 'Overweight Range'}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        );

      case 'startup':
        return (
          <div className="w-full min-h-[500px] bg-slate-950 text-white flex flex-col font-sans select-none">
            {renderSimulatedHeader(<Rocket size={16} />, template.name, ['Home', 'Pricing', 'API Docs'])}

            {activeTab === 'Home' && (
              <div className="flex-1 flex flex-col">
                <div className="py-20 px-6 text-center bg-radial-gradient flex flex-col items-center justify-center bg-slate-950 relative overflow-hidden">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 blur-[100px] rounded-full opacity-15" style={{ backgroundColor: accent }} />
                  <div className="relative z-10 max-w-xl flex flex-col items-center">
                    <span className="text-[10px] tracking-[0.2em] font-mono font-bold uppercase bg-white/5 border border-white/10 px-3 py-1 rounded-full text-indigo-400">
                      SECURE SCALE DEV PLATFORM
                    </span>
                    <h1 className="text-2xl sm:text-3xl font-semibold text-white mt-4 leading-tight">
                      {template.demoData.heroTitle}
                    </h1>
                    <p className="text-slate-400 text-xs sm:text-sm mt-3 font-light max-w-md leading-relaxed">
                      {template.demoData.heroSubtitle}
                    </p>
                    <button 
                      onClick={() => setActiveTab('Pricing')}
                      className="mt-6 px-6 py-2.5 rounded-full text-xs font-semibold hover:scale-105 transition-transform flex items-center gap-1 cursor-pointer"
                      style={{ backgroundColor: accent }}
                    >
                      <span>View Pricing Models</span>
                      <ArrowRight size={12} />
                    </button>
                  </div>
                </div>

                <div className="p-6 grid grid-cols-1 sm:grid-cols-3 gap-4 bg-slate-950 border-t border-white/5 text-left">
                  {template.demoData.sections.map((sec, i) => (
                    <div key={i} className="p-4 rounded-xl bg-white/[0.01] border border-white/5">
                      <h4 className="text-xs font-semibold text-white flex items-center gap-1.5">
                        <CheckCircle2 size={12} className="text-purple-400" />
                        {sec.title}
                      </h4>
                      <p className="text-[11px] text-slate-400 mt-1 leading-relaxed font-light">{sec.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'Pricing' && (
              <div className="p-8 flex-1 flex flex-col gap-6 bg-slate-950 text-center">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-white">Transparent, Scale-to-Zero Pricing</h3>
                  <p className="text-xs text-slate-400">Start for free, scale with serverless resources when you expand.</p>
                </div>
                
                {/* Billing toggle */}
                <div className="flex bg-white/5 border border-white/10 p-1 rounded-full w-fit mx-auto gap-1">
                  <button className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-white/10 text-white">MONTHLY</button>
                  <button className="px-3 py-1 rounded-full text-[10px] font-mono font-bold text-slate-400">ANNUALLY (SAVE 20%)</button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto w-full text-left">
                  <div className="p-5 rounded-2xl bg-white/[0.01] border border-white/5 flex flex-col gap-3">
                    <div>
                      <h4 className="text-xs font-semibold text-white">Developer Hobby</h4>
                      <p className="text-[10px] text-slate-400">Perfect for prototyping personal projects.</p>
                    </div>
                    <span className="text-2xl font-mono font-bold text-white">$0 <span className="text-xs text-slate-500">/ mo</span></span>
                    <button className="w-full text-[10px] font-mono font-bold bg-white/10 text-white py-1.5 rounded-lg">Deploy Sandbox</button>
                  </div>
                  <div className="p-5 rounded-2xl bg-white/[0.01] border border-[#a855f7]/30 flex flex-col gap-3 relative overflow-hidden shadow-xl shadow-[#a855f7]/5">
                    <div className="absolute top-0 right-0 bg-[#a855f7]/10 border-b border-l border-[#a855f7]/30 text-[#a855f7] text-[8px] font-mono px-2 py-0.5 rounded-bl-lg font-bold">POPULAR</div>
                    <div>
                      <h4 className="text-xs font-semibold text-white">Scale Accelerator</h4>
                      <p className="text-[10px] text-slate-400">Designed for rapid production SaaS.</p>
                    </div>
                    <span className="text-2xl font-mono font-bold text-white">$49 <span className="text-xs text-slate-500">/ mo</span></span>
                    <button className="w-full text-[10px] font-mono font-bold py-1.5 rounded-lg text-white" style={{ backgroundColor: accent }}>Deploy Enterprise</button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'API Docs' && (
              <div className="p-8 flex-1 flex flex-col bg-slate-900 text-left font-mono text-[11px]">
                <div className="bg-slate-950 border border-white/10 rounded-xl p-4 text-slate-300">
                  <p className="text-[#a855f7]">// Initialize the Antigravity developer network client</p>
                  <p className="text-[#38bdf8]">import <span className="text-white">{"{ AuraAI }"}</span> from <span className="text-emerald-400">"@aura-ai/sdk"</span>;</p>
                  <br />
                  <p className="text-slate-500">const client = new AuraAI({"{"} apiKey: process.env.AURA_KEY {"}"});</p>
                  <br />
                  <p className="text-slate-500">const response = await client.agents.deploy({"{"}</p>
                  <p className="pl-4 text-[#38bdf8]">model: <span className="text-emerald-400">"gemini-2.5-flash"</span>,</p>
                  <p className="pl-4 text-[#38bdf8]">prompt: <span className="text-emerald-400">"Siphon and scale operational telemetry"</span></p>
                  <p className="text-slate-500">{"}"});</p>
                  <br />
                  <p className="text-emerald-500">console.log("Agent Live Node deployed at:", response.url);</p>
                </div>
              </div>
            )}
          </div>
        );

      case 'foodservice':
        return (
          <div className="w-full min-h-[500px] bg-neutral-900 text-white flex flex-col font-sans select-none">
            {renderSimulatedHeader(<CheckCircle2 size={16} />, template.name, ['Home', 'Menu Plans', 'Nutrients'])}

            {activeTab === 'Home' && (
              <div className="flex-1 flex flex-col">
                <div className="relative py-20 px-6 text-center bg-cover bg-center" style={{ backgroundImage: `url(${template.image})` }}>
                  <div className="absolute inset-0 bg-black/80" />
                  <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
                    <span className="text-[10px] tracking-[0.2em] font-mono font-bold uppercase" style={{ color: accent }}>
                      PREPARED CHEF SUBSCRIPTIONS
                    </span>
                    <h1 className="text-2xl sm:text-4xl font-sans font-extrabold tracking-tight text-white mt-2 leading-tight">
                      {template.demoData.heroTitle}
                    </h1>
                    <p className="text-white/70 text-xs sm:text-sm mt-3 font-light max-w-md leading-relaxed">
                      {template.demoData.heroSubtitle}
                    </p>
                    <button 
                      onClick={() => setActiveTab('Menu Plans')}
                      className="mt-6 px-6 py-2.5 rounded-full text-xs font-semibold hover:scale-105 transition-transform flex items-center gap-1 cursor-pointer"
                      style={{ backgroundColor: accent }}
                    >
                      <span>Choose Plan</span>
                      <ShoppingCart size={12} />
                    </button>
                  </div>
                </div>

                <div className="p-6 grid grid-cols-1 sm:grid-cols-3 gap-4 bg-neutral-950/40 text-left">
                  {template.demoData.sections.map((sec, i) => (
                    <div key={i} className="p-4 rounded-xl bg-white/[0.01] border border-white/5">
                      <h4 className="text-xs font-semibold text-white/90" style={{ color: accent }}>{sec.title}</h4>
                      <p className="text-[11px] text-white/50 mt-1 leading-relaxed font-light">{sec.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'Menu Plans' && (
              <div className="p-8 flex-1 flex flex-col gap-6 bg-neutral-950/20 text-left">
                <div className="text-center">
                  <h3 className="text-lg font-sans font-bold text-white">Subscription Meal Bundles</h3>
                  <p className="text-xs text-white/50">Chef-curated weekly plans optimized for performance, weightloss, or bulking.</p>
                </div>
                
                {/* Subscription picker simulator */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto w-full">
                  {[
                    { title: 'Keto Clean Carb', price: '$89 / week', meals: '6 Fresh Lunch & Dinners', desc: 'Sifted proteins, organic greens, and healthy monounsaturated fats.' },
                    { title: 'Bulking Heavy Iron', price: '$119 / week', meals: '8 Mega High-Protein Feasts', desc: 'Gourmet complex carbs, double-portioned meats, and muscle nutrients.' },
                    { title: 'Mindful Somatic Greens', price: '$79 / week', meals: '6 Raw Plant-Based Lunches', desc: 'Sourced completely from pesticide-free micro farms, fully vegan.' }
                  ].map((plan, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-white/[0.01] border border-white/5 flex flex-col gap-3 relative">
                      {idx === 1 && <span className="absolute -top-2 left-4 bg-orange-600 text-white text-[7px] font-mono px-2 py-0.5 rounded font-bold uppercase tracking-wider">MOST CHOSEN</span>}
                      <div>
                        <h4 className="text-xs font-semibold text-white mt-1">{plan.title}</h4>
                        <span className="block text-xs font-mono font-bold mt-1" style={{ color: accent }}>{plan.price}</span>
                        <p className="text-[10px] text-white/40 mt-1">{plan.desc}</p>
                      </div>
                      <span className="text-[10px] text-white/50 mt-auto font-mono">{plan.meals}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'Nutrients' && (
              <div className="p-8 flex-1 flex flex-col items-center justify-center text-center gap-6 bg-neutral-950/20">
                <h3 className="text-sm font-mono tracking-widest text-white/40 uppercase">Nutrient Accountability Meter</h3>
                
                {/* Nutritional slider widget */}
                <div className="flex bg-white/5 border border-white/10 rounded-2xl p-4 gap-6 justify-center">
                  <div>
                    <span className="block text-lg font-mono font-bold text-emerald-400">100%</span>
                    <span className="text-[8px] font-mono uppercase text-white/40 tracking-wider">Organic</span>
                  </div>
                  <div className="border-r border-white/10" />
                  <div>
                    <span className="block text-lg font-mono font-bold text-white">0g</span>
                    <span className="text-[8px] font-mono uppercase text-white/40 tracking-wider">Added Sugar</span>
                  </div>
                  <div className="border-r border-white/10" />
                  <div>
                    <span className="block text-lg font-mono font-bold text-white">45g+</span>
                    <span className="text-[8px] font-mono uppercase text-white/40 tracking-wider">Average Protein</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        
        {/* Navigation Breadcrumb / Back button */}
        <button
          onClick={onBack}
          className="group flex items-center gap-2 text-white/50 hover:text-[#e8702a] text-sm font-mono tracking-wider transition-colors cursor-pointer self-start"
        >
          <ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-1" />
          <span>BACK TO {template.category.toUpperCase()} COLLECTION</span>
        </button>

        {/* Outer Split Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT PANEL: The Immersive Device Simulator (7 or 8 cols depending on layout) */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            
            {/* Device frame toggle header */}
            <div className="flex items-center justify-between bg-neutral-950/50 border border-white/5 rounded-2xl p-3 px-4 shadow-xl">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                <span className="text-[10px] font-mono text-white/30 tracking-wider ml-2 hidden sm:inline uppercase">
                  Interactive Live Device Simulator
                </span>
              </div>

              {/* Selector buttons with custom indicators */}
              <div className="flex bg-white/5 border border-white/10 rounded-full p-0.5 items-center gap-0.5">
                {[
                  { key: 'desktop', icon: <Laptop size={14} />, label: 'Laptop' },
                  { key: 'tablet', icon: <Tablet size={14} />, label: 'Tablet' },
                  { key: 'mobile', icon: <Smartphone size={14} />, label: 'Phone' }
                ].map((btn) => (
                  <button
                    key={btn.key}
                    onClick={() => setDevice(btn.key as DeviceType)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-mono font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
                      device === btn.key 
                        ? 'bg-[#e8702a] text-white shadow-md shadow-[#e8702a]/15' 
                        : 'text-white/60 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {btn.icon}
                    <span className="hidden md:inline uppercase">{btn.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Simulated website viewport frame */}
            <div className="bg-neutral-950/25 border border-white/5 rounded-3xl p-2 sm:p-4 shadow-3xl flex items-center justify-center overflow-hidden min-h-[550px]">
              <div className={`w-full transition-all duration-500 ${getDeviceWidth()} overflow-hidden border border-white/10 rounded-2xl bg-neutral-900 shadow-2xl`}>
                
                {/* Browser topbar frame */}
                <div className="bg-neutral-900/90 border-b border-white/5 py-2 px-4 flex items-center justify-between text-[10px] font-mono text-white/30">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  </div>
                  <div className="bg-white/5 border border-white/10 px-4 py-0.5 rounded-md text-[9px] text-white/50 tracking-wide max-w-[220px] sm:max-w-sm truncate text-center select-none">
                    https://{template.id}.catalystkalpana.design/demo
                  </div>
                  <div className="w-4 h-4 rounded-full bg-white/5" />
                </div>

                {/* Simulated live page */}
                <div className="max-h-[500px] overflow-y-auto">
                  {renderSimulatedWebsite()}
                </div>
                
              </div>
            </div>

          </div>

          {/* RIGHT PANEL: Details & Choice Controls (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Template Header & Details Card */}
            <div className="bg-neutral-950/40 border border-white/5 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] tracking-[0.25em] font-mono font-bold text-[#e8702a] uppercase">
                  {template.category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-sans font-extrabold tracking-tight text-white mt-1">
                  {template.name}
                </h2>
              </div>

              <p className="text-white/70 text-sm leading-relaxed font-light">
                {template.longDesc}
              </p>

              {/* Technologies checklist */}
              <div className="flex flex-col gap-2.5 mt-2">
                <span className="text-[10px] font-mono tracking-wider text-white/40 uppercase">
                  STACK PRE-CONFIGURED
                </span>
                <div className="flex flex-wrap gap-2">
                  {template.tech.map((t) => (
                    <span
                      key={t}
                      className="bg-white/5 border border-white/5 px-2.5 py-1 rounded-lg text-xs font-mono text-white/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Core capabilities checklist */}
              <div className="flex flex-col gap-2.5 border-t border-white/5 pt-5">
                <span className="text-[10px] font-mono tracking-wider text-white/40 uppercase">
                  TEMPLATE SPECIFICS
                </span>
                <div className="flex flex-col gap-2">
                  {template.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-white/75 font-light">
                      <CheckCircle2 size={14} className="text-[#e8702a] mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Choose template button */}
              <div className="flex flex-col gap-2.5 border-t border-white/5 pt-6 mt-2">
                <button
                  onClick={handleChooseTemplate}
                  className="w-full bg-[#e8702a] hover:bg-[#d2611f] text-white font-semibold py-4 px-6 rounded-full transition-all duration-300 hover:scale-[1.02] active:scale-95 hover:shadow-xl hover:shadow-[#e8702a]/20 flex items-center justify-center gap-2 cursor-pointer shadow-lg group text-sm"
                >
                  <Mail size={16} className="transition-transform duration-300 group-hover:rotate-12" />
                  <span>Choose This Template</span>
                </button>
                <span className="text-[10px] font-mono text-white/30 tracking-wider text-center block leading-normal uppercase px-2 mt-1">
                  Triggers automated mail direct to catalystkalpana@gmail.com
                </span>
              </div>
            </div>

            {/* Design Process Sidebar Note */}
            <div className="bg-neutral-950/20 border border-white/5 rounded-3xl p-6 flex items-start gap-3.5">
              <div className="bg-[#e8702a]/10 p-2.5 rounded-xl border border-[#e8702a]/20 shrink-0 mt-0.5">
                <Sparkles size={16} className="text-[#e8702a]" />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-xs font-semibold text-white">How This Works</h4>
                <p className="text-[11px] text-white/50 leading-relaxed font-light">
                  Once you trigger the inquiry email, Catalyst Kalpana collaborates directly with you to integrate your inventory/copywriting, deploy servers, register domain extensions, and manage ongoing operations.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
