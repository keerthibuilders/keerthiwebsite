import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";

const AboutHeader = () => {
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef(null);

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

  return (
    <header ref={headerRef} style={styles.header}>
      <Container>
        <Row className="align-items-center" style={{ minHeight: "300px" }}>
          <Col lg={6} md={6} sm={12}>
            <div 
              style={{
                ...styles.content,
                ...styles.fadeUpScale,
                ...(isVisible ? styles.fadeUpScaleActive : {})
              }}
            >
              <h1 style={styles.title}>
                About <span style={styles.highlight}>Keerthi Builders</span>
              </h1>
              
              <p style={styles.subtitle}>
                Building Trust, Delivering Excellence.
              </p>
              
              <p style={styles.description}>
                Discover our story, vision, and values that have shaped us into 
                one of the most trusted names in real estate development.
              </p>
            </div>
          </Col>
          
          <Col lg={6} md={6} sm={12}>
            <div style={styles.videoContainer}>
              <div 
                style={{
                  ...styles.videoWrapper,
                  ...styles.fadeUpScaleVideo,
                  ...(isVisible ? styles.fadeUpScaleVideoActive : {})
                }}
              >
                <div style={styles.topBorder}></div>
                <div style={styles.rightBorder}></div>
                <div style={styles.bottomBorder}></div>
                <div style={styles.leftBorder}></div>
                
                <video
                  style={styles.video}
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="https://res.cloudinary.com/dqmnu220b/video/upload/jodfj23i8zpj6vfnikxi.jpg"
                >
                  <source src="https://res.cloudinary.com/dqmnu220b/video/upload/v1/jodfj23i8zpj6vfnikxi.mp4" type="video/mp4" />
                  <source src="https://res.cloudinary.com/dqmnu220b/video/upload/v1/jodfj23i8zpj6vfnikxi.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
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
    borderBottom: "1px solid #e8e8e8",
    overflow: "hidden",
  },
  content: {
    textAlign: "left",
    width: "100%",
    paddingRight: "20px",
  },
  videoContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: "20px",
  },
  videoWrapper: {
    position: "relative",
    width: "100%",
    maxWidth: "600px",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 15px 40px rgba(0, 0, 0, 0.15)",
  },
  video: {
    width: "100%",
    height: "auto",
    borderRadius: "12px",
    display: "block",
    position: "relative",
    zIndex: 1,
    minHeight: "250px",
    backgroundColor: "#f8f9fa",
  },
  
  // Fade Up Scale Animation for Text
  fadeUpScale: {
    transform: "translateY(60px) scale(0.8)",
    opacity: 0,
    transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)",
  },
  fadeUpScaleActive: {
    transform: "translateY(0) scale(1)",
    opacity: 1,
  },
  
  // Fade Up Scale Animation for Video (with delay)
  fadeUpScaleVideo: {
    transform: "translateY(80px) scale(0.7)",
    opacity: 0,
    transition: "all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.3s",
  },
  fadeUpScaleVideoActive: {
    transform: "translateY(0) scale(1)",
    opacity: 1,
  },
  
  // Border and other styles remain the same...
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
  title: {
    fontSize: "3.2rem",
    fontWeight: 500,
    letterSpacing: "-0.5px",
    marginBottom: "20px",
    lineHeight: 1.1,
    color: "#1a1a1a",
  },
  highlight: {
    color: "#21623C",
    position: "relative",
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
};

export default AboutHeader;
