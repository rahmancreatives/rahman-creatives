import React from 'react';

export const SectionHeading = ({
  badge,
  title,
  description,
  align = 'center',
}) => {
  return (
    <div className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center mx-auto' : 'text-left'} max-w-3xl`}>
      {badge && (
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" aria-hidden="true" />
          <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#D4AF37]">
            {badge}
          </span>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--text-main)] leading-tight text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-[var(--text-muted)] leading-relaxed font-light">
          {description}
        </p>
      )}
    </div>
  );
};
