import React, { useState, useEffect, useRef } from 'react';

const OurJourney = () => {
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

  const styles = {
    container: {
      backgroundColor: '#21623C',
      color: '#fff',
      padding: '0px 50px 80px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Arial, sans-serif',
      position: 'relative',
      overflow: 'hidden',
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
    rainLine: {
      position: 'absolute',
      width: '2px',
      height: '40px',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      top: '-50px',
      borderRadius: '4px',
    },
    wrapper: {
      display: 'flex',
      maxWidth: '1200px',
      width: '100%',
      alignItems: 'center',
      flexWrap: 'wrap',
      position: 'relative',
      zIndex: 2,
    },
    imageSection: {
      position: 'relative',
      flex: '1 1 40%',
      marginRight: '40px',
    },
    image: {
      width: '80%',
      height: '400px',
      borderTopRightRadius: '60px',
      borderBottomRightRadius: '60px',
      objectFit: 'fit',
    },
    headingText: {
      position: 'absolute',
      top: '20%',
      right: '-10px',
      transform: 'translateY(-50%)',
      fontSize: '48px',
      fontWeight: 'bold',
      color: '#fff',
      lineHeight: '1.1',
      zIndex: 10,
      textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)',
    },
    headingOur: {
       fontSize: '38px',
       fontWeight: '500',
      position: 'relative',
      right: '40px',
    },
    headingJourney: {
       fontSize: '38px',
        fontWeight: '500',
      position: 'relative',
      left: '20px',
    },
    content: {
      flex: '1 1 55%',
      paddingLeft: '20px',
    },
    paragraph: {
      fontSize: '16px',
      lineHeight: '1.6',
      color: '#dcdcdc',
      marginBottom: '20px',
    },
    // Responsive styles
    '@media (max-width: 768px)': {
      container: {
        padding: '0px 20px 80px',
      },
      wrapper: {
        flexDirection: 'column',
      },
      imageSection: {
        marginRight: '0',
        marginBottom: '30px',
        width: '100%',
      },
      image: {
        width: '100%',
      },
      headingText: {
        position: 'static',
        transform: 'none',
        textAlign: 'center',
        marginTop: '20px',
        fontSize: '36px',
      },
      headingOur: {
        right: '0',
      },
      headingJourney: {
        left: '0',
      },
      content: {
        paddingLeft: '0',
      },
    },
  };

  return (
    <>
      <div ref={sectionRef} style={styles.container}>
        {/* Animated background elements */}
        <div style={styles.backgroundElements}>
          {/* Animated rain drop lines */}
          <div style={{...styles.rainLine, left: '15%', animationDelay: '0s'}} className="rain-line"></div>
          <div style={{...styles.rainLine, left: '25%', animationDelay: '1.5s'}} className="rain-line"></div>
          <div style={{...styles.rainLine, left: '35%', animationDelay: '0.7s'}} className="rain-line"></div>
          <div style={{...styles.rainLine, left: '45%', animationDelay: '2.1s'}} className="rain-line"></div>
          <div style={{...styles.rainLine, left: '55%', animationDelay: '0.3s'}} className="rain-line"></div>
          <div style={{...styles.rainLine, left: '65%', animationDelay: '1.8s'}} className="rain-line"></div>
          <div style={{...styles.rainLine, left: '75%', animationDelay: '0.9s'}} className="rain-line"></div>
          <div style={{...styles.rainLine, left: '85%', animationDelay: '2.4s'}} className="rain-line"></div>
        </div>

        <div style={styles.wrapper}>
          {/* Left image with overlapping text */}
          <div style={{...styles.imageSection, ...getTextAnimationStyle('left', 1)}}>
            <img
              src="https://images.pexels.com/photos/2957862/pexels-photo-2957862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Our Journey"
              style={styles.image}
            />
            <div style={{...styles.headingText, ...getTextAnimationStyle('left', 2)}}>
              <div style={styles.headingOur}>Our</div>
              <div style={styles.headingJourney}>Journey</div>
            </div>
          </div>

          {/* Right text content */}
          <div style={{...styles.content, ...getTextAnimationStyle('right', 3)}}>
            <p style={{...styles.paragraph, ...getTextAnimationStyle('right', 4)}}>
              Started in 2019 by our visionary Founder, Mr. Sanjay Baid, Keerthi Builders strives for excellence.
              With over 20 years of experience, Mr. Baid envisioned making approved projects more affordable,
              transparent, and accessible while ensuring unwavering value for every investment.
            </p>
            <p style={{...styles.paragraph, ...getTextAnimationStyle('right', 5)}}>
              Our journey is adorned with remarkable milestones. With the successful completion of several projects,
              Keerthi Builders has solidified its position as a trusted name in real estate development.
            </p>
          </div>
        </div>

        {/* CSS for animations */}
        <style>
          {`
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
              .journey-section {
                padding: 40px 15px !important;
              }
            }
          `}
        </style>
      </div>
    </>
  );
};

export default OurJourney;
