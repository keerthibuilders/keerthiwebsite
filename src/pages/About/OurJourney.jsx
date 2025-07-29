import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import aboutbottom from "../../../../public/assets/images/about-us-bottom.webp"

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

  return (
    <>
      <div ref={sectionRef} style={styles.container} className="our-journey-section position-relative">
        {/* Animated background elements */}
        <div style={styles.backgroundElements}>
          <div style={{ ...styles.rainLine, left: '15%', animationDelay: '0s' }} className="rain-line"></div>
          <div style={{ ...styles.rainLine, left: '30%', animationDelay: '1s' }} className="rain-line"></div>
          <div style={{ ...styles.rainLine, left: '45%', animationDelay: '0.5s' }} className="rain-line"></div>
          <div style={{ ...styles.rainLine, left: '60%', animationDelay: '1.5s' }} className="rain-line"></div>
          <div style={{ ...styles.rainLine, left: '75%', animationDelay: '0.8s' }} className="rain-line"></div>
          <div style={{ ...styles.rainLine, left: '85%', animationDelay: '2s' }} className="rain-line"></div>
        </div>

        <Container fluid style={styles.containerInner}>
          <Row className="align-items-center g-4">
            <Col xs={12} lg={5}>
              <div style={{ ...styles.imageSection, ...getTextAnimationStyle('left', 1) }}>
                <img
                  src={aboutbottom}
                  alt="Our Journey"
                  style={styles.image}
                  className="img-fluid"
                />
              </div>
            </Col>
            <Col xs={12} lg={7}>
              <div style={{ ...styles.content, ...getTextAnimationStyle('right', 2) }}>
                <h2 style={{ ...styles.heading, ...getTextAnimationStyle('right', 3) }}>
                  Our Journey
                </h2>
                <p style={{ ...styles.paragraph, ...getTextAnimationStyle('right', 4) }}>
                  Started in 2000 by our visionary Founder, Mr Manjunath, Keerthi Builders strives for excellence.
                  With over 25 years of experience, Mr Manjunath envisioned making approved projects more affordable,
                  transparent, and accessible while ensuring unwavering value for every investment.
                </p>
                <p style={{ ...styles.paragraph, ...getTextAnimationStyle('right', 5) }}>
                  Our journey is adorned with remarkable milestones. With the successful completion of several projects,
                  Keerthi Builders has solidified its position as a trusted name in real estate development.
                </p>
              </div>
            </Col>
          </Row>
        </Container>

        {/* CSS for animations and responsive design */}
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

            /* Responsive adjustments */
            @media (max-width: 991.98px) {
              .our-journey-section {
                padding: 40px 20px !important;
              }
            }

            @media (max-width: 767.98px) {
              .our-journey-section {
                padding: 30px 15px !important;
              }
            }

            @media (max-width: 575.98px) {
              .our-journey-section {
                padding: 20px 10px !important;
              }
            }
          `}
        </style>
      </div>
    </>
  );
};

const styles = {
  container: {
    backgroundColor: '#fff',
    color: '#000',
    padding: '60px 0',
    fontFamily: 'Arial, sans-serif',
    position: 'relative',
    overflow: 'hidden',
    minHeight: '500px',
  },
  containerInner: {
    maxWidth: '1200px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 2,
  },
  imageSection: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    maxWidth: '400px',
    height: 'clamp(250px, 50vw, 400px)',
    borderTopRightRadius: 'clamp(30px, 5vw, 60px)',
    borderBottomRightRadius: 'clamp(30px, 5vw, 60px)',
    objectFit: 'cover',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
  },
  content: {
    padding: '0 clamp(10px, 3vw, 30px)',
  },
  heading: {
    fontSize: 'clamp(24px, 4vw, 36px)',
    color: '#1A662F',
    fontWeight: '500',
    marginBottom: 'clamp(20px, 3vw, 30px)',
    lineHeight: '1.2',
  },
  paragraph: {
    fontSize: 'clamp(14px, 2vw, 16px)',
    lineHeight: '1.6',
    color: '#333',
    marginBottom: 'clamp(15px, 2vw, 20px)',
    textAlign: 'justify',
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
    width: 'clamp(1px, 0.2vw, 2px)',
    height: 'clamp(25px, 4vw, 40px)',
    backgroundColor: 'rgba(152, 151, 151, 0.2)',
    top: '-50px',
    borderRadius: '4px',
  },
};

export default OurJourney;
