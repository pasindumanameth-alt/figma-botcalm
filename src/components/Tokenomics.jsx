import React from 'react';

export default function Tokenomics() {
  return (
    <section id="tokenomics" className="section tokenomics-section">
      <div className="container tokenomics-container">
        <h2 className="tokenomics-title">TVK TOKENOMICS</h2>
        
        <p className="tokenomics-subtitle">
          Discover the structure behind TVK. With a fixed supply, staking options, and rewarding incentives, TVK unlocks
          exciting opportunities for its community.
        </p>

        {/* Chart Layout */}
        <div className="tokenomics-chart-area">
          {/* High-Fidelity Pie Chart Image */}
          <img
            src="/assets/tokenomics_pie_chart.png"
            alt="TVK Tokenomics Pie Chart"
            className="tokenomics-chart-img"
          />

          {/* Left bicycle rider clock mascot */}
          <img
            src="/assets/token_bike_left_new.png"
            alt="TVK Mascot Riding Bike Waving"
            className="token-bike-left-img"
          />

          {/* Right bicycle rider clock mascot */}
          <img
            src="/assets/token_bike_right_new.png"
            alt="TVK Mascot Riding Bike Holding Handlebars"
            className="token-bike-right-img"
          />

          {/* Flying mascot at top-right */}
          <img
            src="/assets/token_fly_new.png"
            alt="TVK Mascot Floating"
            className="token-fly-img"
          />
        </div>
      </div>
    </section>
  );
}

