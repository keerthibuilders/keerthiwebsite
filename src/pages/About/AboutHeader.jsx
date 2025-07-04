import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";

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
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getResponsiveStyles = () => {
    if (isMobile) {
      return {
        header: styles.headerMobile,
        content: styles.contentMobile,
        imageContainer: styles.imageContainerMobile,
        imageWrapper: styles.imageWrapperMobile,
        image: styles.imageMobile,
        title: styles.titleMobile,
        subtitle: styles.subtitleMobile,
        description: styles.descriptionMobile,
        fadeUpScale: styles.fadeUpScaleMobile,
        fadeUpScaleImage: styles.fadeUpScaleImageMobile,
        // Mobile border styles
        topBorder: styles.topBorderMobile,
        rightBorder: styles.rightBorderMobile,
        bottomBorder: styles.bottomBorderMobile,
        leftBorder: styles.leftBorderMobile,
      };
    } else if (isTablet) {
      return {
        header: styles.headerTablet,
        content: styles.contentTablet,
        imageContainer: styles.imageContainerTablet,
        imageWrapper: styles.imageWrapperTablet,
        image: styles.imageTablet,
        title: styles.titleTablet,
        subtitle: styles.subtitleTablet,
        description: styles.descriptionTablet,
        fadeUpScale: styles.fadeUpScaleTablet,
        fadeUpScaleImage: styles.fadeUpScaleImageTablet,
        // Tablet border styles
        topBorder: styles.topBorderTablet,
        rightBorder: styles.rightBorderTablet,
        bottomBorder: styles.bottomBorderTablet,
        leftBorder: styles.leftBorderTablet,
      };
    } else {
      return {
        header: styles.header,
        content: styles.content,
        imageContainer: styles.imageContainer,
        imageWrapper: styles.imageWrapper,
        image: styles.image,
        title: styles.title,
        subtitle: styles.subtitle,
        description: styles.description,
        fadeUpScale: styles.fadeUpScale,
        fadeUpScaleImage: styles.fadeUpScaleImage,
        // Desktop border styles
        topBorder: styles.topBorder,
        rightBorder: styles.rightBorder,
        bottomBorder: styles.bottomBorder,
        leftBorder: styles.leftBorder,
      };
    }
  };

  const responsiveStyles = getResponsiveStyles();

  return (
    <header ref={headerRef} style={responsiveStyles.header}>
      <Container>
        <Row className="align-items-center" style={{ minHeight: isMobile ? "auto" : "300px" }}>
          <Col lg={6} md={6} sm={12}>
            <div
              style={{
                ...responsiveStyles.content,
                ...responsiveStyles.fadeUpScale,
                ...(isVisible ? styles.fadeUpScaleActive : {})
              }}
            >
              <h1 style={responsiveStyles.title}>
                About <span style={styles.highlight}>Keerthi Builders</span>
              </h1>
              
              <p style={responsiveStyles.subtitle}>
                Building Trust, Delivering Excellence.
              </p>
              
              <p style={responsiveStyles.description}>
                Discover our story, vision, and values that have shaped us into
                one of the most trusted names in real estate development.
              </p>
            </div>
          </Col>
          
          <Col lg={6} md={6} sm={12}>
            <div style={responsiveStyles.imageContainer}>
              <div
                style={{
                  ...responsiveStyles.imageWrapper,
                  ...responsiveStyles.fadeUpScaleImage,
                  ...(isVisible ? styles.fadeUpScaleImageActive : {})
                }}
              >
                {/* Decorative borders - shown on all devices */}
                {/* <div style={responsiveStyles.topBorder}></div>
                <div style={responsiveStyles.rightBorder}></div>
                <div style={responsiveStyles.bottomBorder}></div>
                <div style={responsiveStyles.leftBorder}></div>
                 */}
                <img
                  src="https://media.istockphoto.com/id/1398135990/photo/upscale-modern-mansion-with-pool.jpg?s=612x612&w=0&k=20&c=tBv9i3nVWa5fcQ96lQORgfe6cuHXWW6kmyjPi35-d1s="
                  alt="Modern Luxury Home by Keerthi Builders"
                  style={responsiveStyles.image}
                  loading="lazy"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Responsive CSS */}
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
          }
        `}
      </style>
    </header>
  );
};

const styles = {
  // Desktop styles (original)
  header: {
    position: "relative",
    width: "100%",
    minHeight: "400px",
    background: "#ffffff",
    paddingTop: "120px",
    paddingBottom: "40px",
    overflow: "hidden",
    border: "none",
    borderTop: "none",
    borderBottom: "none",
    boxShadow: "none",
    outline: "none",
  },

  content: {
    textAlign: "left",
    width: "100%",
    paddingRight: "20px",
    border: "none",
    outline: "none",
  },

  imageContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: "20px",
    border: "none",
    outline: "none",
  },

  imageWrapper: {
    position: "relative",
    width: "100%",
    maxWidth: "600px",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 15px 40px rgba(0, 0, 0, 0.15)",
    border: "none",
    outline: "none",
  },

  image: {
    width: "100%",
    height: "auto",
    borderRadius: "12px",
    display: "block",
    position: "relative",
    zIndex: 1,
    minHeight: "250px",
    maxHeight: "400px",
    objectFit: "cover",
    backgroundColor: "#f8f9fa",
    border: "none",
    outline: "none",
  },

  // Tablet styles
  headerTablet: {
    position: "relative",
    width: "100%",
    minHeight: "350px",
    background: "#ffffff",
    paddingTop: "100px",
    paddingBottom: "30px",
    overflow: "hidden",
    border: "none",
    borderTop: "none",
    borderBottom: "none",
    boxShadow: "none",
    outline: "none",
  },

  contentTablet: {
    textAlign: "left",
    width: "100%",
    paddingRight: "15px",
    border: "none",
    outline: "none",
  },

  imageContainerTablet: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: "15px",
    border: "none",
    outline: "none",
  },

  imageWrapperTablet: {
    position: "relative",
    width: "100%",
    maxWidth: "500px",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 12px 30px rgba(0, 0, 0, 0.12)",
    border: "none",
    outline: "none",
  },

  imageTablet: {
    width: "100%",
    height: "auto",
    borderRadius: "10px",
    display: "block",
    position: "relative",
    zIndex: 1,
    minHeight: "200px",
    maxHeight: "350px",
    objectFit: "cover",
    backgroundColor: "#f8f9fa",
    border: "none",
    outline: "none",
  },

  // Mobile styles - with decorative borders
  headerMobile: {
    position: "relative",
    width: "100%",
    minHeight: "auto",
    background: "#ffffff",
    paddingTop: "80px",
    paddingBottom: "20px",
    overflow: "hidden",
    border: "none",
    borderTop: "none",
    borderBottom: "none",
    boxShadow: "none",
    outline: "none",
  },

  contentMobile: {
    textAlign: "center",
    width: "100%",
    paddingRight: "0px",
    paddingLeft: "0px",
    marginBottom: "30px",
    border: "none",
    borderTop: "none",
    borderBottom: "none",
    boxShadow: "none",
    outline: "none",
  },

  imageContainerMobile: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: "0px",
    paddingRight: "0px",
    border: "none",
    borderTop: "none",
    borderBottom: "none",
    boxShadow: "none",
    outline: "none",
  },

  imageWrapperMobile: {
    position: "relative",
    width: "100%",
    maxWidth: "100%",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
    margin: "0 15px",
    border: "none",
    borderTop: "none",
    borderBottom: "none",
    outline: "none",
  },

  imageMobile: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
    display: "block",
    position: "relative",
    zIndex: 1,
    minHeight: "180px",
    maxHeight: "250px",
    objectFit: "cover",
    backgroundColor: "#f8f9fa",
    border: "none",
    borderTop: "none",
    borderBottom: "none",
    outline: "none",
  },

  // Typography - Desktop
  title: {
    fontSize: "3.2rem",
    fontWeight: 500,
    letterSpacing: "-0.5px",
    marginBottom: "20px",
    lineHeight: 1.1,
    color: "#1a1a1a",
  },

  subtitle: {
    fontSize: "1.4rem",
    fontWeight: 600,
    color: "#21623C",
    margin: "0 0 16px 0",
    lineHeight: 1.4,
  },

  description: {
    fontSize: "1.1rem",
    fontWeight: 400,
    color: "#666666",
    margin: "0 0 30px 0",
    lineHeight: 1.6,
    maxWidth: "600px",
  },

  // Typography - Tablet
  titleTablet: {
    fontSize: "2.8rem",
    fontWeight: 500,
    letterSpacing: "-0.4px",
    marginBottom: "18px",
    lineHeight: 1.1,
    color: "#1a1a1a",
  },

  subtitleTablet: {
    fontSize: "1.2rem",
    fontWeight: 600,
    color: "#21623C",
    margin: "0 0 14px 0",
    lineHeight: 1.4,
  },

  descriptionTablet: {
    fontSize: "1rem",
    fontWeight: 400,
    color: "#666666",
    margin: "0 0 25px 0",
    lineHeight: 1.5,
    maxWidth: "500px",
  },

  // Typography - Mobile
  titleMobile: {
    fontSize: "2.4rem",
    fontWeight: 500,
    letterSpacing: "-0.3px",
    marginBottom: "15px",
    lineHeight: 1.2,
    color: "#1a1a1a",
  },

  subtitleMobile: {
    fontSize: "1.1rem",
    fontWeight: 600,
    color: "#21623C",
    margin: "0 0 12px 0",
    lineHeight: 1.3,
  },

  descriptionMobile: {
    fontSize: "0.95rem",
    fontWeight: 400,
    color: "#666666",
    margin: "0 0 20px 0",
    lineHeight: 1.5,
    maxWidth: "100%",
    padding: "0 10px",
  },

  
    // Animations - Desktop
  fadeUpScale: {
    transform: "translateY(60px) scale(0.8)",
    opacity: 0,
    transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)",
  },

  fadeUpScaleImage: {
    transform: "translateY(80px) scale(0.7)",
    opacity: 0,
    transition: "all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.3s",
  },

  // Animations - Tablet
  fadeUpScaleTablet: {
    transform: "translateY(50px) scale(0.85)",
    opacity: 0,
    transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1)",
  },

  fadeUpScaleImageTablet: {
    transform: "translateY(60px) scale(0.8)",
    opacity: 0,
    transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
  },

  // Animations - Mobile
  fadeUpScaleMobile: {
    transform: "translateY(40px) scale(0.9)",
    opacity: 0,
    transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
  },

  fadeUpScaleImageMobile: {
    transform: "translateY(50px) scale(0.85)",
    opacity: 0,
    transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.15s",
  },

  // Active animation states (same for all devices)
  fadeUpScaleActive: {
    transform: "translateY(0) scale(1)",
    opacity: 1,
  },

  fadeUpScaleImageActive: {
    transform: "translateY(0) scale(1)",
    opacity: 1,
  },

  // Highlight text
  highlight: {
    color: "#21623C",
    position: "relative",
  },

  // Desktop Decorative borders
  topBorder: {
    position: "absolute",
    top: "0",
    right: "0",
    width: "50%",
    height: "6px",
    background: "#21623C",
    zIndex: 2,
    borderRadius: "0 12px 0 0",
  },

  rightBorder: {
    position: "absolute",
    top: "0",
    right: "0",
    width: "6px",
    height: "50%",
    background: "#21623C",
    zIndex: 2,
    borderRadius: "0 12px 0 0",
  },

  bottomBorder: {
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "50%",
    height: "6px",
    background: "#21623C",
    zIndex: 2,
    borderRadius: "0 0 0 12px",
  },

  leftBorder: {
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "6px",
    height: "50%",
    background: "#21623C",
    zIndex: 2,
    borderRadius: "0 0 0 12px",
  },

  // Tablet Decorative borders (slightly smaller)
  topBorderTablet: {
    position: "absolute",
    top: "0",
    right: "0",
    width: "45%",
    height: "5px",
    background: "#21623C",
    zIndex: 2,
    borderRadius: "0 10px 0 0",
  },

  rightBorderTablet: {
    position: "absolute",
    top: "0",
    right: "0",
    width: "5px",
    height: "45%",
    background: "#21623C",
    zIndex: 2,
    borderRadius: "0 10px 0 0",
  },

  bottomBorderTablet: {
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "45%",
    height: "5px",
    background: "#21623C",
    zIndex: 2,
    borderRadius: "0 0 0 10px",
  },

  leftBorderTablet: {
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "5px",
    height: "45%",
    background: "#21623C",
    zIndex: 2,
    borderRadius: "0 0 0 10px",
  },

  // Mobile Decorative borders (smaller and more subtle)
  topBorderMobile: {
    position: "absolute",
    top: "0",
    right: "0",
    width: "40%",
    height: "4px",
    background: "#21623C",
    zIndex: 2,
    borderRadius: "0 8px 0 0",
  },

  rightBorderMobile: {
    position: "absolute",
    top: "0",
    right: "0",
    width: "4px",
    height: "40%",
    background: "#21623C",
    zIndex: 2,
    borderRadius: "0 8px 0 0",
  },

  bottomBorderMobile: {
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "40%",
    height: "4px",
    background: "#21623C",
    zIndex: 2,
    borderRadius: "0 0 0 8px",
  },

  leftBorderMobile: {
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "4px",
    height: "40%",
    background: "#21623C",
    zIndex: 2,
    borderRadius: "0 0 0 8px",
  },
};

export default AboutHeader;

