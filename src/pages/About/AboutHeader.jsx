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
      { 
        threshold: 0.1, 
        rootMargin: "0px 0px -50px 0px" 
      }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const animationStyle = {
    transform: isVisible ? "translateY(0) scale(1)" : "translateY(50px) scale(0.9)",
    opacity: isVisible ? 1 : 0,
    transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)",
  };

  return (
    <header ref={headerRef} style={styles.header}>
      <div style={styles.overlay}></div>
      
      <Container style={styles.container}>
        <Row className="align-items-center" style={styles.row}>
          <Col lg={8} md={10} sm={12}>
            <div style={{ ...styles.content, ...animationStyle }}>
              <h1 style={styles.title}>
                About Keerthi Builders
              </h1>
              <p style={styles.subtitle}>
                Building Trust, Delivering Excellence.
              </p>
              <p style={styles.description}>
                Discover our story, vision, and values that have shaped us into one of the most trusted names in real estate development.
              </p>
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
    background: "#000000",
    backgroundImage: "url('/assets/images/about0home.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    paddingTop: "20px",
    paddingBottom: "40px",
    overflow: "hidden",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex: 1,
  },
  container: {
    position: 'relative',
    zIndex: 2
  },
  row: {
    minHeight: "300px"
  },
  content: {
    textAlign: "left",
    width: "100%",
    paddingRight: "20px",
    paddingLeft: "0px",
    position: "relative",
    zIndex: 2,
  },
  title: {
    fontSize: "32px",
    fontWeight: 500,
    letterSpacing: "-0.5px",
    marginBottom: "20px",
    lineHeight: 1.1,
    color: "#fff",
  },
  subtitle: {
    fontSize: "20px",
    fontWeight: 600,
    color: "#fff",
    margin: "0 0 16px 0",
    lineHeight: 1.4,
  },
  description: {
    fontSize: "16px",
    fontWeight: 400,
    color: "#fff",
    margin: "0 0 30px 0",
    lineHeight: 1.6,
    maxWidth: "600px",
  },
};

export default AboutHeader;
