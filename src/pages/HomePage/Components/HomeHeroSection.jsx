import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const HomeHeroSection = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    experience: 0,
    customers: 0,
    sqft: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [lettersVisible, setLettersVisible] = useState(false);
  const statsRef = useRef(null);
  const videoRef = useRef(null);

  // Trigger entrance animations on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Start letter animation after main animation
      setTimeout(() => {
        setLettersVisible(true);
      }, 500);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Set video to start from 10 seconds when it loads
  const handleVideoLoadedData = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 6; // Start from 6 seconds
    }
  };

  // Counter animation function
  const animateCounter = (start, end, duration, key) => {
    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(start + (end - start) * easeOutQuart);

      setCounters(prev => ({ ...prev, [key]: current }));

      if (progress >= 1) {
        clearInterval(timer);
        setCounters(prev => ({ ...prev, [key]: end }));
      }
    }, 16); // ~60fps
  };

  // Intersection Observer to trigger animation when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            // Start all counter animations
            animateCounter(0, 15, 2000, 'projects');
            animateCounter(0, 17, 2200, 'experience');
            animateCounter(0, 2500, 2500, 'customers');
            animateCounter(0, 50, 2300, 'sqft');
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [hasAnimated]);

  // Format number with appropriate suffix
  const formatNumber = (num, type) => {
    switch (type) {
      case 'customers':
        return num >= 1000 ? `${(num / 1000).toFixed(1)}K` : num.toString();
      case 'projects':
      case 'experience':
      case 'sqft':
      default:
        return num.toString();
    }
  };

  // Animation styles
  const textAnimationStyle = {
    transform: isVisible ? 'translateY(0)' : 'translateY(-50px)',
    opacity: isVisible ? 1 : 0,
    transition: 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
  };

  const videoAnimationStyle = {
    transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.8)',
    opacity: isVisible ? 1 : 0,
    transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s'
  };

  // Letter animation component
  const AnimatedText = ({ text, delay = 0 }) => {
    return (
      <span style={{ display: 'inline-block' }}>
        {text.split('').map((char, index) => (
          <span
            key={index}
            style={{
              display: 'inline-block',
              opacity: lettersVisible ? 1 : 0,
              transform: lettersVisible ? 'translateY(0) rotateX(0)' : 'translateY(50px) rotateX(90deg)',
              transition: `all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
              transitionDelay: `${delay + index * 0.1}s`,
              transformOrigin: 'bottom center',
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </span>
    );
  };

  return (
    <>
      {/* Text Section - White Background */}
      <div style={{
        background: '#fff',
        color: "#000",
        paddingTop: "120px",
        paddingBottom: "60px",
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Pattern for top section */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100%',
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)`,
          pointerEvents: 'none',
          zIndex: 0
        }} />

        {/* Animated rain drop lines */}
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          zIndex: 1,
          pointerEvents: 'none',
        }}>
          <div style={{ ...styles.rainLine, left: '10%', animationDelay: '0s' }} className="rain-line"></div>
          <div style={{ ...styles.rainLine, left: '25%', animationDelay: '1.2s' }} className="rain-line"></div>
          <div style={{ ...styles.rainLine, left: '40%', animationDelay: '0.5s' }} className="rain-line"></div>
          <div style={{ ...styles.rainLine, left: '60%', animationDelay: '1.8s' }} className="rain-line"></div>
          <div style={{ ...styles.rainLine, left: '75%', animationDelay: '0.8s' }} className="rain-line"></div>
          <div style={{ ...styles.rainLine, left: '90%', animationDelay: '2.2s' }} className="rain-line"></div>
        </div>

        <Container style={{ position: 'relative', zIndex: 2 }}>
          <Row>
            <Col lg={10} md={12} style={textAnimationStyle}>
              <div className="start-center">
                <h2 style={{
                  fontSize: "2.5rem",
                  fontWeight: "500",
                  color: "#000",
                  lineHeight: '1.2'
                }}>
                  <AnimatedText text="Keerthi Builders — The " delay={0} />
                  <span style={{ color: '#1c4c29' }}>
                    <AnimatedText text="Ground" delay={2.5} />
                  </span>
                  <AnimatedText text=" Beneath " delay={3.1} />
                  <span style={{ color: '#1c4c29' }}>
                    <AnimatedText text="Great" delay={4.0} />
                  </span>
                  <AnimatedText text=" Futures" delay={4.6} />
                </h2>
              </div>
              <div className="start-center">
                <p style={{
                  fontSize: "28px",
                  fontWeight: "400",
                  color: "#000",
                  lineHeight: '1.2'
                }}>
                  <AnimatedText text="Where Excellence Meets Experience " delay={0} />
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Video Section with Split Background */}
      <div style={{
        position: 'relative',
        paddingTop: "0px",
        paddingBottom: "80px"
      }}>
        {/* White background for top half of video */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '50%',
          backgroundColor: '#fff',
          zIndex: 0
        }} />

        {/* Green background for bottom half of video */}
        <div style={{
          position: 'absolute',
          top: '30%',
          left: 0,
          right: 0,
          bottom: 0,
          background: '#1c4c29',
          zIndex: 0
        }} />

        <Container style={{ position: 'relative', zIndex: 1 }}>
          <Row className="justify-content-center">
            <Col lg={12} xl={10} className="text-center" style={videoAnimationStyle}>
              <div style={{
                position: 'relative',
                display: 'inline-block',
                width: '100%',
                maxWidth: '1200px',
                backgroundColor: 'none',
              }}>
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted
                  playsInline
                  onLoadedData={handleVideoLoadedData}
                  style={{
                    width: "100%",
                    height: "auto",
                    maxHeight: "300px",
                    border: "none",
                    borderRadius: "12px",
                    objectFit: 'fill'
                  }}

                >
                  <source
                    src="https://res.cloudinary.com/dqmnu220b/video/upload/v1750917041/jodfj23i8zpj6vfnikxi.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Stats Section */}
      <div
        ref={statsRef}
        style={{
          backgroundColor: "#1c4c29",
          padding: "0px 0 40px 0",
          position: 'relative',
          border: "none",
          zIndex: 2,
          overflow: 'hidden'
        }}
      >
        {/* Animated rain drop lines for stats section */}
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          zIndex: 1,
          pointerEvents: 'none',
        }}>
          <div style={{ ...styles.rainLineWhite, left: '15%', animationDelay: '0.3s' }} className="rain-line-white"></div>
          <div style={{ ...styles.rainLineWhite, left: '35%', animationDelay: '1.5s' }} className="rain-line-white"></div>
          <div style={{ ...styles.rainLineWhite, left: '55%', animationDelay: '0.9s' }} className="rain-line-white"></div>
          <div style={{ ...styles.rainLineWhite, left: '75%', animationDelay: '2.1s' }} className="rain-line-white"></div>
        </div>

        <Container style={{ position: 'relative', zIndex: 2 }}>
          <Row className="text-center text-white">
            <Col xs={6} md={3}>
              <h2 style={{ fontWeight: "bold", fontSize: "2.5rem", color: "white" }}>
                {formatNumber(counters.projects, 'projects')}+
              </h2>
              <p style={{ fontSize: "1.1rem", marginBottom: "0", color: "white" }}>Projects Completed</p>
            </Col>
            <Col xs={6} md={3}>
              <h2 style={{ fontWeight: "bold", fontSize: "2.5rem", color: "white" }}>
                {formatNumber(counters.experience, 'experience')}+
              </h2>
              <p style={{ fontSize: "1.1rem", marginBottom: "0", color: "white" }}>Years of Experience</p>
            </Col>
            <Col xs={6} md={3}>
              <h2 style={{ fontWeight: "bold", fontSize: "2.5rem", color: "white" }}>
                {formatNumber(counters.customers, 'customers')}+
              </h2>
              <p style={{ fontSize: "1.1rem", marginBottom: "0", color: "white" }}>Happy Customers</p>
            </Col>
            <Col xs={6} md={3}>
              <h2 style={{ fontWeight: "bold", fontSize: "2.5rem", color: "white" }}>
                {formatNumber(counters.sqft, 'sqft')}+
              </h2>
              <p style={{ fontSize: "1.1rem", marginBottom: "0", color: "white" }}>Lakhs+ sqft. Delivered</p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* CSS for rain line animations */}
      <style>
        {`
          .rain-line {
            animation: rainDrop 4s linear infinite;
          }
          
          .rain-line-white {
            animation: rainDropWhite 5s linear infinite;
          }
          
          @keyframes rainDrop {
            0% {
              transform: translateY(-100%);
              height: 40px;
              opacity: 0;
            }
            10% {
              opacity: 0.6;
            }
            90% {
              opacity: 0.6;
            }
            100% {
              transform: translateY(800px);
              height: 25px;
              opacity: 0;
            }
          }

          @keyframes rainDropWhite {
            0% {
              transform: translateY(-100%);
              height: 50px;
              opacity: 0;
            }
            10% {
              opacity: 0.4;
            }
            90% {
              opacity: 0.4;
            }
            100% {
              transform: translateY(600px);
              height: 30px;
              opacity: 0;
            }
          }

          @keyframes pulse {
            0%, 100% {
              transform: scale(1);
              opacity: 0.8;
            }
            50% {
              transform: scale(1.1);
              opacity: 0.6;
            }
          }
        `}
      </style>
    </>
  );
};

const styles = {
  rainLine: {
    position: "absolute",
    width: "1px",
    height: "40px",
    backgroundColor: "rgba(28, 76, 41, 0.3)",
    top: "-50px",
    borderRadius: "4px",
  },
  rainLineWhite: {
    position: "absolute",
    width: "1px",
    height: "50px",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    top: "-50px",
    borderRadius: "4px",
  },
};

export default HomeHeroSection;
