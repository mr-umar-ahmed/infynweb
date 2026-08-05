import React, { useState } from 'react';
import { X, Check, Calculator, ArrowRight, Shield, Zap } from 'lucide-react';
import { SolutionInfo } from '../../types';

interface SolutionDetailDrawerProps {
  solution: SolutionInfo | null;
  onClose: () => void;
  onOpenFreeTrial: () => void;
}

export const SolutionDetailDrawer: React.FC<SolutionDetailDrawerProps> = ({
  solution,
  onClose,
  onOpenFreeTrial
}) => {
  const [scaleCount, setScaleCount] = useState(500);

  if (!solution) return null;

  // Calculate estimated savings
  const monthlySavings = Math.round(scaleCount * 2.4);

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-[#0b1c30]/50 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-2xl h-full overflow-y-auto p-6 md:p-10 shadow-2xl relative flex flex-col justify-between">
        <div>
          {/* Top Header */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-200 mb-6">
            <div>
              <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-2 ${solution.badgeColor}`}>
                {solution.category}
              </span>
              <h2 className="text-3xl font-extrabold text-[#0b1c30]">{solution.title}</h2>
            </div>
            <button 
              onClick={onClose}
              className="text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Description */}
          <p className="text-base text-[#464555] leading-relaxed mb-8">
            {solution.description}
          </p>

          {/* Modules List */}
          <div className="mb-8">
            <h4 className="text-xs font-bold text-[#0b1c30] uppercase tracking-wider mb-4">
              Core Modules & Capabilities
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {solution.modules.map((m, idx) => (
                <div key={idx} className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <h5 className="font-bold text-sm text-[#0b1c30] mb-1">{m.name}</h5>
                  <p className="text-xs text-[#464555] leading-normal">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features Checklist */}
          <div className="mb-8">
            <h4 className="text-xs font-bold text-[#0b1c30] uppercase tracking-wider mb-4">
              Included Standards
            </h4>
            <ul className="space-y-3">
              {solution.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#0b1c30]">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Interactive ROI Calculator Slider */}
          <div className="bg-gradient-to-br from-[#eff4ff] to-[#e5eeff] p-6 rounded-2xl border border-[#d3e4fe] mb-8">
            <div className="flex items-center gap-2 text-xs font-bold text-[#3525cd] uppercase tracking-wider mb-2">
              <Calculator className="w-4 h-4" />
              <span>Instant ROI & Automation Savings Estimator</span>
            </div>

            <div className="mb-4">
              <div className="flex justify-between text-xs font-semibold text-[#0b1c30] mb-2">
                <span>Total Active Users / Students / Clients:</span>
                <span className="font-bold text-[#3525cd] text-sm">{scaleCount.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="50"
                max="5000"
                step="50"
                value={scaleCount}
                onChange={(e) => setScaleCount(Number(e.target.value))}
                className="w-full accent-[#3525cd] cursor-pointer"
              />
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-[#c3c0ff]/60">
              <span className="text-xs text-[#464555]">Est. Operational Hours Saved / Mo:</span>
              <span className="text-lg font-bold text-[#0b1c30]">${monthlySavings.toLocaleString()} / month</span>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="pt-6 border-t border-slate-200 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs text-slate-400 font-medium">Starting tier:</p>
            <p className="text-lg font-bold text-[#0b1c30]">{solution.startingPrice}</p>
          </div>

          <button
            onClick={() => { onClose(); onOpenFreeTrial(); }}
            className="bg-[#3525cd] hover:bg-[#281bb3] text-white font-bold text-sm px-6 py-3.5 rounded-full transition-all flex items-center gap-2 shadow-lg shadow-[#3525cd]/20 cursor-pointer"
          >
            <span>Deploy {solution.title}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
