import React, { useState } from 'react';
import { Calculator, Sparkles, CheckCircle2, ArrowRight, ShieldAlert, DollarSign } from 'lucide-react';

interface FeeCalculatorProps {
  onOpenFreeTrial: () => void;
}

export const FeeCalculator: React.FC<FeeCalculatorProps> = ({ onOpenFreeTrial }) => {
  const [studentCount, setStudentCount] = useState<number>(800);
  const [avgAnnualFee, setAvgAnnualFee] = useState<number>(45000); // INR per student
  const [boardType, setBoardType] = useState<'KSEEB' | 'CBSE' | 'ICSE'>('CBSE');

  // Calculations
  const totalAnnualFeeTurnover = studentCount * avgAnnualFee; // In INR
  const manualPaperAdminHours = Math.round(studentCount * 4.2); // Hours spent per year manually processing fees and report cards
  const digitalAdminHoursWithVidya = Math.round(manualPaperAdminHours * 0.15); // 85% reduction
  const hoursSaved = manualPaperAdminHours - digitalAdminHoursWithVidya;
  
  // Fee collection delay reduction in Rupees
  const estimatedCashflowAccelerationRupees = Math.round(totalAnnualFeeTurnover * 0.18); // 18% faster collection via UPI WhatsApp auto-reminders

  const formatLakhsCrores = (val: number) => {
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(2)} Crores`;
    }
    if (val >= 100000) {
      return `₹${(val / 100000).toFixed(2)} Lakhs`;
    }
    return `₹${val.toLocaleString('en-IN')}`;
  };

  return (
    <section id="calculator" className="py-16 mb-20 relative">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-gradient-to-br from-[#0b1c30] via-[#162a42] to-[#0b1c30] rounded-3xl p-6 md:p-10 text-white shadow-2xl relative overflow-hidden border border-slate-800">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#3525cd]/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#fea619]/20 rounded-full blur-3xl pointer-events-none" />

          {/* Header */}
          <div className="relative z-10 text-center max-w-2xl mx-auto mb-10">
            <span className="inline-flex items-center gap-1.5 bg-[#fea619]/20 text-[#fea619] text-xs font-bold px-3 py-1 rounded-full mb-3 border border-[#fea619]/40">
              <Sparkles className="w-3.5 h-3.5" />
              Karnataka School ROI & Fee Estimator
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
              Calculate Your Campus Administrative Savings
            </h2>
            <p className="text-sm text-slate-300 font-normal leading-relaxed">
              See how much time and cashflow efficiency your institution gains by automating KSEEB, CBSE & ICSE operations with Vidya ERP.
            </p>
          </div>

          {/* Calculator Control Inputs */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md">
            {/* Input 1: Student Count Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-bold text-slate-200">
                <span>Enrolled Students:</span>
                <span className="text-base text-[#fea619] font-mono">{studentCount.toLocaleString('en-IN')}</span>
              </div>
              <input
                type="range"
                min="100"
                max="5000"
                step="50"
                value={studentCount}
                onChange={(e) => setStudentCount(Number(e.target.value))}
                className="w-full accent-[#3525cd] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>100 Students</span>
                <span>5,000+ Students</span>
              </div>
            </div>

            {/* Input 2: Avg Annual Fee Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-bold text-slate-200">
                <span>Avg Annual Fee / Student:</span>
                <span className="text-base text-emerald-400 font-mono">₹{avgAnnualFee.toLocaleString('en-IN')}</span>
              </div>
              <input
                type="range"
                min="10000"
                max="150000"
                step="5000"
                value={avgAnnualFee}
                onChange={(e) => setAvgAnnualFee(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>₹10k</span>
                <span>₹1.5 Lakhs</span>
              </div>
            </div>

            {/* Input 3: Board Type Select */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-200">Education Board Syllabus:</label>
              <div className="grid grid-cols-3 gap-2">
                {(['KSEEB', 'CBSE', 'ICSE'] as const).map((b) => (
                  <button
                    key={b}
                    onClick={() => setBoardType(b)}
                    className={`py-2 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                      boardType === b
                        ? 'bg-[#3525cd] text-white border-[#3525cd] shadow-md'
                        : 'bg-white/10 text-slate-300 border-white/20 hover:bg-white/20'
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
              <p className="text-[10px] text-slate-400 italic">Includes NEP 2020 CCE assessment template</p>
            </div>
          </div>

          {/* Results Display */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 p-5 rounded-2xl border border-white/15 text-center">
              <p className="text-xs text-slate-300 uppercase tracking-wider mb-1 font-semibold">Total Fee Turnover Managed</p>
              <p className="text-2xl lg:text-3xl font-extrabold text-white font-mono mb-1">
                {formatLakhsCrores(totalAnnualFeeTurnover)}
              </p>
              <p className="text-[11px] text-slate-400">100% UPI & Razorpay auto-reconciled</p>
            </div>

            <div className="bg-emerald-500/15 p-5 rounded-2xl border border-emerald-500/30 text-center">
              <p className="text-xs text-emerald-300 uppercase tracking-wider mb-1 font-semibold">Annual Admin Hours Saved</p>
              <p className="text-2xl lg:text-3xl font-extrabold text-emerald-400 font-mono mb-1">
                {hoursSaved.toLocaleString('en-IN')} Hours
              </p>
              <p className="text-[11px] text-emerald-200">Replaced paper forms & manual tally entries</p>
            </div>

            <div className="bg-[#fea619]/15 p-5 rounded-2xl border border-[#fea619]/30 text-center">
              <p className="text-xs text-amber-200 uppercase tracking-wider mb-1 font-semibold">Accelerated Fee Cashflow</p>
              <p className="text-2xl lg:text-3xl font-extrabold text-[#fea619] font-mono mb-1">
                {formatLakhsCrores(estimatedCashflowAccelerationRupees)}
              </p>
              <p className="text-[11px] text-amber-100/80">Via WhatsApp automated UPI payment links</p>
            </div>
          </div>

          {/* CTA Footer */}
          <div className="relative z-10 mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-300 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Includes Karnataka State GST compliance & regional support from Electronic City office.</span>
            </div>

            <button
              onClick={onOpenFreeTrial}
              className="bg-[#fea619] hover:bg-[#e29310] text-[#0b1c30] font-extrabold text-sm px-6 py-3 rounded-full transition-all shadow-lg hover:shadow-xl flex items-center gap-2 cursor-pointer shrink-0"
            >
              <span>Activate Free Sandbox for {boardType}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
