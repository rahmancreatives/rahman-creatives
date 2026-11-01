import React, { useState } from 'react';
import { Search, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blog';

export const Blog = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Video Production', 'Branding & Design', 'SEO Strategy'];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-28 pb-20 bg-[var(--bg-primary)] text-[var(--text-main)] min-h-screen transition-colors duration-200">
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] text-xs font-medium text-[var(--text-muted)] shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
          <span>Rahman Creatives Editorial</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--text-main)] mb-6 text-balance">
          Insights on Creative, Brand &amp; <span className="gold-gradient-text">Search.</span>
        </h1>

        <p className="text-base sm:text-lg text-[var(--text-muted)] max-w-3xl mx-auto font-light leading-relaxed">
          Deep-dives into video production standards, luxury branding in the UAE, modern web performance, and algorithmic search strategy.
        </p>

        {/* Search & Category Filter */}
        <div className="mt-10 max-w-xl mx-auto flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-[var(--text-muted)] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search insights..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-main)] text-sm focus:outline-none focus:border-[#D4AF37]"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-2 text-xs rounded-xl whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#D4AF37] text-slate-950 font-semibold shadow-sm'
                    : 'bg-[var(--bg-card)] text-[var(--text-muted)] hover:text-[var(--text-main)] border border-[var(--border-color)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16 text-[var(--text-muted)] text-sm">
            No articles found matching your criteria. Try adjusting your search.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="card-luxury rounded-2xl overflow-hidden flex flex-col justify-between cursor-pointer group"
                onClick={() => {
                  onNavigate('blog-article', post.slug);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <div className="relative h-56 overflow-hidden bg-slate-900">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[var(--bg-primary)]/90 border border-[var(--border-color)] text-xs text-[#D4AF37] font-medium">
                    {post.category}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] mb-2.5">
                      <span>{post.date}</span>
                      <span aria-hidden="true">·</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h2 className="text-xl font-bold text-[var(--text-main)] group-hover:text-[#D4AF37] transition-colors mb-3 leading-snug">
                      {post.title}
                    </h2>

                    <p className="text-xs text-[var(--text-muted)] leading-relaxed line-clamp-3 mb-6 font-light">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[var(--border-color)]/70 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-7 h-7 rounded-full object-cover border border-[#D4AF37]"
                      />
                      <span className="text-xs text-[var(--text-muted)]">{post.author.name}</span>
                    </div>

                    <div className="flex items-center gap-1 text-xs font-semibold text-[#D4AF37]">
                      <span>Read</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};
