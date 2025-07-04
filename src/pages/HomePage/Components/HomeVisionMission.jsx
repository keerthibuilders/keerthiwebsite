import React, { useState, useEffect, useRef } from 'react';
// import homeSkeleton1 from '../../../../public/assets/images/homesketch1.png';

const HomeVisionMission = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const getTextAnimationStyle = (direction, index) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0)' : `translateX(${direction === 'left' ? '-100px' : '100px'})`,
    transition: `all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
    transitionDelay: `${0.2 * index}s`
  });

  return (
    <div ref={sectionRef} style={styles.container}>
      {/* Background Image */}
      <div style={styles.backgroundImage}>
        {/* <img
          src={homeSkeleton1}
          alt="Background"
          style={styles.backgroundImg}
        /> */}
      </div>
      
      {/* Animated background elements */}
      <div style={styles.backgroundElements}>
        
        {/* Animated rain drop lines */}
        <div style={{...styles.rainLine, left: '15%', animationDelay: '0s'}} className="rain-line"></div>
        <div style={{...styles.rainLine, left: '35%', animationDelay: '1.5s'}} className="rain-line"></div>
        <div style={{...styles.rainLine, left: '55%', animationDelay: '0.7s'}} className="rain-line"></div>
        <div style={{...styles.rainLine, left: '75%', animationDelay: '2.1s'}} className="rain-line"></div>
      </div>

      {/* Vision Section */}
      <div style={styles.sectionWrapper}>
        <div style={styles.titleWrapper}>
          <div style={{...styles.leftBorder, ...getTextAnimationStyle('left', 1)}}></div>
          <h2 style={{...styles.title, ...getTextAnimationStyle('left', 2)}}>Our Vision</h2>
        </div>
        <p style={{...styles.description, ...getTextAnimationStyle('right', 3)}}>
          We aspire to transform the real estate sector through inventive and sustainable solutions, 
          aiming to be the region's foremost real estate brand recognised for integrity, 
          professionalism, and resolute client dedication.
        </p>
      </div>

      {/* Mission Section */}
      <div style={styles.sectionWrapper}>
        <div style={styles.titleWrapper}>
          <div style={{...styles.leftBorder, ...getTextAnimationStyle('left', 4)}}></div>
          <h2 style={{...styles.title, ...getTextAnimationStyle('left', 5)}}>Our Mission</h2>
        </div>
        <p style={{...styles.description, ...getTextAnimationStyle('right', 6)}}>
          To deliver exceptional real estate experiences by creating innovative, sustainable, and 
          high-quality developments that exceed customer expectations while contributing positively 
          to the communities we serve and maintaining the highest standards of transparency and trust.
        </p>
      </div>

      {/* CSS for animations */}
      <style>
        {`
          .animated-bg-element {
            animation: float 8s ease-in-out infinite;
          }
          
          @keyframes float {
            0% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
            100% { transform: translateY(0) rotate(0deg); }
          }
          
          .rain-line {
            animation: rainDrop 5s linear infinite;
          }
          
          @keyframes rainDrop {
            0% {
              transform: translateY(-100%);
              height: 50px;
              opacity: 0;
            }
            10% {
              opacity: 0.7;
            }
            90% {
              opacity: 0.7;
            }
            100% {
              transform: translateY(1000px);
              height: 30px;
              opacity: 0;
            }
          }

          @media (max-width: 768px) {
            .vision-mission-section {
              padding: 40px 15px !important;
            }
          }
        `}
      </style>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#21623C',
    padding: '60px 20px',
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
    position: 'relative',
    overflow: 'hidden',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0.3,
    zIndex: 0,
  },
  backgroundImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
  },
  backgroundElements: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    zIndex: 1,
    pointerEvents: 'none',
  },
  circle1: {
    position: 'absolute',
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    top: '-150px',
    right: '-100px',
  },
  rectangle: {
    position: 'absolute',
    width: '400px',
    height: '100px',
    transform: 'rotate(45deg)',
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
    top: '40%',
    left: '-200px',
  },
  rainLine: {
    position: 'absolute',
    width: '2px',
    height: '40px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    top: '-50px',
    borderRadius: '4px',
  },
  sectionWrapper: {
    maxWidth: '800px',
    margin: '0 auto',
    marginBottom: '50px',
    position: 'relative',
    zIndex: 2,
  },
  titleWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '30px',
  },
  leftBorder: {
    width: '4px',
    height: '60px',
    backgroundColor: '#f7941d',
    marginRight: '12px',
  },
  title: {
    fontSize: '38px',
    fontWeight: '500',
    margin: 0,
    color: '#fff',
  },
  description: {
    maxWidth: '800px',
    fontSize: '16px',
    color: '#ccc',
    lineHeight: '1.6',
    margin: 0,
  },
};

export default HomeVisionMission;
