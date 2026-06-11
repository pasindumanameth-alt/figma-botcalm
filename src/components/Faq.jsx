import React, { useState } from 'react';

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      q: 'WHAT IS TVK?',
      a: 'TVK, or Temporal Voyage Key, is a blockchain token that integrates time-based utilities, allowing users to interact with smart contracts, staking, and governance across past, present, and future events.',
    },
    {
      q: 'HOW CAN I BUY TVK?',
      a: 'You can buy TVK directly using our swap modal by connecting a Web3 wallet (such as MetaMask) and swapping Ethereum, BNB, or USDT for TVK tokens.',
    },
    {
      q: 'WHAT ARE THE BENEFITS OF STAKING TVK?',
      a: 'Staking TVK allows you to earn timeline rewards, unlock premium time-travel experiences, and gain exclusive voting power inside our transdimensional DAO.',
    },
    {
      q: 'WHAT MAKES TVK DIFFERENT FROM OTHER TOKENS?',
      a: 'Unlike standard tokens, TVK features custom temporal mechanics, timeline event participation, and interactive Web3 widgets built directly into its core.',
    },
    {
      q: 'HOW CAN I PARTICIPATE IN GOVERNANCE?',
      a: 'Holding TVK gives you direct voting rights in the TVK DAO. You can vote on temporal updates, timeline expansions, and future coordinate configurations.',
    },
    {
      q: 'IS TVK SECURE?',
      a: 'Absolutely. Our smart contracts are fully audited, with liquidity locked securely to prevent temporal slippage and safeguard your assets across all eras.',
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section faq-page-section">
      <div className="container faq-page-container">
        
        {/* Left Side: Dumbbell Lifting Mascot */}
        <div className="faq-mascot-left">
          <img
            src="/assets/faq_weight_mascot.png"
            alt="TVK Mascot lifting dumbbells"
            className="faq-weight-mascot-img"
          />
        </div>

        {/* Right Side: FAQ Accordion */}
        <div className="faq-content-right">
          <h2 className="faq-page-title">FAQ</h2>
          
          <div className="faq-accordion-list">
            {faqs.map((faq, index) => {
              const isActive = activeIndex === index;
              return (
                <div key={index} className={`faq-accordion-item ${isActive ? 'active' : ''}`}>
                  <button
                    className="faq-question-btn"
                    onClick={() => handleToggle(index)}
                    aria-expanded={isActive}
                  >
                    <span>{faq.q}</span>
                    {/* The mockup shows '+' for expanded, and '-' for collapsed */}
                    <span className="faq-toggle-symbol">{isActive ? '+' : '-'}</span>
                  </button>
                  <div
                    className="faq-answer-block"
                    style={{
                      maxHeight: isActive ? '200px' : '0',
                      transition: 'all 0.3s ease-out',
                    }}
                  >
                    <p className="faq-answer-text">{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Top-Right Waving Mascot decoration */}
        <img
          src="/assets/community_clock_mascot.png"
          alt="TVK Mascot Waving"
          className="faq-float-waving-img"
        />

      </div>

      {/* Infinite scrolling ticker tape at the bottom of the section */}
      <div className="faq-ticker-tape">
        <div className="faq-ticker-track">
          {/* Content Block 1 */}
          <div className="faq-ticker-content">
            {[...Array(12)].map((_, i) => (
              <div key={`ticker-1-${i}`} className="faq-ticker-item">
                <span>TVK</span>
                <svg viewBox="0 0 24 24" width="28" height="28" className="faq-ticker-clock-svg" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" strokeLinecap="round" />
                </svg>
              </div>
            ))}
          </div>
          {/* Content Block 2 (Duplicate for infinite seamless scroll) */}
          <div className="faq-ticker-content" aria-hidden="true">
            {[...Array(12)].map((_, i) => (
              <div key={`ticker-2-${i}`} className="faq-ticker-item">
                <span>TVK</span>
                <svg viewBox="0 0 24 24" width="28" height="28" className="faq-ticker-clock-svg" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" strokeLinecap="round" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}

