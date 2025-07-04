import React, { useState, useEffect, useRef } from 'react';

const OurJourney = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width <= 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

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

  const getResponsiveStyles = () => {
    if (isMobile) {
      return {
        container: styles.containerMobile,
        wrapper: styles.wrapperMobile,
        imageSection: styles.imageSectionMobile,
        image: styles.imageMobile,
        headingText: styles.headingTextMobile,
        headingOur: styles.headingOurMobile,
        headingJourney: styles.headingJourneyMobile,
        content: styles.contentMobile,
        paragraph: styles.paragraphMobile,
      };
    } else if (isTablet) {
      return {
        container: styles.containerTablet,
        wrapper: styles.wrapperTablet,
        imageSection: styles.imageSectionTablet,
        image: styles.imageTablet,
        headingText: styles.headingTextTablet,
        headingOur: styles.headingOurTablet,
        headingJourney: styles.headingJourneyTablet,
        content: styles.contentTablet,
        paragraph: styles.paragraphTablet,
      };
    } else {
      return {
        container: styles.container,
        wrapper: styles.wrapper,
        imageSection: styles.imageSection,
        image: styles.image,
        headingText: styles.headingText,
        headingOur: styles.headingOur,
        headingJourney: styles.headingJourney,
        content: styles.content,
        paragraph: styles.paragraph,
      };
    }
  };

  const responsiveStyles = getResponsiveStyles();

  return (
    <>
      <div ref={sectionRef} style={responsiveStyles.container}>
        {/* Animated background elements */}
        <div style={styles.backgroundElements}>
          {/* Desktop rain lines */}
          {!isMobile && !isTablet && (
            <>
              <div style={{...styles.rainLine, left: '15%', animationDelay: '0s'}} className="rain-line"></div>
              <div style={{...styles.rainLine, left: '25%', animationDelay: '1.5s'}} className="rain-line"></div>
              <div style={{...styles.rainLine, left: '35%', animationDelay: '0.7s'}} className="rain-line"></div>
              <div style={{...styles.rainLine, left: '45%', animationDelay: '2.1s'}} className="rain-line"></div>
              <div style={{...styles.rainLine, left: '55%', animationDelay: '0.3s'}} className="rain-line"></div>
              <div style={{...styles.rainLine, left: '65%', animationDelay: '1.8s'}} className="rain-line"></div>
              <div style={{...styles.rainLine, left: '75%', animationDelay: '0.9s'}} className="rain-line"></div>
              <div style={{...styles.rainLine, left: '85%', animationDelay: '2.4s'}} className="rain-line"></div>
            </>
          )}
          {/* Tablet rain lines */}
          {isTablet && (
            <>
              <div style={{...styles.rainLineTablet, left: '20%', animationDelay: '0s'}} className="rain-line"></div>
              <div style={{...styles.rainLineTablet, left: '35%', animationDelay: '1s'}} className="rain-line"></div>
              <div style={{...styles.rainLineTablet, left: '50%', animationDelay: '0.5s'}} className="rain-line"></div>
              <div style={{...styles.rainLineTablet, left: '65%', animationDelay: '1.5s'}} className="rain-line"></div>
              <div style={{...styles.rainLineTablet, left: '80%', animationDelay: '0.8s'}} className="rain-line"></div>
            </>
          )}
          {/* Mobile rain lines */}
          {isMobile && (
            <>
              <div style={{...styles.rainLineMobile, left: '25%', animationDelay: '0s'}} className="rain-line"></div>
              <div style={{...styles.rainLineMobile, left: '50%', animationDelay: '1s'}} className="rain-line"></div>
              <div style={{...styles.rainLineMobile, left: '75%', animationDelay: '0.5s'}} className="rain-line"></div>
            </>
          )}
        </div>

        <div style={responsiveStyles.wrapper}>
          {/* Left image with overlapping text - Same design structure */}
          <div style={{...responsiveStyles.imageSection, ...getTextAnimationStyle('left', 1)}}>
            <img
              src="https://images.pexels.com/photos/2957862/pexels-photo-2957862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Our Journey"
              style={responsiveStyles.image}
            />
            <div style={{...responsiveStyles.headingText, ...getTextAnimationStyle('left', 2)}}>
              <div style={responsiveStyles.headingOur}>Our</div>
              <div style={responsiveStyles.headingJourney}>Journey</div>
            </div>
          </div>

          {/* Right text content - Same design structure */}
          <div style={{...responsiveStyles.content, ...getTextAnimationStyle('right', 3)}}>
            <p style={{...responsiveStyles.paragraph, ...getTextAnimationStyle('right', 4)}}>
              Started in 2019 by our visionary Founder, Mr. Sanjay Baid, Keerthi Builders strives for excellence.
              With over 20 years of experience, Mr. Baid envisioned making approved projects more affordable,
              transparent, and accessible while ensuring unwavering value for every investment.
            </p>
            <p style={{...responsiveStyles.paragraph, ...getTextAnimationStyle('right', 5)}}>
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
                padding: 20px 10px !important;
              }
            }

            @media (max-width: 480px) {
              .journey-section {
                padding: 15px 8px !important;
              }
            }
          `}
        </style>
      </div>
    </>
  );
};

const styles = {
  // Desktop styles (original)
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
    objectFit: 'cover',
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

  // Tablet styles - Same design, scaled down
  containerTablet: {
    backgroundColor: '#21623C',
    color: '#fff',
    padding: '0px 30px 60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Arial, sans-serif',
    position: 'relative',
    overflow: 'hidden',
  },
  
  wrapperTablet: {
    display: 'flex',
    maxWidth: '900px',
    width: '100%',
    alignItems: 'center',
    flexWrap: 'wrap',
    position: 'relative',
    zIndex: 2,
  },
  
  imageSectionTablet: {
    position: 'relative',
    flex: '1 1 40%',
    marginRight: '25px',
  },
  
  imageTablet: {
    width: '80%',
    height: '320px',
    borderTopRightRadius: '45px',
    borderBottomRightRadius: '45px',
    objectFit: 'cover',
  },
  
  headingTextTablet: {
    position: 'absolute',
    top: '20%',
    right: '-8px',
    transform: 'translateY(-50%)',
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#fff',
    lineHeight: '1.1',
    zIndex: 10,
    textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)',
  },
  
  headingOurTablet: {
    fontSize: '30px',
    fontWeight: '500',
    position: 'relative',
    right: '30px',
  },
  
  headingJourneyTablet: {
    fontSize: '30px',
    fontWeight: '500',
    position: 'relative',
    left: '15px',
  },
  
  contentTablet: {
    flex: '1 1 55%',
    paddingLeft: '15px',
  },
  
  paragraphTablet: {
    fontSize: '14px',
    lineHeight: '1.5',
    color: '#dcdcdc',
    marginBottom: '18px',
  },

  // Mobile styles - Same design structure, mobile optimized
  containerMobile: {
    backgroundColor: '#21623C',
    color: '#fff',
    padding: '0px 15px 40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Arial, sans-serif',
    position: 'relative',
    overflow: 'hidden',
  },
  
  wrapperMobile: {
    display: 'flex',
    flexDirection: 'column', // Stack vertically on mobile
    width: '100%',
    alignItems: 'center',
    position: 'relative',
    zIndex: 2,
    gap: '20px',
  },
  
  imageSectionMobile: {
    position: 'relative',
    width: '100%',
    marginRight: '0px', // Remove right margin on mobile
    display: 'flex',
    justifyContent: 'center',
  },
  
  imageMobile: {
    width: '85%',
    height: '220px',
    borderTopRightRadius: '30px',
    borderBottomRightRadius: '30px',
    objectFit: 'cover',
  },
  
  headingTextMobile: {
    position: 'absolute',
    top: '20%',
    right: '8%', // Adjusted for mobile
    transform: 'translateY(-50%)',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#fff',
    lineHeight: '1.1',
    zIndex: 10,
    textShadow: '3px 3px 10px rgba(0, 0, 0, 0.8)',
  },
  
    headingOurMobile: {
    fontSize: '20px',
    fontWeight: '500',
    position: 'relative',
    right: '20px',
  },
  
  headingJourneyMobile: {
    fontSize: '20px',
    fontWeight: '500',
    position: 'relative',
    left: '10px',
  },
  
  contentMobile: {
    width: '100%',
    paddingLeft: '0px', // Remove left padding on mobile
    paddingRight: '0px',
  },
  
  paragraphMobile: {
    fontSize: '13px',
    lineHeight: '1.5',
    color: '#dcdcdc',
    marginBottom: '15px',
    textAlign: 'left',
    padding: '0 10px',
  },

  // Background elements
  backgroundElements: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    zIndex: 1,
    pointerEvents: 'none',
  },
  
  // Desktop rain line
  rainLine: {
    position: 'absolute',
    width: '2px',
    height: '40px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    top: '-50px',
    borderRadius: '4px',
  },
  
  // Tablet rain line
  rainLineTablet: {
    position: 'absolute',
    width: '2px',
    height: '35px',
    backgroundColor: 'rgba(255, 255, 255, 0.18)',
    top: '-45px',
    borderRadius: '3px',
  },
  
  // Mobile rain line - smaller and lighter
  rainLineMobile: {
    position: 'absolute',
    width: '1px',
    height: '25px',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    top: '-35px',
    borderRadius: '2px',
  },
};

export default OurJourney;
