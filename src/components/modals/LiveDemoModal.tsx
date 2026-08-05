import React, { useState } from 'react';
import { X, Calendar, Clock, Play, CheckCircle2, Video } from 'lucide-react';

interface LiveDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (msg: string) => void;
}

export const LiveDemoModal: React.FC<LiveDemoModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [activeTab, setActiveTab] = useState<'book' | 'watch'>('book');
  const [selectedDate, setSelectedDate] = useState('2026-08-06');
  const [selectedTime, setSelectedTime] = useState('10:00 AM EST');
  const [topic, setTopic] = useState('School ERP Overview');
  const [email, setEmail] = useState('');
  const [booked, setBooked] = useState(false);

  if (!isOpen) return null;

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setBooked(true);
    onSuccess(`Live demo confirmed for ${selectedDate} at ${selectedTime}! Calendar invite sent to ${email}.`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0b1c30]/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 md:p-8 shadow-2xl border border-slate-200 relative overflow-hidden">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1 rounded-full hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Tab Switcher */}
        <div className="flex border-b border-slate-200 mb-6">
          <button
            onClick={() => setActiveTab('book')}
            className={`pb-3 px-4 text-sm font-bold border-b-2 transition-all cursor-pointer ${
              activeTab === 'book'
                ? 'border-[#3525cd] text-[#3525cd]'
                : 'border-transparent text-slate-400 hover:text-slate-600'
            }`}
          >
            Schedule 1-on-1 Demo
          </button>
          <button
            onClick={() => setActiveTab('watch')}
            className={`pb-3 px-4 text-sm font-bold border-b-2 transition-all cursor-pointer ${
              activeTab === 'watch'
                ? 'border-[#3525cd] text-[#3525cd]'
                : 'border-transparent text-slate-400 hover:text-slate-600'
            }`}
          >
            Watch 2-Min Product Tour
          </button>
        </div>

        {activeTab === 'book' ? (
          !booked ? (
            <form onSubmit={handleBooking} className="space-y-4">
              <div className="text-left mb-4">
                <h3 className="text-xl font-bold text-[#0b1c30]">Book a Guided Demo</h3>
                <p className="text-xs text-[#464555]">Speak directly with a solution architect tailored to your institution.</p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0b1c30] mb-1">Select Primary Topic</label>
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-[#0b1c30] bg-white focus:outline-none focus:border-[#3525cd]"
                >
                  <option value="School ERP Overview">School & Campus ERP Suite</option>
                  <option value="Web Development Stack">High-Performance Web & CMS</option>
                  <option value="Business POS & Booking">Restaurant / Salon POS & CRM</option>
                  <option value="Global Infrastructure & Latency">Global Edge Infrastructure & SLA</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#0b1c30] mb-1">Preferred Date</label>
                  <div className="relative">
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs text-[#0b1c30] focus:outline-none focus:border-[#3525cd]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0b1c30] mb-1">Time Slot</label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs text-[#0b1c30] bg-white focus:outline-none focus:border-[#3525cd]"
                  >
                    <option value="09:00 AM EST">09:00 AM EST</option>
                    <option value="10:00 AM EST">10:00 AM EST</option>
                    <option value="01:30 PM EST">01:30 PM EST</option>
                    <option value="04:00 PM EST">04:00 PM EST</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0b1c30] mb-1">Your Email</label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-[#0b1c30] focus:outline-none focus:border-[#3525cd]"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 bg-[#3525cd] hover:bg-[#281bb3] text-white font-semibold text-sm py-3 rounded-2xl transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
              >
                <Video className="w-4 h-4" />
                <span>Confirm Calendar Invite</span>
              </button>
            </form>
          ) : (
            <div className="text-center py-8">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-[#0b1c30] mb-1">Demo Scheduled!</h3>
              <p className="text-xs text-[#464555] max-w-xs mx-auto mb-6">
                We've reserved <strong>{selectedDate} at {selectedTime}</strong> for your 1-on-1 walkthrough.
              </p>
              <button
                onClick={() => { setBooked(false); onClose(); }}
                className="bg-[#0b1c30] text-white text-xs font-semibold px-6 py-2.5 rounded-xl"
              >
                Done
              </button>
            </div>
          )
        ) : (
          <div className="space-y-4 text-center">
            <div className="relative rounded-2xl overflow-hidden bg-slate-900 aspect-video flex items-center justify-center group border border-slate-700">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
              <button 
                onClick={() => onSuccess("Playing 4K Interactive Tour of InfynLabs Tech Ecosystem...")}
                className="w-16 h-16 rounded-full bg-white/90 text-[#3525cd] flex items-center justify-center z-20 shadow-xl group-hover:scale-110 transition-transform cursor-pointer"
              >
                <Play className="w-8 h-8 fill-current ml-1" />
              </button>
              <div className="absolute bottom-4 left-4 right-4 z-20 text-left text-white">
                <p className="text-xs font-bold uppercase tracking-wider text-amber-400">Video Walkthrough</p>
                <p className="text-sm font-semibold">InfynLabs Platform Overview (2 min 14 sec)</p>
              </div>
            </div>

            <p className="text-xs text-[#464555] leading-relaxed">
              Learn how our ERP, edge CDN, and POS engines interconnect to reduce operational overhead by up to 60%.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
