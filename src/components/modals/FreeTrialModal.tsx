import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight, School, Globe, Store, Sparkles } from 'lucide-react';
import { SolutionType } from '../../types';

interface FreeTrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (msg: string) => void;
}

export const FreeTrialModal: React.FC<FreeTrialModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [step, setStep] = useState(1);
  const [selectedType, setSelectedType] = useState<SolutionType>('school-erp');
  const [orgName, setOrgName] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [size, setSize] = useState('500-1000');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    onSuccess(`Trial account created for ${orgName || 'your organization'}! Direct login credentials emailed to ${email || 'your inbox'}.`);
  };

  const handleReset = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

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

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="mb-6 text-center">
              <span className="inline-flex items-center gap-1.5 bg-[#3525cd]/10 text-[#3525cd] text-xs font-bold px-3 py-1 rounded-full mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                14-Day Free Access
              </span>
              <h3 className="text-2xl font-bold text-[#0b1c30]">Start Your InfynLabs Trial</h3>
              <p className="text-xs text-[#464555] mt-1">No credit card required. Instant cloud deployment.</p>
            </div>

            {/* Progress Bar */}
            <div className="flex items-center gap-2 mb-6">
              <div className={`h-1.5 flex-1 rounded-full ${step >= 1 ? 'bg-[#3525cd]' : 'bg-slate-200'}`} />
              <div className={`h-1.5 flex-1 rounded-full ${step >= 2 ? 'bg-[#3525cd]' : 'bg-slate-200'}`} />
            </div>

            {step === 1 ? (
              <div className="space-y-4">
                <p className="text-xs font-bold text-[#0b1c30] uppercase tracking-wider">
                  Step 1: Select Your Primary Industry / Need
                </p>

                <div className="grid grid-cols-1 gap-3">
                  <button
                    onClick={() => setSelectedType('school-erp')}
                    className={`p-4 rounded-2xl border text-left flex items-center gap-4 transition-all cursor-pointer ${
                      selectedType === 'school-erp'
                        ? 'border-[#3525cd] bg-[#3525cd]/5 ring-2 ring-[#3525cd]/20'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#3525cd]/10 flex items-center justify-center text-[#3525cd]">
                      <School className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#0b1c30]">School / College ERP</h4>
                      <p className="text-xs text-[#464555]">Students, fees, grading & staff automation</p>
                    </div>
                  </button>

                  <button
                    onClick={() => setSelectedType('web-dev')}
                    className={`p-4 rounded-2xl border text-left flex items-center gap-4 transition-all cursor-pointer ${
                      selectedType === 'web-dev'
                        ? 'border-[#fea619] bg-[#fea619]/10 ring-2 ring-[#fea619]/20'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#fea619]/20 flex items-center justify-center text-[#855300]">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#0b1c30]">Web Development Project</h4>
                      <p className="text-xs text-[#464555]">Custom high-speed website or e-commerce portal</p>
                    </div>
                  </button>

                  <button
                    onClick={() => setSelectedType('business-services')}
                    className={`p-4 rounded-2xl border text-left flex items-center gap-4 transition-all cursor-pointer ${
                      selectedType === 'business-services'
                        ? 'border-[#006e4b] bg-[#006e4b]/10 ring-2 ring-[#006e4b]/20'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#006e4b]/10 flex items-center justify-center text-[#005338]">
                      <Store className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#0b1c30]">Business Operations Tech</h4>
                      <p className="text-xs text-[#464555]">POS, inventory & appointment booking suite</p>
                    </div>
                  </button>
                </div>

                <button
                  onClick={() => setStep(2)}
                  className="w-full mt-4 bg-[#3525cd] hover:bg-[#281bb3] text-white font-semibold text-sm py-3 rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <p className="text-xs font-bold text-[#0b1c30] uppercase tracking-wider">
                  Step 2: Organization & Contact Details
                </p>

                <div>
                  <label className="block text-xs font-semibold text-[#0b1c30] mb-1">
                    Organization / Institution Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Saint Jude Academy / Infyn Corp"
                    value={orgName}
                    onChange={(e) => setOrgName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#3525cd] text-sm text-[#0b1c30]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0b1c30] mb-1">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Sarah Jenkins"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#3525cd] text-sm text-[#0b1c30]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0b1c30] mb-1">
                    Work Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@institution.edu"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#3525cd] text-sm text-[#0b1c30]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0b1c30] mb-1">
                    Estimated Users / Students / Staff
                  </label>
                  <select
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#3525cd] text-sm text-[#0b1c30] bg-white"
                  >
                    <option value="1-250">Under 250 users</option>
                    <option value="250-1000">250 - 1,000 users</option>
                    <option value="1000-5000">1,000 - 5,000 users</option>
                    <option value="5000+">5,000+ Enterprise</option>
                  </select>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="w-1/3 py-3 border border-slate-200 rounded-2xl text-xs font-semibold text-[#0b1c30] hover:bg-slate-50 cursor-pointer"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="w-2/3 bg-[#3525cd] hover:bg-[#281bb3] text-white font-semibold text-sm py-3 rounded-2xl transition-all shadow-md cursor-pointer"
                  >
                    Launch Free Sandbox
                  </button>
                </div>
              </form>
            )}
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto mb-4">
              <CheckCircle className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-bold text-[#0b1c30] mb-2">Sandbox Provisioned!</h3>
            <p className="text-sm text-[#464555] max-w-sm mx-auto mb-6">
              Welcome aboard, <strong>{fullName}</strong>! Your 14-day dedicated trial tenant for <strong>{orgName}</strong> is active.
            </p>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-left text-xs space-y-2 mb-6">
              <div className="flex justify-between">
                <span className="text-slate-500">Instance URL:</span>
                <span className="font-mono text-[#3525cd]">https://{orgName.toLowerCase().replace(/[^a-z0-9]/g, '') || 'trial'}.infynlabs.app</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Admin Username:</span>
                <span className="font-semibold text-[#0b1c30]">{email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Access Key:</span>
                <span className="font-mono text-emerald-700">LIVE-TRY-9942</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="w-full bg-[#0b1c30] text-white font-semibold text-sm py-3 rounded-2xl transition-all hover:bg-slate-800 cursor-pointer"
            >
              Close & Explore Preview
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
