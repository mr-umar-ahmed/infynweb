import React from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { Star, Quote, MapPin } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 mb-20 relative bg-glass border-y border-[#c7c4d8]/20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#3525cd]/10 text-[#3525cd] px-4 py-1 rounded-full font-bold tracking-wider uppercase text-xs mb-3 border border-[#3525cd]/20">
            Endorsements
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0b1c30] mb-3 tracking-tight font-sans">
            Trusted by Karnataka Leaders
          </h2>
          <p className="text-base md:text-lg text-[#464555] max-w-xl mx-auto font-normal">
            See why school trustees, tech leaders, and hospitality groups across Bengaluru, Mysuru & Mangaluru rely on InfynLabs.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 relative flex flex-col justify-between"
            >
              <Quote className="w-10 h-10 text-[#3525cd]/15 absolute top-6 right-6" />

              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-sm text-[#0b1c30] leading-relaxed mb-8 italic font-normal">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#3525cd]/20"
                />
                <div>
                  <h4 className="font-bold text-sm text-[#0b1c30] leading-snug">{t.name}</h4>
                  <p className="text-xs text-[#3525cd] font-semibold">{t.role}</p>
                  <p className="text-[11px] text-[#464555] flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-[#fea619]" />
                    <span>{t.organization} • {t.location}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
