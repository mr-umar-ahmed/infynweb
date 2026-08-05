import React, { useState } from 'react';
import { FEATURED_PROJECTS } from '../data/mockData';
import { ProjectWork } from '../types';
import { ExternalLink, MapPin, Sparkles, CheckCircle } from 'lucide-react';

interface WorksGridProps {
  onOpenFreeTrial: () => void;
  onNotify: (msg: string) => void;
}

export const WorksGrid: React.FC<WorksGridProps> = ({ onOpenFreeTrial, onNotify }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'School ERP', 'Web & Cloud', 'Retail & POS'];

  const filteredWorks = activeFilter === 'All'
    ? FEATURED_PROJECTS
    : FEATURED_PROJECTS.filter(w => w.category === activeFilter);

  return (
    <section id="works" className="py-16 mb-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-[#fea619]/15 text-[#855300] px-4 py-1 rounded-full font-bold tracking-wider uppercase text-xs mb-3 border border-[#fea619]/30 backdrop-blur-sm">
            Proven Track Record
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0b1c30] mb-3 tracking-tight font-sans">
            Featured Works across Karnataka
          </h2>
          <p className="text-base md:text-lg text-[#464555] max-w-2xl mx-auto font-normal">
            Real-world digital infrastructure deployed for top educational trusts, transit retail hubs, and tech enterprises in Bengaluru, Mysuru & Mangaluru.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center items-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-[#0b1c30] text-white shadow-md'
                    : 'bg-white text-[#464555] hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWorks.map((work) => (
            <div
              key={work.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
            >
              <div>
                {/* Image & Location Badge */}
                <div className="relative aspect-video overflow-hidden bg-slate-100">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                    <MapPin className="w-3.5 h-3.5 text-[#fea619]" />
                    <span>{work.location}</span>
                  </div>
                  <div className="absolute top-3 right-3 bg-[#3525cd] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {work.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-xs font-bold text-[#3525cd] uppercase tracking-wider mb-1">
                    {work.client}
                  </p>
                  <h3 className="text-lg font-bold text-[#0b1c30] mb-2 leading-snug group-hover:text-[#3525cd] transition-colors">
                    {work.title}
                  </h3>
                  <p className="text-xs text-[#464555] leading-relaxed mb-4">
                    {work.description}
                  </p>

                  {/* Impact Metric Banner */}
                  <div className="bg-[#006e4b]/10 p-2.5 rounded-xl border border-[#006e4b]/20 text-xs font-bold text-[#005338] flex items-center gap-2 mb-4">
                    <Sparkles className="w-4 h-4 text-[#006e4b] shrink-0" />
                    <span>{work.impactMetric}</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {work.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-slate-100 text-slate-600 text-[10px] font-semibold px-2.5 py-0.5 rounded-md"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="px-6 pb-6 pt-2 border-t border-slate-100 mt-2">
                <button
                  onClick={() => onNotify(`Viewing architectural brief for ${work.title} (${work.client})`)}
                  className="w-full py-2.5 bg-slate-50 hover:bg-[#3525cd] hover:text-white text-[#0b1c30] font-semibold text-xs rounded-xl border border-slate-200 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Explore Case Details</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
