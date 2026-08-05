import React from 'react';
import { SOLUTIONS_DATA } from '../data/mockData';
import { SolutionType } from '../types';
import { GraduationCap, Globe2, Store, ArrowRight } from 'lucide-react';

interface SolutionsGridProps {
  onSelectSolution: (solutionId: SolutionType) => void;
}

export const SolutionsGrid: React.FC<SolutionsGridProps> = ({ onSelectSolution }) => {
  return (
    <section id="solutions" className="py-16 mb-20 relative">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0b1c30] mb-3 tracking-tight font-sans">
          Our Core Solutions
        </h2>
        <p className="text-base md:text-lg text-[#464555] max-w-xl mx-auto font-normal">
          Built to scale with your ambition. Choose the right toolkit for your industry.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {/* Card 1: School ERP */}
        <div 
          onClick={() => onSelectSolution('school-erp')}
          className="bg-glass rounded-3xl p-8 group relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#3525cd]/15 hover:-translate-y-2 border border-white/80 cursor-pointer flex flex-col justify-between"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#3525cd]/10 rounded-bl-full -mr-12 -mt-12 transition-transform duration-700 group-hover:scale-125 pointer-events-none" />
          
          <div>
            <div className="w-14 h-14 bg-[#3525cd]/10 rounded-2xl flex items-center justify-center mb-6 text-[#3525cd] border border-[#3525cd]/20 backdrop-blur-md">
              <GraduationCap className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-[#0b1c30] mb-3 tracking-tight">
              School ERP
            </h3>

            <p className="text-[#464555] text-base leading-relaxed mb-8 font-normal">
              Manage students, staff, and curriculum from one central dashboard. Simplify administration with intelligent automation.
            </p>
          </div>

          <div className="font-semibold text-sm text-[#3525cd] flex items-center gap-2 group-hover:gap-3 transition-all uppercase tracking-wider">
            <span>Learn more</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>

        {/* Card 2: Web Development */}
        <div 
          onClick={() => onSelectSolution('web-dev')}
          className="bg-glass rounded-3xl p-8 group relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#fea619]/20 hover:-translate-y-2 md:translate-y-6 border border-white/80 cursor-pointer flex flex-col justify-between"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#fea619]/15 rounded-bl-full -mr-12 -mt-12 transition-transform duration-700 group-hover:scale-125 pointer-events-none" />
          
          <div>
            <div className="w-14 h-14 bg-[#fea619]/15 rounded-2xl flex items-center justify-center mb-6 text-[#855300] border border-[#fea619]/30 backdrop-blur-md">
              <Globe2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-[#0b1c30] mb-3 tracking-tight">
              Web Development
            </h3>

            <p className="text-[#464555] text-base leading-relaxed mb-8 font-normal">
              Custom, responsive websites tailored for growth. High performance, modern aesthetics, and unparalleled speed.
            </p>
          </div>

          <div className="font-semibold text-sm text-[#855300] flex items-center gap-2 group-hover:gap-3 transition-all uppercase tracking-wider">
            <span>Learn more</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>

        {/* Card 3: Business Services */}
        <div 
          onClick={() => onSelectSolution('business-services')}
          className="bg-glass rounded-3xl p-8 group relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#006e4b]/20 hover:-translate-y-2 border border-white/80 cursor-pointer flex flex-col justify-between"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#006e4b]/10 rounded-bl-full -mr-12 -mt-12 transition-transform duration-700 group-hover:scale-125 pointer-events-none" />
          
          <div>
            <div className="w-14 h-14 bg-[#006e4b]/10 rounded-2xl flex items-center justify-center mb-6 text-[#005338] border border-[#006e4b]/20 backdrop-blur-md">
              <Store className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-[#0b1c30] mb-3 tracking-tight">
              Business Services
            </h3>

            <p className="text-[#464555] text-base leading-relaxed mb-8 font-normal">
              Specialized tech for restaurants, salons, and other service-based businesses to streamline operations.
            </p>
          </div>

          <div className="font-semibold text-sm text-[#005338] flex items-center gap-2 group-hover:gap-3 transition-all uppercase tracking-wider">
            <span>Learn more</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </section>
  );
};
