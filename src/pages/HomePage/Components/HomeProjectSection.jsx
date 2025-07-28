import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import logo from "/assets/images/logo.png";
import fonts from "../../../components/Common/Font";

const HomeProjectSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTurning, setIsTurning] = useState(false);
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  // Sample project data - replace with your actual data
  const projects = [
    {
      id: 1,
      image: "./../assets/images/13.webp"
    },
    {
      id: 2,
      image: "./../assets/images/11.webp"
    },
    {
      id: 3,
      image: "./../assets/images/12.webp"
    },
  ];

  // Auto-scroll functionality with page turn effect
  useEffect(() => {
    if (!isPaused && !isTurning) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isPaused, isTurning, currentIndex]);

  // Scroll to current image on mobile when currentIndex changes
  useEffect(() => {
    if (window.innerWidth < 992 && scrollRef.current) {
      scrollRef.current.scrollTo({
        left: currentIndex * window.innerWidth,
        behavior: "smooth"
      });
    }
  }, [currentIndex]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const sectionElement = document.getElementById('project-section');
    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
    };
  }, []);

  const getAnimationStyle = (index) => {
    return {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      transition: `opacity 0.5s ease, transform 0.5s ease`,
      transitionDelay: `${0.1 * index}s`
    };
  };

  const nextSlide = () => {
    if (!isTurning) {
      setIsTurning(true);
      setTimeout(() => {
        setCurrentIndex(prev => prev === projects.length - 1 ? 0 : prev + 1);
        setIsTurning(false);
      }, 800); // Page turn duration
    }
  };

  const prevSlide = () => {
    if (!isTurning) {
      setIsTurning(true);
      setTimeout(() => {
        setCurrentIndex(prev => prev === 0 ? projects.length - 1 : prev - 1);
        setIsTurning(false);
      }, 800); // Page turn duration
    }
  };

  const getPrevIndex = () => {
    return currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
  };

  const getNextIndex = () => {
    return currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
  };

  const handleDotClick = (index) => {
    if (!isTurning && index !== currentIndex) {
      setIsTurning(true);
      setTimeout(() => {
        setCurrentIndex(index);
        setIsTurning(false);
      }, 800);
      setIsPaused(true);
      setTimeout(() => setIsPaused(false), 5000);
    }
  };

  const handleNavClick = (callback) => {
    callback();
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000);
  };

  const handleCenterImageClick = () => {
    navigate('/detailspage', {
      state: {
        projectId: projects[currentIndex].id,
        projectData: projects[currentIndex]
      }
    });
  };

  // Handle manual scroll on mobile to update dot indicator
  const handleMobileScroll = (e) => {
    const scrollLeft = e.target.scrollLeft;
    const width = window.innerWidth;
    const idx = Math.round(scrollLeft / width);
    if (idx !== currentIndex) setCurrentIndex(idx);
  };

  return (
    <div id="project-section" style={styles.projectSection}>
      {/* Background Design Elements */}
      <div style={styles.bgPattern}></div>
      <div className="d-none d-lg-block" style={styles.logoWatermark}>
        <img src={logo} alt="Watermark Logo" style={styles.watermarkImage} />
      </div>

      <Container fluid style={styles.container} className="px-2 px-md-4">
        {/* Heading */}
        <Row className="mb-2 mb-md-4">
          <Col xs={12} className="text-center">
            <h2 style={{ ...styles.heading, ...getAnimationStyle(1) }} className="mb-3 mb-md-4">
             New Launches & On Going Projects
            </h2>
          </Col>
        </Row>

        {/* Carousel */}
        <Row>
          <Col xs={12}>
            <div
              style={{ ...styles.carouselContainer, ...getAnimationStyle(2) }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="d-flex align-items-center justify-content-center position-relative"
            >
              {/* Desktop: Prev Button - Positioned over left image */}
              <button
                style={{...styles.navButton, ...styles.leftNavButton}}
                onClick={() => handleNavClick(prevSlide)}
                aria-label="Previous projects"
                className="d-none d-lg-flex align-items-center justify-content-center"
                disabled={isTurning}
              >
                &#8249;
              </button>

              {/* Desktop: Images */}
              <div
                style={styles.imagesWrapper}
                className="d-none d-lg-flex align-items-center justify-content-center position-relative overflow-hidden w-100"
              >
                {/* Previous Image */}
                <div style={styles.leftSideImageContainer}>
                  <img
                    src={projects[getPrevIndex()].image}
                    alt="Previous project"
                    style={{
                      ...styles.sideImage,
                      opacity: isTurning ? 0.3 : 0.6,
                      transform: isTurning ? 'rotateY(-15deg)' : 'rotateY(0deg)',
                      transition: 'all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1)',
                      transformOrigin: 'right center'
                    }}
                    className="w-100 h-100"
                    onError={(e) => {
                      e.target.src = logo;
                    }}
                  />
                </div>
                
                {/* Center Image Container */}
                <div
                  style={styles.centerImageContainer}
                  className="position-relative center-image-container"
                  onClick={handleCenterImageClick}
                >
                  <img
                    src={projects[currentIndex].image}
                    alt="Current project"
                    style={{
                      ...styles.centerImage,
                      cursor: 'pointer',
                      transform: isTurning ? 'rotateY(-5deg)' : 'rotateY(0deg)',
                      transition: 'all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1)',
                      transformOrigin: 'center center',
                      boxShadow: isTurning ? '0 20px 40px rgba(0,0,0,0.4)' : '0 10px 30px rgba(0,0,0,0.3)'
                    }}
                    className="w-100 h-100"
                    onError={(e) => {
                      e.target.src = logo;
                    }}
                  />
                </div>
                
                {/* Next Image */}
                <div style={styles.rightSideImageContainer}>
                  <img
                    src={projects[getNextIndex()].image}
                    alt="Next project"
                    style={{
                      ...styles.sideImage,
                      opacity: isTurning ? 0.3 : 0.6,
                      transform: isTurning ? 'rotateY(15deg)' : 'rotateY(0deg)',
                      transition: 'all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1)',
                      transformOrigin: 'left center'
                    }}
                    className="w-100 h-100"
                    onError={(e) => {
                      e.target.src = logo;
                    }}
                  />
                </div>
              </div>

              {/* Desktop: Next Button - Positioned over right image */}
              <button
                style={{...styles.navButton, ...styles.rightNavButton}}
                onClick={() => handleNavClick(nextSlide)}
                aria-label="Next projects"
                className="d-none d-lg-flex align-items-center justify-content-center"
                disabled={isTurning}
              >
                &#8250;
              </button>

              {/* Mobile: Fullscreen horizontal scrollable images */}
              <div
                className="d-lg-none mobile-scroll-wrapper"
                ref={scrollRef}
                style={{
                  width: "100vw",
                  overflowX: "auto",
                  display: "flex",
                  scrollSnapType: "x mandatory",
                  WebkitOverflowScrolling: "touch",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  height: "65vw",
                  minHeight: "220px",
                  maxHeight: "80vw",
                }}
                tabIndex={0}
                onScroll={handleMobileScroll}
              >
                {projects.map((project, idx) => (
                  <div
                    key={project.id}
                    style={{
                      minWidth: "100vw",
                      width: "100vw",
                      height: "100%",
                      flex: "0 0 100vw",
                      scrollSnapAlign: "center",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "#fff",
                      overflow: "hidden",
                      position: "relative",
                    }}
                    onClick={() => {
                      setCurrentIndex(idx);
                      handleCenterImageClick();
                    }}
                  >
                    <img
                      src={project.image}
                      alt={`Project ${idx + 1}`}
                      style={{
                        width: "100vw",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        transform: isTurning && idx === currentIndex ? 'rotateY(-5deg)' : 'rotateY(0deg)',
                        transition: 'all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1)'
                      }}
                      onError={e => { e.target.src = logo; }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>

        {/* Dots Indicator */}
        <Row className="mt-4">
          <Col xs={12} className="text-center">
            <div style={styles.dotsContainer} className="d-flex align-items-center justify-content-center">
              {projects.map((_, index) => (
                <button
                  key={index}
                  style={{
                    ...styles.dot,
                    backgroundColor: index === currentIndex ? '#1C542C' : '#ccc',
                    transform: isTurning && index === currentIndex ? 'rotateZ(180deg)' : 'rotateZ(0deg)',
                    transition: 'all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1)'
                  }}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className="border-0 me-2"
                  disabled={isTurning}
                />
              ))}
            </div>
          </Col>
        </Row>
      </Container>

      {/* CSS for page turn animations */}
      <style>
        {`
          .center-image-hover {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .center-image-hover:hover {
            transform: scale(1.02);
            box-shadow: 0 12px 25px rgba(0,0,0,0.3);
          }

          @media (max-width: 991.98px) {
            .mobile-scroll-wrapper {
              -ms-overflow-style: none;
              scrollbar-width: none;
              scroll-snap-type: x mandatory;
            }
            .mobile-scroll-wrapper::-webkit-scrollbar {
              display: none;
            }
            .center-image-container,
            .left-side-image-container,
            .right-side-image-container,
            .navButton,
            .mobileNavButton,
            .d-lg-flex.navButton,
            .d-lg-flex.mobileNavButton {
              display: none !important;
            }
          }

          @media (max-width: 768px) {
            .carousel-container-mobile {
              gap: 10px !important;
            }
          }

          /* Responsive heading */
          @media (max-width: 576px) {
            #project-section h2 {
              font-size: 24px !important;
            }
          }

          @media (min-width: 577px) and (max-width: 768px) {
            #project-section h2 {
              font-size: 28px !important;
            }
          }

          /* Button disabled state */
          button:disabled {
            opacity: 0.6;
            cursor: not-allowed;
          }

                    .navButton:hover:not(:disabled) {
            background-color: rgba(45, 122, 61, 0.9) !important;
            transform: scale(1.1);
            box-shadow: 0 8px 16px rgba(0,0,0,0.5);
            border-color: rgba(255, 255, 255, 0.5);
          }

          .navButton:active:not(:disabled) {
            transform: scale(0.95);
          }

          /* Page turn animation keyframes */
          @keyframes pageTurnLeft {
            0% {
              transform: rotateY(0deg);
              transform-origin: right center;
            }
            50% {
              transform: rotateY(-90deg);
              transform-origin: right center;
            }
            100% {
              transform: rotateY(-180deg);
              transform-origin: right center;
            }
          }

          @keyframes pageTurnRight {
            0% {
              transform: rotateY(0deg);
              transform-origin: left center;
            }
            50% {
              transform: rotateY(90deg);
              transform-origin: left center;
            }
            100% {
              transform: rotateY(180deg);
              transform-origin: left center;
            }
          }

          @keyframes pageTurnCenter {
            0% {
              transform: rotateY(0deg);
              box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            }
            50% {
              transform: rotateY(-10deg);
              box-shadow: 0 25px 50px rgba(0,0,0,0.5);
            }
            100% {
              transform: rotateY(0deg);
              box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            }
          }

          /* 3D perspective for page turn effect */
          .images-wrapper-3d {
            perspective: 1000px;
            perspective-origin: center center;
          }

          .page-turn-container {
            transform-style: preserve-3d;
          }

          /* Smooth page turn transitions */
          .page-turn-transition {
            transition: all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1);
          }

          /* Enhanced shadow effects during page turn */
          .page-shadow {
            box-shadow: 
              0 0 20px rgba(0,0,0,0.1),
              0 10px 40px rgba(0,0,0,0.2),
              inset 0 0 0 1px rgba(255,255,255,0.1);
          }
        `}
      </style>
    </div>
  );
};

const styles = {
  projectSection: {
    padding: "40px 0",
    backgroundColor: "#e8f5e9",
    position: "relative",
    overflow: "hidden",
    fontFamily: fonts.Noto
  },
  container: {
    position: "relative",
    zIndex: 2,
    padding: "0",
    fontFamily: fonts.Noto
  },
  bgPattern: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: "radial-gradient(#c8e6c9 10%, transparent 10%), radial-gradient(#c8e6c9 10%, transparent 10%)",
    backgroundSize: "20px 20px",
    backgroundPosition: "0 0, 10px 10px",
    opacity: 0.3,
    zIndex: 1
  },
  logoWatermark: {
    position: "absolute",
    right: "-50px",
    bottom: "-50px",
    opacity: 0.05,
    zIndex: 1,
    transform: "rotate(-15deg)"
  },
  watermarkImage: {
    width: "300px",
    height: "auto"
  },
  heading: {
    fontSize: "32px",
    fontWeight: "600",
    color: "#1C542C",
    marginBottom: "2rem",
    fontFamily: fonts.Noto
  },
  carouselContainer: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    justifyContent: "center",
    width: "100%"
  },
  navButton: {
    backgroundColor: "rgba(28, 84, 44, 0.8)",
    color: "white",
    border: "2px solid rgba(255, 255, 255, 0.3)",
    borderRadius: "50%",
    width: "60px",
    height: "60px",
    fontSize: "28px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 6px 12px rgba(0,0,0,0.4)",
    transition: "all 0.3s ease",
    zIndex: 20,
    flexShrink: 0,
    position: "absolute",
    backdropFilter: "blur(5px)"
  },
  leftNavButton: {
    left: "75px"
  },
  rightNavButton: {
    right: "75px"
  },
  mobileNavButton: {
    backgroundColor: "#1C542C",
    color: "white",
    border: "none",
    borderRadius: "50%",
    width: "45px",
    height: "45px",
    fontSize: "20px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    transition: "all 0.3s ease",
    zIndex: 10,
    flexShrink: 0
  },
  imagesWrapper: {
    display: "flex",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
    width: "100%",
    maxWidth: "1200px",
    gap: "37.8px",
    perspective: "1000px",
    perspectiveOrigin: "center center"
  },
  centerImageContainer: {
    flex: "0 0 600px",
    height: "450px",
    overflow: "hidden",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
    position: "relative",
    zIndex: 3,
    cursor: "pointer",
    transformStyle: "preserve-3d"
  },
  centerImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  },
  leftSideImageContainer: {
    flex: "0 0 300px",
    height: "350px",
    overflow: "hidden",
    boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
    position: "relative",
    zIndex: 1,
    cursor: "pointer",
    marginLeft: "-150px",
    transformStyle: "preserve-3d"
  },
  rightSideImageContainer: {
    flex: "0 0 300px",
    height: "350px",
    overflow: "hidden",
    boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
    position: "relative",
    zIndex: 1,
    cursor: "pointer",
    marginRight: "-150px",
    transformStyle: "preserve-3d"
  },
  sideImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  },
  dotsContainer: {
    display: "flex",
    alignContent: 'center',
    justifyContent: "center",
    gap: "8px",
    marginTop: "0px"
  },
  dot: {
    width: "8px",
    height: "12px",
    borderRadius: "60%",
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s ease",
  }
};

export default HomeProjectSection;

