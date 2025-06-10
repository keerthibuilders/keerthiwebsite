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
    <>
      <style>
        {`
          .plan-container {
            padding: 40px 20px;
            max-width: 1200px;
            margin: 0 auto;
            text-align: center;
            font-family: ${fonts.Noto};
          }
          
          .plan-heading {
            font-size: 32px;
            font-weight: 500;
            color: #000;
            margin-bottom: 30px;
            text-align: left;
            font-family: ${fonts.Noto};
          }
          
          .plan-image-container {
            position: relative;
            display: inline-block;
            cursor: pointer;
            border-radius: 0;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            width: 600px;
            max-width: 100%;
            height: 400px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          
          .plan-image-container:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
          }
          
          .plan-close-button {
            position: fixed;
            top: 20px;
            right: 20px;
            background: white;
            border: none;
            border-radius: 0;
            width: 50px;
            height: 50px;
            font-size: 30px;
            font-weight: bold;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            font-family: ${fonts.Noto};
            color: #000;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
            transition: background-color 0.3s ease;
          }
          
          .plan-close-button:hover {
            background-color: #f0f0f0;
          }
          
          /* Mobile Styles */
          @media (max-width: 768px) {
            .plan-container {
              padding: 20px 15px;
            }
            
            .plan-heading {
              font-size: 24px;
              margin-bottom: 20px;
            }
            
            .plan-image-container {
              width: 100%;
              max-width: 350px;
              height: 250px;
              box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
              border-radius: 0;
            }
            
            .plan-close-button {
              top: 15px;
              right: 15px;
              width: 40px;
              height: 40px;
              font-size: 24px;
              box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
              border-radius: 0;
            }
          }
          
          /* Tablet Styles */
          @media (min-width: 769px) and (max-width: 1024px) {
            .plan-container {
              padding: 30px 20px;
            }
            
            .plan-heading {
              font-size: 28px;
              margin-bottom: 25px;
            }
            
            .plan-image-container {
              width: 500px;
              height: 350px;
              border-radius: 0;
            }
          }
          
          /* Large Desktop Styles */
          @media (min-width: 1200px) {
            .plan-container {
              padding: 50px 20px;
            }
            
            .plan-heading {
              font-size: 36px;
              margin-bottom: 40px;
            }
            
            .plan-image-container {
              width: 700px;
              height: 450px;
              border-radius: 0;
            }
          }
        `}
      </style>
      
      <div id='plan' className="plan-container">
        {/* Heading */}
        <h2 className="plan-heading">
          Plan
        </h2>

        {/* Image Container */}
        <div style={styles.imageWrapper}>
          <div className="plan-image-container">
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
              className="plan-close-button"
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
    </>
  );
};

// Remaining styles that don't need responsiveness
const styles = {
  imageWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  planImage: {
    width: '100%',
    height: '100%',
    display: 'block',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
    borderRadius: '0'
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
  fullscreenImage: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    borderRadius: '0'
  }
};

export default DetailsPlan;
