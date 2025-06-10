import React, { useEffect } from 'react';

const DetailsPageHero = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
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

      {/* Basic body styles only */}
      <style>
        {`
          body {
            margin: 0;
            padding: 0;
            overflow-x: hidden;
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
    height: '90vh',
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