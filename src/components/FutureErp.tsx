import React, { useState } from 'react';
import { DASHBOARD_3D_IMG, ERP_PREVIEW_MODULES } from '../data/mockData';
import { School, Globe, Store, ArrowUpRight, PlusCircle, RefreshCw, FileText, CheckCircle2 } from 'lucide-react';

interface FutureErpProps {
  onNotify: (message: string) => void;
}

export const FutureErp: React.FC<FutureErpProps> = ({ onNotify }) => {
  const [activeTab, setActiveTab] = useState<'school' | 'web' | 'business'>('school');
  const activeModule = ERP_PREVIEW_MODULES[activeTab];

  const handleAction = (actionName: string) => {
    onNotify(`Executed action: "${actionName}" on ${activeModule.title}`);
  };

  return (
    <section id="erp" className="py-16 mb-20 relative">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="inline-block bg-[#3525cd]/10 text-[#3525cd] px-4 py-1 rounded-full font-semibold tracking-wider uppercase text-xs mb-3 border border-[#3525cd]/20 backdrop-blur-sm">
          Innovation
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-[#0b1c30] mb-3 tracking-tight">
          The Future of ERP
        </h2>
        <p className="text-base md:text-lg text-[#464555] max-w-xl mx-auto font-normal">
          Experience a dashboard designed for clarity, power, and unparalleled performance.
        </p>
      </div>

      {/* Main Container */}
      <div className="relative mx-auto max-w-6xl group">
        {/* Glow backdrop */}
        <div className="absolute inset-0 bg-[#3525cd]/10 rounded-3xl blur-3xl transform group-hover:scale-105 transition-transform duration-1000" />

        {/* Window Container */}
        <div className="bg-glass rounded-2xl p-3 shadow-2xl relative z-10 border border-white/60 overflow-hidden backdrop-blur-xl">
          {/* Top Window Bar */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-slate-200/60 bg-white/40 rounded-t-xl">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-400" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-emerald-400" />
            </div>
            
            {/* Address Bar */}
            <div className="bg-white/80 px-4 py-1 rounded-lg border border-slate-200 text-xs font-medium text-[#464555] tracking-wide flex items-center gap-2 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              infynlabs-dashboard.app
            </div>

            <div className="text-xs text-slate-400 font-mono hidden sm:block">v4.2-live</div>
          </div>

          {/* Top 3D Hero Mockup Image */}
          <div className="p-2 relative rounded-xl overflow-hidden bg-gradient-to-b from-white/60 to-slate-50/50">
            <img 
              src={DASHBOARD_3D_IMG} 
              alt="High-tech 3D dashboard mockup" 
              className="w-full h-auto max-h-[380px] object-cover rounded-xl shadow-md transition-transform duration-700 hover:scale-[1.01]" 
            />

            {/* Overlay badge on top image */}
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-white/80 hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#3525cd]/10 flex items-center justify-center text-[#3525cd]">
                <School className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#0b1c30]">School ERP Live Node</p>
                <p className="text-[11px] text-emerald-600 font-medium">● 100% Operational</p>
              </div>
            </div>
          </div>

          {/* Interactive Live ERP Switcher Control Panel */}
          <div className="p-4 md:p-6 bg-white/80 rounded-xl mt-3 border border-slate-200/80 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200">
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveTab('school')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                    activeTab === 'school'
                      ? 'bg-[#3525cd] text-white shadow-md shadow-[#3525cd]/20'
                      : 'bg-slate-100 text-[#464555] hover:bg-slate-200'
                  }`}
                >
                  <School className="w-4 h-4" />
                  <span>School ERP</span>
                </button>

                <button
                  onClick={() => setActiveTab('web')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                    activeTab === 'web'
                      ? 'bg-[#fea619] text-[#0b1c30] shadow-md shadow-[#fea619]/20'
                      : 'bg-slate-100 text-[#464555] hover:bg-slate-200'
                  }`}
                >
                  <Globe className="w-4 h-4" />
                  <span>Web & Speed</span>
                </button>

                <button
                  onClick={() => setActiveTab('business')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                    activeTab === 'business'
                      ? 'bg-[#006e4b] text-white shadow-md shadow-[#006e4b]/20'
                      : 'bg-slate-100 text-[#464555] hover:bg-slate-200'
                  }`}
                >
                  <Store className="w-4 h-4" />
                  <span>Business POS</span>
                </button>
              </div>

              <div className="text-xs font-semibold text-[#464555] bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Live Interactive Simulation Mode
              </div>
            </div>

            {/* Dashboard Stats & Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
              {/* Main Metric Hero */}
              <div className="bg-gradient-to-br from-[#eff4ff] to-[#e5eeff] p-5 rounded-2xl border border-[#d3e4fe]">
                <p className="text-xs font-bold text-[#464555] tracking-wider uppercase mb-1">
                  {activeModule.metricLabel}
                </p>
                <div className="text-3xl lg:text-4xl font-extrabold text-[#0b1c30] tracking-tight mb-2">
                  {activeModule.metricValue}
                </div>
                <div className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                  <span>{activeModule.growth}</span>
                </div>
              </div>

              {/* Sub Stats Grid */}
              <div className="grid grid-cols-3 gap-3">
                {activeModule.stats.map((stat, i) => (
                  <div key={i} className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-center">
                    <p className="text-xs font-medium text-[#464555] mb-1">{stat.label}</p>
                    <p className="text-lg font-bold text-[#0b1c30]">{stat.value}</p>
                  </div>
                ))}
              </div>

              {/* Quick Simulator Actions */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex flex-col gap-2">
                <p className="text-xs font-bold text-[#0b1c30] mb-1 uppercase tracking-wider">Quick Actions</p>
                <div className="grid grid-cols-1 gap-2">
                  {activeModule.quickActions.map((action, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleAction(action)}
                      className="w-full text-left bg-white hover:bg-[#3525cd] hover:text-white text-[#0b1c30] font-semibold text-xs px-3.5 py-2 rounded-xl border border-slate-200 transition-all flex items-center justify-between cursor-pointer group"
                    >
                      <span>{action}</span>
                      <PlusCircle className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
