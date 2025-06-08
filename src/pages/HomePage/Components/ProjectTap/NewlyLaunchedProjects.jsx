import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import fonts from "../../../../components/Common/Font";

// Use the direct video URL instead of embed URL
const constructionVideo = "https://res.cloudinary.com/dqmnu220b/video/upload/v1749364250/lrtvw413izkcqxwwsgc2.mp4";
const bmrdaStamp = "assets/images/bmrda2.png";

const NewlyLaunchedProjects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const sectionElement = document.getElementById('all-projects-content');
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

  const handleCardClick = () => {
    navigate('/detailspage');
  };

  const handleViewDetailsClick = (e) => {
    e.stopPropagation();
    navigate('/detailspage');
  };

  const handleViewProjectClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate('/detailspage');
  };

  return (
    <div id="all-projects-content">
      {/* Projects Grid for All Projects */}
      <Row className="g-3">
        {/* Featured Project */}
        <Col lg={4} className="mb-4">
          <div
            style={{...styles.featureCard, ...getAnimationStyle(1)}}
            className="hover-card"
            onClick={handleCardClick}
          >
            <div style={styles.videoContainer}>
              <video
                autoPlay
                muted
                loop
                playsInline
                style={styles.featureVideo}
                onError={(e) => {
                  console.error('Video failed to load:', e);
                  // Hide video on error and show fallback
                  e.target.style.display = 'none';
                }}
              >
                <source
                  src={constructionVideo}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <img
              src={bmrdaStamp}
              alt="BMRDA Stamp"
              style={styles.stampImage}
            />
            <div style={styles.cardOverlay}>
              <p style={styles.overlayLabel}>SY NO.16/3</p>
              <h3 style={styles.overlayTitle}>Keerthi Infinity URVI</h3>
              <p style={styles.overlayDescription}>BYALALU</p>
              <button
                style={styles.viewButton}
                onClick={handleViewDetailsClick}
              >
                View Details
              </button>
            </div>
          </div>
        </Col>

        {/* Right Column */}
        <Col lg={8}>
          {/* Top Card */}
          <div
            style={{...styles.mediumCard, ...getAnimationStyle(2)}}
            className="hover-card mb-3"
            onClick={handleCardClick}
          >
            <Row className="g-0">
              <Col xs={5}>
                <img
                  src="https://images.pexels.com/photos/323772/pexels-photo-323772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  style={styles.mediumCardImage}
                  alt="Mysore Road"
                />
              </Col>
              <Col xs={7}>
                <div style={styles.mediumCardBody}>
                  <div>
                    <p style={styles.cardLabel}>SY NO.43/2</p>
                    <h4 style={styles.cardTitle}>KTM Villa Enclace</h4>
                    <p style={styles.cardDescription}>Gudimavu KTM</p>
                  </div>
                  <a
                    href="/detailspage"
                    style={styles.readMore}
                    onClick={handleViewProjectClick}
                  >
                    View Project →
                  </a>
                </div>
              </Col>
            </Row>
            <img
              src={bmrdaStamp}
              alt="BMRDA Stamp"
              style={styles.stampImage}
            />
          </div>

          {/* Bottom Cards */}
          <Row className="g-3">
            <Col sm={6}>
              <div
                style={{...styles.smallCard, ...getAnimationStyle(3)}}
                className="hover-card"
                onClick={handleCardClick}
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXmJ9mR4GD0JBaqvgGhUF4lsNdGucGCJKAQXgAicCe5xivuUunK6YCisf2Bv4SHNDJ8oQ&usqp=CAU"
                  style={styles.smallCardImage}
                  alt="Whitefield"
                />
                <div style={styles.smallCardBody}>
                  <div>
                    <Row className="mb-0">
                      <Col xs={8}>
                        <p style={styles.cardLabel}>SY NO.13-2</p>
                      </Col>
                      <Col xs={4} className="text-end">
                        <a
                          href="/detailspage"
                          style={styles.readMore}
                          onClick={handleViewProjectClick}
                        >
                          View →
                        </a>
                      </Col>
                    </Row>
                    <h4 style={styles.cardTitle}>Keerthi Serenity BMTC Society</h4>
                    <p style={styles.cardDescription}>Ruppis Byalalu</p>
                  </div>
                </div>
                <img
                  src={bmrdaStamp}
                  alt="BMRDA Stamp"
                  style={styles.stampImage}
                />
              </div>
            </Col>
            <Col sm={6}>
              <div
                style={{...styles.smallCard, ...getAnimationStyle(3)}}
                className="hover-card"
                onClick={handleCardClick}
              >
                <img
                  src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
                  style={styles.smallCardImage}
                  alt="Whitefield"
                />
                <div style={styles.smallCardBody}>
                  <div>
                    <Row className="mb-0">
                      <Col xs={8}>
                        <p style={styles.cardLabel}>SY N0.24/12</p>
                      </Col>
                      <Col xs={4} className="text-end">
                        <a
                          href="/detailspage"
                          style={styles.readMore}
                          onClick={handleViewProjectClick}
                        >
                          View →
                        </a>
                      </Col>
                    </Row>
                    <h4 style={styles.cardTitle}>APS Keerthi</h4>
                    <p style={styles.cardDescription}>Ajjanahalli</p>
                  </div>
                </div>
                <img
                  src={bmrdaStamp}
                  alt="BMRDA Stamp"
                  style={styles.stampImage}
                />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* CSS for hover animations */}
      <style>
        {`
          .hover-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            font-family: ${fonts.Noto};
            cursor: pointer;
          }
          .hover-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 15px rgba(0,0,0,0.2);
          }
          
          .hover-card:hover .feature-video {
            transform: scale(1.05);
          }
        `}
      </style>
    </div>
  );
};

// Styles for NewlyLaunchedProjects component
const styles = {
  featureCard: {
    height: "350px",
    overflow: "hidden",
    position: "relative",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    border: "none",
    borderRadius: "8px",
    fontFamily: fonts.Noto,
    cursor: "pointer"
  },
  videoContainer: {
    width: '100%',
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '8px',
    backgroundColor: '#f0f0f0', // Fallback background color
  },
  featureVideo: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    transition: 'transform 0.5s ease',
  },
  cardOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: "30px",
    background: "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.3), transparent)",
    color: "white",
    fontFamily: fonts.Noto
  },
  overlayLabel: {
    fontSize: "14px",
    fontWeight: "500",
    textTransform: "uppercase",
    marginBottom: "8px",
    color: "#FFF",
    margin: 0,
    fontFamily: fonts.Noto
  },
  overlayTitle: {
    color: "white",
    fontSize: "22px",
    lineHeight: "1.2",
    margin: "0 0 8px 0",
    fontFamily: fonts.Noto
  },
  overlayDescription: {
    color: "#e0e0e0",
    fontSize: "16px",
    margin: "0 0 20px 0",
    fontFamily: fonts.Noto
  },
  viewButton: {
    backgroundColor: "#1C542C",
    color: "white",
    border: "none",
    padding: "10px 20px",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
    borderRadius: "4px",
    fontFamily: fonts.Noto
  },
  mediumCard: {
    height: "150px",
    overflow: "hidden",
    backgroundColor: "#fff",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    border: "none",
    borderRadius: "8px",
    position: "relative",
    fontFamily: fonts.Noto,
    cursor: "pointer"
  },
  mediumCardImage: {
    height: "100%",
    width: "100%",
    objectFit: "cover", // Changed from "fill" to "cover" for better image display
    borderTopLeftRadius: "8px",
    borderBottomLeftRadius: "8px"
  },
  mediumCardBody: {
    padding: "15px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    fontFamily: fonts.Noto
  },
  smallCard: {
    height: "180px",
    overflow: "hidden",
    backgroundColor: "#fff",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    border: "none",
    display: "flex",
    flexDirection: "column",
    borderRadius: "8px",
    position: "relative",
    fontFamily: fonts.Noto,
    cursor: "pointer"
  },
  smallCardImage: {
    height: "100px",
    width: "100%",
    objectFit: "cover",
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px"
  },
  smallCardBody: {
    padding: "15px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    flexGrow: 1,
    fontFamily: fonts.Noto
  },
  cardLabel: {
    fontSize: "18px",
    color: "#1C542C",
    fontWeight: "500",
    textTransform: "uppercase",
    marginBottom: '5px',
    margin: 0,
    fontFamily: fonts.Noto
  },
  cardTitle: {
    fontSize: "14px",
    lineHeight: "1.2",
    color: "#333",
    margin: 0,
    fontFamily: fonts.Noto
  },
  cardDescription: {
    fontSize: "12px",
    color: "#666",
    lineHeight: "1.1",
    fontFamily: fonts.Noto
  },
  readMore: {
    fontWeight: "500",
    color: "#1C542C",
    textDecoration: "none",
    fontSize: "14px",
    marginBottom: '40px',
    fontFamily: fonts.Noto,
    transition: "color 0.3s ease"
  },
  stampImage: {
    position: "absolute",
    top: "4px",
    right: "4px",
    width: "50px",
    height: "50px",
    objectFit: "contain",
    zIndex: 10,
    opacity: 0.9
  }
};

export default NewlyLaunchedProjects;
