import React, { useState } from 'react';

export default function Navbar({ currentPage, onOpenModal }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'HOME', path: '#/' },
    { id: 'about', label: 'ABOUT', path: '#/about' },
    { id: 'how-it-works', label: 'HOW IT WORKS', path: '#/how-it-works' },
    { id: 'tokenomics', label: 'TOKENOMICS', path: '#/tokenomics' },
    { id: 'roadmap', label: 'ROADMAP', path: '#/roadmap' },
    { id: 'community', label: 'COMMUNITY', path: '#/community' },
    { id: 'faq', label: 'FAQ', path: '#/faq' },
  ];

  return (
    <>
      <header className="header">
        <div className="header-container">
          <a href="#/" className="logo-area" onClick={() => setDrawerOpen(false)}>
            <img src="/assets/header_logo_transparent.png" alt="TVK Logo" className="nav-logo-img" />
          </a>
          
          <nav className="nav-menu">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.path}
                className={`nav-link ${currentPage === item.id ? 'active' : ''}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <button className="btn btn-join" onClick={() => onOpenModal('join-modal')}>
              JOIN NOW
            </button>
            <button
              className="hamburger-menu"
              onClick={() => setDrawerOpen(!drawerOpen)}
              aria-label="Toggle Navigation"
            >
              <span style={{ transform: drawerOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
              <span style={{ opacity: drawerOpen ? 0 : 1 }}></span>
              <span style={{ transform: drawerOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none' }}></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-drawer ${drawerOpen ? 'open' : ''}`}>
        <nav className="mobile-nav-links">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.path}
              onClick={() => setDrawerOpen(false)}
              className={`mobile-link ${currentPage === item.id ? 'active' : ''}`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
