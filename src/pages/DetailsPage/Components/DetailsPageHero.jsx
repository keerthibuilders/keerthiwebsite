import React, { useEffect } from 'react';

const DetailsPageHero = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Force apply details page hero background class (unique name)
    const applyDetailsHeroBackground = () => {
      document.body.classList.add('has-details-page-hero-bg');
      
      // Force update navbar styles
      const navbar = document.querySelector('header') || 
                    document.querySelector('nav') || 
                    document.querySelector('.navbar');
      
      if (navbar) {
        navbar.style.position = 'absolute';
        navbar.style.top = '0';
        navbar.style.left = '0';
        navbar.style.right = '0';
        navbar.style.zIndex = '1000';
        navbar.style.backgroundColor = 'transparent';
      }
    };

    // Apply immediately
    applyDetailsHeroBackground();
    
    // Also apply after a short delay to ensure DOM is ready
    const timeoutId = setTimeout(applyDetailsHeroBackground, 100);

    // Clean up when component unmounts
    return () => {
      clearTimeout(timeoutId);
      document.body.classList.remove('has-details-page-hero-bg');
      
      // Reset navbar styles when leaving
      const navbar = document.querySelector('header') || 
                    document.querySelector('nav') || 
                    document.querySelector('.navbar');
      
      if (navbar) {
        navbar.style.position = '';
        navbar.style.backgroundColor = '';
      }
    };
  }, []);

  // Additional effect to handle route changes
  useEffect(() => {
    const handleRouteChange = () => {
      // Reapply details background styles when route changes
      document.body.classList.add('has-details-page-hero-bg');
    };

    // Listen for popstate events (back/forward navigation)
    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.heroSection}>
        <img 
          src="https://images.pexels.com/photos/1612351/pexels-photo-1612351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Elegant Modern Dining Room with Chandelier"
          style={styles.heroImage}
        />
        
        {/* Optional overlay for better text readability */}
        <div style={styles.overlay}></div>
      </div>

      {/* Add global styles for navbar when details page hero background is present */}
      <style>
        {`
          body {
            margin: 0;
            padding: 0;
            overflow-x: hidden;
          }
          
          /* Main navbar styling */
          body.has-details-page-hero-bg header,
          body.has-details-page-hero-bg nav:not(.details-tab-navbar),
          body.has-details-page-hero-bg .navbar:not(.details-tab-navbar) {
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            z-index: 1000 !important;
            background-color: transparent !important;
          }
          
          body.has-details-page-hero-bg .navbar-brand h1 {
            color: #ffffff !important;
            text-shadow: 0 2px 4px rgba(0,0,0,0.5) !important;
          }
          
          body.has-details-page-hero-bg .navbar-brand p {
            color: #e0e0e0 !important;
            text-shadow: 0 1px 3px rgba(0,0,0,0.5) !important;
          }
          
          body.has-details-page-hero-bg .nav-link:not(.details-tab-navbar .nav-link) {
            color: #ffffff !important;
            text-shadow: 0 1px 3px rgba(0,0,0,0.5) !important;
          }
          
          body.has-details-page-hero-bg .navbar-toggler-icon {
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(255, 255, 255, 1)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important;
          }
          
          /* Mobile side menu styling - override white text with green */
          @media (max-width: 991.98px) {
            body.has-details-page-hero-bg .side-menu .nav-link {
              color: #1C542C !important;
              text-shadow: none !important;
            }
            
            body.has-details-page-hero-bg .side-menu .nav-link:hover {
              color: #164023 !important;
              text-shadow: none !important;
            }
          }
          
          
          
          body.has-details-page-hero-bg .details-tab-navbar .nav-link {
            color: #ffffff !important;
            text-shadow: 0 1px 3px rgba(0,0,0,0.5) !important;
          }
          
          body.has-details-page-hero-bg .details-tab-navbar .nav-link:hover {
            color: #e0e0e0 !important;
          }
          
          body.has-details-page-hero-bg .details-tab-navbar .nav-link.active {
            color: #ffffff !important;
            font-weight: 600 !important;
            border-bottom: 2px solid #ffffff !important;
          }
          
          /* Keep sticky behavior for tab navbar */
          body.has-details-page-hero-bg .sticky-tab-navbar {
            position: fixed !important;
            background-color: rgba(128, 128, 128, 0.9) !important;
            backdrop-filter: blur(10px) !important;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1) !important;
          }
          
          body.has-details-page-hero-bg .sticky-tab-navbar .nav-link {
            color: #ffffff !important;
            text-shadow: none !important;
          }
          
          body.has-details-page-hero-bg .sticky-tab-navbar .nav-link.active {
            color: #1C542C !important;
            border-bottom: 2px solid #1C542C !important;
          }
          
          @media (max-width: 576px) {
            body.has-details-page-hero-bg .navbar-brand img {
              height: 50px !important;
              width: 80px !important;
            }
            
            body.has-details-page-hero-bg .navbar-brand h1 {
              font-size: 14px !important;
            }
            
            body.has-details-page-hero-bg .navbar-brand p {
              font-size: 9px !important;
            }
          }
        `}
      </style>
    </div>
  );
};

// Styles object
const styles = {
  container: {
    width: '100%',
    minHeight: '90vh',
    margin: 0,
    padding: 0,
    backgroundColor: '#fff'
  },
  heroSection: {
    width: '100%',
    height: '90vh', // Full viewport height to cover navbar
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: '#000'
  },
  heroImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
    display: 'block',
    transition: 'transform 0.3s ease'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.2) 100%)',
    pointerEvents: 'none'
  },
};

export default DetailsPageHero;
