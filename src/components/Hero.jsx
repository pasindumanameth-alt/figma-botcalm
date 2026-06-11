import React from 'react';

export default function Hero({ onOpenModal }) {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <h2 className="hero-subtitle">TEMPORAL VOYAGE KEY</h2>
        
        <div className="hero-title-container">
          <span className="hero-letter text-t">T</span>
          <div className="hero-v-wrapper">
            <span className="hero-letter text-v">V</span>
          </div>
          <span className="hero-letter text-k">K</span>
        </div>

        <p className="hero-tagline">The key to a timeless journey. Harness the future, today.</p>
        
        <div className="hero-cta">
          <button className="btn btn-hero-buy" onClick={() => onOpenModal('buy-modal')}>
            BUY TVK NOW
          </button>
        </div>
      </div>
    </section>
  );
}
