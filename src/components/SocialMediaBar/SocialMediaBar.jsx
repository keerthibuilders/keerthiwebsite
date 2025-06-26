import React, { useState } from 'react';

const SocialMediaBar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleSocialClick = (platform) => {
    const urls = {
      youtube: 'https://www.youtube.com/channel/UCgrjUXJh7DfBnhQt3NxPLeA',
      facebook: 'https://www.facebook.com/keerthibuildersbangalore/', 
      instagram: 'https://www.instagram.com/keerthibuildersblr/' 
    };
    
    window.open(urls[platform], '_blank');
  };

  return (
    <div 
      className="position-fixed" 
      style={styles.container}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Social Icons Container - Positioned vertically on top */}
      <div 
        className="position-absolute d-flex flex-column align-items-center"
        style={{
          ...styles.iconsContainer,
          opacity: isHovered ? 1 : 0,
          visibility: isHovered ? 'visible' : 'hidden',
          transform: isHovered ? 'translateY(0)' : 'translateY(20px)'
        }}
      >
        {/* YouTube Icon */}
        <div 
          className="d-flex align-items-center justify-content-center mb-2 icon-wrapper"
          style={{
            ...styles.iconWrapper,
            backgroundColor: '#FF0000', // YouTube red
            border: '1px solid rgba(255, 0, 0, 0.3)',
          }}
          onClick={() => handleSocialClick('youtube')}
          title="Follow us on YouTube"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        </div>

        {/* Facebook Icon */}
        <div 
          className="d-flex align-items-center justify-content-center mb-2 icon-wrapper"
          style={{
            ...styles.iconWrapper,
            backgroundColor: '#1877F2', // Facebook blue
            border: '1px solid rgba(24, 119, 242, 0.3)',
          }}
          onClick={() => handleSocialClick('facebook')}
          title="Follow us on Facebook"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </div>

        {/* Instagram Icon */}
        <div 
          className="d-flex align-items-center justify-content-center icon-wrapper"
          style={{
            ...styles.iconWrapper,
            background: 'linear-gradient(45deg, #F58529, #DD2A7B, #8134AF, #515BD4)', // Instagram gradient
            border: '1px solid rgba(245, 133, 41, 0.3)',
          }}
          onClick={() => handleSocialClick('instagram')}
          title="Follow us on Instagram"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </div>
      </div>

      {/* Black Background Bar */}
      <div 
        className="d-flex align-items-center justify-content-center text-white fw-bold"
        style={styles.socialBar}
      >
        <span style={styles.rotatedText}>SOCIAL</span>
      </div>

      {/* Custom CSS */}
      <style>
        {`
          .icon-wrapper:hover {
            transform: scale(1.15) !important;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3) !important;
          }
          
          .icon-wrapper:active {
            transform: scale(0.95) !important;
          }
          
          @media (max-width: 768px) {
            .social-media-container {
              display: none !important;
            }
          }
        `}
      </style>
    </div>
  );
};

const styles = {
  container: {
    bottom: '20px',
    left: '0',
    zIndex: 9998,
    cursor: 'pointer',
    className: 'social-media-container',
  },
  socialBar: {
    backgroundColor: '#000000',
    width: '35px',
    height: '80px',
    writingMode: 'vertical-rl',
    textOrientation: 'mixed',
    fontSize: '12px',
    letterSpacing: '1px',
    borderTopRightRadius: '6px',
    borderBottomRightRadius: '6px',
    transition: 'all 0.3s ease',
    position: 'relative',
    zIndex: 1,
  },
  rotatedText: {
    transform: 'rotate(180deg)',
  },
  iconsContainer: {
    bottom: '85px', // Position above the black bar
    left: '0',
    width: '35px', // Same width as the black bar
    padding: '8px 0',
    transition: 'all 0.4s ease',
    zIndex: 2,
    borderTopLeftRadius: '6px',
    borderTopRightRadius: '6px',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    borderBottom: 'none',
    backgroundColor: 'rgba(0, 0, 0, 0.1)', // Subtle background for better contrast
  },
  iconWrapper: {
    width: '28px',
    height: '28px',
    borderRadius: '50%',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
  }
};

export default SocialMediaBar;
