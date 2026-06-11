import React from 'react';

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container about-container">
        {/* Paragraph & Headline Content */}
        <div className="about-text-content">
          <h2 className="about-title">WHAT IS TEMPORAL VOYAGE KEY (TVK)?</h2>
          <p className="about-paragraph">
            Temporal Voyage Key (TVK) is not just another cryptocurrency token—it's a revolutionary key that unlocks
            the ability to traverse through time. TVK is designed to seamlessly integrate with blockchain technology,
            offering unparalleled utility in time-based activities. Whether it's making secure transactions across
            different timeframes or participating in a decentralized governance system, TVK empowers users to harness
            the future today. With its time-traveling capabilities, it unlocks endless possibilities within the
            blockchain ecosystem.
          </p>
        </div>
        
        {/* Right Side Celebratory Mascot */}
        <div className="about-right-mascot-container">
          <img
            src="/assets/about_right_mascot_new.png"
            alt="TVK Celebrating Clock Mascot"
            className="about-right-img"
          />
        </div>

        {/* Decorative Assets at the Bottom */}
        <img
          src="/assets/about_balloons_red_blue.png"
          alt="Transdimensional Balloons Left"
          className="about-balloons-left-img"
        />
        <img
          src="/assets/about_balloons_green_pink.png"
          alt="Transdimensional Balloons Right"
          className="about-balloons-right-img"
        />
        <img
          src="/assets/about_bottom_mascot_new.png"
          alt="TVK Waving Clock Mascot"
          className="about-bottom-img"
        />
      </div>
    </section>
  );
}
