import React, { useState } from 'react';
import { X, Lock, Mail, ShieldCheck, UserCheck, ArrowRight } from 'lucide-react';

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (userName: string, role: string) => void;
}

export const SignInModal: React.FC<SignInModalProps> = ({ isOpen, onClose, onLoginSuccess }) => {
  const [email, setEmail] = useState('admin@infynlabs-demo.org');
  const [password, setPassword] = useState('••••••••••••');

  if (!isOpen) return null;

  const handleQuickLogin = (roleName: string, demoEmail: string) => {
    onLoginSuccess(roleName, demoEmail);
    onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLoginSuccess('Administrator', email);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0b1c30]/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 md:p-8 shadow-2xl border border-slate-200 relative overflow-hidden">
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1 rounded-full hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="w-12 h-12 bg-[#3525cd]/10 rounded-2xl flex items-center justify-center text-[#3525cd] mx-auto mb-3">
            <Lock className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-[#0b1c30]">Sign In to InfynLabs</h3>
          <p className="text-xs text-[#464555] mt-1">Access your institutional portal or client dashboard</p>
        </div>

        {/* Quick Demo Persona Selectors */}
        <div className="mb-6 bg-slate-50 p-3 rounded-2xl border border-slate-200">
          <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2 text-center">
            ⚡ Quick Demo Logins
          </p>
          <div className="grid grid-cols-1 gap-1.5">
            <button
              onClick={() => handleQuickLogin('Dr. Eleanor Vance (Principal)', 'principal@saintjude.edu')}
              className="text-left bg-white hover:bg-[#3525cd] hover:text-white px-3 py-2 rounded-xl text-xs font-semibold text-[#0b1c30] border border-slate-200 transition-all flex items-center justify-between cursor-pointer group"
            >
              <span>🏫 School Principal Demo</span>
              <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
            </button>
            <button
              onClick={() => handleQuickLogin('Marcus Vance (Lead Engineer)', 'marcus@sony.com')}
              className="text-left bg-white hover:bg-[#fea619] hover:text-[#0b1c30] px-3 py-2 rounded-xl text-xs font-semibold text-[#0b1c30] border border-slate-200 transition-all flex items-center justify-between cursor-pointer group"
            >
              <span>🌐 Web Dev Client Demo</span>
              <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
            </button>
            <button
              onClick={() => handleQuickLogin('Chef Pierre (Restaurant GM)', 'pierre@bistro.com')}
              className="text-left bg-white hover:bg-[#006e4b] hover:text-white px-3 py-2 rounded-xl text-xs font-semibold text-[#0b1c30] border border-slate-200 transition-all flex items-center justify-between cursor-pointer group"
            >
              <span>🏪 Business POS Demo</span>
              <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
            </button>
          </div>
        </div>

        {/* Standard Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-[#0b1c30] mb-1">Email Address</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm text-[#0b1c30] focus:outline-none focus:border-[#3525cd]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#0b1c30] mb-1">Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm text-[#0b1c30] focus:outline-none focus:border-[#3525cd]"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#3525cd] hover:bg-[#281bb3] text-white font-semibold text-sm py-3 rounded-2xl transition-all shadow-md cursor-pointer"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};
