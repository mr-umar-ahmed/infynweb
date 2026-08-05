import React, { useState } from 'react';
import { FAQS } from '../data/mockData';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

interface FaqSectionProps {
  onBookDemo: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onBookDemo }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 mb-20 relative">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-[#3525cd]/10 text-[#3525cd] px-4 py-1 rounded-full font-bold tracking-wider uppercase text-xs mb-3 border border-[#3525cd]/20">
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0b1c30] mb-3 tracking-tight font-sans">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-[#464555] max-w-xl mx-auto font-normal">
            Everything you need to know about Karnataka Board sync, Razorpay UPI fee collection, Kannada language alerts, and Indian data compliance.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-sm text-[#0b1c30] hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <span className="bg-[#3525cd]/10 text-[#3525cd] text-[11px] px-2.5 py-1 rounded-md font-mono shrink-0">
                      {faq.category}
                    </span>
                    <span className="leading-snug">{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#3525cd]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs text-[#464555] leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    <p className="p-3 bg-white rounded-xl border border-slate-200/80">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Need more help banner */}
        <div className="mt-10 p-6 bg-gradient-to-r from-[#eff4ff] to-[#f8f9ff] rounded-2xl border border-[#d3e4fe] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#3525cd]/10 text-[#3525cd] flex items-center justify-center shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#0b1c30]">Have a custom institutional requirement?</h4>
              <p className="text-xs text-[#464555]">Our Electronic City solution engineers are ready to assist you.</p>
            </div>
          </div>

          <button
            onClick={onBookDemo}
            className="bg-[#0b1c30] hover:bg-[#1a2e45] text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all shadow-sm shrink-0 cursor-pointer"
          >
            Speak with an Engineer
          </button>
        </div>
      </div>
    </section>
  );
};
