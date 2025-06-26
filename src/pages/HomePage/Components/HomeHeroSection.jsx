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

  // Animation styles for top section only
  const textAnimationStyle = {
    transform: isVisible ? 'translateX(0)' : 'translateX(-100px)',
    opacity: isVisible ? 1 : 0,
    transition: 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
  };

  const imageAnimationStyle = {
    transform: isVisible ? 'translateX(0) scale(1)' : 'translateX(100px) scale(0.8)',
    opacity: isVisible ? 1 : 0,
    transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s'
  };

  const titleAnimationStyle = {
    transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
    opacity: isVisible ? 1 : 0,
    transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s'
  };

  const descriptionAnimationStyle = {
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    opacity: isVisible ? 1 : 0,
    transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s'
  };

  return (
    <div style={{ 
      background: 'linear-gradient(135deg, #0f1419 0%, #1a2332 50%, #2d3748 100%)',
      color: "#fff", 
      paddingTop: "120px",
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Pattern for top section only */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `radial-gradient(circle at 25% 25%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
                         radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)`,
        pointerEvents: 'none'
      }} />
      
      <Container style={{ position: 'relative', zIndex: 1 }}>
        <Row className="align-items-center">
          <Col md={7} style={textAnimationStyle}>
            <h2 style={{ 
              fontSize: "2.5rem", 
              fontWeight: "600",
              background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              ...titleAnimationStyle
            }}>
              Keerthi Builders — The Ground Beneath Great Futures
            </h2>
            <p style={{ 
              fontSize: "1.1rem", 
              marginTop: "20px", 
              lineHeight: "1.8",
              color: "#cbd5e0",
              ...descriptionAnimationStyle
            }}>
              With over a decade of expertise, Keerthi Builders develops thoughtfully located plots in and around Bangalore—
              blending value, vision, and trust to help you build your future from the ground up.
            </p>
          </Col>
          <Col md={5} className="text-center mt-4 mt-md-0" style={imageAnimationStyle}>
            <div style={{
              position: 'relative',
              display: 'inline-block'
            }}>
              <video
  autoPlay
  loop
  muted
  playsInline
  style={{
    maxWidth: "100%",
    width: "100%",
    height: "auto",
    border: "8px solid #4fd1c7",
    borderRadius: "12px",
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)',
    transition: 'transform 0.3s ease',
    objectFit: 'cover'
  }}
  onMouseEnter={(e) => {
    e.target.style.transform = 'scale(1.05)';
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
                top: '-10px',
                right: '-10px',
                width: '60px',
                height: '60px',
                background: 'linear-gradient(135deg, #4fd1c7, #06b6d4)',
                borderRadius: '50%',
                opacity: 0.8,
                animation: 'pulse 2s infinite'
              }} />
            </div>
          </Col>
        </Row>
      </Container>

      {/* Simple Stats Section without animations */}
      <div 
        ref={statsRef}
        style={{ 
          backgroundColor: "#1c4c29", 
          padding: "10px 0", 
          marginTop: "20px",
          marginBottom: "0"
        }}
      >
        <Container>
          <Row className="text-center text-white">
            <Col xs={6} md={3}>
              <h2 style={{ fontWeight: "bold", fontSize: "2.5rem" }}>
                {formatNumber(counters.projects, 'projects')}+
              </h2>
              <p style={{ fontSize: "1.1rem", marginBottom: "0" }}>Projects Completed</p>
            </Col>
            <Col xs={6} md={3}>
              <h2 style={{ fontWeight: "bold", fontSize: "2.5rem" }}>
                {formatNumber(counters.experience, 'experience')}+
              </h2>
              <p style={{ fontSize: "1.1rem", marginBottom: "0" }}>Years of Experience</p>
            </Col>
            <Col xs={6} md={3}>
              <h2 style={{ fontWeight: "bold", fontSize: "2.5rem" }}>
                {formatNumber(counters.customers, 'customers')}+
              </h2>
              <p style={{ fontSize: "1.1rem", marginBottom: "0" }}>Happy Customers</p>
            </Col>
            <Col xs={6} md={3}>
              <h2 style={{ fontWeight: "bold", fontSize: "2.5rem" }}>
                {formatNumber(counters.sqft, 'sqft')}+
              </h2>
              <p style={{ fontSize: "1.1rem", marginBottom: "0" }}>Lakhs+ sqft. Delivered</p>
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
    </div>
  );
};

export default HomeHeroSection;
