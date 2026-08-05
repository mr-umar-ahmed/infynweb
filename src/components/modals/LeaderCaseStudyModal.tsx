import React from 'react';
import { X, CheckCircle, TrendingUp, Building2, ArrowRight } from 'lucide-react';
import { LeaderCompany } from '../../types';

interface LeaderCaseStudyModalProps {
  leader: LeaderCompany | null;
  onClose: () => void;
  onOpenFreeTrial: () => void;
}

export const LeaderCaseStudyModal: React.FC<LeaderCaseStudyModalProps> = ({
  leader,
  onClose,
  onOpenFreeTrial
}) => {
  if (!leader) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0b1c30]/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 md:p-8 shadow-2xl border border-slate-200 relative overflow-hidden">
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1 rounded-full hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#3525cd] bg-[#3525cd]/10 px-3 py-1 rounded-full mb-3">
            {leader.industry}
          </span>
          <h3 className="text-3xl font-extrabold text-[#0b1c30] mb-2">{leader.name} Case Study</h3>
          <p className="text-xs text-[#464555]">How InfynLabs edge & cloud architecture empowered scale.</p>
        </div>

        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 mb-6">
          <p className="text-sm text-[#0b1c30] leading-relaxed mb-4">
            "{leader.description}"
          </p>

          <div className="pt-3 border-t border-slate-200 flex items-center gap-2 text-xs font-bold text-emerald-700">
            <TrendingUp className="w-4 h-4 shrink-0" />
            <span>Key Outcome: {leader.metrics}</span>
          </div>
        </div>

        <div className="space-y-2 mb-6 text-xs text-[#464555]">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#3525cd]" />
            <span>Deployed across redundant multi-region edge nodes</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#3525cd]" />
            <span>Custom SLA guarantee & 24/7 dedicated engineering support</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="w-1/3 py-3 border border-slate-200 rounded-2xl text-xs font-semibold text-[#0b1c30] hover:bg-slate-50 cursor-pointer"
          >
            Close
          </button>
          <button
            onClick={() => { onClose(); onOpenFreeTrial(); }}
            className="w-2/3 bg-[#3525cd] text-white font-semibold text-xs py-3 rounded-2xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Scale Like {leader.name}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
