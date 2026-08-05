import React from 'react';
import { LOGO_URL } from '../data/mockData';

interface FooterProps {
  onOpenModal: (type: 'solution-detail' | 'free-trial' | 'book-demo') => void;
  onNotify: (msg: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenModal, onNotify }) => {
  return (
    <footer className="w-full py-16 bg-[#213145] text-[#eaf1ff] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
        {/* Brand & Description */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <img 
              src={LOGO_URL} 
              alt="InfynLabs Logo" 
              className="h-8 w-8 object-contain filter invert brightness-200" 
            />
            <span className="font-bold text-2xl text-white tracking-tight">
              InfynLabs
            </span>
          </div>

          <p className="text-white/70 max-w-sm text-sm font-normal leading-relaxed">
            Building seamless tech solutions for schools, colleges, and enterprises across Karnataka and India.
          </p>

          <p className="text-xs text-white/40 mt-6 font-normal">
            HQ: Electronic City Phase 1, Bengaluru, Karnataka 560100<br />
            © 2026 InfynLabs Technologies Pvt Ltd. All rights reserved.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:items-end justify-between gap-6">
          <nav className="flex flex-wrap gap-6 md:gap-8">
            <button 
              onClick={() => onNotify("About Us: InfynLabs empowers 500+ global institutions with modern cloud tech.")}
              className="text-xs text-white/70 hover:text-white transition-colors uppercase tracking-wider font-semibold cursor-pointer"
            >
              About Us
            </button>
            <button 
              onClick={() => onNotify("Careers: We are hiring Senior Fullstack, Cloud Architect & AI Engineers!")}
              className="text-xs text-white/70 hover:text-white transition-colors uppercase tracking-wider font-semibold cursor-pointer"
            >
              Careers
            </button>
            <button 
              onClick={() => onNotify("Privacy Policy: SOC2 Type II Certified, GDPR & HIPAA Compliant.")}
              className="text-xs text-white/70 hover:text-white transition-colors uppercase tracking-wider font-semibold cursor-pointer"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => onNotify("Terms: Standard Service Agreement with 99.99% Uptime Guarantee.")}
              className="text-xs text-white/70 hover:text-white transition-colors uppercase tracking-wider font-semibold cursor-pointer"
            >
              Terms
            </button>
            <button 
              onClick={() => onOpenModal('book-demo')}
              className="text-xs text-white/70 hover:text-white transition-colors uppercase tracking-wider font-semibold cursor-pointer"
            >
              Contact
            </button>
          </nav>

          <div className="text-xs text-white/50 text-left md:text-right">
            ISO 27001 Certified • Edge Network Infrastructure • 24/7 Global Support
          </div>
        </div>
      </div>
    </footer>
  );
};
