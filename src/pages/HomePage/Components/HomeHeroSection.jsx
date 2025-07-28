import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import videoSource from "./../../../public/videos/ktm_hero_video.mp4";

const HomeHeroSection = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    experience: 0,
    customers: 0,
    sqft: 0,
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [lettersVisible, setLettersVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const statsRef = useRef(null);
  const videoRef = useRef(null);

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width <= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Trigger entrance animations on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setTimeout(() => {
        setLettersVisible(true);
      }, 500);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Set video to start from 6 seconds when it loads
  const handleVideoLoadedData = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 3;
    }
  };

  // Counter animation function
  const animateCounter = (start, end, duration, key) => {
    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(start + (end - start) * easeOutQuart);
      setCounters((prev) => ({ ...prev, [key]: current }));
      if (progress >= 1) {
        clearInterval(timer);
        setCounters((prev) => ({ ...prev, [key]: end }));
      }
    }, 16);
  };

  // Intersection Observer to trigger animation when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounter(0, 20, 2000, "projects");
            animateCounter(0, 25, 2200, "experience");
            animateCounter(0, 2000, 2500, "customers");
            animateCounter(0, 50, 2300, "sqft");
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
      case "customers":
        return num >= 1000 ? `${(num / 1000).toFixed(1)}K` : num.toString();
      case "projects":
      case "experience":
      case "sqft":
      default:
        return num.toString();
    }
  };

  // Get responsive styles
  const getResponsiveStyles = () => {
    if (isMobile) {
      return {
        textSection: styles.textSectionMobile,
        videoSection: styles.videoSectionMobile,
        videoContainer: styles.videoContainerMobile,
        video: styles.videoMobile,
        statsSection: styles.statsSectionMobile,
        statsContainer: styles.statsContainerMobile,
        statItem: styles.statItemMobile,
        statNumber: styles.statNumberMobile,
        statLabel: styles.statLabelMobile,
        title: styles.titleMobile,
        subtitle: styles.subtitleMobile,
      };
    } else if (isTablet) {
      return {
        textSection: styles.textSectionTablet,
        videoSection: styles.videoSectionTablet,
        videoContainer: styles.videoContainerTablet,
        video: styles.videoTablet,
        statsSection: styles.statsSectionTablet,
        statsContainer: styles.statsContainerTablet,
        statItem: styles.statItemTablet,
        statNumber: styles.statNumberTablet,
        statLabel: styles.statLabelTablet,
        title: styles.titleTablet,
        subtitle: styles.subtitleTablet,
      };
    } else {
      return {
        textSection: styles.textSectionDesktop,
        videoSection: styles.videoSectionDesktop,
        videoContainer: styles.videoContainerDesktop,
        video: styles.videoDesktop,
        statsSection: styles.statsSectionDesktop,
        statsContainer: styles.statsContainerDesktop,
        statItem: styles.statItemDesktop,
        statNumber: styles.statNumberDesktop,
        statLabel: styles.statLabelDesktop,
        title: styles.titleDesktop,
        subtitle: styles.subtitleDesktop,
      };
    }
  };

  const responsiveStyles = getResponsiveStyles();

  // Animation styles
  const textAnimationStyle = {
    transform: isVisible ? "translateY(0)" : "translateY(-50px)",
    opacity: isVisible ? 1 : 0,
    transition: "all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  };

  const videoAnimationStyle = {
    transform: isVisible
      ? "translateY(0) scale(1)"
      : "translateY(50px) scale(0.8)",
    opacity: isVisible ? 1 : 0,
    transition: "all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s",
  };

  // Letter animation component
  const AnimatedText = ({ text, delay = 0 }) => {
    return (
      <span style={{ display: "inline-block" }}>
        {text.split("").map((char, index) => (
          <span
            key={index}
            style={{
              display: "inline-block",
              opacity: lettersVisible ? 1 : 0,
              transform: lettersVisible
                ? "translateY(0) rotateX(0)"
                : "translateY(50px) rotateX(90deg)",
              transition: `all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
              transitionDelay: `${delay + index * 0.1}s`,
              transformOrigin: "bottom center",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
    );
  };

  return (
    <>
      {/* Spider Web Circle Wave Animated Background */}
      <div style={styles.backgroundContainer}>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
          style={styles.backgroundSvg}
        >
          <g>
            {[0, 1, 2, 3, 4].map((i) => (
              <circle
                key={i}
                cx="720"
                cy="320"
                r={120 + i * 70}
                stroke="#21623C"
                strokeWidth={2 - i * 0.2}
                fill="none"
                opacity={0.5 - i * 0.08}
              >
                <animate
                  attributeName="r"
                  values={`${120 + i * 70};${200 + i * 90};${120 + i * 70}`}
                  dur={`${6 + i * 1.2}s`}
                  repeatCount="indefinite"
                  keyTimes="0;0.5;1"
                />
              </circle>
            ))}
            {/* Spider web lines */}
            {[...Array(12)].map((_, idx) => {
              const angle = (Math.PI * 2 * idx) / 12;
              const x1 = 720 + Math.cos(angle) * 120;
              const y1 = 320 + Math.sin(angle) * 120;
              const x2 = 720 + Math.cos(angle) * 400;
              const y2 = 320 + Math.sin(angle) * 400;
              return (
                <line
                  key={idx}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#21623C"
                  strokeWidth="1"
                  opacity="0.12"
                >
                  <animate
                    attributeName="opacity"
                    values="0.12;0.28;0.12"
                    dur="5s"
                    begin={`${idx * 0.3}s`}
                    repeatCount="indefinite"
                  />
                </line>
              );
            })}
          </g>
        </svg>
      </div>

      {/* Text Section */}
      <div style={responsiveStyles.textSection}>
        {/* Background Pattern for top section */}
        <div style={styles.backgroundPattern} />

        {/* Animated rain drop lines */}
        <div style={styles.rainContainer}>
          <div
            style={{ ...styles.rainLine, left: "10%", animationDelay: "0s" }}
            className="rain-line"
          ></div>
          <div
            style={{ ...styles.rainLine, left: "25%", animationDelay: "1.2s" }}
            className="rain-line"
          ></div>
          <div
            style={{ ...styles.rainLine, left: "40%", animationDelay: "0.5s" }}
            className="rain-line"
          ></div>
          <div
            style={{ ...styles.rainLine, left: "60%", animationDelay: "1.8s" }}
            className="rain-line"
          ></div>
          <div
            style={{ ...styles.rainLine, left: "75%", animationDelay: "0.8s" }}
            className="rain-line"
          ></div>
          <div
            style={{ ...styles.rainLine, left: "90%", animationDelay: "2.2s" }}
            className="rain-line"
          ></div>
        </div>

        <Container style={styles.containerRelative}>
          <Row>
            <Col lg={10} md={12} style={textAnimationStyle}>
              <div className="start-center">
                <h2 style={responsiveStyles.title}>
                  <AnimatedText text="Keerthi Builders The " delay={0} />
                  <span style={{ color: "#FFD600" }}>
                    <AnimatedText text="Ground" delay={2.5} />
                  </span>
                  <AnimatedText text=" Beneath " delay={3.1} />
                  <br />
                  <span style={{ color: "#FFD600" }}>
                    <AnimatedText text="Great" delay={4.0} />
                  </span>
                  <AnimatedText text=" Futures" delay={4.6} />
                </h2>
              </div>
              <div className="start-center">
                <p style={responsiveStyles.subtitle}>
                  <AnimatedText
                    text="Where Excellence Meets Experience "
                    delay={0}
                  />
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Video Section with Split Background */}
      <div style={responsiveStyles.videoSection}>
        {/* White background for top half of video */}
        <div style={styles.videoBackgroundTop} />

        {/* Green background for bottom half of video */}
        <div style={styles.videoBackgroundBottom} />

        <Container style={styles.containerRelative}>
          <Row className="justify-content-center">
            <Col
              md={12}
              lg={12}
              xl={12}
              className="text-center"
              style={videoAnimationStyle}
            >
              <div style={responsiveStyles.videoContainer}>
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted
                  playsInline
                  onLoadedData={handleVideoLoadedData}
                  style={responsiveStyles.video}
                >
                  <source src={videoSource} type="video/mp4" />
                </video>
              </div>
            </Col>
          </Row>
        </Container>
        <div
          style={{ ...styles.rainLine, left: "10%", animationDelay: "0s" }}
          className="rain-line"
        ></div>
        <div
          style={{ ...styles.rainLine, left: "25%", animationDelay: "1.2s" }}
          className="rain-line"
        ></div>
        <div
          style={{ ...styles.rainLine, left: "40%", animationDelay: "0.5s" }}
          className="rain-line"
        ></div>
        <div
          style={{ ...styles.rainLine, left: "60%", animationDelay: "1.8s" }}
          className="rain-line"
        ></div>
        <div
          style={{ ...styles.rainLine, left: "75%", animationDelay: "0.8s" }}
          className="rain-line"
        ></div>
        <div
          style={{ ...styles.rainLine, left: "90%", animationDelay: "2.2s" }}
          className="rain-line"
        ></div>
      </div>

      {/* Stats Section */}
      <div ref={statsRef} style={responsiveStyles.statsSection}>
        {/* Animated rain drop lines for stats section */}
        <div style={styles.rainContainer}>
          <div
            style={{
              ...styles.rainLineWhite,
              left: "15%",
              animationDelay: "0.3s",
            }}
            className="rain-line-white"
          ></div>
          <div
            style={{
              ...styles.rainLineWhite,
              left: "35%",
              animationDelay: "1.5s",
            }}
            className="rain-line-white"
          ></div>
          <div
            style={{
              ...styles.rainLineWhite,
              left: "55%",
              animationDelay: "0.9s",
            }}
            className="rain-line-white"
          ></div>
          <div
            style={{
              ...styles.rainLineWhite,
              left: "75%",
              animationDelay: "2.1s",
            }}
            className="rain-line-white"
          ></div>
        </div>

        <Container style={responsiveStyles.statsContainer}>
          <Row className="text-center text-white">
            <Col xs={6} md={3}>
              <div style={responsiveStyles.statItem}>
                <h2 style={responsiveStyles.statNumber}>
                  {formatNumber(counters.projects, "projects")}+
                </h2>
                <p style={responsiveStyles.statLabel}>Projects Completed</p>
              </div>
            </Col>
            <Col xs={6} md={3}>
              <div style={responsiveStyles.statItem}>
                <h2 style={responsiveStyles.statNumber}>
                  {formatNumber(counters.experience, "experience")}+
                </h2>
                <p style={responsiveStyles.statLabel}>Years of Experience</p>
              </div>
            </Col>
            <Col xs={6} md={3}>
              <div style={responsiveStyles.statItem}>
                <h2 style={responsiveStyles.statNumber}>
                  {formatNumber(counters.customers, "customers")}+
                </h2>
                <p style={responsiveStyles.statLabel}>Happy Customers</p>
              </div>
            </Col>
            <Col xs={6} md={3}>
              <div style={responsiveStyles.statItem}>
                <h2 style={responsiveStyles.statNumber}>
                  {formatNumber(counters.sqft, "sqft")}+
                </h2>
                <p style={responsiveStyles.statLabel}>Lakhs+ sqft. Delivered</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* CSS for rain line and web wave animations */}
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
          
          /* Mobile responsive styles */
          @media (max-width: 768px) {
            .home-hero-section {
              padding: 15px 10px !important;
            }
            .start-center {
              text-align: center !important;
            }
          }
          
          @media (max-width: 576px) {
            .home-hero-section {
              padding: 10px 8px !important;
            }
          }
          
          /* Tablet responsive styles */
          @media (min-width: 769px) and (max-width: 1024px) {
            .home-hero-section {
              padding: 25px 20px !important;
            }
          }
        `}
      </style>
    </>
  );
};

const styles = {
  // Common styles
  backgroundContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 0,
    overflow: "hidden",
    pointerEvents: "none",
  },
  backgroundSvg: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    opacity: 0.18,
  },
  backgroundPattern: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "100%",
    pointerEvents: "none",
    zIndex: 0,
  },
  rainContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    zIndex: 1,
    pointerEvents: "none",
  },
  containerRelative: {
    position: "relative",
    zIndex: 2,
  },
  videoBackgroundTop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "50%",
    backgroundColor: "#1A662F",
    zIndex: 0,
  },
  videoBackgroundBottom: {
    position: "absolute",
    top: "30%",
    left: 0,
    right: 0,
    bottom: 0,
    background: "#1A662F",
    zIndex: 0,
  },
  rainLine: {
    position: "absolute",
    width: "1px",
    height: "100px",
    backgroundColor: "rgba(238, 249, 109, 0.3)",
    top: "-50px",
    borderRadius: "4px",
  },
  rainLineWhite: {
    position: "absolute",
    width: "1px",
    height: "100px",
    backgroundColor: "rgba(238, 249, 109, 0.3)",
    top: "-50px",
    borderRadius: "4px",
  },

  // Desktop styles
  textSectionDesktop: {
    background: "#1A662F",
    color: "#fff",
    paddingTop: "50px",
    paddingBottom: "60px",
    position: "relative",
    overflow: "hidden",
  },
  videoSectionDesktop: {
    position: "relative",
    paddingTop: "0px",
    paddingBottom: "80px",
  },
  videoContainerDesktop: {
    position: "relative",
    display: "inline-block",
    width: "100%",
    maxWidth: "1200px",
    backgroundColor: "none",
  },
  videoDesktop: {
    width: "100%",
    height: "auto",
    minHeight: "480px",
    maxHeight: "480px",
    border: "none",
    borderRadius: "0px  80px 0px 80px",
    objectFit: "fill",
  },
  statsSectionDesktop: {
    backgroundColor: "#1A662F",
    padding: "0px 0 40px 0",
    position: "relative",
    border: "none",
    zIndex: 2,
    overflow: "hidden",
  },
  statsContainerDesktop: {
    position: "relative",
    zIndex: 2,
  },
  statItemDesktop: {
    padding: "10px",
  },
  statNumberDesktop: {
    fontWeight: "bold",
    fontSize: "2.5rem",
    color: "white",
    marginBottom: "0",
  },
  statLabelDesktop: {
    fontSize: "1.1rem",
    marginBottom: "0",
    color: "white",
  },
  titleDesktop: {
    fontSize: "38px",
    fontWeight: "500",
    color: "#fff",
    lineHeight: "1.6",
  },
  subtitleDesktop: {
    fontSize: "18px",
    fontWeight: "400",
    color: "#fff",
    lineHeight: "1.4",
  },

  // Tablet styles
  textSectionTablet: {
    background: "#1A662F",
    color: "#fff",
    paddingTop: "50px",
    paddingBottom: "50px",
    position: "relative",
    overflow: "hidden",
  },
  videoSectionTablet: {
    position: "relative",
    paddingTop: "0px",
    paddingBottom: "60px",
  },
  videoContainerTablet: {
    position: "relative",
    display: "inline-block",
    width: "100%",
    maxWidth: "900px",
    backgroundColor: "none",
  },
  videoTablet: {
    width: "100%",
    height: "auto",
    minHeight: "280px",
    maxHeight: "280px",
    border: "none",
    borderRadius: "10px",
    objectFit: "fill",
  },
  statsSectionTablet: {
    backgroundColor: "#1A662F",
    padding: "0px 0 35px 0",
    position: "relative",
    border: "none",
    zIndex: 2,
    overflow: "hidden",
  },
  statsContainerTablet: {
    position: "relative",
    zIndex: 2,
  },
  statItemTablet: {
    padding: "8px",
  },
  statNumberTablet: {
    fontWeight: "bold",
    fontSize: "2rem",
    color: "white",
    marginBottom: "0",
  },
  statLabelTablet: {
    fontSize: "0.9rem",
    marginBottom: "0",
    color: "white",
  },
  titleTablet: {
    fontSize: "30px",
    fontWeight: "500",
    color: "#fff",
    lineHeight: "1.5",
  },
  subtitleTablet: {
    fontSize: "16px",
    fontWeight: "400",
    color: "#fff",
    lineHeight: "1.4",
  },

  // Mobile styles
  textSectionMobile: {
    background: "#1A662F",
    color: "#fff",
    paddingTop: "50px",
    paddingBottom: "40px",
    position: "relative",
    overflow: "hidden",
  },
  videoSectionMobile: {
    position: "relative",
    paddingTop: "0px",
    paddingBottom: "40px",
  },
  videoContainerMobile: {
    position: "relative",
    display: "inline-block",
    width: "100%",
    maxWidth: "100%",
    backgroundColor: "none",
  },
  videoMobile: {
    width: "100%",
    height: "auto",
    minHeight: "200px",
    maxHeight: "200px",
    border: "none",
    borderRadius: "30px 0px 30px 0px", // Mobile specific border radius
    objectFit: "fill",
  },
  statsSectionMobile: {
    backgroundColor: "#1A662F",
    padding: "0px 0 30px 0",
    position: "relative",
    border: "none",
    zIndex: 2,
    overflow: "hidden",
  },
  statsContainerMobile: {
    position: "relative",
    zIndex: 2,
  },
  statItemMobile: {
    padding: "5px",
    marginBottom: "15px",
  },
  statNumberMobile: {
    fontWeight: "bold",
    fontSize: "1.8rem",
    color: "white",
    marginBottom: "5px",
  },
  statLabelMobile: {
    fontSize: "0.8rem",
    marginBottom: "0",
    color: "white",
    lineHeight: "1.2",
  },
  titleMobile: {
    marginTop: "30px",
    fontSize: "20px",
    fontWeight: "500",
    color: "#fff",
    lineHeight: "1.4",
    textAlign: "left",
  },
  subtitleMobile: {
    fontSize: "14px",
    fontWeight: "400",
    color: "#fff",
    lineHeight: "1.3",
    textAlign: "left",
  },
};

export default HomeHeroSection;
