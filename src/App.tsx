import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustedLogos } from './components/TrustedLogos';
import { FutureErp } from './components/FutureErp';
import { SolutionsGrid } from './components/SolutionsGrid';
import { WorksGrid } from './components/WorksGrid';
import { FeeCalculator } from './components/FeeCalculator';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FaqSection } from './components/FaqSection';
import { GlobalInfrastructure } from './components/GlobalInfrastructure';
import { Footer } from './components/Footer';

// Modals
import { FreeTrialModal } from './components/modals/FreeTrialModal';
import { LiveDemoModal } from './components/modals/LiveDemoModal';
import { SignInModal } from './components/modals/SignInModal';
import { SolutionDetailDrawer } from './components/modals/SolutionDetailDrawer';
import { NetworkMapModal } from './components/modals/NetworkMapModal';
import { LeaderCaseStudyModal } from './components/modals/LeaderCaseStudyModal';

import { SOLUTIONS_DATA } from './data/mockData';
import { LeaderCompany, SolutionInfo, SolutionType } from './types';
import { CheckCircle2, UserCheck, X } from 'lucide-react';

export default function App() {
  // Modal state management
  const [trialModalOpen, setTrialModalOpen] = useState(false);
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [signInModalOpen, setSignInModalOpen] = useState(false);
  const [networkMapModalOpen, setNetworkMapModalOpen] = useState(false);
  const [selectedSolution, setSelectedSolution] = useState<SolutionInfo | null>(null);
  const [selectedLeader, setSelectedLeader] = useState<LeaderCompany | null>(null);

  // User Session State
  const [userSession, setUserSession] = useState<{ name: string; role: string } | null>(null);

  // Notification Toast State
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((prev) => (prev === message ? null : prev));
    }, 4500);
  };

  const handleSelectSolution = (type: SolutionType) => {
    setSelectedSolution(SOLUTIONS_DATA[type]);
  };

  const handleLoginSuccess = (name: string, role: string) => {
    setUserSession({ name, role });
    showToast(`Welcome back, ${name}! (${role})`);
  };

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9ff] text-[#0b1c30] relative font-sans antialiased selection:bg-[#3525cd] selection:text-white">
      {/* Background Abstract Blur Decor */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#3525cd]/10 via-[#f8f9ff] to-[#fea619]/10 blur-[120px] pointer-events-none" />

      {/* Logged in notification banner if applicable */}
      {userSession && (
        <div className="bg-[#3525cd] text-white text-xs font-semibold py-1.5 px-4 text-center flex items-center justify-center gap-2 fixed top-0 inset-x-0 z-50 shadow-sm">
          <UserCheck className="w-3.5 h-3.5" />
          <span>Active Session: <strong>{userSession.name}</strong></span>
          <button 
            onClick={() => setUserSession(null)}
            className="underline ml-2 hover:opacity-80 text-[11px]"
          >
            Sign Out
          </button>
        </div>
      )}

      {/* Top Navbar */}
      <div className={userSession ? 'mt-7' : ''}>
        <Navbar
          onOpenFreeTrial={() => setTrialModalOpen(true)}
          onOpenSignIn={() => setSignInModalOpen(true)}
          onSelectSolution={handleSelectSolution}
          onScrollToSection={handleScrollToSection}
        />
      </div>

      {/* Main Content Sections */}
      <main className="max-w-[1280px] mx-auto px-4 md:px-6">
        <Hero
          onStartFreeTrial={() => setTrialModalOpen(true)}
          onBookDemo={() => setDemoModalOpen(true)}
        />

        <TrustedLogos
          onSelectLeader={(leader) => setSelectedLeader(leader)}
        />

        <FutureErp
          onNotify={showToast}
        />

        <SolutionsGrid
          onSelectSolution={handleSelectSolution}
        />

        <WorksGrid
          onOpenFreeTrial={() => setTrialModalOpen(true)}
          onNotify={showToast}
        />

        <FeeCalculator
          onOpenFreeTrial={() => setTrialModalOpen(true)}
        />

        <Testimonials />

        <Pricing
          onOpenFreeTrial={() => setTrialModalOpen(true)}
          onBookDemo={() => setDemoModalOpen(true)}
        />

        <FaqSection
          onBookDemo={() => setDemoModalOpen(true)}
        />

        <GlobalInfrastructure
          onOpenNetworkMap={() => setNetworkMapModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenModal={(type) => {
          if (type === 'book-demo') setDemoModalOpen(true);
          if (type === 'free-trial') setTrialModalOpen(true);
        }}
        onNotify={showToast}
      />

      {/* Interactive Modals */}
      <FreeTrialModal
        isOpen={trialModalOpen}
        onClose={() => setTrialModalOpen(false)}
        onSuccess={showToast}
      />

      <LiveDemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        onSuccess={showToast}
      />

      <SignInModal
        isOpen={signInModalOpen}
        onClose={() => setSignInModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />

      <SolutionDetailDrawer
        solution={selectedSolution}
        onClose={() => setSelectedSolution(null)}
        onOpenFreeTrial={() => setTrialModalOpen(true)}
      />

      <NetworkMapModal
        isOpen={networkMapModalOpen}
        onClose={() => setNetworkMapModalOpen(false)}
        onNotify={showToast}
      />

      <LeaderCaseStudyModal
        leader={selectedLeader}
        onClose={() => setSelectedLeader(null)}
        onOpenFreeTrial={() => setTrialModalOpen(true)}
      />

      {/* Floating Notification Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0b1c30] text-white text-xs font-semibold px-5 py-3.5 rounded-2xl shadow-2xl border border-slate-700 flex items-center gap-3 animate-in slide-in-from-bottom duration-300 max-w-md">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span className="flex-1 leading-snug">{toastMessage}</span>
          <button 
            onClick={() => setToastMessage(null)}
            className="text-slate-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
