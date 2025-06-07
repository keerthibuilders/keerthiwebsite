import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import fonts from "../../../components/Common/Font";

// Update the video path to use bgv1.mp4
const backgroundVideo = "/bgv1.mp4";

function HomeHeroSection() {
  // Define the final stat values
  const finalStats = [
    { number: 15, text: "Projects Completed", suffix: "+" },
    { number: 17, text: "Years of Experience", suffix: "+" },
    { number: 2.5, text: "Happy Customers", suffix: "K +" },
    { number: 50, text: "Lakhs+ sqft. Delivered", suffix: "+" }
  ];
  
  // State to hold current counter values
  const [counters, setCounters] = useState(finalStats.map(() => 0));
  
  // Ref to track if animation has run
  const animationPerformed = useRef(false);
  
  // Ref for the stats section to detect when it's visible
  const statsRef = useRef(null);
  
  // Ref for the hero container
  const heroRef = useRef(null);

  // Effect to update navbar style when component mounts or becomes visible
  useEffect(() => {
    // Force apply video background class
    const applyVideoBackground = () => {
      document.body.classList.add('has-video-background');
      
      // Force update navbar styles
      const navbar = document.querySelector('header') || 
                    document.querySelector('nav') || 
                    document.querySelector('.navbar');
      
      if (navbar) {
        navbar.style.position = 'absolute';
        navbar.style.top = '0';
        navbar.style.left = '0';
        navbar.style.right = '0';
        navbar.style.zIndex = '1000';
        navbar.style.backgroundColor = 'transparent';
      }
    };

    // Apply immediately
    applyVideoBackground();
    
    // Also apply after a short delay to ensure DOM is ready
    const timeoutId = setTimeout(applyVideoBackground, 100);
    
    // Clean up when component unmounts
    return () => {
      clearTimeout(timeoutId);
      document.body.classList.remove('has-video-background');
      
      // Reset navbar styles when leaving
      const navbar = document.querySelector('header') || 
                    document.querySelector('nav') || 
                    document.querySelector('.navbar');
      
      if (navbar) {
        navbar.style.position = '';
        navbar.style.backgroundColor = '';
      }
    };
  }, []); // Empty dependency array ensures this runs on every mount

  // Additional effect to handle route changes
  useEffect(() => {
    const handleRouteChange = () => {
      // Reapply video background styles when route changes
      document.body.classList.add('has-video-background');
    };

    // Listen for popstate events (back/forward navigation)
    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  useEffect(() => {
    // Skip if animation already performed
    if (animationPerformed.current) return;
    
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        // Start animation when stats section becomes visible
        animateCounters();
        animationPerformed.current = true;
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  const animateCounters = () => {
    // Animation duration in milliseconds
    const duration = 4000;
    // Number of steps in the animation
    const steps = 50;
    const interval = duration / steps;
    
    let step = 0;
    
    const timer = setInterval(() => {
      step++;
      
      if (step <= steps) {
        setCounters(finalStats.map((stat, index) => {
          // Calculate current value based on animation progress
          return Math.floor((stat.number * step) / steps);
        }));
      } else {
        // Ensure final values are set exactly
        setCounters(finalStats.map(stat => stat.number));
        clearInterval(timer);
      }
    }, interval);
  };

  return (
    <div ref={heroRef} style={styles.heroContainer} id="hero-section">
      {/* Video background contained within the hero section */}
      <div style={styles.videoBackground}>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          style={styles.fullPageVideo}
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <div style={styles.videoOverlay}></div>
      </div>
      
      {/* Hero Content */}
      <Container fluid style={styles.contentWrapper}>
        {/* Main Content */}
        <Row style={styles.contentRow}>
          <Col>
            <section style={styles.mainContent}>
              <div style={styles.textContainer}>
                <h2 style={styles.heading}>
                  Keerthi Builders — The Ground Beneath Great Futures
                </h2>
                <p style={styles.description}>
                  With over a decade of expertise, Keerthi Builders develops thoughtfully located plots in and around Bangalore—blending value, vision, and trust to help you build your future from the ground up.
                </p>
              
              </div>
            </section>
          </Col>
        </Row>
        
        {/* Stats Bar */}
        <Row className="mt-auto">
          <Col>
            <section ref={statsRef} style={styles.statsBar}>
              <Row style={styles.statsContainer}>
                {finalStats.map((stat, index) => (
                  <Col xs={6} md={3} key={index}>
                    <div style={styles.statItem}>
                      <div style={styles.statContent}>
                        <p style={styles.statNumber}>
                          {counters[index]}{stat.suffix}
                        </p>
                      </div>
                        <p style={styles.statText}>{stat.text}</p>
                    </div>
                  </Col>
                ))}
              </Row>
            </section>
          </Col>
        </Row>
      </Container>
      
      {/* Add global styles for navbar when video background is present */}
      <style>
        {`
          body {
            margin: 0;
            padding: 0;
            overflow-x: hidden;
          }
          
          body.has-video-background header,
          body.has-video-background nav,
          body.has-video-background .navbar {
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            z-index: 1000 !important;
            background-color: transparent !important;
          }
          
          body.has-video-background .navbar-brand h1 {
            color: #ffffff !important;
            text-shadow: 0 2px 4px rgba(0,0,0,0.5) !important;
          }
          
          body.has-video-background .navbar-brand p {
            color: #e0e0e0 !important;
            text-shadow: 0 1px 3px rgba(0,0,0,0.5) !important;
          }
          
          body.has-video-background .nav-link {
            color: #ffffff !important;
            text-shadow: 0 1px 3px rgba(0,0,0,0.5) !important;
          }
          
          body.has-video-background .navbar-toggler-icon {
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(255, 255, 255, 1)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important;
          }
          
          @media (max-width: 576px) {
            body.has-video-background .navbar-brand img {
              height: 50px !important;
              width: 80px !important;
            }
            
            body.has-video-background .navbar-brand h1 {
              font-size: 14px !important;
            }
            
            body.has-video-background .navbar-brand p {
              font-size: 9px !important;
            }
          }
          
          /* Create a CSS clip path for the video */
          #hero-section {
            clip-path: inset(0);
          }
        `}
      </style>
    </div>
  );
}

// Enhanced styles object with imported font styles and background video
const styles = {
  heroContainer: {
    position: "relative",
    width: "100%",
    height: "100vh",
    overflow: "hidden",
    fontFamily: fonts.Noto,
    zIndex: 1,
    backgroundColor:'#000'
  },
  videoBackground: {
    position: "fixed", 
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    overflow: "hidden",
    zIndex: 0,
    clipPath: "inherit",
  },
  fullPageVideo: {
    minWidth: "100%",
    minHeight: "100%",
    width: "auto",
    height: "auto",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    objectFit: "fit",
  },
  videoOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    // backgroundColor: "rgba(40, 39, 39, 0.5)",
    zIndex: 1,
  },
  contentWrapper: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    padding: 0,
    fontFamily: fonts.Noto,
    position: "relative",
    zIndex: 2,
  },
  contentRow: {
    flex: 1,
    display: "flex",
    alignItems: "center",
  },
  mainContent: {
    boxSizing: "border-box",
    padding: "2rem 3rem",
    fontFamily: fonts.Noto,
    marginTop: "80px",
  },
  textContainer: {
    maxWidth: "600px",
    fontFamily: fonts.Noto,
  },
  heading: {
    fontSize: "30px",
    fontWeight: "500",
    color: "#fff",
    lineHeight: "1.4",
    marginBottom: "1rem",
    fontFamily: fonts.Noto,
    textShadow: "0 2px 4px rgba(0,0,0,0.5)",
  },
  description: {
    color: "#f0f0f0",
    fontSize: "16px",
    lineHeight: "1.6",
    marginBottom: "1rem",
    fontFamily: fonts.Noto,
    textShadow: "0 1px 3px rgba(0,0,0,0.5)",
  },
  learnMoreBtn: {
    backgroundColor: "#1C542C",
    color: "white",
    border: "none",
    padding: "0.5rem 1.5rem",
    fontWeight: "500",
    borderRadius: "30px",
    fontSize: "16px",
    transition: "all 0.3s ease",
    fontFamily: fonts.Noto,
  },
  statsBar: {
    backgroundColor: "rgba(28, 84, 44, 0.9)",
    color: "white",
    padding: "0rem 0",
    fontFamily: fonts.Noto,
    backdropFilter: "blur(5px)",
    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
    width: "100%",
    position: "relative",
    zIndex: 3,
  },
  statsContainer: {
    display: "flex",
    flexWrap: "wrap",
    margin: 0,
    justifyContent: "space-between",
    fontFamily: fonts.Noto,
  },
  statItem: {
    padding: "0.5rem 1rem",
    boxSizing: "border-box",
    fontFamily: fonts.Noto,
    textAlign: "center",
    
  },
  statContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: fonts.Noto,
    
  },
  statNumber: {
    fontSize: "2.5rem",
    fontWeight: "700",
    margin: "0",
    whiteSpace: "nowrap",
    fontFamily: fonts.Noto,
  },
  statText: {
    fontSize: "0.9rem",
    fontWeight: "600",
    margin: "0",
    textAlign: "center",
    fontFamily: fonts.Noto,
  },
};

export default HomeHeroSection;
