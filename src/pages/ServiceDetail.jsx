import React from 'react';
import { ArrowLeft, ArrowUpRight, CheckCircle2, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import { servicesData } from '../data/services';
import { SectionHeading } from '../components/SectionHeading';

export const ServiceDetail = ({ slug, onNavigate, onOpenEnquiry }) => {
  const service = servicesData.find((s) => s.slug === slug) || servicesData[0];
  const relatedServices = servicesData.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <div className="pt-28 pb-20 bg-[var(--bg-primary)] text-[var(--text-main)] min-h-screen transition-colors duration-200">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <button
          onClick={() => onNavigate('services')}
          className="inline-flex items-center gap-2 text-xs font-medium text-[var(--text-muted)] hover:text-[#D4AF37] transition-colors mb-6 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Services</span>
        </button>
      </div>

      {/* Hero */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] text-xs font-medium text-[#D4AF37]">
              <span>{service.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold text-[var(--text-main)] tracking-tight leading-tight">
              {service.title}
            </h1>

            <p className="text-base sm:text-lg text-[var(--text-muted)] font-light leading-relaxed">
              {service.fullDesc}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenEnquiry(service.title)}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C378] to-[#D4AF37] text-slate-950 font-semibold text-xs uppercase tracking-wider shadow-lg hover:shadow-[#D4AF37]/30 transition-all cursor-pointer"
              >
                <span>Commission This Service</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/971585223276?text=Hello%20Rahman%20Creatives,%20I'd%20like%20to%20discuss%20${encodeURIComponent(service.title)}.`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[var(--bg-card)] hover:bg-[var(--bg-secondary)] border border-[var(--border-color)] text-xs font-medium text-[var(--text-main)] transition-all shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Quick WhatsApp Chat</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-[#D4AF37]/50 shadow-2xl h-80 sm:h-[420px]">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[var(--bg-primary)]/90 backdrop-blur-md border border-[var(--border-color)]">
                <span className="text-xs text-[#D4AF37] font-semibold uppercase tracking-wider block">
                  Dubai Execution
                </span>
                <span className="text-sm font-bold text-[var(--text-main)]">Full Turnkey Production</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables & Client Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[var(--border-color)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="card-luxury p-8 rounded-2xl">
            <h3 className="text-lg font-bold text-[var(--text-main)] mb-6 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span>Concrete Deliverables Included</span>
            </h3>
            <ul className="space-y-3.5">
              {service.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-[var(--text-muted)]">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span className="text-[var(--text-main)]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-luxury p-8 rounded-2xl">
            <h3 className="text-lg font-bold text-[var(--text-main)] mb-6 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span>Measurable Business Benefits</span>
            </h3>
            <ul className="space-y-4">
              {service.benefits.map((item, idx) => (
                <li key={idx} className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] text-sm text-[var(--text-main)]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4-Step Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          badge="Execution Methodology"
          title={`How We Deliver ${service.title}`}
          description="Our structured 4-phase milestone workflow ensures zero ambiguity, absolute punctuality, and pristine quality."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.process.map((step) => (
            <div key={step.step} className="p-6 rounded-2xl card-luxury flex flex-col justify-between">
              <div>
                <span className="text-2xl font-bold font-mono text-[#D4AF37] block mb-3">
                  {step.step}
                </span>
                <h4 className="text-base font-bold text-[var(--text-main)] mb-2">{step.title}</h4>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed font-light">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <SectionHeading
            badge="Service FAQs"
            title="Common Questions"
            description={`Specific details about our ${service.title} engagement.`}
          />
          <div className="space-y-4">
            {service.faqs.map((faq, i) => (
              <div key={i} className="p-5 rounded-xl card-luxury">
                <h4 className="text-sm sm:text-base font-bold text-[var(--text-main)] mb-2">{faq.question}</h4>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed font-light">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Related Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[var(--border-color)]">
        <h3 className="text-xl font-bold text-[var(--text-main)] mb-8">Related Capabilities</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedServices.map((rel) => (
            <div
              key={rel.id}
              onClick={() => {
                onNavigate('service-detail', rel.slug);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="card-luxury p-6 rounded-2xl cursor-pointer group"
            >
              <span className="text-xs text-[#D4AF37] font-medium block mb-1">{rel.badge}</span>
              <h4 className="text-lg font-bold text-[var(--text-main)] group-hover:text-[#D4AF37] transition-colors mb-2">
                {rel.title}
              </h4>
              <p className="text-xs text-[var(--text-muted)] line-clamp-2 mb-4 font-light">{rel.shortDesc}</p>
              <div className="flex items-center gap-1 text-xs font-semibold text-[#D4AF37]">
                <span>View Discipline</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <div className="p-8 sm:p-12 rounded-3xl card-luxury border border-[#D4AF37]/40 shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-main)] mb-3">
            Ready to Commission {service.title}?
          </h2>
          <p className="text-sm text-[var(--text-muted)] max-w-md mx-auto mb-6 font-light">
            Contact Rahman and the creative team to discuss requirements, project timelines, and custom pricing.
          </p>
          <button
            onClick={() => onOpenEnquiry(service.title)}
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C378] to-[#D4AF37] text-slate-950 font-semibold text-xs uppercase tracking-wider shadow-lg hover:shadow-[#D4AF37]/30 transition-all cursor-pointer"
          >
            Start Your Project Enquiry
          </button>
        </div>
      </section>
    </div>
  );
};
