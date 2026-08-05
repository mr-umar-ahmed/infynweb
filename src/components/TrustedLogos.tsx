import React from 'react';
import { LEADERS_DATA } from '../data/mockData';
import { LeaderCompany } from '../types';

interface TrustedLogosProps {
  onSelectLeader: (leader: LeaderCompany) => void;
}

export const TrustedLogos: React.FC<TrustedLogosProps> = ({ onSelectLeader }) => {
  return (
    <section className="py-10 mb-16 border-y border-[#c7c4d8]/20 bg-glass relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="font-semibold text-xs text-[#464555] uppercase tracking-[0.2em] mb-8">
          Trusted by Indian & Karnataka Institutional Leaders
        </p>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-20 opacity-80 hover:opacity-100 transition-opacity duration-300">
          {LEADERS_DATA.map((leader) => (
            <button
              key={leader.id}
              onClick={() => onSelectLeader(leader)}
              className="group relative focus:outline-none cursor-pointer transition-transform duration-300 hover:scale-110"
              title={`View ${leader.name} Case Study`}
            >
              {leader.id === 'raiffeisen' ? (
                <span className="font-medium uppercase tracking-wide text-[#0b1c30] text-xl md:text-2xl block leading-tight">
                  Raiffeisen
                  <br />
                  <span className="text-[10px] tracking-widest opacity-70 block font-sans">BANK</span>
                </span>
              ) : (
                <span className={`text-2xl md:text-3xl text-[#0b1c30] ${leader.fontStyle}`}>
                  {leader.logoText}
                </span>
              )}

              {/* Hover Badge */}
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-[#0b1c30] text-white text-[10px] px-2 py-0.5 rounded shadow-sm whitespace-nowrap pointer-events-none">
                Click for Case Study
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
