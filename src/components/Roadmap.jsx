import React from 'react';

export default function Roadmap() {
  const leftItems = [
    {
      quarter: 'Q3 2025',
      title: 'CONCEPT & DEVELOPMENT',
      bullets: [
        'Finalize TVK concept and tokenomics',
        'Design the time-travel clock character',
        'Develop core smart contracts and blockchain integration',
      ],
    },
    {
      quarter: 'Q4 2025',
      title: 'PRIVATE LAUNCH & EARLY COMMUNITY',
      bullets: [
        'Launch private token sale and early staking program',
        'Begin community building and governance testing',
        'Start beta testing time-oriented features',
      ],
    },
    {
      quarter: 'Q1 2026',
      title: 'PUBLIC LAUNCH & ECOSYSTEM EXPANSION',
      bullets: [
        'Public token sale and listing on major DEXs',
        'Deploy liquidity pools and staking platforms',
        'Expand ecosystem partnerships',
      ],
    },
  ];

  const rightItems = [
    {
      quarter: 'Q2 2026',
      title: 'TIME TRAVEL UTILITIES',
      bullets: [
        'Activate advanced time-based smart contracts',
        'Implement time-dependent rewards and governance mechanisms',
        'Launch interactive timeline features in UI',
      ],
    },
    {
      quarter: 'Q3 2026',
      title: 'GOVERNANCE & COMMUNITY REWARDS',
      bullets: [
        'Enable full decentralized governance with voting rights',
        'Introduce community-driven proposals and incentives',
        'Distribute rewards for active participation',
      ],
    },
    {
      quarter: 'Q4 2026',
      title: 'SCALING & FUTURE INITIATIVES',
      bullets: [
        'Expand TVK into additional blockchain networks',
        'Introduce advanced time-travel utilities and DeFi applications',
        'Launch marketing campaigns for global adoption',
      ],
    },
  ];
  return (
    <section id="roadmap" className="section roadmap-section">
      <div className="container roadmap-container">
        {/* Top Header / Graphical Timeline */}
        <div className="roadmap-graphic-area">
          <div className="roadmap-timeline-wrapper">
            <img
              src="/assets/roadmap_timeline_graphic_new.png"
              alt="Transdimensional Timeline Connection"
              className="roadmap-timeline-img"
            />
          </div>
        </div>

        {/* Content Deliverables Grid Table */}
        <div className="roadmap-table-grid">
          {/* Row 1 */}
          <div className="roadmap-cell border-bottom border-right">
            <h4>{leftItems[0].quarter} - {leftItems[0].title}</h4>
            <ul>
              {leftItems[0].bullets.map((bullet, idx) => (
                <li key={idx}>{bullet}</li>
              ))}
            </ul>
          </div>
          <div className="roadmap-cell border-bottom">
            <h4>{rightItems[0].quarter} - {rightItems[0].title}</h4>
            <ul>
              {rightItems[0].bullets.map((bullet, idx) => (
                <li key={idx}>{bullet}</li>
              ))}
            </ul>
          </div>

          {/* Row 2 */}
          <div className="roadmap-cell border-bottom border-right">
            <h4>{leftItems[1].quarter} - {leftItems[1].title}</h4>
            <ul>
              {leftItems[1].bullets.map((bullet, idx) => (
                <li key={idx}>{bullet}</li>
              ))}
            </ul>
          </div>
          <div className="roadmap-cell border-bottom">
            <h4>{rightItems[1].quarter} - {rightItems[1].title}</h4>
            <ul>
              {rightItems[1].bullets.map((bullet, idx) => (
                <li key={idx}>{bullet}</li>
              ))}
            </ul>
          </div>

          {/* Row 3 */}
          <div className="roadmap-cell border-right-last">
            <h4>{leftItems[2].quarter} - {leftItems[2].title}</h4>
            <ul>
              {leftItems[2].bullets.map((bullet, idx) => (
                <li key={idx}>{bullet}</li>
              ))}
            </ul>
          </div>
          <div className="roadmap-cell">
            <h4>{rightItems[2].quarter} - {rightItems[2].title}</h4>
            <ul>
              {rightItems[2].bullets.map((bullet, idx) => (
                <li key={idx}>{bullet}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Neon Clock Mascots on Sides */}
        <img
          src="/assets/roadmap_neon_left_transparent.png"
          alt="Glowing Clock Mascot Left"
          className="roadmap-neon-left"
        />
        <img
          src="/assets/roadmap_neon_right_transparent.png"
          alt="Glowing Clock Mascot Right"
          className="roadmap-neon-right"
        />
      </div>
    </section>
  );
}
