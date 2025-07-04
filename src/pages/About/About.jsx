import React, { useEffect, useState, useRef } from 'react';
import HomeAboutSection from '../HomePage/Components/HomeAboutSection';
import HomeVisionSection from '../HomePage/Components/HomeVisionMission';
import OurJourney from './OurJourney';
import AboutHeader from './AboutHeader';

const About = () => {
  const [animate, setAnimate] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Helper to stagger animation delays
  const getAnimStyle = (index) => ({
    opacity: animate ? 1 : 0,
    transform: animate ? 'translateY(0)' : 'translateY(40px)',
    transition: `all 0.7s cubic-bezier(.4,1.6,.6,1) ${index * 0.18}s`
  });

  // Mobile layout with 2 columns
  const renderMobileLayout = () => (
    <div style={styles.mobileGrid}>
      {/* Row 1 */}
      <div style={styles.mobileRow}>
        <div style={styles.mobileColumn}>
          <div style={{ ...styles.statBoxMobile, ...getAnimStyle(0) }}>
            <div style={styles.valueMobile}>23 lakhs+</div>
            <div style={styles.descriptionMobile}>Square feet Delivered</div>
          </div>
        </div>
        <div style={styles.mobileDividerVertical}>
          <div style={{ ...styles.verticalLine, ...getAnimStyle(1) }}></div>
        </div>
        <div style={styles.mobileColumn}>
          <div style={{ ...styles.statBoxMobile, ...getAnimStyle(2) }}>
            <div style={styles.valueMobile}>30 lakhs+</div>
            <div style={styles.descriptionMobile}>Square feet Ready Delivered</div>
          </div>
        </div>
      </div>

      {/* Horizontal Divider 1 */}
      <div style={{ ...styles.mobileHorizontalDivider, ...getAnimStyle(3) }}>
        <div style={styles.horizontalLine}></div>
        <div style={styles.mobileImageWrapper}>
          <img
            src="https://gurupunvaanii.com/wp-content/uploads/2024/01/Rectangle-5856.png"
            alt="Ready"
            style={styles.dividerImageMobile}
          />
        </div>
      </div>

      {/* Row 2 */}
      <div style={styles.mobileRow}>
        <div style={styles.mobileColumn}>
          <div style={{ ...styles.statBoxMobile, ...getAnimStyle(4) }}>
            <div style={styles.valueMobile}>22+</div>
            <div style={styles.descriptionMobile}>upcoming projects across various locations</div>
          </div>
        </div>
        <div style={styles.mobileDividerVertical}>
          <div style={{ ...styles.verticalLine, ...getAnimStyle(5) }}></div>
        </div>
        <div style={styles.mobileColumn}>
          <div style={{ ...styles.statBoxMobile, ...getAnimStyle(6) }}>
            <div style={styles.valueMobile}>2000+</div>
            <div style={styles.descriptionMobile}>Happy customers who have entrusted their dreams to us</div>
          </div>
        </div>
      </div>

      {/* Final Horizontal Divider */}
      <div style={{ ...styles.mobileHorizontalDivider, ...getAnimStyle(7) }}>
        <div style={styles.horizontalLine}></div>
        <div style={styles.mobileImageWrapper}>
          <img
            src="https://gurupunvaanii.com/wp-content/uploads/2024/01/Rectangle-5844.png"
            alt="Happy"
            style={styles.dividerImageMobile}
          />
        </div>
      </div>
    </div>
  );

  // Desktop layout (original)
  const renderDesktopLayout = () => (
    <div style={styles.statsWrapper} ref={statsRef}>
      {/* Box 1 */}
      <div style={{ ...styles.statBox, ...getAnimStyle(0) }}>
        <div style={styles.value}>23 lakhs+</div>
        <div style={styles.description}>Square feet Delivered</div>
        
      </div>
      {/* Step Divider 1 */}
      <div style={{ ...styles.stepDividerContainer1, ...getAnimStyle(1) }}>
        <div style={styles.stepDivider1}></div>
        <div style={styles.imageWrapper}>
          <img
            src="https://gurupunvaanii.com/wp-content/uploads/2024/01/Rectangle-5848.png"
            alt="Delivered"
            style={styles.dividerImage}
          />
          </div>
      </div>
      {/* Box 2 */}
      <div style={{ ...styles.statBox, ...getAnimStyle(2) }}>
        <div style={styles.value}>30 lakhs+</div>
        <div style={styles.description}>Square feet Ready Delivered</div>
      </div>
      {/* Step Divider 2 */}
      <div style={{ ...styles.stepDividerContainer2, ...getAnimStyle(3) }}>
        <div style={styles.stepDivider2}></div>
        <div style={styles.imageWrapper}>
          <img
            src="https://gurupunvaanii.com/wp-content/uploads/2024/01/Rectangle-5856.png"
            alt="Ready"
            style={styles.dividerImage}
          />
        </div>
      </div>
      {/* Box 3 */}
      <div style={{ ...styles.statBox, ...getAnimStyle(4) }}>
        <div style={styles.value}>22+</div>
        <div style={styles.description}>upcoming projects <br /> across various locations</div>
      </div>
      {/* Step Divider 3 */}
      <div style={{ ...styles.stepDividerContainer3, ...getAnimStyle(5) }}>
        <div style={styles.stepDivider3}></div>
        <div style={styles.imageWrapper}>
          <img
            src="https://gurupunvaanii.com/wp-content/uploads/2024/01/Rectangle-5846.png"
            alt="Location"
            style={styles.dividerImage}
          />
        </div>
      </div>
      {/* Box 4 */}
      <div style={{ ...styles.statBox, ...getAnimStyle(6) }}>
        <div style={styles.value}>2000+</div>
        <div style={styles.description}>Happy customers who <br /> have entrusted their <br /> dreams to us</div>
      </div>
      {/* Step Divider 4 */}
      <div style={{ ...styles.stepDividerContainer4, ...getAnimStyle(7) }}>
        <div style={styles.stepDivider4}></div>
        <div style={styles.imageWrapper}>
          <img
            src="https://gurupunvaanii.com/wp-content/uploads/2024/01/Rectangle-5844.png"
            alt="Happy"
            style={styles.dividerImage}
          />
        </div>
      </div>
    </div>
  );

  return (
    <>
      <AboutHeader />
      <HomeAboutSection />
      <div style={styles.container}>
        <div ref={statsRef}>
          {isMobile ? renderMobileLayout() : renderDesktopLayout()}
        </div>
        <HomeVisionSection />
        
        {/* Animation keyframes */}
        <style>{`
          @keyframes aboutFadeUp {
            0% { opacity: 0; transform: translateY(40px);}
            100% { opacity: 1; transform: translateY(0);}
          }
          
          @media (max-width: 480px) {
            .mobile-column {
              flex: 1 !important;
              min-width: 0 !important;
            }
          }
        `}</style>
      </div>
      <OurJourney />
    </>
  );
};

const styles = {
  container: {
    backgroundColor: '#fff',
    color: '#fff',
    padding: '20px 0px 0px 0px',
    fontFamily: 'Arial, sans-serif',
  },
  
  // Desktop styles (original)
  statsWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '30px',
    flexWrap: 'wrap',
    position: 'relative',
    padding: '40px 20px',
  },
  
  statBox: {
    width: '160px',
    textAlign: 'center',
    position: 'relative',
  },
  
  value: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#f7941d',
    marginBottom: '0px',
  },
  
  description: {
    fontSize: '14px',
    color: '#ccc',
    lineHeight: '1.4',
    marginBottom: '12px',
  },
  
  // Mobile 2-column grid styles
  mobileGrid: {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px 15px',
    gap: '25px',
  },
  
  mobileRow: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '15px',
    width: '100%',
  },
  
  mobileColumn: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    minWidth: 0, // Prevents flex items from overflowing
  },
  
  statBoxMobile: {
    textAlign: 'center',
    padding: '15px 10px',
    width: '100%',
    maxWidth: '150px',
  },
  
  valueMobile: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#f7941d',
    marginBottom: '8px',
  },
  
  descriptionMobile: {
    fontSize: '12px',
    color: '#000',
    lineHeight: '1.3',
    marginBottom: '0px',
  },
  
  // Mobile dividers
  mobileDividerVertical: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '20px',
  },
  
  verticalLine: {
    width: '1px',
    height: '80px',
    borderLeft: '2px dotted #fff',
  },
  
  mobileHorizontalDivider: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    position: 'relative',
    margin: '10px 0',
  },
  
  horizontalLine: {
    width: '60%',
    height: '1px',
    borderTop: '2px dotted #000',
  },
  
  mobileImageWrapper: {
    position: 'absolute',
    right: '20px',
    padding: '4px',
    backgroundColor: 'transparent',
    borderTop: '1px solid #f7941d',
    borderLeft: '1px solid #f7941d',
  },
  
  dividerImageMobile: {
    width: '50px',
    height: '50px',
    objectFit: 'contain',
    display: 'block',
  },
  
  // Desktop divider styles (original)
  stepDividerContainer1: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '10px',
    position: 'relative',
  },
  stepDividerContainer2: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '10px',
    position: 'relative',
  },
  stepDividerContainer3: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '10px',
    position: 'relative',
  },
  stepDividerContainer4: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '10px',
    position: 'relative',
  },
  
  stepDivider1: {
    width: '1px',
    height: '200px',
    borderLeft: '2px dotted #000',
  },
  stepDivider2: {
    width: '1px',
    height: '240px',
    borderLeft: '2px dotted #000',
  },
  stepDivider3: {
    width: '1px',
    height: '300px',
    borderLeft: '2px dotted #000',
  },
  stepDivider4: {
    width: '1px',
    height: '310px',
    borderLeft: '2px dotted #000',
  },
  
  imageWrapper: {
    position: 'absolute',
    bottom: '0',
    right: '0px',
    padding: '4px 0 0 4px',
    backgroundColor: 'transparent',
    borderTop: '1px solid #f7941d',
    borderLeft: '1px solid #f7941d',
  },
  
  dividerImage: {
    width: '110px',
    height: '110px',
    objectFit: 'contain',
    display: 'block',
  },
  
  title: {
    fontSize: '18px',
    fontWeight: '500',
    marginBottom: '60px',
    color: '#fff',
  },
};

export default About;
