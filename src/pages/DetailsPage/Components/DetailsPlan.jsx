import React, { useState } from 'react';
import fonts from '../../../components/Common/Font';

const DetailsPlan = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const imageUrl = 'https://d1di04ifehjy6m.cloudfront.net/media/filer_public/04/49/0449de0d-fc02-4c80-a189-f719585ea8a4/master_plan.png';

  const openFullScreen = () => {
    setIsFullScreen(true);
  };

  const closeFullScreen = (e) => {
    e.stopPropagation();
    setIsFullScreen(false);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeFullScreen(e);
    }
  };

  return (
    <div style={styles.container}>
      {/* Heading */}
      <h2 style={styles.heading}>
        Plan
      </h2>

      {/* Image Container */}
      <div style={styles.imageWrapper}>
        <div style={styles.imageContainer}>
          <img
            src={imageUrl}
            alt="Master Plan"
            onClick={openFullScreen}
            style={styles.planImage}
          />
        </div>
      </div>

      {isFullScreen && (
        <div
          style={styles.fullscreenOverlay}
          onClick={handleBackdropClick}
        >
          <button
            onClick={closeFullScreen}
            style={styles.closeButton}
          >
            ×
          </button>
          <div style={styles.fullscreenContainer}>
            <img
              src={imageUrl}
              alt="Master Plan - Full View"
              style={styles.fullscreenImage}
            />
          </div>
        </div>
      )}
    </div>
  );
};

// Styles object
const styles = {
  container: {
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center',
    fontFamily: fonts.Noto
  },
  heading: {
    fontSize: '32px',
    fontWeight: '500',
    color: '#000',
    marginBottom: '30px',
    textAlign: 'left',
    fontFamily: fonts.Noto
  },
  imageWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    position: 'relative',
    display: 'inline-block',
    cursor: 'pointer',
    borderRadius: '0px',
    overflow: 'hidden',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    width: '600px',
    maxWidth: '100%',
    height: '400px'
  },
  planImage: {
    width: '100%',
    height: '100%',
    display: 'block',
    objectFit: 'cover'
  },
  fullscreenOverlay: {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    background: 'rgba(0, 0, 0, 0.9)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: '9999',
    padding: '20px'
  },
  fullscreenContainer: {
    position: 'relative',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  closeButton: {
    position: 'fixed',
    top: '20px',
    right: '20px',
    background: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    fontSize: '30px',
    fontWeight: 'bold',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: '10000',
    fontFamily: fonts.Noto,
    color: '#000',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
  },
  fullscreenImage: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    borderRadius: '0px'
  }
};

export default DetailsPlan;
