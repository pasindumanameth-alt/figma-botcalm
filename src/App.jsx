import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Tokenomics from './components/Tokenomics';
import Roadmap from './components/Roadmap';
import Community from './components/Community';
import Faq from './components/Faq';
import { BuyModal, JoinModal } from './components/Modals';

function App() {
  const [activeModal, setActiveModal] = useState(null); // 'buy-modal' | 'join-modal' | null
  const [currentPage, setCurrentPage] = useState('home');

  // Listen for hash changes to simulate multi-page routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash; // e.g. "#/about" or "#/"
      // Extract page key: remove leading "#" and "/"
      const pageKey = hash.replace(/^#\/?/, '') || 'home';
      setCurrentPage(pageKey);
      // Automatically scroll window to the top on navigate
      window.scrollTo(0, 0);
    };

    // Trigger router on initial page mount
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleOpenModal = (modalName) => {
    setActiveModal(modalName);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  // Helper to render the active page view
  const renderActivePage = () => {
    switch (currentPage) {
      case 'home':
        return <Hero onOpenModal={handleOpenModal} />;
      case 'about':
        return <About />;
      case 'how-it-works':
        return <HowItWorks />;
      case 'tokenomics':
        return <Tokenomics />;
      case 'roadmap':
        return <Roadmap />;
      case 'community':
        return <Community />;
      case 'faq':
        return <Faq />;
      default:
        return <Hero onOpenModal={handleOpenModal} />;
    }
  };

  return (
    <div className="app-container">
      {/* Header Navigation */}
      <Navbar currentPage={currentPage} onOpenModal={handleOpenModal} />

      {/* Main Page Content */}
      <main>
        {renderActivePage()}
      </main>



      {/* Transdimensional Modals */}
      <BuyModal isOpen={activeModal === 'buy-modal'} onClose={handleCloseModal} />
      <JoinModal isOpen={activeModal === 'join-modal'} onClose={handleCloseModal} />
    </div>
  );
}

export default App;
