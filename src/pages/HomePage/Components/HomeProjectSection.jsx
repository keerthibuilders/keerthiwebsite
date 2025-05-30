import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../../assets/images/logo.png"; 
import fonts from "../../../components/Common/Font";
import AllProjects from "./ProjectTap/AllProjects";
import NewlyLaunchedProjects from "./ProjectTap/NewlyLaunchedProjects";

const HomeProjectSection = () => {
  const [activeTab, setActiveTab] = useState("new");
  const [isVisible, setIsVisible] = useState(false);

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

  // Render content based on active tab
  const renderTabContent = () => {
    if (activeTab === "all") {
      return <AllProjects />;
    }
    
    // Default content for "new" tab
    return <NewlyLaunchedProjects />;
  };

  return (
    <div id="project-section" style={styles.projectSection}>
      {/* Background Design Elements */}
      <div style={styles.bgPattern}></div>
      <div style={styles.logoWatermark}>
        <img src={logo} alt="Watermark Logo" style={styles.watermarkImage} />
      </div>
      
      <Container style={styles.container}>
        {/* Tabs - Now left-aligned */}
        <Row className="mb-5">
          <Col xs={12} className="text-start">
            <div style={{...styles.tabsContainer, ...getAnimationStyle(1)}}>
              <button
                style={{
                  ...styles.tabButton,
                  ...(activeTab === "new" ? styles.activeTab : {})
                }}
                onClick={() => setActiveTab("new")}
              >
                Newly Launched Projects
              </button>
              <button
                style={{
                  ...styles.tabButton,
                  ...(activeTab === "all" ? styles.activeTab : {})
                }}
                onClick={() => setActiveTab("all")}
              >
                All Projects
              </button>
            </div>
          </Col>
        </Row>
        
        {/* Tab Content */}
        {renderTabContent()}
      </Container>
      
      {/* CSS for hover animations */}
      <style>
        {`
          .hover-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            font-family: ${fonts.Noto};
          }
          .hover-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 15px rgba(0,0,0,0.2);
          }
        `}
      </style>
    </div>
  );
};

// Updated styles with fixed borders and padding
const styles = {
  projectSection: {
    padding: "20px 0",
    backgroundColor: "#e8f5e9", 
    position: "relative",
    overflow: "hidden",
    fontFamily: fonts.Noto
  },
  container: {
    position: "relative",
    zIndex: 2,
    padding: "0 20px", 
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
  
  tabsContainer: {
    display: "flex",
    justifyContent: "flex-start", 
    marginBottom: "20px",
    borderBottom: "1px solid #ddd", 
    fontFamily: fonts.Noto
  },
  tabButton: {
    background: "none",
    border: "none",
    fontSize: "22px", 
    fontWeight: "500",
    color: "#000",
    padding: "10px 25px", 
    cursor: "pointer",
    transition: "color 0.3s ease",
    marginBottom: "-1px", 
    borderBottom: "none", 
    paddingLeft: "0", 
    fontFamily: fonts.Noto
  },
  activeTab: {
    color: "#1C542C",
    borderBottom: "2px solid #1C542C" 
  }
};

export default HomeProjectSection;

