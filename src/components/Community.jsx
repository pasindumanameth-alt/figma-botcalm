import React from 'react';

export default function Community() {
  const links = [
    {
      id: 'dextools',
      url: 'https://www.dextools.io',
      img: '/assets/logo_dextools_cropped.png',
      alt: 'DEXTOOLS',
    },
    {
      id: 'x',
      url: 'https://x.com',
      img: '/assets/logo_x_cropped.png',
      alt: 'X',
    },
    {
      id: 'telegram',
      url: 'https://t.me',
      img: '/assets/logo_telegram_cropped.png',
      alt: 'TELEGRAM',
    },
    {
      id: 'dexscreener',
      url: 'https://dexscreener.com',
      img: '/assets/logo_dexscreener_cropped.png',
      alt: 'DEXSCREENER',
    },
  ];

  return (
    <section id="community" className="section community-page-section">
      <div className="container community-page-container">
        <h2 className="community-page-title">JOIN THE TEMPORAL VOYAGE KEY (TVK) COMMUNITY</h2>
        
        <p className="community-page-subtitle">
          The future of TVK is shaped by YOU. Become part of our growing community and take an active role in driving the
          journey forward.
        </p>

        {/* Dashboard layout with center thug mascot and side button columns */}
        <div className="community-layout-wrapper">
          {/* Left Buttons Column */}
          <div className="community-col-btns">
            <a href={links[0].url} target="_blank" rel="noopener noreferrer" className="community-pill-btn">
              <img src={links[0].img} alt={links[0].alt} className="community-btn-img" />
            </a>
            <a href={links[1].url} target="_blank" rel="noopener noreferrer" className="community-pill-btn">
              <img src={links[1].img} alt={links[1].alt} className="community-btn-img" />
            </a>
          </div>

          {/* Central Cool Clock Mascot */}
          <div className="community-mascot-mid">
            <img
              src="/assets/community_thug_mascot_cropped.png"
              alt="TVK Thug Life Clock Mascot"
              className="thug-mascot-img"
            />
          </div>

          {/* Right Buttons Column */}
          <div className="community-col-btns">
            <a href={links[2].url} target="_blank" rel="noopener noreferrer" className="community-pill-btn">
              <img src={links[2].img} alt={links[2].alt} className="community-btn-img" />
            </a>
            <a href={links[3].url} target="_blank" rel="noopener noreferrer" className="community-pill-btn">
              <img src={links[3].img} alt={links[3].alt} className="community-btn-img" />
            </a>
          </div>
        </div>

        {/* Top-Right Waving Mascot decoration */}
        <img
          src="/assets/community_clock_mascot.png"
          alt="TVK Mascot Floating"
          className="community-float-fly-img"
        />
      </div>
    </section>
  );
}

