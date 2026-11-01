import React, { useState } from 'react';
import {
  ArrowUpRight,
  ArrowRight,
  Video,
  Palette,
  Code2,
  Search,
  Share2,
  TrendingUp,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Shield,
  Clock,
  Compass,
  Star,
  MessageCircle,
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { SocialLinks } from '../components/SocialLinks';
import { servicesData } from '../data/services';
import { portfolioProjects } from '../data/portfolio';
import { testimonialsData } from '../data/testimonials';
import { blogPosts } from '../data/blog';

export const Home = ({ onNavigate, onOpenEnquiry }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeFaq, setActiveFaq] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  const iconMap = {
    Video: <Video className="w-5 h-5" />,
    Palette: <Palette className="w-5 h-5" />,
    Code2: <Code2 className="w-5 h-5" />,
    Search: <Search className="w-5 h-5" />,
    Share2: <Share2 className="w-5 h-5" />,
    TrendingUp: <TrendingUp className="w-5 h-5" />,
  };

  const filteredProjects =
    selectedCategory === 'all'
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.categorySlug === selectedCategory);

  const faqItems = [
    {
      q: 'What types of creative and digital projects does Rahman Creatives handle?',
      a: 'We specialize in cinematic video production (luxury real estate, brand commercials, aerial drone), bespoke graphic design and brand identity, custom website creation with modern tech stacks, search engine optimization (SEO) targeting GCC markets, social media curation, and high-ROAS performance marketing.',
    },
    {
      q: 'Where are you based, and do you work with clients outside the UAE?',
      a: 'Our primary executive office and studio are in Downtown Dubai and Business Bay, United Arab Emirates. While our core market is the UAE and Saudi Arabia, we collaborate with international brands across the UK, Europe, and Asia expanding their presence in the Middle East.',
    },
    {
      q: 'How does your creative process begin?',
      a: 'Every engagement begins with a comprehensive Discovery session led directly by Rahman and our senior creative leads. We analyze your commercial objectives, audience demographics, and competitor positioning before presenting a tailored strategic roadmap.',
    },
    {
      q: 'What are your turnaround times for video and branding deliverables?',
      a: 'Full brand identity systems typically take 3 to 4 weeks. Video production schedules range from 10 to 20 business days from filming to final color-graded master delivery, with accelerated options for launch campaigns.',
    },
    {
      q: 'How do you structure project pricing and retainer engagements?',
      a: 'We provide fixed, milestone-based scopes for discrete projects (e.g. website development, brand identity manual, commercial shoot) as well as selective monthly retainer partnerships for enterprises requiring ongoing creative direction and growth marketing.',
    },
    {
      q: 'Who will directly manage and oversee our project?',
      a: 'At Rahman Creatives, you work directly with experienced principals. Rahman personally directs creative concepts, aesthetic consistency, and strategic execution, ensuring zero bureaucratic dilution or junior delegation.',
    },
  ];

  return (
    <div className="relative overflow-hidden bg-[var(--bg-primary)] text-[var(--text-main)] transition-colors duration-200">
      {/* SECTION 1: HERO */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#D4AF37]/15 via-[#00D4F5]/5 to-transparent rounded-full blur-[140px]" />
          <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#12243A]/20 rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-5xl mx-auto text-center z-10">
          {/* Location trust kicker */}
          <div className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] text-xs font-medium text-[var(--text-muted)] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            <span>Dubai, United Arab Emirates</span>
            <span aria-hidden="true" className="text-slate-500">·</span>
            <span className="text-[#D4AF37] font-semibold">Creative &amp; Digital Studio</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--text-main)] leading-[1.08] text-balance mb-6">
            Creative That Moves{' '}
            <span className="gold-gradient-text">Brands Forward.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[var(--text-muted)] max-w-3xl mx-auto font-light leading-relaxed mb-10 text-balance">
            From compelling video content and distinctive branding to high-performing websites and search visibility, Rahman Creatives helps businesses build a stronger digital presence.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenEnquiry()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-[#D4AF37] via-[#E5C378] to-[#D4AF37] rounded-xl shadow-xl hover:shadow-[#D4AF37]/30 hover:brightness-105 active:scale-[0.98] transition-all cursor-pointer"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                const el = document.getElementById('featured-portfolio');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-medium text-[var(--text-main)] hover:text-[#D4AF37] bg-[var(--bg-card)] hover:bg-[var(--bg-secondary)] border border-[var(--border-color)] hover:border-[#D4AF37]/50 rounded-xl transition-all cursor-pointer shadow-sm"
            >
              <span>Explore Our Work</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Clickable Social Media Links in Hero */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <span className="text-xs text-[var(--text-muted)] font-medium">Follow Our Work:</span>
            <SocialLinks size="sm" />
          </div>

          {/* Restrained scroll indicator */}
          <div className="mt-12 flex flex-col items-center gap-2 text-xs text-[var(--text-muted)] animate-bounce">
            <span>Scroll to explore</span>
            <ChevronDown className="w-4 h-4 text-[#D4AF37]" />
          </div>
        </div>
      </section>

      {/* SECTION 2: TRUST AND CREDIBILITY */}
      <section className="py-14 bg-[var(--bg-secondary)] border-y border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-[var(--border-color)]">
            <div className="text-center pt-4 md:pt-0">
              <span className="text-3xl sm:text-4xl font-bold text-[var(--text-main)] tracking-tight tabular-nums">
                AED 150M+
              </span>
              <p className="mt-1 text-xs text-[var(--text-muted)] font-medium">
                Client Property &amp; Commercial Pipeline Driven
              </p>
            </div>
            <div className="text-center pt-4 md:pt-0">
              <span className="text-3xl sm:text-4xl font-bold text-[var(--text-main)] tracking-tight tabular-nums">
                98%
              </span>
              <p className="mt-1 text-xs text-[var(--text-muted)] font-medium">
                Client Satisfaction &amp; Retainer Renewal
              </p>
            </div>
            <div className="text-center pt-4 md:pt-0">
              <span className="text-3xl sm:text-4xl font-bold text-[#D4AF37] tracking-tight tabular-nums">
                6 Pillars
              </span>
              <p className="mt-1 text-xs text-[var(--text-muted)] font-medium">
                Integrated Creative &amp; Technical Capabilities
              </p>
            </div>
            <div className="text-center pt-4 md:pt-0">
              <span className="text-3xl sm:text-4xl font-bold text-[var(--text-main)] tracking-tight">
                Downtown
              </span>
              <p className="mt-1 text-xs text-[var(--text-muted)] font-medium">
                Dubai Studio &amp; Executive Headquarters
              </p>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-[var(--border-color)]/60 text-center">
            <p className="text-xs sm:text-sm text-[var(--text-muted)] max-w-2xl mx-auto">
              Trusted by corporate leaders, real estate developers, hospitality groups, and ambitious entrepreneurs across Dubai, Abu Dhabi, and the GCC.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: SERVICES OVERVIEW (SIX CARDS - 4 ON TOP, 2 BELOW) */}
      <section id="services-overview" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Confirmed Capabilities"
          title="Engineered for Impact & Distinction"
          description="A complete suite of high-caliber creative and digital solutions designed to elevate your brand prestige and drive verifiable business growth."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {servicesData.slice(0, 4).map((service, idx) => (
            <div
              key={service.id}
              className="group card-luxury rounded-2xl overflow-hidden flex flex-col justify-between cursor-pointer"
              onClick={() => onNavigate('service-detail', service.slug)}
            >
              <div className="relative h-48 overflow-hidden bg-slate-900">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-3 left-3 p-2 rounded-lg bg-[var(--bg-primary)]/90 border border-[var(--border-color)] text-[#D4AF37]">
                  {iconMap[service.iconName] || <Sparkles className="w-5 h-5" />}
                </div>
                <div className="absolute top-3 right-3 text-xs font-mono font-medium text-slate-300">
                  0{idx + 1}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[var(--text-main)] group-hover:text-[#D4AF37] transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed line-clamp-3">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-[var(--border-color)]/60 flex items-center justify-between text-xs font-medium text-[var(--text-muted)] group-hover:text-[#D4AF37]">
                  <span>Explore Service</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {servicesData.slice(4, 6).map((service, idx) => (
            <div
              key={service.id}
              className="group card-luxury rounded-2xl overflow-hidden flex flex-col sm:flex-row justify-between cursor-pointer"
              onClick={() => onNavigate('service-detail', service.slug)}
            >
              <div className="relative sm:w-2/5 h-48 sm:h-auto overflow-hidden bg-slate-900 shrink-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/80 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 p-2 rounded-lg bg-[var(--bg-primary)]/90 border border-[var(--border-color)] text-[#D4AF37]">
                  {iconMap[service.iconName] || <Sparkles className="w-5 h-5" />}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono text-[var(--text-muted)]">0{idx + 5}</span>
                  <h3 className="text-lg font-bold text-[var(--text-main)] group-hover:text-[#D4AF37] transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed line-clamp-3">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-[var(--border-color)]/60 flex items-center justify-between text-xs font-medium text-[var(--text-muted)] group-hover:text-[#D4AF37]">
                  <span>Explore Service</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--bg-card)] hover:bg-[var(--bg-secondary)] border border-[var(--border-color)] hover:border-[#D4AF37]/50 text-xs font-semibold text-[var(--text-main)] uppercase tracking-wider transition-all shadow-sm"
          >
            <span>Explore All Services in Detail</span>
            <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
          </button>
        </div>
      </section>

      {/* SECTION 4: FEATURED PORTFOLIO */}
      <section id="featured-portfolio" className="py-24 bg-[var(--bg-secondary)] border-t border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#D4AF37]">
                  Selected Work
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-[var(--text-main)] tracking-tight">
                Crafted for Authority &amp; Commercial Growth
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[var(--bg-card)] rounded-xl border border-[var(--border-color)]">
              {[
                { id: 'all', label: 'All Projects' },
                { id: 'video-production', label: 'Video Production' },
                { id: 'branding-design', label: 'Branding' },
                { id: 'website-creation', label: 'Web Development' },
                { id: 'seo', label: 'SEO' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                    selectedCategory === tab.id
                      ? 'bg-[#D4AF37] text-slate-950 font-semibold shadow-sm'
                      : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group card-luxury rounded-2xl overflow-hidden flex flex-col justify-between cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-60 overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-200">
                    <span className="text-[#D4AF37] font-medium">{project.category}</span>
                    <span className="text-slate-300">{project.location}</span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[var(--text-main)] group-hover:text-[#D4AF37] transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)] leading-relaxed line-clamp-2 mb-4 font-light">
                      {project.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[var(--border-color)]/60">
                    <div className="grid grid-cols-2 gap-2 text-center mb-4">
                      {project.results.slice(0, 2).map((res, i) => (
                        <div key={i} className="bg-[var(--bg-primary)] p-2 rounded-lg border border-[var(--border-color)]">
                          <span className="block text-sm font-bold text-[var(--text-main)] tabular-nums">
                            {res.metric}
                          </span>
                          <span className="block text-[10px] text-[var(--text-muted)] truncate">
                            {res.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-xs font-semibold text-[#D4AF37]">
                      <span>View Case Study</span>
                      <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: ABOUT PREVIEW (FEATURING THE CEO REFERENCE IMAGE) */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/50 shadow-2xl group">
              <img
                src="/assets/aistudio/Rahman_c705311a.jpg"
                alt="Rahman - Founder & Creative Director of Rahman Creatives Dubai"
                className="w-full h-auto object-cover max-h-[580px] group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[var(--bg-primary)]/90 backdrop-blur-md border border-[var(--border-color)] text-[var(--text-main)]">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-base font-bold text-[var(--text-main)]">Rahman</h4>
                    <p className="text-xs text-[#D4AF37] font-semibold">Founder &amp; Creative Director</p>
                  </div>
                  <div className="text-right text-[11px] text-[var(--text-muted)]">
                    <span>Executive Suite</span>
                    <span className="block text-[var(--text-main)] font-mono">Dubai Skyline</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-b-2 border-r-2 border-[#D4AF37]/60 rounded-br-2xl -z-10 hidden sm:block" />
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#D4AF37]">
                Leadership &amp; Studio Philosophy
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold text-[var(--text-main)] tracking-tight leading-tight">
              Driven by Aesthetic Precision and Commercial Purpose in Dubai.
            </h2>

            <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed font-light">
              Founded by Rahman in Dubai, <strong className="text-[var(--text-main)] font-medium">Rahman Creatives</strong> was built on a singular conviction: premium brands require cohesive creative direction that marries emotional visual storytelling with ruthless digital performance.
            </p>

            <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed font-light">
              In the heart of one of the world’s most competitive luxury markets, standard marketing fails to resonate. We partner directly with business owners, managing directors, and visionary founders to craft video assets, brand identities, high-speed web platforms, and search strategies that demand market respect.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-[var(--border-color)]">
              <div>
                <span className="text-xs text-[#D4AF37] uppercase tracking-wider block font-semibold mb-1">
                  Direct Access
                </span>
                <p className="text-xs text-[var(--text-muted)]">
                  Principal-led strategy with zero account-manager layers.
                </p>
              </div>
              <div>
                <span className="text-xs text-[#D4AF37] uppercase tracking-wider block font-semibold mb-1">
                  Dubai Market
                </span>
                <p className="text-xs text-[var(--text-muted)]">
                  Deep immersion in UAE buyer psychology and luxury standards.
                </p>
              </div>
              <div>
                <span className="text-xs text-[#D4AF37] uppercase tracking-wider block font-semibold mb-1">
                  Full Stack
                </span>
                <p className="text-xs text-[var(--text-muted)]">
                  From 8K video capture to headless engineering and SEO.
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-[#D4AF37] hover:bg-[#E5C378] rounded-xl transition-all shadow-md cursor-pointer"
              >
                <span>Read Full About Story</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onOpenEnquiry()}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--text-muted)] hover:text-[#D4AF37]"
              >
                <span>Book Direct Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: WHY CHOOSE RAHMAN CREATIVES? */}
      <section className="py-24 bg-[var(--bg-secondary)] border-y border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="The Rahman Advantage"
            title="Why Leading Dubai Brands Choose Us"
            description="We bridge the critical gap between high-art creative studios and data-focused growth agencies."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Palette className="w-5 h-5 text-[#D4AF37]" />,
                title: 'Creative Artistry + Technical Rigor',
                desc: 'We do not choose between beautiful design and technical performance. Every asset is engineered to look museum-grade while loading in milliseconds.',
              },
              {
                icon: <Compass className="w-5 h-5 text-[#D4AF37]" />,
                title: 'Bespoke UAE Market Intelligence',
                desc: 'We understand the multicultural, high-net-worth demographic of Dubai, Abu Dhabi, and the GCC. No generic Western templates.',
              },
              {
                icon: <Shield className="w-5 h-5 text-[#D4AF37]" />,
                title: 'Uncompromising Senior Oversight',
                desc: 'Your project is directed and crafted by senior specialists with Rahman at the helm, eliminating the junior bait-and-switch common in large agencies.',
              },
              {
                icon: <Clock className="w-5 h-5 text-[#D4AF37]" />,
                title: 'Punctual, Turnkey Execution',
                desc: 'We respect business timelines. Filming dates, sprint launches, and deliverable handoffs are executed with clockwork punctuality.',
              },
              {
                icon: <TrendingUp className="w-5 h-5 text-[#D4AF37]" />,
                title: 'Commercially Measurable Outcomes',
                desc: 'Creative work must drive revenue. We align aesthetics with tangible KPIs: inbound property inquiries, qualified leads, and brand sentiment.',
              },
              {
                icon: <MessageCircle className="w-5 h-5 text-[#D4AF37]" />,
                title: 'Transparent, Direct Communication',
                desc: 'Instant WhatsApp availability, clear sprint updates, and collaborative review links. You are always informed.',
              },
            ].map((pillar, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl card-luxury transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] flex items-center justify-center mb-6 shadow-inner">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-bold text-[var(--text-main)] mb-3">{pillar.title}</h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed font-light">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: OUR CREATIVE PROCESS (5 STEPS) */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Disciplined Workflow"
          title="From Concept to Market Dominance"
          description="A five-step structured methodology designed for clarity, agility, and world-class polish."
        />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {[
            {
              step: '01',
              title: 'Discover',
              subtitle: 'Audit & Objective',
              desc: 'Deep discovery into your brand positioning, target demographics, and commercial benchmarks.',
            },
            {
              step: '02',
              title: 'Strategize',
              subtitle: 'Creative Blueprint',
              desc: 'Curating moodboards, storyboards, information architecture, and technical sprint plans.',
            },
            {
              step: '03',
              title: 'Create',
              subtitle: 'Production & Code',
              desc: 'Cinematic filming, bespoke design systems, responsive engineering, and content creation.',
            },
            {
              step: '04',
              title: 'Refine',
              subtitle: 'Review & Polish',
              desc: 'Collaborative feedback cycles, color grading, sound mixing, and multi-device QA.',
            },
            {
              step: '05',
              title: 'Deliver',
              subtitle: 'Launch & Scale',
              desc: 'Master file handoff, production deployment, analytics tracking, and continuous support.',
            },
          ].map((item, idx) => (
            <div
              key={item.step}
              className="relative p-6 rounded-2xl card-luxury flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl font-bold font-mono text-[#D4AF37]/60 block mb-3">
                  {item.step}
                </span>
                <h3 className="text-lg font-bold text-[var(--text-main)] mb-1">{item.title}</h3>
                <span className="text-xs text-[#D4AF37] font-medium block mb-3">
                  {item.subtitle}
                </span>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed font-light">{item.desc}</p>
              </div>

              {idx < 4 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <ArrowRight className="w-5 h-5 text-[var(--border-color)]" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 8: TESTIMONIALS */}
      <section className="py-24 bg-[var(--bg-secondary)] border-y border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Client Endorsements"
            title="Trusted by Dubai’s Discerning Leaders"
            description="Authentic feedback from business leaders, property directors, and founders who partnered with Rahman Creatives."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonialsData.map((item) => (
              <div
                key={item.id}
                className="p-8 rounded-2xl card-luxury flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#D4AF37] mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-[var(--text-main)] leading-relaxed italic mb-6 font-light">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--border-color)] flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-[var(--text-main)]">{item.author}</h4>
                    <p className="text-xs text-[var(--text-muted)]">
                      {item.role}, <span className="text-[#D4AF37] font-medium">{item.company}</span>
                    </p>
                  </div>
                  <span className="text-[11px] text-[var(--text-muted)] font-mono">{item.location}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('testimonials')}
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#D4AF37] hover:underline"
            >
              <span>View All Verified Client Reviews</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 9: INDUSTRIES SERVED */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Domain Expertise"
          title="Tailored for Dubai’s High-Growth Sectors"
          description="We bring dedicated creative and strategic insights to industries where presentation and brand prestige define commercial success."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            {
              title: 'Real Estate & Off-Plan',
              desc: 'Cinematic penthouse walk-throughs, off-plan investor brochures, and broker lead generation.',
            },
            {
              title: 'Luxury Hospitality',
              desc: 'Fine dining visual reels, hotel brand films, and high-conversion reservation engines.',
            },
            {
              title: 'Corporate & FinTech',
              desc: 'DIFC advisory websites, corporate brand identity systems, and institutional pitch collateral.',
            },
            {
              title: 'Luxury Retail & E-Commerce',
              desc: 'Fragrance, jewelry, and high-fashion visual campaigns with optimized GCC ad funnels.',
            },
            {
              title: 'Startups & Ventures',
              desc: 'Rapid go-to-market brand decks, high-speed MVPs, and investor-ready digital showcases.',
            },
          ].map((ind, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl card-luxury flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono text-[#D4AF37] block mb-2">0{i + 1}</span>
                <h3 className="text-base font-bold text-[var(--text-main)] mb-2">{ind.title}</h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed font-light">{ind.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 10: CASE STUDIES / FEATURED PROJECTS */}
      <section className="py-24 bg-[var(--bg-secondary)] border-t border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Case Studies"
            title="Measurable Impact in Practice"
            description="Explore how our integrated video, branding, and web strategies generated quantifiable business returns."
          />

          <div className="space-y-12">
            {portfolioProjects.slice(0, 2).map((item, idx) => (
              <div
                key={item.id}
                className="card-luxury rounded-2xl overflow-hidden p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-6 relative rounded-xl overflow-hidden h-72 lg:h-96">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                    <span className="text-[#D4AF37] font-semibold">{item.client}</span>
                    <span>{item.location}</span>
                  </div>
                </div>

                <div className="lg:col-span-6 space-y-5">
                  <div className="inline-flex items-center gap-2 text-xs font-medium text-[#D4AF37]">
                    <span>Case Study 0{idx + 1}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.category}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-main)] tracking-tight">
                    {item.title}
                  </h3>

                  <div className="space-y-3 text-xs sm:text-sm text-[var(--text-muted)] font-light">
                    <p>
                      <strong className="text-[var(--text-main)] font-medium">The Challenge:</strong> {item.challenge}
                    </p>
                    <p>
                      <strong className="text-[var(--text-main)] font-medium">Our Strategic Solution:</strong> {item.solution}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-3 pt-3">
                    {item.results.map((r, i) => (
                      <div key={i} className="p-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-center">
                        <span className="block text-base sm:text-lg font-bold text-[var(--text-main)] tabular-nums">
                          {r.metric}
                        </span>
                        <span className="block text-[10px] text-[var(--text-muted)] mt-0.5 truncate">
                          {r.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => onOpenEnquiry(item.category)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#D4AF37] hover:bg-[#E5C378] text-xs font-semibold text-slate-950 transition-all shadow-md cursor-pointer"
                    >
                      <span>Request Similar Project Proposal</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11: BLOG AND INSIGHTS */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#D4AF37]">
                Industry Insights
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-[var(--text-main)] tracking-tight">
              Creative &amp; Digital Perspectives
            </h2>
          </div>

          <button
            onClick={() => onNavigate('blog')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4AF37] hover:underline"
          >
            <span>Read All Articles</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group card-luxury rounded-2xl overflow-hidden flex flex-col justify-between cursor-pointer"
              onClick={() => onNavigate('blog-article', post.slug)}
            >
              <div className="relative h-48 overflow-hidden bg-slate-900">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[var(--bg-primary)]/90 border border-[var(--border-color)] text-[11px] text-[#D4AF37] font-medium">
                  {post.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-[11px] text-[var(--text-muted)] mb-2">
                    <span>{post.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[var(--text-main)] group-hover:text-[#D4AF37] transition-colors mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed line-clamp-3 font-light">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[var(--border-color)]/60 flex items-center justify-between text-xs font-medium text-[#D4AF37]">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SECTION 12: FAQ */}
      <section className="py-24 bg-[var(--bg-secondary)] border-t border-[var(--border-color)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Frequently Asked Questions"
            title="Everything You Need to Know"
            description="Clear, honest answers regarding our engagement models, scopes, and delivery capabilities in Dubai."
          />

          <div className="space-y-4">
            {faqItems.map((item, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl card-luxury overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left text-sm sm:text-base font-semibold text-[var(--text-main)] hover:text-[#D4AF37] transition-colors focus:outline-none"
                  >
                    <span>{item.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#D4AF37] shrink-0 ml-4" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[var(--text-muted)] shrink-0 ml-4" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed border-t border-[var(--border-color)] pt-3 font-light">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 13: FINAL PROJECT CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#D4AF37]">
              Start Your Journey
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text-main)] mb-6 text-balance">
            Have a Project in Mind?
          </h2>

          <p className="text-base sm:text-lg text-[var(--text-muted)] max-w-2xl mx-auto font-light leading-relaxed mb-10 text-balance">
            Let’s turn your next creative or digital idea into something your business can be proud of. Direct consultation with Rahman and our Dubai creative directors.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenEnquiry()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-[#D4AF37] via-[#E5C378] to-[#D4AF37] rounded-xl shadow-xl hover:shadow-[#D4AF37]/30 hover:brightness-105 active:scale-[0.98] transition-all cursor-pointer"
            >
              <span>Start Your Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-medium text-[var(--text-main)] hover:text-[#D4AF37] bg-[var(--bg-card)] hover:bg-[var(--bg-secondary)] border border-[var(--border-color)] hover:border-[#D4AF37]/50 rounded-xl transition-all cursor-pointer shadow-sm"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Social links row at bottom of CTA */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-[var(--text-muted)]">
            <span>Direct WhatsApp: +971 58 522 3276</span>
            <span aria-hidden="true" className="text-slate-500 hidden sm:inline">·</span>
            <span>Email: rahmancreatives13@gmail.com</span>
          </div>

          <div className="mt-6 flex justify-center">
            <SocialLinks size="sm" />
          </div>
        </div>
      </section>

      {/* Case Study Modal Detail Viewer */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto"
        >
          <div className="relative w-full max-w-3xl bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl p-6 sm:p-8 shadow-2xl my-8 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 text-[var(--text-muted)] hover:text-[var(--text-main)] rounded-lg hover:bg-[var(--bg-card)]"
            >
              &times;
            </button>

            <div className="h-64 sm:h-80 rounded-xl overflow-hidden mb-6 relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                <span className="text-[#D4AF37] font-semibold">{selectedProject.client}</span>
                <span>{selectedProject.location}</span>
              </div>
            </div>

            <div className="space-y-4">
              <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider">
                {selectedProject.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-main)]">
                {selectedProject.title}
              </h3>

              <div className="space-y-3 text-sm text-[var(--text-muted)] font-light">
                <p>
                  <strong className="text-[var(--text-main)]">Challenge:</strong> {selectedProject.challenge}
                </p>
                <p>
                  <strong className="text-[var(--text-main)]">Our Strategic Solution:</strong> {selectedProject.solution}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3 pt-4">
                {selectedProject.results.map((r, i) => (
                  <div key={i} className="p-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-center">
                    <span className="block text-lg font-bold text-[var(--text-main)] tabular-nums">
                      {r.metric}
                    </span>
                    <span className="block text-[11px] text-[var(--text-muted)]">{r.label}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-[var(--border-color)] flex items-center justify-between">
                <button
                  onClick={() => {
                    const cat = selectedProject.category;
                    setSelectedProject(null);
                    onOpenEnquiry(cat);
                  }}
                  className="px-6 py-2.5 rounded-xl bg-[#D4AF37] text-slate-950 font-semibold text-xs tracking-wider uppercase cursor-pointer"
                >
                  Request Similar Project
                </button>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-xs text-[var(--text-muted)] hover:text-[var(--text-main)]"
                >
                  Close Case Study
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
