import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

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
      <div ref={sectionRef} style={responsiveStyles.container} className="our-journey-section position-relative py-5">
        {/* Animated background elements */}
        <div style={styles.backgroundElements}>
          {/* Desktop rain lines */}
          {!isMobile && !isTablet && (
            <>
              <div style={{ ...styles.rainLine, left: '15%', animationDelay: '0s' }} className="rain-line"></div>
              <div style={{ ...styles.rainLine, left: '25%', animationDelay: '1.5s' }} className="rain-line"></div>
              <div style={{ ...styles.rainLine, left: '35%', animationDelay: '0.7s' }} className="rain-line"></div>
              <div style={{ ...styles.rainLine, left: '45%', animationDelay: '2.1s' }} className="rain-line"></div>
              <div style={{ ...styles.rainLine, left: '55%', animationDelay: '0.3s' }} className="rain-line"></div>
              <div style={{ ...styles.rainLine, left: '65%', animationDelay: '1.8s' }} className="rain-line"></div>
              <div style={{ ...styles.rainLine, left: '75%', animationDelay: '0.9s' }} className="rain-line"></div>
              <div style={{ ...styles.rainLine, left: '85%', animationDelay: '2.4s' }} className="rain-line"></div>
            </>
          )}
          {/* Tablet rain lines */}
          {isTablet && (
            <>
              <div style={{ ...styles.rainLineTablet, left: '20%', animationDelay: '0s' }} className="rain-line"></div>
              <div style={{ ...styles.rainLineTablet, left: '35%', animationDelay: '1s' }} className="rain-line"></div>
              <div style={{ ...styles.rainLineTablet, left: '50%', animationDelay: '0.5s' }} className="rain-line"></div>
              <div style={{ ...styles.rainLineTablet, left: '65%', animationDelay: '1.5s' }} className="rain-line"></div>
              <div style={{ ...styles.rainLineTablet, left: '80%', animationDelay: '0.8s' }} className="rain-line"></div>
            </>
          )}
          {/* Mobile rain lines */}
          {isMobile && (
            <>
              <div style={{ ...styles.rainLineMobile, left: '25%', animationDelay: '0s' }} className="rain-line"></div>
              <div style={{ ...styles.rainLineMobile, left: '50%', animationDelay: '1s' }} className="rain-line"></div>
              <div style={{ ...styles.rainLineMobile, left: '75%', animationDelay: '0.5s' }} className="rain-line"></div>
            </>
          )}
        </div>
        <Container>
          <Row>
            <Col xs={12}>
              {/* Title at top left */}
              <h2
                className="our-journey-title"
                style={{
                  fontWeight: 500,
                  fontSize: isMobile ? '22px' : isTablet ? '26px' : '30px',
                  color: isTablet ? '#fff' : '#000',
                  marginBottom: isMobile ? '14px' : '10px',
                  marginLeft: 0,
                  marginTop: 0,
                  textAlign: 'left',
                  letterSpacing: '1px',
                  ...getTextAnimationStyle('left', 0),
                  zIndex: 3,
                  position: 'relative'
                }}
              >
                Our Journey
              </h2>
            </Col>
          </Row>
          <Row className="align-items-center" style={{ gap: '0' }}>
            {/* Image on left, text on right for desktop/tablet, stacked for mobile */}
            <Col xs={12} md={5} className="mb-4 mb-md-0" style={{ paddingRight: isMobile ? '15px' : '5px' }}>
              <div style={{ ...responsiveStyles.imageSection, ...getTextAnimationStyle('left', 1) }}>
                <img
                  src="https://res.cloudinary.com/dqmnu220b/image/upload/v1751711859/aboutsbotto_mtwio4.jpg"
                  alt="Our Journey"
                  style={responsiveStyles.image}
                  className="img-fluid"
                />
              </div>
            </Col>
            <Col xs={12} md={7} style={{ paddingLeft: isMobile ? '15px' : '5px' }}>
              <div style={{ ...responsiveStyles.content, ...getTextAnimationStyle('right', 3) }}>
                <p style={{ ...responsiveStyles.paragraph, ...getTextAnimationStyle('right', 4) }}>
                  Started in 2019 by our visionary Founder, Mr. Sanjay Baid, Keerthi Builders strives for excellence.
                  With over 20 years of experience, Mr. Baid envisioned making approved projects more affordable,
                  transparent, and accessible while ensuring unwavering value for every investment.
                </p>
                <p style={{ ...responsiveStyles.paragraph, ...getTextAnimationStyle('right', 5) }}>
                  Our journey is adorned with remarkable milestones. With the successful completion of several projects,
                  Keerthi Builders has solidified its position as a trusted name in real estate development.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
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
            .our-journey-title {
              font-family: 'Arial', sans-serif;
            }
            @media (max-width: 768px) {
              .our-journey-section {
                padding: 20px 10px !important;
              }
              .our-journey-title {
                font-size: 1.6rem !important;
              }
            }
            @media (max-width: 480px) {
              .our-journey-section {
                padding: 15px 8px !important;
              }
              .our-journey-title {
                font-size: 1.2rem !important;
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
    backgroundColor: '#fff',
    color: '#000',
    padding: '0px 50px 20px',
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
    marginRight: '00px', // Reduced from 40px
    marginTop: '20px',
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
    fontSize: '30px',
    fontWeight: '500',
    color: '#000',
    lineHeight: '1.1',
    zIndex: 10,
    textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)',
  },
  
  content: {
    flex: '1 1 55%',
    paddingLeft: '0px', // Reduced from 0px
  },
  paragraph: {
    fontSize: '14px',
    lineHeight: '1.6',
    color: '#000',
    marginBottom: '20px',
  },
  // Tablet styles
  containerTablet: {
    backgroundColor: '#21623C',
    color: '#fff',
    padding: '0px 30px 60px',
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
    marginRight: '10px', // Reduced from 25px
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
    paddingLeft: '10px', // Reduced from 15px
  },
  paragraphTablet: {
    fontSize: '14px',
    lineHeight: '1.5',
    color: '#dcdcdc',
    marginBottom: '18px',
  },
  // Mobile styles
  containerMobile: {
    backgroundColor: '#fff',
    color: '#000',
    padding: '20px 15px 20px',
    fontFamily: 'Arial, sans-serif',
    position: 'relative',
    overflow: 'hidden',
  },
  wrapperMobile: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    position: 'relative',
    zIndex: 2,
    gap: '10px', // Reduced from 20px
  },
    imageSectionMobile: {
    position: 'relative',
    width: '100%',
    marginLeft: '15px',
    display: 'flex',
    justifyContent: 'left',
    marginBottom: '10px', // Reduced gap
  },
  imageMobile: {
    width: '70%',
    height: '220px',
    borderTopRightRadius: '30px',
    borderBottomRightRadius: '30px',
    objectFit: 'cover',
  },
  headingTextMobile: {
    position: 'absolute',
    top: '20%',
    right: '20%',
    transform: 'translateY(-50%)',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#000',
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
    paddingLeft: '0px',
    paddingRight: '0px',
    marginTop: '5px', // Reduced gap
  },
  paragraphMobile: {
    fontSize: '13px',
    lineHeight: '1.5',
    color: '#000',
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
  rainLine: {
    position: 'absolute',
    width: '2px',
    height: '40px',
    backgroundColor: 'rgba(152, 151, 151, 0.2)',
    top: '-50px',
    borderRadius: '4px',
  },
  rainLineTablet: {
    position: 'absolute',
    width: '2px',
    height: '35px',
    backgroundColor: 'rgba(163, 160, 160, 0.18)',
    top: '-45px',
    borderRadius: '3px',
  },
  rainLineMobile: {
    position: 'absolute',
    width: '1px',
    height: '25px',
    backgroundColor: 'rgba(148, 146, 146, 0.15)',
    top: '-35px',
    borderRadius: '2px',
  },
};

export default OurJourney;

