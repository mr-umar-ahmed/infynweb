import React, { useState } from 'react';
import { PRICING_PLANS } from '../data/mockData';
import { Check, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

interface PricingProps {
  onOpenFreeTrial: () => void;
  onBookDemo: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenFreeTrial, onBookDemo }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

  return (
    <section id="pricing" className="py-16 mb-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-[#006e4b]/10 text-[#005338] px-4 py-1 rounded-full font-bold tracking-wider uppercase text-xs mb-3 border border-[#006e4b]/20">
            Transparent Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0b1c30] mb-3 tracking-tight font-sans">
            Simple, Indian Rupee Billing Plans
          </h2>
          <p className="text-base md:text-lg text-[#464555] max-w-xl mx-auto font-normal">
            No hidden setup fees. GST-compliant tax invoices with 18% input tax credit for institutions & registered businesses.
          </p>

          {/* Billing Cycle Switcher */}
          <div className="inline-flex items-center bg-slate-100 p-1.5 rounded-full border border-slate-200 mt-8">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                billingCycle === 'monthly'
                  ? 'bg-white text-[#0b1c30] shadow-sm'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                billingCycle === 'annual'
                  ? 'bg-[#3525cd] text-white shadow-md'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <span>Annual Plan</span>
              <span className="bg-[#fea619] text-[#0b1c30] text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`bg-white rounded-3xl p-8 border transition-all duration-300 relative flex flex-col justify-between ${
                plan.popular
                  ? 'border-[#3525cd] shadow-2xl ring-2 ring-[#3525cd]/20 md:-translate-y-2'
                  : 'border-slate-200 shadow-lg hover:shadow-xl'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#3525cd] text-white text-[11px] font-extrabold uppercase px-4 py-1 rounded-full shadow-md tracking-wider flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#fea619]" />
                  <span>Most Popular in Karnataka</span>
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-[#0b1c30] mb-2">{plan.name}</h3>
                <p className="text-xs text-[#464555] min-h-[32px] mb-6">{plan.description}</p>

                {/* Price Display */}
                <div className="mb-6 pb-6 border-b border-slate-100">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl lg:text-4xl font-extrabold text-[#0b1c30] font-mono">
                      ₹{billingCycle === 'annual' 
                        ? Math.round(parseInt(plan.monthlyPriceRupees.replace(/,/g, '')) * 0.8).toLocaleString('en-IN')
                        : plan.monthlyPriceRupees
                      }
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">/ month</span>
                  </div>
                  <p className="text-[11px] text-emerald-700 font-semibold mt-1">
                    {plan.annualDiscount}
                  </p>
                </div>

                {/* Features list */}
                <ul className="space-y-3 mb-8 text-xs text-[#0b1c30]">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action button */}
              <button
                onClick={plan.id === 'enterprise-custom' ? onBookDemo : onOpenFreeTrial}
                className={`w-full py-3.5 rounded-2xl font-extrabold text-xs transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer ${
                  plan.popular
                    ? 'bg-[#3525cd] hover:bg-[#281bb3] text-white shadow-[#3525cd]/25'
                    : 'bg-[#0b1c30] hover:bg-[#1a2e45] text-white'
                }`}
              >
                <span>{plan.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* GST & Regulatory Assurance Footer */}
        <div className="mt-12 text-center text-xs text-[#464555] flex flex-wrap items-center justify-center gap-6 bg-slate-100/80 p-4 rounded-2xl border border-slate-200">
          <span className="flex items-center gap-1.5 font-semibold text-[#0b1c30]">
            <ShieldCheck className="w-4 h-4 text-[#3525cd]" />
            100% GST Invoice with Input Tax Credit (ITC)
          </span>
          <span>•</span>
          <span>Indian Data Residency (Bengaluru Tier-4 Cloud)</span>
          <span>•</span>
          <span>DPDP Act 2023 & ISO 27001 Security Standard</span>
        </div>
      </div>
    </section>
  );
};
