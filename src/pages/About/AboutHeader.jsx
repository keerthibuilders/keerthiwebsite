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
        header: {
          ...styles.headerMobile,
          backgroundImage: `url('/assets/images/bgimage.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        },
        content: styles.contentMobile,
        title: styles.titleMobile,
        subtitle: styles.subtitleMobile,
        description: styles.descriptionMobile,
        fadeUpScale: styles.fadeUpScaleMobile,
      };
    } else if (isTablet) {
      return {
        header: {
          ...styles.headerTablet,
          backgroundImage: `url('/assets/images/bgimage.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        },
        content: styles.contentTablet,
        title: styles.titleTablet,
        subtitle: styles.subtitleTablet,
        description: styles.descriptionTablet,
        fadeUpScale: styles.fadeUpScaleTablet,
      };
    } else {
      return {
        header: {
          ...styles.header,
          backgroundImage: `url('/assets/images/bghome.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        },
        content: styles.content,
        title: styles.title,
        subtitle: styles.subtitle,
        description: styles.description,
        fadeUpScale: styles.fadeUpScale,
      };
    }
  };

  const responsiveStyles = getResponsiveStyles();

  return (
    <header ref={headerRef} style={responsiveStyles.header}>
      <Container>
        <Row className="align-items-center" style={{ minHeight: isMobile ? "auto" : "300px" }}>
          <Col lg={8} md={10} sm={12}>
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
  // Mobile styles
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
  // Animations - Tablet
  fadeUpScaleTablet: {
    transform: "translateY(50px) scale(0.85)",
    opacity: 0,
    transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1)",
  },
  // Animations - Mobile
  fadeUpScaleMobile: {
    transform: "translateY(40px) scale(0.9)",
    opacity: 0,
    transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
  },
  // Active animation states (same for all devices)
  fadeUpScaleActive: {
    transform: "translateY(0) scale(1)",
    opacity: 1,
  },
  // Highlight text
  highlight: {
    color: "#21623C",
    position: "relative",
  },
};

export default AboutHeader;