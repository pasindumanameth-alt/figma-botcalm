import React, { useState } from 'react';

export default function HowItWorks() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      num: 1,
      title: '1. TIME-ORIENTED SMART CONTRACTS',
      desc: 'At the core of TVK is the use of time-oriented smart contracts. These smart contracts are designed to execute actions based on specific timeframes or conditions, allowing users to lock or release assets, make timed investments, and interact with the blockchain across different periods—past, present, or future. These contracts are immutable, transparent, and triggered by time-related conditions, enabling highly secure, time-sensitive transactions.',
    },
    {
      num: 2,
      title: '2. TRANSDIMENSIONAL STAKING VAULTS',
      desc: "Stake your TVK tokens inside specific historical or futuristic epoch vaults. Staking in the 'Jurassic Vault' or 'Cyberpunk 3026 Vault' yields variable temporal returns based on timeline stability and staking density. Users can compound rewards across eras or retrieve assets using secure smart locks.",
    },
    {
      num: 3,
      title: '3. PORTAL APPARATUS BRIDGING',
      desc: 'Connect your Web3 credentials to initiate multiverse bridging. The Portal Web App translates standard transactions into transdimensional coordinates, allowing users to unlock historical event simulators, buy retro temporal NFTs, and vote on DAO timeline proposals.',
    },
    {
      num: 4,
      title: '4. QUANTUM STABILITY ENGINE',
      desc: 'To prevent double-spending across timelines and timeline splits, TVK utilizes a specialized Quantum Stability Engine. This protocol guarantees that all time-travel staking and vault actions resolve deterministically, avoiding temporal paradoxes and ensuring absolute safety for your assets.',
    },
  ];

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="how-it-works" className="section how-works-section">
      <div className="container how-works-container">
        <h2 className="how-works-title">HOW DOES TVK WORK?</h2>
        <p className="how-works-subtitle">
          Temporal Voyage Key (TVK) merges time and blockchain, offering users a unique DeFi experience with time-based
          mechanics. It enables transactions and governance across multiple time points.
        </p>

        {/* Carousel / Device Wrapper */}
        <div className="how-works-carousel-wrapper">
          {/* Left Arrow Button */}
          <button className="carousel-nav-btn prev-btn" onClick={handlePrev} aria-label="Previous Slide">
            <span className="arrow-left"></span>
          </button>

          {/* TV Monitor Wrapper */}
          <div className="tv-monitor-wrapper">
            <img src="/assets/work_tv_frame.png" alt="Retro TV" className="tv-frame-bg-img" />
            
            {/* TV Screen content overlays the image */}
            <div className="tv-screen-overlay">
              <h3 className="tv-slide-title">{slides[activeSlide].title}</h3>
              <p className="tv-slide-desc">{slides[activeSlide].desc}</p>
              
              {/* Numeric Indicators */}
              <div className="tv-indicators">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    className={`tv-indicator-dot ${activeSlide === idx ? 'active' : ''}`}
                    onClick={() => setActiveSlide(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Arrow Button */}
          <button className="carousel-nav-btn next-btn" onClick={handleNext} aria-label="Next Slide">
            <span className="arrow-right"></span>
          </button>
        </div>

        {/* Mascot Assets */}
        <img
          src="/assets/work_sleep_mascot_new.png"
          alt="Sleeping TVK Clock Mascot"
          className="how-works-sleep-img"
        />
        <img
          src="/assets/work_fly_mascot_new.png"
          alt="Flying TVK Clock Mascot"
          className="how-works-fly-img"
        />
      </div>
    </section>
  );
}

