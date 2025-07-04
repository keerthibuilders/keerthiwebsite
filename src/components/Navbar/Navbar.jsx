import React, { useState, useEffect, useRef } from "react";
import { Navbar as BootstrapNavbar, Container, Nav, Button } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../../public/assets/images/logo.png";
import fonts from "../Common/Font";

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOverWhiteSection, setIsOverWhiteSection] = useState(false);
  const navbarRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Check if we're on home page or about page
  const isHomePage = location.pathname === '/' || location.pathname === '/home';
  const isAboutPage = location.pathname === '/about';

  // Check if navbar is over white background sections
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 50);

      let isOverWhite = false;

      if (isHomePage) {
        // Check for HomeHeroSection with white background
        const heroSection = document.querySelector('[style*="background: #fff"]') || 
                           document.querySelector('.hero-section') ||
                           document.getElementById('hero-section');
        
        if (heroSection) {
          const heroRect = heroSection.getBoundingClientRect();
          const navbarHeight = 80;
          isOverWhite = heroRect.top < navbarHeight && heroRect.bottom > 0;
        } else {
          // Fallback: assume hero section is at the top of home page
          isOverWhite = scrollTop < 600;
        }
      } else if (isAboutPage) {
        // Check for AboutHeader section with white background
        const aboutHeader = document.querySelector('[style*="background: #ffffff"]') ||
                           document.querySelector('.about-header') ||
                           document.getElementById('about-header');
        
        if (aboutHeader) {
          const aboutRect = aboutHeader.getBoundingClientRect();
          const navbarHeight = 80;
          isOverWhite = aboutRect.top < navbarHeight && aboutRect.bottom > 0;
        } else {
          // Fallback: assume AboutHeader is at the top of about page
          isOverWhite = scrollTop < 500; // Adjust based on AboutHeader height
        }
      }

      setIsOverWhiteSection(isOverWhite);
    };

    handleScroll(); // Check initial state
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage, isAboutPage]);

  // Determine navbar style based on white section overlap
  const getNavbarStyle = () => {
    if (isOverWhiteSection && !isScrolled) {
      // White background with blur when over white sections
      return {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 2px 20px rgba(0,0,0,0.1)'
      };
    } else if (isScrolled) {
      // Scrolled state - white background
      return {
        backgroundColor: '#ffffff',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      };
    } else {
      // Default state - transparent
      return {
        backgroundColor: 'transparent',
        boxShadow: 'none'
      };
    }
  };

  // Determine text colors
  const getTextColor = () => {
    if (isOverWhiteSection || isScrolled) {
      return '#1C542C'; // Dark green for white backgrounds
    } else {
      return '#ffffff'; // White for dark/transparent backgrounds
    }
  };

  const getTextShadow = () => {
    if (isOverWhiteSection || isScrolled) {
      return 'none'; // No shadow on white backgrounds
    } else {
      return '0 2px 4px rgba(0,0,0,0.7)'; // Shadow for dark backgrounds
    }
  };

  // Enhanced navigation function
  const handleNavigation = (targetId, event) => {
    event.preventDefault();

    // Close mobile menu first
    setExpanded(false);

    if (targetId === 'about') {
      // Navigate to about page
      navigate('/about');
    } else if (isHomePage) {
      // If on home page, scroll to the section
      setTimeout(() => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300); // Small delay to allow menu to close
    } else {
      // If on another page, navigate to home page with hash
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

  const navbarStyle = getNavbarStyle();
  const textColor = getTextColor();
  const textShadow = getTextShadow();

  return (
    <BootstrapNavbar
      expand="lg"
      style={{
        ...styles.navbar,
        ...navbarStyle,
        transition: 'all 0.3s ease',
        position: 'fixed',
        padding: '0.75rem 0'
      }}
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
            <h1 style={{
              ...styles.title,
              color: textColor,
              textShadow: textShadow
            }}>
              KEERTHI BUILDERS
            </h1>
            <p style={{
              ...styles.subtitle,
              color: textColor,
              textShadow: textShadow
            }}>
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
          {/* Close button for mobile */}
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
            <Nav.Link
              href="#project-section"
              style={{
                ...styles.navLink,
                color: textColor,
                textShadow: textShadow
              }}
              onClick={(e) => handleNavigation('project-section', e)}
              className={isScrolled ? 'scrolled' : ''}>
              Projects
            </Nav.Link>
            
            <Nav.Link
              href="/about"
              style={{
                ...styles.navLink,
                color: textColor,
                textShadow: textShadow,
                fontWeight: location.pathname === '/about' ? '600' : '500'
              }}
              onClick={(e) => handleNavigation('about', e)}
              className={isScrolled ? 'scrolled' : ''}>
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
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='${encodeURIComponent(textColor)}' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important;
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
              color: ${textColor} !important;
              text-shadow: ${textShadow} !important;
              font-weight: 500 !important;
              font-size: 16px !important;
              padding: 0.5rem 0 !important;
              transition: color 0.3s ease !important;
            }
            
            .nav-link:hover {
              color: ${isOverWhiteSection || isScrolled ? '#164023' : '#e0e0e0'} !important;
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
            .navbar-collapse {
              position: fixed !important;
              background-color: #fff !important;
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
              border-radius: 0 0 0 24px !important;
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
            #navbar-contact-btn {
              margin-top: 1rem !important;
              width: 100% !important;
              padding: 12px 20px !important;
              font-size: 16px !important;
              background-color: #1C542C !important;
              border-color: #1C542C !important;
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
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    zIndex: "1000",
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
    fontFamily: fonts.Noto,
    marginTop: "25px",
    marginLeft: "5px"
  },
  title: {
    fontSize: "16px",
    fontWeight: "600",
    margin: "0",
    fontFamily: fonts.Noto,
    transition: "all 0.3s ease"
  },
  subtitle: {
    fontSize: "10px",
    margin: "0",
    fontFamily: fonts.Noto,
    transition: "all 0.3s ease"
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

