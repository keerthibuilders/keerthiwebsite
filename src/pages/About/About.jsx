import React, { useEffect, useState, useRef } from 'react';
import HomeAboutSection from '../HomePage/Components/HomeAboutSection';
import HomeVisionSection from '../HomePage/Components/HomeVisionMission';
import OurJourney from './OurJourney';
import AboutHeader from './AboutHeader';

const About = () => {
  const [animate, setAnimate] = useState(false);
  const statsRef = useRef(null);

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

  return (
    <>
      <AboutHeader />
      <HomeAboutSection />
    <div style={styles.container}>
      
     
      <div style={styles.statsWrapper} ref={statsRef}>
        {/* Box 1 */}
        <div style={{ ...styles.statBox, ...getAnimStyle(0) }}>
          <div style={styles.value}>23 lakhs+</div>
          <div style={styles.description}>Square feet Delivered</div>
        </div>
        {/* Step Divider 1 */}
        <div style={{ ...styles.stepDividerContainer1, ...getAnimStyle(1) }}>
          <div style={styles.stepDivider1}></div>
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
         <HomeVisionSection />
      </div>
      {/* Animation keyframes */}
      <style>{`
        @keyframes aboutFadeUp {
          0% { opacity: 0; transform: translateY(40px);}
          100% { opacity: 1; transform: translateY(0);}
        }
      `}</style>
    </div>
    <OurJourney />
    </>
  );
};

const styles = {
  container: {
    backgroundColor: '#21623C',
    color: '#fff',
    padding: '10px 0px 0px 0px',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '18px',
    fontWeight: '500',
    marginBottom: '60px',
    color: '#fff',
  },
  statsWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '30px',
    flexWrap: 'wrap',
    position: 'relative',
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
    height: '160px',
    borderLeft: '2px dotted #fff',
  },
  stepDivider2: {
    width: '1px',
    height: '200px',
    borderLeft: '2px dotted #fff',
  },
  stepDivider3: {
    width: '1px',
    height: '260px',
    borderLeft: '2px dotted #fff',
  },
  stepDivider4: {
    width: '1px',
    height: '310px',
    borderLeft: '2px dotted #fff',
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
};

export default About;