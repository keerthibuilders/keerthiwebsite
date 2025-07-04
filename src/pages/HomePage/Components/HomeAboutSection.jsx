import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const HomeAboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
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

  // Image zoom animation on load
  useEffect(() => {
    const timer = setTimeout(() => {
      setImageLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const getTextAnimationStyle = (direction, index) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0)' : `translateX(${direction === 'left' ? '-100px' : '100px'})`,
    transition: `all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
    transitionDelay: `${0.2 * index}s`
  });

  const getImageZoomStyle = () => ({
    opacity: imageLoaded ? 1 : 0,
    transform: imageLoaded ? 'scale(1)' : 'scale(0.3)',
    transition: 'all 1s cubic-bezier(0.34, 1.56, 0.64, 1)'
  });

  const getVisionMissionAnimationStyle = (direction, index) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0)' : `translateX(${direction === 'left' ? '-80px' : '80px'})`,
    transition: `all 0.8s ease-out`,
    transitionDelay: `${0.3 + (0.2 * index)}s`
  });

  return (
    <div  ref={sectionRef} style={styles.aboutContainer}>
      {/* Animated background elements */}
      <div style={styles.backgroundElements}>
        
        
        {/* Animated rain drop lines */}
        <div style={{...styles.rainLine, left: '15%', animationDelay: '0s'}} className="rain-line"></div>
        <div style={{...styles.rainLine, left: '35%', animationDelay: '1.5s'}} className="rain-line"></div>
        <div style={{...styles.rainLine, left: '55%', animationDelay: '0.7s'}} className="rain-line"></div>
        <div style={{...styles.rainLine, left: '75%', animationDelay: '2.1s'}} className="rain-line"></div>
      </div>

      {/* About Section */}
      <Container id="about" style={styles.contentWrapper}>
        <Row style={styles.aboutRow}>
          {/* Left Side Image with Zoom Animation */}
          <Col lg={5} md={6} style={styles.imageColumn}>
            <div style={getImageZoomStyle()}>
              <img
                src="../../assets/images/owner.jpg"
                alt="Founder"
                style={styles.founderImage}
                onLoad={() => setImageLoaded(true)}
              />
            </div>
          </Col>
          
          {/* Right Side Text Content with Side Animation */}
          <Col lg={7} md={6} style={styles.contentColumn}>
            <h2 style={{...styles.founderName, ...getTextAnimationStyle('right', 1)}}>
              KT Manjunath
            </h2>
            <h5 style={{...styles.founderTitle, ...getTextAnimationStyle('right', 2)}}>
              Founder & Managing Director
            </h5>
            <p style={{...styles.founderDescription, ...getTextAnimationStyle('right', 3)}}>
              The driving force behind Keerthi Builders is our founder, KT Manjunath—a visionary with
              relentless dedication and a sharp instinct for growth. From humble beginnings to becoming
              one of the most respected names in Bangalore's real estate landscape, Mr. Manjunath's
              journey is a testament to what integrity, hard work, and foresight can achieve.
            </p>
          </Col>
        </Row>
      </Container>

      
      {/* CSS for animations and responsive design */}
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
            .about-row {
              flex-direction: column !important;
            }
          }
        `}
      </style>
    </div>
  );
};

const styles = {
  aboutContainer: {
    backgroundColor: "#1A662F",
    color: "white",
    position: "relative",
    overflow: "hidden",
    backgroundImage: "url('/src/assets/images/bg1.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundBlendMode: "overlay",
    backgroundOpacity: 0.15,
  },
  backgroundElements: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    zIndex: 1,
    pointerEvents: "none",
  },
  
  rainLine: {
    position: "absolute",
    width: "2px",
    height: "40px",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    top: "-50px",
    borderRadius: "4px",
  },
  contentWrapper: {
    maxWidth: "1200px",
    position: "relative",
    zIndex: 2,
    marginBottom: "20px",
  },
  aboutRow: {
    alignItems: "center",
    minHeight: "40vh",
  },
  imageColumn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  founderImage: {
    Top: "100px",
    width: "100%",
    minWidth:"350px",
    maxWidth: "500px",
    height: "250px",
    borderTopRightRadius: "60px",
    borderBottomLeftRadius: "60px",
    objectFit: "cover",
    boxShadow: "0 15px 35px rgba(0, 0, 0, 0.4), 0 5px 15px rgba(0, 0, 0, 0.2)",
    border: "2px solid rgba(255, 255, 255, 0.1)",
  },
  contentColumn: {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  founderName: {
    fontSize: "34px",
    fontWeight: "500",
    color: "#fff",
    marginBottom: "0.5rem",
    fontFamily: "sans-serif",
  },
  founderTitle: {
    fontSize: "14px",
    marginBottom: "2rem",
    color: "#4CAF50",
    fontWeight: "400",
    fontFamily: "sans-serif",
  },
  founderDescription: {
    fontSize: "16px",
    lineHeight: "1.8",
    color: "rgba(255, 255, 255, 0.9)",
    marginBottom: "1.5rem",
    fontFamily: "sans-serif",
  },
  // New wrapper for Vision/Mission with light background
  visionMissionWrapper: {
    backgroundColor: "#e8f5e9",
    padding: "30px 0",
    position: "relative",
    zIndex: 2,
  },
  sectionWrapper: {
    maxWidth: "800px",
    position: "relative",
    zIndex: 2,
    marginBottom: "20px",
  },
  sectionTitle: {
    fontSize: "28px",
    fontWeight: "500",
    marginBottom: "10px",
    color: "#2e7d32",
    fontFamily: "sans-serif",
    textAlign: "left",
  },
  sectionText: {
    fontSize: "16px",
    lineHeight: "1.8",
    color: "#424242",
    fontFamily: "sans-serif",
    margin: 0,
    textAlign: "left",
  },
};

export default HomeAboutSection;
