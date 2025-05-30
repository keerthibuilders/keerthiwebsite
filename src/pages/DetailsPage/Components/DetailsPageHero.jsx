import React, { useEffect } from 'react';

const DetailsPageHero = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Make navbar transparent when component mounts
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      navbar.style.backgroundColor = 'transparent';
      navbar.style.position = 'absolute';
      navbar.style.zIndex = '1050';
      navbar.style.width = '100%';
      navbar.style.top = '0';
    }

    // Reset navbar when component unmounts
    return () => {
      if (navbar) {
        navbar.style.backgroundColor = '#fff';
        navbar.style.position = 'static';
        navbar.style.zIndex = 'auto';
      }
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
      
      
      
      {/* Custom styles */}
      <style>
        {`
          .hero-section {
            transition: transform 0.3s ease;
          }
          
          .hero-section:hover .hero-image {
            transform: scale(1.02);
          }
          
          /* Make navbar text visible on hero image */
          .navbar .nav-link {
            color: white !important;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.5) !important;
          }
          
          .navbar .navbar-brand h1 {
            color: white !important;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.5) !important;
          }
          
          .navbar .navbar-brand p {
            color: rgba(255,255,255,0.9) !important;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.5) !important;
          }
          
          .navbar .btn {
            background-color: rgba(28, 84, 44, 0.9) !important;
            border: 1px solid rgba(255,255,255,0.3) !important;
          }
          
          @media (max-width: 768px) {
            .hero-section {
              height: 50vh !important;
            }
            
            .hero-image {
              object-position: center top !important;
            }
          }
          
          @media (max-width: 480px) {
            .hero-section {
              height: 40vh !important;
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
