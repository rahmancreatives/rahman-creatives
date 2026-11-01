import React from 'react';
import { ArrowUpRight, CheckCircle2, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { servicesData } from '../data/services';

export const Services = ({ onNavigate, onOpenEnquiry }) => {
  return (
    <div className="pt-28 pb-20 bg-[var(--bg-primary)] text-[var(--text-main)] min-h-screen transition-colors duration-200">
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] text-xs font-medium text-[var(--text-muted)] shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
          <span>Full Creative &amp; Digital Portfolio</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--text-main)] mb-6 text-balance">
          Our Confirmed <span className="gold-gradient-text">Disciplines.</span>
        </h1>

        <p className="text-base sm:text-lg text-[var(--text-muted)] max-w-3xl mx-auto font-light leading-relaxed">
          From high-definition cinematic video and luxury branding to bespoke web architecture, search engine dominance, and performance advertising.
        </p>
      </section>

      {/* Services List with Rich Breakdown */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        {servicesData.map((svc, idx) => (
          <div
            key={svc.id}
            className="card-luxury rounded-3xl p-8 sm:p-12 border border-[var(--border-color)] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
          >
            <div className={`lg:col-span-5 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
              <div className="relative rounded-2xl overflow-hidden h-72 sm:h-96 bg-slate-900 border border-[var(--border-color)]">
                <img
                  src={svc.image}
                  alt={svc.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-75" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[var(--bg-primary)]/90 border border-[var(--border-color)] text-xs font-medium text-[#D4AF37]">
                  {svc.badge}
                </div>
              </div>
            </div>

            <div className={`lg:col-span-7 space-y-6 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[var(--text-muted)]">
                <span>0{idx + 1}</span>
                <span aria-hidden="true">/</span>
                <span>CAPABILITY</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-main)] tracking-tight">
                {svc.title}
              </h2>

              <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed font-light">
                {svc.fullDesc}
              </p>

              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#D4AF37] mb-3">
                  Key Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {svc.deliverables.slice(0, 4).map((d, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[var(--text-main)]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4 border-t border-[var(--border-color)]/70">
                <button
                  onClick={() => onNavigate('service-detail', svc.slug)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#D4AF37] hover:bg-[#E5C378] text-xs font-semibold uppercase tracking-wider text-slate-950 transition-all shadow-md cursor-pointer"
                >
                  <span>View Dedicated Service Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onOpenEnquiry(svc.title)}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[var(--bg-card)] hover:bg-[var(--bg-secondary)] border border-[var(--border-color)] text-xs font-medium text-[var(--text-main)] transition-all"
                >
                  <span>Request Proposal</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
