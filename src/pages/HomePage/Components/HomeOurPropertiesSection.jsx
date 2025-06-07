import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowUpRight } from "lucide-react";
import fonts from "../../../components/Common/Font";

// Fix the video imports - remove the extra "../" since public folder is at root
const videoFile = "/KTM Urvi.mp4";
const videoFile2 = "/KTM Industrial Area.mp4";

const PropertyCard = ({ image, title, location, video }) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && !isHovered) {
      // Set video to start from 12 seconds
      videoRef.current.currentTime = 12;
      videoRef.current.play().catch(console.error);
    }
  }, [isHovered]);

  const handleVideoLoad = () => {
    if (videoRef.current) {
      // Set starting time to 13 seconds when video loads
      videoRef.current.currentTime = 13;
    }
  };
  
  return (
    <div 
      className="property-card text-black flex flex-col justify-between" 
      style={{
        ...styles.propertyCard,
        backgroundImage: isHovered ? `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${image})` : 'none',
        backgroundColor: isHovered ? 'transparent' : '#e0f0e9',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Video Background - shows when not hovered */}
      {!isHovered && video && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          style={styles.cardVideo}
          onLoadedData={handleVideoLoad}
          onError={(e) => console.error('Video error:', e)}
        >
          <source src={video} type="video/mp4" />
        </video>
      )}

      {/* Video Overlay for better text readability */}
      {!isHovered && (
        <div style={styles.cardVideoOverlay}></div>
      )}

      <div className="content-wrapper">
        <h2 className="text-2xl font-bold mb-2" style={{
          ...styles.propertyTitle,
          color: isHovered ? 'white' : 'white' // Always white for better visibility over video
        }}>
          {title}
        </h2>
        {location && (
          <p className="text-sm" style={{
            ...styles.propertyLocation,
            color: isHovered ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.8)'
          }}>
            {location}
          </p>
        )}
      </div>
      <div style={styles.cardFooter}>
        <a href="#" style={{
          ...styles.viewLink,
          color: isHovered ? 'white' : 'white' // Always white for better visibility
        }}>
          View details
        </a>
        <div style={{
          ...styles.arrowContainer,
          backgroundColor: isHovered ? 'white' : 'rgba(255,255,255,0.9)',
        }}>
          <ArrowUpRight size={18} color={isHovered ? '#21623C' : '#21623C'} />
        </div>
      </div>
    </div>
  );
};

const HomeOurPropertiesSection = () => {
  const properties = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/32249747/pexels-photo-32249747/free-photo-of-vibrant-jacaranda-tree-in-bloom-by-urban-street.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Residential Plots",
      video: videoFile
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/27102111/pexels-photo-27102111/free-photo-of-welder-in-factory.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      title: "Industrial",
      video: videoFile2
    },
  ];

  return (
    <section style={styles.sectionContainer}>
      {/* Background overlay for better text readability */}
      <div style={styles.backgroundOverlay}></div>
      
      <Container style={styles.contentContainer}>
        <Row className="mb-4">
          <Col lg={12} className="mx-auto">
            <h2 style={styles.sectionTitle}>Our Properties</h2>
            <p style={styles.sectionDescription}>
              At Keerthi Builders, we redefine real estate by merging innovation, quality, and customer satisfaction.
              Whether it's about residential properties, commercial spaces, luxury villas, affordable housing, or
              custom projects, we craft exceptional living and working environments that go beyond expectations and create lasting value.
            </p>
          </Col>
        </Row>
        
        <Row className="justify-content-center">
          <Col xs={12}>
            <div style={styles.cardsContainer}>
              {properties.map((property) => (
                <PropertyCard
                  key={property.id}
                  image={property.image}
                  title={property.title}
                  location={property.location}
                  video={property.video}
                />
              ))}
            </div>
          </Col>
        </Row>
      </Container>

      {/* Regular style tag instead of style jsx */}
      <style>{`
          .property-card {
            transition: all 0.4s ease;
            position: relative;
            overflow: hidden;
          }
          
          .property-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
          }
          
          .content-wrapper {
            position: relative;
            z-index: 3;
            transition: all 0.3s ease;
          }
       `}</style>
    </section>
  );
};

const styles = {
  sectionContainer: {
    backgroundColor: "#1C542C",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed", // Optional: creates parallax effect
    padding: "60px 0",
    color: "white",
    position: "relative",
    overflow: "hidden", // Added to contain video
  },
  backgroundOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(28, 84, 44, 0.7)", // Semi-transparent overlay to maintain readability
    zIndex: 1,
  },
  contentContainer: {
    position: "relative",
    zIndex: 2,
  },
  sectionTitle: {
    fontWeight: "400",
    marginBottom: "16px",
    fontSize: "30px",
    fontFamily: fonts.Noto,
    textShadow: "2px 2px 4px rgba(0,0,0,0.5)", // Added text shadow for better visibility
  },
  sectionDescription: {
    lineHeight: "1.6",
    fontSize: "14px",
    marginBottom: "30px",
    margin: "0 auto",
    fontFamily: fonts.Noto,
    textShadow: "1px 1px 2px rgba(0,0,0,0.5)", // Added text shadow for better visibility
  },
  cardsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 300px))", // Fixed width cards
    gap: "30px",
    maxWidth: "1000px",
    margin: "0 auto",
  },
  propertyCard: {
    height: "250px", // Smaller height
    cursor: "pointer",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "20px",
    transition: "all 0.4s ease",
    position: "relative",
  },
  cardVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 1,
  },
  cardVideoOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.4)", // Dark overlay for better text readability
    zIndex: 2,
  },
  propertyTitle: {
    fontSize: "22px",
    fontWeight: "500",
    marginBottom: "8px",
    textAlign: 'center',
    justifyContent: 'center',
    transition: "color 0.3s ease",
    textShadow: "2px 2px 4px rgba(0,0,0,0.8)", // Strong text shadow for visibility over video
    fontFamily: fonts.Noto,
  },
  propertyLocation: {
    fontSize: "14px",
    marginBottom: "16px",
    transition: "color 0.3s ease",
    fontFamily: fonts.Noto,
    textShadow: "1px 1px 2px rgba(0,0,0,0.8)", // Text shadow for visibility
  },
  cardFooter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "20px",
    position: "relative",
    zIndex: 3
  },
  viewLink: {
    fontSize: "14px",
    fontWeight: "400",
    textDecoration: "none",
    transition: "color 0.3s ease",
    fontFamily: fonts.Noto,
    textShadow: "1px 1px 2px rgba(0,0,0,0.8)", // Text shadow for visibility
  },
  arrowContainer: {
    padding: "8px",
    borderRadius: "50%",
    boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease",
  }
};

export default HomeOurPropertiesSection;
