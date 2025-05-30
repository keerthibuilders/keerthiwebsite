import React, { useState } from 'react';
import './DetailsNavbar.css';

const DetailsNavbar = () => {
  const [activeLink, setActiveLink] = useState('project-highlights');

  const navLinks = [
    { id: 'project-highlights', label: 'Project Highlights', href: '#project-highlights' },
    { id: 'amenities', label: 'Amenities', href: '#amenities' },
    { id: 'gallery', label: 'Gallery', href: '#gallery' },
    { id: 'videos', label: 'Videos', href: '#videos' },
    { id: 'location', label: 'Location', href: '#location' }
  ];

  const handleLinkClick = (linkId) => {
    setActiveLink(linkId);
  };

  return (
    <nav className="details-navbar">
      <div className="navbar-container">
        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li key={link.id} className="navbar-item">
              <a
                href={link.href}
                className={`navbar-link ${activeLink === link.id ? 'active' : ''}`}
                onClick={() => handleLinkClick(link.id)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default DetailsNavbar;
