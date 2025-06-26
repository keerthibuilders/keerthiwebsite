import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Add this import
import logo from "/assets/images/logo.png";
import fonts from "../../../components/Common/Font";

const HomeProjectSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate(); // Add this hook

  // Sample project data - replace with your actual data
  const projects = [
    {
      id: 1,
      image: "https://d1di04ifehjy6m.cloudfront.net/media/filer_public/44/4e/444ed0be-8344-47b3-a223-dc99e9155992/brgres_holiday-vacation_2048x1046_1.jpg"
    },
    {
      id: 2,
      image: "https://d1di04ifehjy6m.cloudfront.net/media/filer_public/4e/86/4e865882-179b-4bcb-92e0-e021b3035638/2048x1046_2.jpg"
    },
    {
      id: 3,
      image: "https://d1di04ifehjy6m.cloudfront.net/media/filer_public/d0/03/d0037f8f-0f4a-480e-b487-132e0eb63bab/2048_copy_2.jpg"
    },
    {
      id: 4,
      image: "https://d1di04ifehjy6m.cloudfront.net/media/filer_public/5b/3c/5b3cd784-0370-4360-8f43-482eef063698/brg_altius_2080x1046.jpg"
    },
    {
      id: 5,
      image: "https://d1di04ifehjy6m.cloudfront.net/media/filer_public/26/77/2677738b-7123-4cb9-a6af-0cef6355d744/2048x1046_3.jpg"
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === projects.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000); // Change slide every 3 seconds

      return () => clearInterval(interval);
    }
  }, [isPaused, projects.length]);

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
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const getPrevIndex = () => {
    return currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
  };

  const getNextIndex = () => {
    return currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    setIsPaused(true);
    // Resume auto-scroll after 5 seconds of manual interaction
    setTimeout(() => setIsPaused(false), 5000);
  };

  const handleNavClick = (callback) => {
    callback();
    setIsPaused(true);
    // Resume auto-scroll after 5 seconds of manual interaction
    setTimeout(() => setIsPaused(false), 5000);
  };

  // Add navigation handler for center image click only
  const handleCenterImageClick = () => {
    navigate('/detailspage', { 
      state: { 
        projectId: projects[currentIndex].id,
        projectData: projects[currentIndex]
      } 
    });
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
            <h2 style={{...styles.heading, ...getAnimationStyle(1)}} className="mb-3 mb-md-4">
              On Going Projects
            </h2>
          </Col>
        </Row>
        
        {/* Carousel */}
        <Row>
          <Col xs={12}>
            <div 
              style={{...styles.carouselContainer, ...getAnimationStyle(2)}}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="d-flex align-items-center justify-content-center position-relative"
            >
              {/* Previous Button - Desktop */}
              <button 
                style={styles.navButton} 
                onClick={() => handleNavClick(prevSlide)}
                aria-label="Previous projects"
                className="d-none d-lg-flex align-items-center justify-content-center"
              >
                &#8249;
              </button>

              {/* Previous Button - Mobile/Tablet */}
              <button 
                style={styles.mobileNavButton} 
                onClick={() => handleNavClick(prevSlide)}
                aria-label="Previous projects"
                className="d-lg-none d-flex align-items-center justify-content-center me-2 me-md-3"
              >
                &#8249;
              </button>
              
              {/* Images Container */}
              <div style={styles.imagesWrapper} className="d-flex align-items-center justify-content-center position-relative overflow-hidden w-100">
                {/* Previous Image (Half out of screen) - Hidden on mobile - NOT CLICKABLE */}
                <div 
                  style={styles.leftSideImageContainer} 
                  className="d-none d-lg-block"
                >
                  <img 
                    src={projects[getPrevIndex()].image} 
                    alt="Previous project"
                    style={styles.sideImage}
                    className="w-100 h-100"
                    onError={(e) => {
                      e.target.src = logo;
                    }}
                  />
                </div>
                
                {/* Current Image (Center, Full size) - CLICKABLE */}
                <div 
                  style={styles.centerImageContainer} 
                  className="position-relative center-image-container"
                  onClick={handleCenterImageClick}
                >
                  <img 
                    src={projects[currentIndex].image} 
                    alt="Current project"
                    style={{...styles.centerImage, cursor: 'pointer'}}
                    className="w-100 h-100 center-image-hover mobile-image"
                    onError={(e) => {
                      e.target.src = logo;
                    }}
                  />
                </div>
                
                {/* Next Image (Half out of screen) - Hidden on mobile - NOT CLICKABLE */}
                <div 
                  style={styles.rightSideImageContainer} 
                  className="d-none d-lg-block"
                >
                  <img 
                    src={projects[getNextIndex()].image} 
                    alt="Next project"
                    style={styles.sideImage}
                    className="w-100 h-100"
                    onError={(e) => {
                      e.target.src = logo;
                    }}
                  />
                </div>
              </div>
              
              {/* Next Button - Desktop */}
              <button 
                style={styles.navButton} 
                onClick={() => handleNavClick(nextSlide)}
                aria-label="Next projects"
                className="d-none d-lg-flex align-items-center justify-content-center"
              >
                &#8250;
              </button>

              {/* Next Button - Mobile/Tablet */}
              <button 
                style={styles.mobileNavButton} 
                onClick={() => handleNavClick(nextSlide)}
                aria-label="Next projects"
                className="d-lg-none d-flex align-items-center justify-content-center ms-2 ms-md-3"
              >
                &#8250;
              </button>
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
                    backgroundColor: index === currentIndex ? '#1C542C' : '#ccc'
                  }}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className="border-0 me-2"
                />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
      
      {/* CSS for animations */}
      <style>
        {`
          .center-image-hover {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .center-image-hover:hover {
            transform: scale(1.02);
            box-shadow: 0 12px 25px rgba(0,0,0,0.3);
          }
          .side-image-hover {
            transition: opacity 0.3s ease, transform 0.3s ease;
          }
          .side-image-hover:hover {
            opacity: 0.9;
            transform: scale(1.02);
          }
          
          @media (max-width: 768px) {
            .carousel-container-mobile {
              gap: 10px !important;
            }
            .center-image-mobile {
              flex: 0 0 300px !important;
              height: 250px !important;
            }
            .side-image-mobile {
              flex: 0 0 120px !important;
              height: 200px !important;
            }
          }

          /* Mobile image improvements - Better fit and reduced height */
          @media (max-width: 576px) {
            #project-section .center-image-container {
              flex: 0 0 100% !important;
              height: 180px !important;
              max-width: 280px !important;
              margin: 0 auto !important;
              border-radius: 0px !important;
              overflow: hidden !important;
            }
            #project-section .mobile-image {
              object-fit: fit !important;
            }
          }

          @media (min-width: 577px) and (max-width: 768px) {
            #project-section .center-image-container {
              flex: 0 0 100% !important;
              height: 220px !important;
              max-width: 350px !important;
              margin: 0 auto !important;
              border-radius: 0px !important;
              overflow: hidden !important;
            }
            #project-section .mobile-image {
              object-fit: fit !important;
            }
          }

          @media (min-width: 769px) and (max-width: 991px) {
            #project-section .center-image-container {
              flex: 0 0 600px !important;
              height: 320px !important;
              border-radius: 0px !important;
              overflow: hidden !important;
            }
            #project-section .mobile-image {
              object-fit: fit !important;
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

          /* Ensure proper image aspect ratio on all devices */
          .mobile-image {
            object-fit: fit;
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
    gap: "20px",
    position: "relative",
    justifyContent: "center",

    width: "100%"
  },
  navButton: {
    backgroundColor: "#1C542C",
    color: "white",
    border: "none",
    borderRadius: "50%",
    width: "60px",
    height: "60px",
    fontSize: "28px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 6px 12px rgba(0,0,0,0.3)",
    transition: "all 0.3s ease",
    zIndex: 10,
    flexShrink: 0
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
    maxWidth: "1200px"
  },
  centerImageContainer: {
    flex: "0 0 700px",
    height: "450px",
    overflow: "hidden",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
    position: "relative",
    zIndex: 3,
    cursor: "pointer"
  },
  centerImage: {
    width: "100%",
    height: "100%",
    objectFit: "fit",
    className: "center-image-hover"
  },
  leftSideImageContainer: {
    flex: "0 0 300px",
    height: "350px",
    overflow: "hidden",
    opacity: 0.6,
    boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
    position: "relative",
    zIndex: 1,
    marginRight: "-50px",
    cursor: "pointer",
    transition: "opacity 0.3s ease"
  },
  rightSideImageContainer: {
    flex: "0 0 300px",
    height: "350px",
    overflow: "hidden",
    opacity: 0.6,
    boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
    position: "relative",
    zIndex: 1,
    marginLeft: "-50px",
    cursor: "pointer",
    transition: "opacity 0.3s ease"
  },
  sideImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    className: "side-image-hover",
    transition: "transform 0.3s ease"
  },
  dotsContainer: {
    display: "flex",
    alignContent:'center',
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

