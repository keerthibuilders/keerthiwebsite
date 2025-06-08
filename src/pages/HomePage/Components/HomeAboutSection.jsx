import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowUpRight } from "lucide-react";
import fonts from "../../../components/Common/Font";

function HomeAboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
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

  const getAnimationStyle = (index) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: `opacity 0.8s ease, transform 0.8s ease`,
    transitionDelay: `${0.2 * index}s`
  });

  return (
    <div id='about' ref={sectionRef} style={styles.aboutContainer}>
      {/* Animated background elements */}
      <div style={styles.backgroundElements}>
        <div style={styles.circle1} className="animated-bg-element"></div>
        <div style={styles.rectangle} className="animated-bg-element"></div>
        
        {/* Animated rain drop lines */}
        <div style={{...styles.rainLine, left: '15%', animationDelay: '0s'}} className="rain-line"></div>
        <div style={{...styles.rainLine, left: '35%', animationDelay: '1.5s'}} className="rain-line"></div>
        <div style={{...styles.rainLine, left: '55%', animationDelay: '0.7s'}} className="rain-line"></div>
        <div style={{...styles.rainLine, left: '75%', animationDelay: '2.1s'}} className="rain-line"></div>
      </div>

      <Container style={styles.contentWrapper}>
        <Row className="mb-4">
          <Col>
            {/* Header with animation */}
            <div style={{...styles.headerContainer, ...getAnimationStyle(1)}}>
              <div style={styles.headingWrapper}>
                <h2 style={styles.heading}>
                  About Us
                </h2>
                <div 
                  style={{
                    ...styles.arrowContainer,
                  }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <ArrowUpRight size={22} color={isHovered ? 'white' : 'white'} />
                </div>
              </div>
              <p style={styles.paragraph}>
                At Keerthi Builders, we don’t just develop plots—we lay the groundwork for dreams. With over 10 years of experience in land development across Bangalore and its fast-growing outskirts, we’ve earned a reputation for trust, transparency, and long-term value. Every project we take on is driven by a simple belief: land is more than an asset—it’s the beginning of someone’s future. Our commitment to clear titles, prime locations, and ethical practices ensures that every Keerthi plot is a step toward prosperity and peace of mind.
              </p>
            </div>

            {/* Content with animation */}
            <div style={{...styles.contentBlock, ...getAnimationStyle(2)}}>
              <p style={styles.paragraph}>
                The driving force behind Keerthi Builders is our founder, KT Manjunath—a visionary with relentless dedication and a sharp instinct for growth. From humble beginnings to becoming one of the most respected names in Bangalore’s real estate landscape, Mr. Manjunath’s journey is a testament to what integrity, hard work, and foresight can achieve. His hands-on leadership and people-first approach have helped hundreds of families and investors secure their space in the city’s bright future.
              </p>
            </div>

            {/* <div style={{...styles.contentBlock, ...getAnimationStyle(3)}}>
              <p style={styles.paragraph}>
                Our team of experienced professionals combines a passion for construction with
                expertise in modern building techniques to deliver tailored solutions that align with your
                dreams and aspirations. We believe in the transformative power of thoughtfully designed spaces and the unique
                sense of belonging that develops when families move into homes built with care and precision.
                From custom-designed layouts to comprehensive project management, we handle every
                detail to ensure your property investment is secure, valuable, and impactful.
              </p>
            </div> */}
          </Col>
        </Row>
      </Container>

      {/* CSS for additional animations */}
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
          
          .feature-box {
            transition: all 0.3s ease;
          }
          
          .feature-box:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
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
        `}
      </style>
    </div>
  );
}

// Enhanced styles object with imported font styles and background image
const styles = {
  aboutContainer: {
    backgroundColor: "#1C542C",
    color: "white",
    padding: "40px 0",
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
  circle1: {
    position: "absolute",
    width: "300px",
    height: "300px",
    borderRadius: "50%",
    backgroundColor: "rgba(255, 255, 255, 0.03)",
    top: "-150px",
    right: "-100px",
  },
  circle2: {
    position: "absolute",
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    bottom: "-100px",
    left: "10%",
  },
  rectangle: {
    position: "absolute",
    width: "400px",
    height: "100px",
    transform: "rotate(45deg)",
    backgroundColor: "rgba(255, 255, 255, 0.02)",
    top: "40%",
    left: "-200px",
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
    margin: "0 auto",
    padding: "0 15px",
    position: "relative",
    zIndex: 2,
  },
  headerContainer: {
    marginBottom: "10px",
  },
  headingWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    marginBottom: "40px",
  },
  heading: {
    fontFamily: fonts.Noto,
    fontSize: "32px",
    fontWeight: 500,
    margin: "0",
    textAlign: "left",
    position: "relative",
    display: "inline-block",
  },
  arrowContainer: {
    padding: "8px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease",
  },
  introDescription: {
    fontSize: "14px",
    lineHeight: "1.6",
    textAlign: "left",
    fontFamily: fonts.Noto,
  },
  contentBlock: {
    marginBottom: "10px",
  },
  paragraph: {
    fontFamily: fonts.Noto,
    fontSize: "16px",
    lineHeight: "1.5",
    margin: "0",
    textAlign: "left",
    fontWeight: 400,
  },
  featureBox: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: "8px",
    padding: "25px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    backdropFilter: "blur(5px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    fontFamily: fonts.Noto,
  },
  featureIcon: {
    fontSize: "40px",
    marginBottom: "15px",
  },
  featureTitle: {
    fontSize: "20px",
    fontWeight: 600,
    marginBottom: "10px",
    fontFamily: fonts.Noto,
  },
  featureDescription: {
    fontSize: "16px",
    lineHeight: "1.6",
    margin: "0",
    fontFamily: fonts.Noto,
  },
};

export default HomeAboutSection;
