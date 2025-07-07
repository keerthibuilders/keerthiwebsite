import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";

// 🎯 UNIVERSAL CONFIGURATION - Change values here for ALL devices
const CONFIG = {
  // Background & Overlay
  backgroundColor: "#000000",
  backgroundImage: "/assets/images/about0home.png", // Same image for ALL devices
  overlayOpacity: 0.7, // 0.1 to 0.9
  
  // Layout
  minHeight: {
    desktop: "400px",
    tablet: "350px",
    mobile: "300px"
  },
  padding: {
    desktop: { top: "120px", bottom: "40px" },
    tablet: { top: "100px", bottom: "30px" },
    mobile: { top: "80px", bottom: "20px" }
  },
  
  // Typography
  textColor: "#fff",
  title: {
    desktop: { size: "32px", weight: 500, spacing: "-0.5px", margin: "20px", lineHeight: 1.1 },
    tablet: { size: "2.8rem", weight: 500, spacing: "-0.4px", margin: "18px", lineHeight: 1.1 },
    mobile: { size: "28px", weight: 500, spacing: "-0.3px", margin: "15px", lineHeight: 1.2 }
  },
  subtitle: {
    desktop: { size: "20px", weight: 600, lineHeight: 1.4 },
    tablet: { size: "1.2rem", weight: 600, lineHeight: 1.4 },
    mobile: { size: "18px", weight: 600, lineHeight: 1.3 }
  },
  description: {
    desktop: { size: "16px", weight: 400, maxWidth: "600px", lineHeight: 1.6 },
    tablet: { size: "1rem", weight: 400, maxWidth: "500px", lineHeight: 1.5 },
    mobile: { size: "14px", weight: 400, maxWidth: "100%", lineHeight: 1.5 }
  },
  
  // Animation
  animation: {
    duration: "1s",
    easing: "cubic-bezier(0.16, 1, 0.3, 1)",
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  },
  
  // Content
  content: {
    title: "About Keerthi Builders",
    subtitle: "Building Trust, Delivering Excellence.",
    description: "Discover our story, vision, and values that have shaped us into one of the most trusted names in real estate development."
  }
};

const AboutHeader = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const headerRef = useRef(null);

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
      { 
        threshold: CONFIG.animation.threshold, 
        rootMargin: CONFIG.animation.rootMargin 
      }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const getDeviceType = () => {
    if (isMobile) return 'mobile';
    if (isTablet) return 'tablet';
    return 'desktop';
  };

  const device = getDeviceType();

  const headerStyle = {
    position: "relative",
    width: "100%",
    minHeight: CONFIG.minHeight[device],
    background: CONFIG.backgroundColor,
    backgroundColor: CONFIG.backgroundColor,
    backgroundImage: `url('${CONFIG.backgroundImage}')`, // Same image for all devices
    backgroundSize: "cover",
    backgroundPosition: isMobile ? "center center" : "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: isMobile ? "scroll" : "scroll",
    paddingTop: CONFIG.padding[device].top,
    paddingBottom: CONFIG.padding[device].bottom,
    overflow: "hidden",
    border: "none",
    borderTop: "none",
    borderBottom: "none",
    boxShadow: "none",
    outline: "none",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: `rgba(0, 0, 0, ${CONFIG.overlayOpacity})`,
    zIndex: 1,
  };

  const containerStyle = {
    position: 'relative',
    zIndex: 2
  };

  const rowStyle = {
    minHeight: isMobile ? "auto" : "300px"
  };

  const contentStyle = {
    textAlign: isMobile ? "center" : "left",
    width: "100%",
    paddingRight: isMobile ? "16px" : "20px",
    paddingLeft: isMobile ? "16px" : "0px",
    paddingTop: isMobile ? "40px" : "0px",
    marginBottom: isMobile ? "30px" : "0px",
    position: "relative",
    zIndex: 2,
    border: "none",
    borderTop: "none",
    borderBottom: "none",
    boxShadow: "none",
    outline: "none",
  };

  const titleStyle = {
    fontSize: CONFIG.title[device].size,
    fontWeight: CONFIG.title[device].weight,
    letterSpacing: CONFIG.title[device].spacing,
    marginBottom: CONFIG.title[device].margin,
    marginTop: isMobile ? "20px" : "0px",
    lineHeight: CONFIG.title[device].lineHeight,
    color: CONFIG.textColor,
  };

  const subtitleStyle = {
    fontSize: CONFIG.subtitle[device].size,
    fontWeight: CONFIG.subtitle[device].weight,
    color: CONFIG.textColor,
    margin: "0 0 16px 0",
    lineHeight: CONFIG.subtitle[device].lineHeight,
  };

  const descriptionStyle = {
    fontSize: CONFIG.description[device].size,
    fontWeight: CONFIG.description[device].weight,
    color: CONFIG.textColor,
    margin: "0 0 30px 0",
    lineHeight: CONFIG.description[device].lineHeight,
    maxWidth: CONFIG.description[device].maxWidth,
    padding: isMobile ? "0 10px" : "0",
  };

  const getAnimationTransform = () => {
    const translateY = isMobile ? '40px' : (isTablet ? '50px' : '60px');
    const scale = isMobile ? '0.9' : (isTablet ? '0.85' : '0.8');
    return isVisible ? "translateY(0) scale(1)" : `translateY(${translateY}) scale(${scale})`;
  };

  const animationStyle = {
    transform: getAnimationTransform(),
    opacity: isVisible ? 1 : 0,
    transition: `all ${CONFIG.animation.duration} ${CONFIG.animation.easing}`,
  };

  return (
    <header ref={headerRef} style={headerStyle}>
      {/* Dark overlay for better text readability */}
      <div style={overlayStyle}></div>
      
      <Container style={containerStyle}>
        <Row className="align-items-center" style={rowStyle}>
          <Col lg={8} md={10} sm={12}>
            <div style={{ ...contentStyle, ...animationStyle }}>
              <h1 style={titleStyle}>
                {CONFIG.content.title}
              </h1>
              <p style={subtitleStyle}>
                {CONFIG.content.subtitle}
              </p>
              <p style={descriptionStyle}>
                {CONFIG.content.description}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      
      <style>
        {`
          @media (max-width: 768px) {
            .about-header-container {
              border: none !important;
              border-top: none !important;
              border-bottom: none !important;
              box-shadow: none !important;
              outline: none !important;
            }
            .about-header-row {
              flex-direction: column !important;
              gap: 20px !important;
            }
            .about-header-col {
              margin-bottom: 20px !important;
              padding-top: 40px !important;
            }
            header {
              background-color: ${CONFIG.backgroundColor} !important;
              background-image: url('${CONFIG.backgroundImage}') !important;
              background-size: cover !important;
              background-position: center !important;
              background-repeat: no-repeat !important;
              min-height: ${CONFIG.minHeight.mobile} !important;
            }
          }
          
          @media (max-width: 480px) {
            .about-header-title {
              font-size: 2rem !important;
              line-height: 1.2 !important;
            }
            .about-header-subtitle {
              font-size: 1.1rem !important;
            }
            .about-header-description {
              font-size: 0.95rem !important;
            }
            .about-header-col {
              padding-top: 50px !important;
            }
            header {
              min-height: ${CONFIG.minHeight.mobile} !important;
              background-color: ${CONFIG.backgroundColor} !important;
              background-image: url('${CONFIG.backgroundImage}') !important;
              background-size: cover !important;
              background-position: center center !important;
              background-repeat: no-repeat !important;
            }
          }
          
          @media (min-width: 769px) and (max-width: 1024px) {
            header {
              background-color: ${CONFIG.backgroundColor} !important;
              background-image: url('${CONFIG.backgroundImage}') !important;
              background-size: cover !important;
              background-position: center !important;
              background-repeat: no-repeat !important;
              min-height: ${CONFIG.minHeight.tablet} !important;
            }
          }
          
          @media (min-width: 1025px) {
            header {
              background-color: ${CONFIG.backgroundColor} !important;
              background-image: url('${CONFIG.backgroundImage}') !important;
              background-size: cover !important;
              background-position: center !important;
              background-repeat: no-repeat !important;
              min-height: ${CONFIG.minHeight.desktop} !important;
            }
          }
        `}
      </style>
    </header>
  );
};

export default AboutHeader;
