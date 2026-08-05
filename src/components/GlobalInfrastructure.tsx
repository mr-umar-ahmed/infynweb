import React from 'react';
import { CheckCircle2, Globe, Server, Shield, Zap } from 'lucide-react';

interface GlobalInfrastructureProps {
  onOpenNetworkMap: () => void;
}

export const GlobalInfrastructure: React.FC<GlobalInfrastructureProps> = ({ onOpenNetworkMap }) => {
  return (
    <section id="infrastructure" className="py-20 mb-16 border-t border-[#c7c4d8]/20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 lg:gap-16">
        {/* Left Column Text */}
        <div className="md:w-1/2">
          <span className="inline-block bg-slate-200/60 text-[#0b1c30] px-4 py-1 rounded-full font-semibold tracking-wider uppercase text-xs mb-4 border border-slate-300/50 backdrop-blur-sm">
            Scale
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-[#0b1c30] mb-6 tracking-tight font-sans">
            Karnataka & Pan-India Edge Infrastructure
          </h2>

          <p className="text-[#464555] text-base md:text-lg mb-8 font-normal leading-relaxed">
            Deployed on sub-millisecond edge PoPs in Bengaluru (Electronic City & Devanahalli), Mysuru, Mangaluru & Hubballi. Ensures ultra-low latency for student portals, POS checkout & web traffic.
          </p>

          <ul className="space-y-4 mb-10">
            <li className="flex items-center gap-3 text-[#0b1c30] font-medium">
              <CheckCircle2 className="w-5 h-5 text-[#3525cd]" />
              <span>99.99% Uptime SLA</span>
            </li>
            <li className="flex items-center gap-3 text-[#0b1c30] font-medium">
              <CheckCircle2 className="w-5 h-5 text-[#3525cd]" />
              <span>End-to-End Encryption</span>
            </li>
            <li className="flex items-center gap-3 text-[#0b1c30] font-medium">
              <CheckCircle2 className="w-5 h-5 text-[#3525cd]" />
              <span>Automated Scaling</span>
            </li>
          </ul>

          <button 
            onClick={onOpenNetworkMap}
            className="bg-glass text-[#0b1c30] font-semibold text-sm px-6 py-3.5 rounded-full border border-[#c7c4d8]/60 hover:bg-white hover:shadow-md transition-all cursor-pointer flex items-center gap-2 group"
          >
            <Globe className="w-4 h-4 text-[#3525cd] group-hover:rotate-12 transition-transform" />
            <span>View Network Map</span>
          </button>
        </div>

        {/* Right Column Concentric Orbit Network Visual */}
        <div className="md:w-1/2 relative w-full flex justify-center">
          <div className="w-full max-w-[420px] aspect-square bg-glass rounded-full border border-white/60 p-8 relative flex items-center justify-center shadow-xl">
            {/* Spinning orbit rings */}
            <div className="absolute inset-0 rounded-full border border-[#3525cd]/20 animate-[spin_25s_linear_infinite]" />
            <div className="absolute inset-6 rounded-full border border-[#fea619]/20 animate-[spin_18s_linear_infinite_reverse]" />
            <div className="absolute inset-16 rounded-full border border-[#006e4b]/20 animate-[spin_30s_linear_infinite]" />

            {/* Glowing Network Nodes */}
            <div 
              onClick={onOpenNetworkMap}
              className="absolute w-4 h-4 bg-[#3525cd] rounded-full shadow-[0_0_15px_rgba(53,37,205,0.8)] top-1/4 left-1/4 animate-pulse cursor-pointer" 
              title="Frankfurt Node (0.8ms)"
            />
            <div 
              onClick={onOpenNetworkMap}
              className="absolute w-3.5 h-3.5 bg-[#fea619] rounded-full shadow-[0_0_12px_rgba(254,166,25,0.8)] bottom-1/3 right-1/4 animate-pulse delay-300 cursor-pointer" 
              title="Tokyo Node (1.2ms)"
            />
            <div 
              onClick={onOpenNetworkMap}
              className="absolute w-5 h-5 bg-[#006e4b] rounded-full shadow-[0_0_20px_rgba(0,110,75,0.8)] bottom-1/4 left-1/3 animate-pulse delay-700 cursor-pointer" 
              title="San Francisco Node (0.9ms)"
            />

            {/* Central Globe Core */}
            <button
              onClick={onOpenNetworkMap}
              className="w-28 h-28 md:w-36 md:h-36 bg-white/90 backdrop-blur-xl rounded-full border border-white flex items-center justify-center shadow-2xl relative z-10 cursor-pointer hover:scale-105 transition-transform group"
            >
              <Globe className="w-12 h-12 md:w-16 md:h-16 text-[#3525cd] group-hover:rotate-45 transition-transform duration-500" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
