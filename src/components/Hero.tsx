import React from 'react';
import { PlayCircle, ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onStartFreeTrial: () => void;
  onBookDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartFreeTrial, onBookDemo }) => {
  return (
    <section id="hero" className="relative pt-32 md:pt-40 pb-16 text-center min-h-[75vh] flex flex-col justify-center items-center overflow-hidden">
      {/* Background Orbs & Ambient Gradients */}
      <div className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] bg-[#3525cd]/15 rounded-full blur-[90px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[25vw] h-[25vw] max-w-[350px] max-h-[350px] bg-[#006e4b]/15 rounded-full blur-[90px] animate-pulse delay-700 pointer-events-none" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Main Display Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold text-[#0b1c30] tracking-tight leading-[1.12] mb-6 font-sans">
          Empower Karnataka Institutions with <br className="hidden md:block" />
          <span className="inline-block relative my-1 mx-1.5 group">
            <span className="absolute inset-0 bg-[#fea619]/20 blur-md rounded-xl" />
            <span className="relative bg-glass px-4 py-1.5 rounded-xl border border-[#fea619]/40 text-transparent bg-clip-text bg-gradient-to-r from-[#3525cd] via-[#4f46e5] to-[#fea619] italic font-light shadow-sm">
              Seamless
            </span>
          </span>
          Tech Solutions.
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-[#464555]/90 max-w-3xl mx-auto mb-10 font-normal leading-relaxed tracking-wide">
          NEP 2020 Compliant Vidya ERP for Schools, High-Speed Web Applications & Cloud POS built for Institutions & Enterprises in Bengaluru, Mysuru & Mangaluru.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
          <button 
            onClick={onStartFreeTrial}
            className="w-full sm:w-auto bg-[#0b1c30] hover:bg-[#1a2e45] text-[#f8f9ff] font-semibold text-base px-8 py-4 rounded-full transition-all shadow-xl hover:shadow-2xl hover:shadow-[#0b1c30]/20 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer group"
          >
            <span>Start a free trial</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button 
            onClick={onBookDemo}
            className="w-full sm:w-auto bg-glass text-[#0b1c30] hover:bg-white/80 font-semibold text-base px-8 py-4 rounded-full border border-[#c7c4d8]/50 transition-all hover:-translate-y-0.5 shadow-sm flex items-center justify-center gap-2.5 cursor-pointer group"
          >
            <PlayCircle className="w-5 h-5 text-[#3525cd] group-hover:scale-110 transition-transform" />
            <span>Book a live demo</span>
          </button>
        </div>

        {/* Trust pill */}
        <div className="mt-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 border border-slate-200/80 text-xs font-semibold text-[#464555] shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#fea619]" />
          <span>No credit card required • Instant 14-day full access</span>
        </div>
      </div>
    </section>
  );
};
