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
  const statsRef = useRef(null);

  // Trigger entrance animations on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

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

  const titleAnimationStyle = {
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    opacity: isVisible ? 1 : 0,
    transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s'
  };

  const descriptionAnimationStyle = {
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    opacity: isVisible ? 1 : 0,
    transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s'
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
        
        <Container style={{ position: 'relative', zIndex: 1 }}>
          <Row >
            <Col lg={10} md={12} style={textAnimationStyle}>
              <div className="start-center">
                <h2 style={{ 
                  fontSize: "2.5rem", 
                  fontWeight: "500",
                  color: "#000",
                  marginBottom: "20px",
                  ...titleAnimationStyle
                }}>
                  Keerthi Builders — The Ground Beneath Great Futures
                </h2>
                
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
          top: '40%',
          left: 0,
          right: 0,
          bottom: 0,
          background: '#1c4c29',
          zIndex: 0
        }} />

        <Container style={{ position: 'relative', zIndex: 1 }}>
          <Row className="justify-content-center">
            <Col lg={11} xl={10} className="text-center" style={videoAnimationStyle}>
              <div style={{
                position: 'relative',
                display: 'inline-block',
                width: '100%',
                maxWidth: '1000px'
              }}>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    width: "100%",
                    height: "auto",
                    maxHeight: "250px",
                    border: "3px solid #1c4c29",
                    borderRadius: "12px",
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)',
                    transition: 'transform 0.3s ease',
                    objectFit: 'fill'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.02)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                  }}
                  onError={(e) => {
                    console.error('Video failed to load:', e);
                  }}
                >
                  <source 
                    src="https://res.cloudinary.com/dqmnu220b/video/upload/v1750917041/jodfj23i8zpj6vfnikxi.mp4" 
                    type="video/mp4" 
                  />
                  Your browser does not support the video tag.
                </video>

                {/* Decorative elements */}
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  right: '-15px',
                  width: '70px',
                  height: '70px',
                  background: 'linear-gradient(135deg, #4fd1c7, #06b6d4)',
                  borderRadius: '50%',
                  opacity: 0.8,
                  animation: 'pulse 2s infinite'
                }} />
                
                {/* Additional decorative element */}
                <div style={{
                  position: 'absolute',
                  bottom: '-10px',
                  left: '-10px',
                  width: '50px',
                  height: '50px',
                  background: 'linear-gradient(135deg, #06b6d4, #4fd1c7)',
                  borderRadius: '50%',
                  opacity: 0.6,
                  animation: 'pulse 2s infinite 1s'
                }} />
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
          zIndex: 2
        }}
      >
        <Container>
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

      <style jsx>{`
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
      `}</style>
    </>
  );
};

export default HomeHeroSection;
