import React, { useState, useEffect, useRef } from "react";
import { Navbar as BootstrapNavbar, Container, Nav, Button } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../../public/assets/images/logo.png";
import fonts from "../Common/Font";
import ProjectDropdown from "./ProjectDropdown";

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [showProjectDropdown, setShowProjectDropdown] = useState(false);
  const navbarRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Enhanced navigation function
  const handleNavigation = (targetId, event) => {
    event.preventDefault();
    setExpanded(false);
    setShowProjectDropdown(false);

    if (targetId === 'about') {
      navigate('/about');
    } else if (targetId === 'projects') {
      navigate('/project');
    } else if (targetId === 'residential') {
      navigate('/residential');
    } else if (targetId === 'commercial') {
      navigate('/commercial');
    } else if (targetId === 'keerthi-paradise') {
      navigate('/site-details/keerthi-paradise');
    } else if (targetId === 'keerthi-elite') {
      navigate('/site-details/keerthi-elite');
    } else if (targetId === 'site-details') {
      navigate('/site-details');
    } else if (location.pathname === '/' || location.pathname === '/home') {
      setTimeout(() => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    } else {
      navigate(`/#${targetId}`);
    }
  };

  // Handle home navigation
  const handleHomeNavigation = (event) => {
    event.preventDefault();
    setExpanded(false);
    navigate('/');
  };

   // Handle click outside to close navbar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target) && expanded) {
        setExpanded(false);
      }
    };

    if (expanded) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [expanded]);

  // Handle scroll to section after page load
  useEffect(() => {
    const handleHashNavigation = () => {
      const hash = location.hash.substring(1);
      if (hash && location.pathname === '/') {
        setTimeout(() => {
          const targetElement = document.getElementById(hash);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        }, 500);
      }
    };

    handleHashNavigation();
  }, [location]);

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
          onClick={handleHomeNavigation}
          style={styles.brand}
        >
          <img
            src={logo}
            alt="Keerthi Builders Logo"
            style={styles.logo}
          />
          <div style={styles.titleContainer}>
            <h1 style={styles.title}>
              KEERTHI BUILDERS
            </h1>
            <p style={styles.subtitle}>
              Where Excellence Meets Experience
            </p>
          </div>
        </BootstrapNavbar.Brand>

        <BootstrapNavbar.Toggle
          id="navbar-toggle-btn"
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />

        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          {expanded && (
            <button
              id="navbar-close-btn"
              onClick={() => setExpanded(false)}
              style={styles.closeButton}
              aria-label="Close menu"
            >
              ×
            </button>
          )}

          <Nav className="ms-auto">
            {/* Projects Dropdown - Now using custom component */}
            <ProjectDropdown 
              showProjectDropdown={showProjectDropdown}
              setShowProjectDropdown={setShowProjectDropdown}
              handleNavigation={handleNavigation}
              location={location}
            />

            <Nav.Link
              href="/about"
              style={{
                ...styles.navLink,
                fontWeight: location.pathname === '/about' ? '600' : '500'
              }}
              onClick={(e) => handleNavigation('about', e)}>
              About Us
            </Nav.Link>

            <Button
              id="navbar-contact-btn"
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
          #navbar-toggle-btn {
            border: none !important;
            box-shadow: none !important;
            outline: none !important;
            padding: 4px 8px !important;
          }
          
          #navbar-toggle-btn:focus {
            box-shadow: none !important;
            outline: none !important;
          }
          
          #navbar-toggle-btn .navbar-toggler-icon {
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='%231C542C' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important;
            width: 24px !important;
            height: 24px !important;
          }
          
          /* Desktop styles */
          @media (min-width: 992px) {
            .navbar-nav {
              display: flex !important;
              flex-direction: row !important;
              align-items: center !important;
              gap: 1.5rem !important;
            }
            
            .nav-link {
              color: #1C542C !important;
              font-weight: 500 !important;
              font-size: 16px !important;
              padding: 0.5rem 0 !important;
              transition: color 0.3s ease !important;
            }
            
            .nav-link:hover {
              color: #164023 !important;
            }
            
            #navbar-contact-btn {
              background-color: #1C542C !important;
              border-color: #1C542C !important;
            }
            
            #navbar-contact-btn:hover {
              background-color: #164023 !important;
              border-color: #164023 !important;
            }
          }
          
          /* Mobile styles */
          @media (max-width: 991.98px) {
            .navbar {
              padding: 0.5rem 0 !important;
            }
            
            .container {
              padding-left: 1rem !important;
              padding-right: 1rem !important;
            }
            
            .navbar-collapse {
              position: fixed !important;
              background-color: #fff !important;
              top: 0 !important;
              right: 0 !important;
              width: 300px !important;
              height: 100vh !important;
              z-index: 1030 !important;
              transition: transform 0.3s ease !important;
              transform: translateX(100%) !important;
              padding: 2rem 1.5rem !important;
              box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1) !important;
              overflow-y: auto !important;
              border-radius: 0 0 0 24px !important;
            }
            
            .navbar-collapse.show {
              transform: translateX(0) !important;
            }
            
            .navbar-nav {
              display: flex !important;
              flex-direction: column !important;
              align-items: stretch !important;
              padding-top: 2rem !important;
              width: 100% !important;
              gap: 0 !important;
            }
            
            .nav-item {
              width: 100% !important;
              display: block !important;
            }
            
            .nav-link {
              color: #1C542C !important;
              font-size: 18px !important;
              font-weight: 500 !important;
              padding: 1rem 0 !important;
              width: 100% !important;
              border-bottom: 1px solid rgba(0, 0, 0, 0.1) !important;
              display: block !important;
              text-align: left !important;
            }
            
            .nav-link:hover {
              color: #164023 !important;
              background-color: rgba(28, 84, 44, 0.1) !important;
            }
            
            #navbar-contact-btn {
              margin-top: 1.5rem !important;
              width: 100% !important;
              padding: 12px 20px !important;
              font-size: 16px !important;
              background-color: #1C542C !important;
              border-color: #1C542C !important;
              border-radius: 8px !important;
              display: block !important;
              text-align: center !important;
            }
            
            #navbar-contact-btn:hover {
              background-color: #164023 !important;
              border-color: #164023 !important;
            }
            
            #navbar-close-btn {
              position: absolute;
              top: 15px;
              right: 20px;
              background: none;
              border: none;
              font-size: 30px;
              color: #1C542C;
              cursor: pointer;
              width: 30px;
              height: 30px;
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 0;
              line-height: 1;
              z-index: 1031;
            }
            
            #navbar-close-btn:hover {
              color: #164023;
              background-color: rgba(28, 84, 44, 0.1);
              border-radius: 50%;
            }
            
            .navbar-collapse.show::before {
              content: "";
              position: fixed;
              top: 0;
              left: 0;
              right: 300px;
              bottom: 0;
              background-color: rgba(0, 0, 0, 0.5);
              z-index: -1;
              pointer-events: none;
            }
          }
          
          /* Extra small mobile styles */
          @media (max-width: 576px) {
            .container {
              padding-left: 0.75rem !important;
              padding-right: 0.75rem !important;
            }
            
            .navbar-brand {
              padding: 0.25rem 0 !important;
            }
            
            .navbar-brand img {
              height: 45px !important;
              width: 75px !important;
            }
            
            .navbar-brand h1 {
              font-size: 13px !important;
              line-height: 1.2 !important;
            }
            
            .navbar-brand p {
              font-size: 8px !important;
              line-height: 1.2 !important;
            }
            
            .navbar-collapse {
              width: 280px !important;
              padding: 1.5rem 1rem !important;
            }
            
            .navbar-collapse.show::before {
              right: 280px !important;
            }
            
            .nav-link {
              font-size: 16px !important;
              padding: 0.75rem 0 !important;
            }
          }
          
          /* Very small screens */
          @media (max-width: 375px) {
            .navbar-collapse {
              width: 260px !important;
            }
            
            .navbar-collapse.show::before {
              right: 260px !important;
            }
            
            .navbar-brand h1 {
              font-size: 12px !important;
            }
            
            .navbar-brand p {
              font-size: 7px !important;
            }
          }
        `}
      </style>
    </BootstrapNavbar>
  );
};

const styles = {
  navbar: {
    position: "sticky",
    top: "0",
    left: "0",
    right: "0",
    zIndex: "1020",
    fontFamily: fonts.Noto,
    backgroundColor: "#ffffff",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    padding: "0.75rem 0",
    transition: "all 0.3s ease"
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
    fontFamily: fonts.Noto,
    marginTop: "15px",
    marginLeft: "5px"
  },
  title: {
    fontSize: "20px",
    fontWeight: "600",
    margin: "0",
    fontFamily: fonts.Noto,
    color: "#1C542C"
  },
  subtitle: {
    fontSize: "12px",
    margin: "0",
    fontFamily: fonts.Noto,
    color: "#1C542C"
  },
  navLink: {
    fontFamily: fonts.Noto,
    color: "#1C542C"
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

