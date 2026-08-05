import React, { useState } from 'react';
import { LOGO_URL } from '../data/mockData';
import { Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenFreeTrial: () => void;
  onOpenSignIn: () => void;
  onSelectSolution: (solutionId: 'school-erp' | 'web-dev' | 'business-services') => void;
  onScrollToSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenFreeTrial,
  onOpenSignIn,
  onSelectSolution,
  onScrollToSection
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    onScrollToSection(sectionId);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-glass transition-all duration-300 border-b border-white/40">
      <div className="flex justify-between items-center px-6 py-4 max-w-[1280px] mx-auto">
        {/* Brand Logo & Name */}
        <button 
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-2 group text-left cursor-pointer"
        >
          <img 
            src={LOGO_URL} 
            alt="InfynLabs Logo" 
            className="h-8 w-8 object-contain transition-transform group-hover:scale-105" 
          />
          <span className="font-bold text-2xl tracking-tight text-[#3525cd] font-sans">
            InfynLabs
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => handleNavClick('solutions')}
            className="font-semibold text-sm text-[#3525cd] border-b-2 border-[#3525cd] pb-0.5 hover:opacity-80 transition-all cursor-pointer"
          >
            Solutions
          </button>
          <button 
            onClick={() => handleNavClick('works')}
            className="font-semibold text-sm text-[#464555] hover:text-[#3525cd] transition-colors cursor-pointer"
          >
            Works
          </button>
          <button 
            onClick={() => handleNavClick('calculator')}
            className="font-semibold text-sm text-[#464555] hover:text-[#3525cd] transition-colors cursor-pointer"
          >
            Fee Calculator
          </button>
          <button 
            onClick={() => handleNavClick('pricing')}
            className="font-semibold text-sm text-[#464555] hover:text-[#3525cd] transition-colors cursor-pointer"
          >
            Pricing
          </button>
          <button 
            onClick={() => handleNavClick('faq')}
            className="font-semibold text-sm text-[#464555] hover:text-[#3525cd] transition-colors cursor-pointer"
          >
            FAQ
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <button 
            onClick={onOpenSignIn}
            className="hidden lg:block font-semibold text-sm text-[#0b1c30] hover:text-[#3525cd] transition-colors px-3 py-1.5 rounded-lg cursor-pointer"
          >
            Sign In
          </button>
          
          <button 
            onClick={onOpenFreeTrial}
            className="bg-[#3525cd] hover:bg-[#281bb3] text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-300 shadow-lg shadow-[#3525cd]/25 hover:shadow-[#3525cd]/40 hover:-translate-y-0.5 active:translate-y-0 relative overflow-hidden group flex items-center gap-1.5 cursor-pointer"
          >
            <span className="relative z-10">Get Started</span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 transition-transform" />
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full"></div>
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#0b1c30] p-1.5 rounded-lg hover:bg-slate-200/50 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#f8f9ff]/95 backdrop-blur-xl border-b border-slate-200 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-3 font-semibold text-base text-[#0b1c30]">
            <button 
              onClick={() => { onSelectSolution('school-erp'); setMobileMenuOpen(false); }}
              className="text-left py-2 px-3 rounded-lg hover:bg-[#3525cd]/10 text-[#3525cd] flex items-center justify-between"
            >
              <span>Solutions Overview</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button 
              onClick={() => { onSelectSolution('school-erp'); setMobileMenuOpen(false); }}
              className="text-left py-2 px-3 rounded-lg hover:bg-slate-100 text-[#464555]"
            >
              School ERP
            </button>
            <button 
              onClick={() => { onSelectSolution('web-dev'); setMobileMenuOpen(false); }}
              className="text-left py-2 px-3 rounded-lg hover:bg-slate-100 text-[#464555]"
            >
              Web Development
            </button>
            <button 
              onClick={() => { onSelectSolution('business-services'); setMobileMenuOpen(false); }}
              className="text-left py-2 px-3 rounded-lg hover:bg-slate-100 text-[#464555]"
            >
              Business Services
            </button>
          </div>
          
          <div className="pt-4 border-t border-slate-200/80 flex flex-col gap-2">
            <button 
              onClick={() => { onOpenSignIn(); setMobileMenuOpen(false); }}
              className="w-full text-center py-2.5 font-semibold text-sm text-[#0b1c30] bg-slate-100 rounded-xl"
            >
              Sign In to Account
            </button>
            <button 
              onClick={() => { onOpenFreeTrial(); setMobileMenuOpen(false); }}
              className="w-full text-center py-2.5 font-semibold text-sm text-white bg-[#3525cd] rounded-xl shadow-md"
            >
              Start Free Trial
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
