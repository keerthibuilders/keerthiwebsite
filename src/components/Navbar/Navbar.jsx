import React, { useState, useEffect, useRef } from "react";
import { Navbar as BootstrapNavbar, Container, Nav, Button } from "react-bootstrap";
import logo from "../../../public/assets/images/logo.png";
import fonts from "../Common/Font";

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  const navbarRef = useRef(null);

  // Enhanced navigation function
  const handleNavigation = (targetId, event) => {
    event.preventDefault();
    
    // Close mobile menu first
    setExpanded(false);
    
    // Check if we're on the home page
    const isHomePage = window.location.pathname === '/' || window.location.pathname === '/home';
    
    if (isHomePage) {
      // If on home page, scroll to the section
      setTimeout(() => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300); // Small delay to allow menu to close
    } else {
      // If on another page, navigate to home page with hash
      window.location.href = `/#${targetId}`;
    }
  };

  // Handle click outside to close navbar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target) && expanded) {
        setExpanded(false);
      }
    };

    // Add event listener when navbar is expanded
    if (expanded) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    // Cleanup event listeners
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [expanded]);

  // Handle scroll to section after page load (for external navigation)
  useEffect(() => {
    const handleHashNavigation = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        setTimeout(() => {
          const targetElement = document.getElementById(hash);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        }, 500);
      }
    };

    handleHashNavigation();
    window.addEventListener('hashchange', handleHashNavigation);

    return () => {
      window.removeEventListener('hashchange', handleHashNavigation);
    };
  }, []);

  // Handle escape key to close navbar
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && expanded) {
        setExpanded(false);
      }
    };

    if (expanded) {
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [expanded]);

  return (
    <BootstrapNavbar 
      expand="lg" 
      style={styles.navbar}
      expanded={expanded}
      onToggle={(expanded) => setExpanded(expanded)}
      ref={navbarRef}
    >
      <Container>
        <BootstrapNavbar.Brand 
          href="/" 
          style={styles.brand}
        >
          <img
            src={logo}
            alt="Keerthi Builders Logo"
            style={styles.logo}
          />
          <div style={styles.titleContainer}>
            <h1 style={styles.title}>KEERTHI BUILDERS</h1>
            <p style={styles.subtitle}>Building the future of RealEstate</p>
          </div>
        </BootstrapNavbar.Brand>

        <BootstrapNavbar.Toggle 
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          {/* Close button for mobile */}
          {expanded && (
            <button
              onClick={() => setExpanded(false)}
              style={styles.closeButton}
              aria-label="Close menu"
            >
              ×
            </button>
          )}
          
          <Nav className="ms-auto">
            <Nav.Link 
              href="#project-section" 
              style={styles.navLink}
              onClick={(e) => handleNavigation('project-section', e)}
            >
              Projects
            </Nav.Link>
            <Nav.Link 
              href="#about" 
              style={styles.navLink}
              onClick={(e) => handleNavigation('about', e)}
            >
              About
            </Nav.Link>
            <Button 
              href="#contact" 
              style={styles.contactButton}
              variant="success"
              onClick={(e) => handleNavigation('contact', e)}
            >
              Contact Us
            </Button>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
      
      <style>
        {`
          .navbar-toggler {
            border: none !important;
            box-shadow: none !important;
            outline: none !important;
            padding: 4px 8px !important;
          }
          
          .navbar-toggler:focus {
            box-shadow: none !important;
            outline: none !important;
          }
          
          .navbar-toggler-icon {
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(255, 255, 255, 1)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important;
            width: 24px !important;
            height: 24px !important;
          }
          
          /* Desktop styles */
          @media (min-width: 992px) {
            .navbar-nav {
              display: flex !important;
              flex-direction: row !important;
              align-items: center !important;
              gap: 2rem !important;
            }
            
            .nav-link {
              color: #ffffff !important;
              text-shadow: 0 1px 3px rgba(0,0,0,0.7) !important;
              font-weight: 500 !important;
              font-size: 16px !important;
              padding: 0.5rem 0 !important;
            }
            
            .nav-link:hover {
              color: #e0e0e0 !important;
            }
          }
          
          /* Mobile styles */
          @media (max-width: 991.98px) {
            .navbar-collapse {
              position: fixed !important;
              top: 0 !important;
              right: 0 !important;
              width: 280px !important;
              height: 100vh !important;
              background-color: #fff !important;
              z-index: 1030 !important;
              transition: transform 0.3s ease !important;
              transform: translateX(100%) !important;
              padding: 2rem 1.5rem !important;
              box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1) !important;
              overflow-y: auto !important;
            }
            
            .navbar-collapse.show {
              transform: translateX(0) !important;
            }
            
            .navbar-nav {
              flex-direction: column !important;
              align-items: flex-start !important;
              padding-top: 2rem !important;
              width: 100% !important;
            }
            
            .nav-link {
              color: #1C542C !important;
              text-shadow: none !important;
              padding: 1rem 0 !important;
              width: 100% !important;
              border-bottom: 1px solid rgba(0, 0, 0, 0.1) !important;
              font-size: 18px !important;
              font-weight: 500 !important;
            }
            
            .nav-link:hover {
              color: #164023 !important;
              background-color: rgba(28, 84, 44, 0.1) !important;
            }
            
            .btn {
              margin-top: 1rem !important;
              width: 100% !important;
              padding: 12px 20px !important;
              font-size: 16px !important;
            }
            
            .btn:hover {
              background-color: #164023 !important;
              border-color: #164023 !important;
            }
            
            /* Add overlay when menu is open */
            .navbar-collapse.show::before {
              content: "";
              position: fixed;
              top: 0;
              left: 0;
              right: 280px;
              bottom: 0;
              background-color: rgba(0, 0, 0, 0.5);
              z-index: -1;
              pointer-events: none;
            }
          }
          
          @media (max-width: 576px) {
            .navbar-brand img {
              height: 50px !important;
              width: 80px !important;
            }
            
            .navbar-brand h1 {
              font-size: 14px !important;
            }
            
            .navbar-brand p {
              font-size: 9px !important;
            }
            
            .navbar-collapse {
              width: 250px !important;
            }
            
            .navbar-collapse.show::before {
              right: 250px !important;
            }
          }
        `}
      </style>
    </BootstrapNavbar>
  );
};

const styles = {
  navbar: {
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    zIndex: "1000",
    padding: "1.5rem 0 0 0",
    backgroundColor: "transparent",
    fontFamily: fonts.Noto
  },
  brand: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none"
  },
  logo: {
    height: "60px",
    width: "100px",
    marginRight: "0.75rem"
  },
  titleContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: '20px',
    fontFamily: fonts.Noto
  },
  title: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#ffffff",
    margin: "0",
    fontFamily: fonts.Noto,
    textShadow: "0 2px 4px rgba(0,0,0,0.7)"
  },
  subtitle: {
    fontSize: "10px",
    color: "#e0e0e0",
    margin: "0",
    fontFamily: fonts.Noto,
    textShadow: "0 1px 3px rgba(0,0,0,0.7)"
  },
  navLink: {
    fontFamily: fonts.Noto
  },
  contactButton: {
    backgroundColor: "#1C542C",
    color: "white",
    fontWeight: "500",
    padding: "8px 12px",
    borderRadius: "30px",
    fontSize: "16px",
    border: "none",
    fontFamily: fonts.Noto
  },
  closeButton: {
    position: "absolute",
    top: "15px",
    right: "20px",
    background: "none",
    border: "none",
    fontSize: "30px",
    color: "#1C542C",
    cursor: "pointer",
    width: "30px",
    height: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0",
    lineHeight: "1",
    zIndex: "1031"
  }
};

export default Navbar;
