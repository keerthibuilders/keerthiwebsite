import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowUpRight } from "lucide-react";
import fonts from "../../../components/Common/Font";
import { width } from "@fortawesome/free-solid-svg-icons/fa0";

// Direct Cloudinary video URLs - these are correct
const videoFile = "https://res.cloudinary.com/dqmnu220b/video/upload/v1749364538/jqidf41ta0eurb8ljaos.mp4";
const videoFile2 = "https://res.cloudinary.com/dqmnu220b/video/upload/v1749364547/ke7tlieyeuur72ld7uam.mp4";
const videoFile3 ="https://res.cloudinary.com/dqmnu220b/video/upload/v1750917082/oqydr1o12iwmkhkwrdma.mp4"

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

  const handleVideoError = (e) => {
    console.error('Video error:', e);
    // You could set a fallback state here if needed
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
          onError={handleVideoError}
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Video Overlay for better text readability */}
      {!isHovered && (
        <div style={styles.cardVideoOverlay}></div>
      )}

      <div className="content-wrapper">
        <h2 
          className="text-2xl font-bold mb-2" 
          style={{
            ...styles.propertyTitle,
            color: isHovered ? 'white' : 'white' // Always white for better visibility over video
          }}
        >
          {title}
        </h2>
        {location && (
          <p 
            className="text-sm" 
            style={{
              ...styles.propertyLocation,
              color: isHovered ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.8)'
            }}
          >
            {location}
          </p>
        )}
      </div>

      <div style={styles.cardFooter}>
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
      video: videoFile,
	link: "https://keerthibuilders.com/residential"
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/27102111/pexels-photo-27102111/free-photo-of-welder-in-factory.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      title: "Industrial",
      video: videoFile2,
	link: "	link: "https://keerthibuilders.com/commercial"
    },
    // {
    //   id: 3,
    //   image: "https://www.houseofhiranandani.com/vlogs/storage/2019/01/35.png",
    //   title: "Premium Villa Plots",
    //   video: videoFile3
    // },
  ];

  return (
    <>
      <section style={styles.sectionContainer}>
        {/* Background overlay for better text readability */}
        <div style={styles.backgroundOverlay}></div>
        
        {/* Animated Top to Bottom Lines - Initially Hidden */}
        <div style={styles.animatedLinesContainer}>
          {/* Line 1 */}
          <div 
            style={{
              position: 'absolute',
              left: '15%',
              top: '-60px',
              width: '1px',
              height: '50px',
              background: 'rgba(238, 249, 109, 0.3)',
              borderRadius: '1px',
              opacity: 0,
              animation: 'rainDropSequence 6s linear infinite',
              animationDelay: '0s'
            }}
          />
          
          {/* Line 2 */}
          <div 
            style={{
              position: 'absolute',
              left: '30%',
              top: '-60px',
              width: '1px',
              height: '50px',
              background: 'rgba(238, 249, 109, 0.3)',
              borderRadius: '1px',
              opacity: 0,
              animation: 'rainDropSequence 6s linear infinite',
              animationDelay: '1s'
            }}
          />
          
          {/* Line 3 */}
          <div 
            style={{
              position: 'absolute',
              left: '45%',
              top: '-60px',
              width: '1px',
              height: '50px',
              background: 'rgba(238, 249, 109, 0.3)',
              borderRadius: '1px',
              opacity: 0,
              animation: 'rainDropSequence 6s linear infinite',
              animationDelay: '2s'
            }}
          />
          
          {/* Line 4 */}
          <div 
            style={{
              position: 'absolute',
              left: '60%',
              top: '-60px',
              width: '1px',
              height: '50px',
              background: 'rgba(238, 249, 109, 0.3)',
              borderRadius: '1px',
              opacity: 0,
              animation: 'rainDropSequence 6s linear infinite',
              animationDelay: '3s'
            }}
          />
          
          {/* Line 5 */}
          <div 
            style={{
              position: 'absolute',
              left: '75%',
              top: '-60px',
              width: '1px',
              height: '50px',
              background: 'rgba(238, 249, 109, 0.3)',
              borderRadius: '1px',
              opacity: 0,
              animation: 'rainDropSequence 6s linear infinite',
              animationDelay: '4s'
            }}
          />
          
          {/* Line 6 */}
          <div 
            style={{
              position: 'absolute',
              left: '85%',
              top: '-60px',
              width: '1px',
              height: '50px',
              background: 'rgba(238, 249, 109, 0.3)',
              borderRadius: '1px',
              opacity: 0,
              animation: 'rainDropSequence 6s linear infinite',
              animationDelay: '5s'
            }}
          />
        </div>
        
        <Container style={styles.contentContainer}>
          <Row className="mb-4">
            <Col lg={12} className="mx-auto">
              <h2 style={styles.sectionTitle}>Our Portfolio</h2>
              <p style={styles.sectionDescription}>
                At Keerthi Builders, we redefine real estate by merging innovation, quality, and customer satisfaction.
                Whether it's about residential properties, commercial spaces, luxury villas, affordable housing, or
                custom projects, we craft exceptional living and working environments that go beyond expectations and create lasting value.
              </p>
            </Col>
          </Row>
          
          <Row className="justify-content-center">
            {properties.map((property) => (
              <Col lg={6} md={6} sm={12} key={property.id} className="mb-4">
		<a href={link}>
                <PropertyCard
                  image={property.image}
                  title={property.title}
                  location={property.location}
                  video={property.video}
                />
		</a>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Global CSS for animations */}
      <style jsx global>{`
        @keyframes rainDropSequence {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          5% {
            opacity: 0.7;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 0.8;
          }
          95% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(calc(100vh + 100px));
            opacity: 0;
          }
        }
        
        .property-card {
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
          border-radius: 8px;
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
    </>
  );
};

const styles = {
  sectionContainer: {
    backgroundColor: "#1A662F",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    padding: "40px 0",
    color: "white",
    position: "relative",
    overflow: "hidden",
  },
  backgroundOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  animatedLinesContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: "none",
    zIndex: 1,
    overflow: "hidden"
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
    textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
  },
  sectionDescription: {
    lineHeight: "1.6",
    fontSize: "14px",
    marginBottom: "30px",
    margin: "0 auto",
    fontFamily: fonts.Noto,
    textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
  },
  propertyCard: {
    width: "100%",
    height: "230px", 
    cursor: "pointer",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "25px", 
    transition: "all 0.4s ease",
    position: "relative",
    borderRadius: "0px", 
  },
  cardVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 1,
    borderRadius: "0px", 
    backgroundColor:"#000",
  },
  cardVideoOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    zIndex: 2,
    borderRadius: "0px", 
  },
  propertyTitle: {
    fontSize: "26px", 
    fontWeight: "500",
    marginBottom: "10px",
    transition: "color 0.3s ease",
    fontFamily: fonts.Noto,
  },
  propertyLocation: {
    fontSize: "16px", 
    marginBottom: "18px", 
    transition: "color 0.3s ease",
    fontFamily: fonts.Noto,
    textShadow: "1px 1px 2px rgba(0,0,0,0.8)", 
  },
  cardFooter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: "25px", // Increased margin
    position: "relative",
    zIndex: 3
  },
  arrowContainer: {
    padding: "10px", // Increased padding
    borderRadius: "50%",
    boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease",
  }
};

export default HomeOurPropertiesSection;
