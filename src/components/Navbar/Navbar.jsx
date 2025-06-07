import React, { useEffect } from "react";
import { Navbar as BootstrapNavbar, Container, Nav, Button } from "react-bootstrap";
import logo from "../../../public/assets/images/logo.png"; // Adjust the path as necessary
import fonts from "../Common/Font";

const Navbar = () => {
  // Add event listeners for menu functionality
  useEffect(() => {
    // Function to close the navbar
    const closeNavbar = () => {
      const navbarToggler = document.querySelector('.navbar-toggler');
      const navbarCollapse = document.querySelector('.custom-navbar-collapse.show');
      
      if (navbarCollapse && navbarToggler) {
        navbarToggler.click();
      }
    };

    // Handle clicks on links inside the menu
    const handleLinkClick = (event) => {
      if (event.target.classList.contains('nav-link') || 
          event.target.tagName === 'BUTTON' ||
          event.target.closest('.nav-link') || 
          event.target.closest('button')) {
        closeNavbar();
      }
    };

    // Handle clicks anywhere (for closing the menu)
    const handleClickAnywhere = (event) => {
      const navbarCollapse = document.querySelector('.custom-navbar-collapse');
      const navbarToggler = document.querySelector('.navbar-toggler');
      
      // If menu is open and click is not on the toggle button, close it
      if (navbarCollapse && navbarCollapse.classList.contains('show') && 
          !navbarToggler.contains(event.target)) {
        closeNavbar();
      }
    };

    // Add event listeners
    document.addEventListener('click', handleClickAnywhere);
    document.addEventListener('click', handleLinkClick);
    
    // Clean up event listeners when component unmounts
    return () => {
      document.removeEventListener('click', handleClickAnywhere);
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  return (
    <BootstrapNavbar expand="lg" style={styles.navbar}>
      <Container>
        <BootstrapNavbar.Brand href="#home" style={styles.brand}>
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
          style={styles.toggleButton}
        />
        <BootstrapNavbar.Collapse id="basic-navbar-nav" className="custom-navbar-collapse">
          <Nav className="ms-auto side-menu" style={styles.nav}>
            <Nav.Link href="#projects" style={styles.navLink}>Projects</Nav.Link>
            <Nav.Link href="#about" style={styles.navLink}>About</Nav.Link>
            <Button 
              href="#contact" 
              style={styles.contactButton}
              variant="success"
            >
              Contact Us
            </Button>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
      
      {/* Custom styles for side menu and toggle button */}
      <style>
        {`
          .navbar-toggler {
            border: none !important;
            box-shadow: none !important;
            outline: none !important;
          }
          
          .navbar-toggler:focus {
            box-shadow: none !important;
            outline: none !important;
          }
          
          @media (max-width: 991.98px) {
            .custom-navbar-collapse {
              position: fixed;
              top: 0;
              right: 0;
              width: 250px;
              height: 100vh;
              background-color: #fff;
              z-index: 1030;
              transition: transform 0.3s ease;
              transform: translateX(100%);
              padding: 1rem;
              box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
              overflow-y: auto;
            }
            
            .custom-navbar-collapse.show {
              transform: translateX(0);
            }
            
            .side-menu {
              flex-direction: column;
              align-items: flex-start !important;
              padding-top: 3rem;
            }
            
            .side-menu .nav-link {
              color: #1C542C !important;
              text-shadow: none !important;
              padding: 0.75rem 0;
              width: 100%;
              border-bottom: 1px solid rgba(0, 0, 0, 0.05);
            }
            
            body.has-video-background .side-menu .nav-link {
              color: #1C542C !important;
              text-shadow: none !important;
            }
            
            .side-menu .btn {
              margin-top: 1rem;
              width: 100%;
            }
            
            /* Close button for the side menu */
            .custom-navbar-collapse.show::before {
              content: "×";
              position: absolute;
              top: 10px;
              right: 20px;
              font-size: 24px;
              color: #1C542C;
              cursor: pointer;
            }
            
            /* Add overlay when menu is open */
            body::after {
              content: "";
              display: none;
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              z-index: 1020;
            }
            
            body.menu-open::after {
              display: block;
            }
          }
        `}
      </style>
    </BootstrapNavbar>
  );
};

// Styles object
const styles = {
  navbar: {
    padding: "1.5rem 0 0 0",
    marginBottom: "0",
    backgroundColor: "#fff",
    fontFamily: fonts.Noto
  },
  brand: {
    display: "flex",
    alignItems: "center",
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
    color: "#1C542C",
    margin: "0",
    fontFamily: fonts.Noto
  },
  subtitle: {
    fontSize: "10px",
    color: "#4b5563",
    margin: "0",
    fontFamily: fonts.Noto
  },
  nav: {
    display: "flex",
    alignItems: "center",
    gap: "2rem",
    fontFamily: fonts.Noto
  },
  navLink: {
    textDecoration: "none",
    color: "#4b5563",
    fontWeight: "500",
    transition: "color 0.2s ease",
    padding: "0.5rem 0",
    fontSize: "16px",
    fontFamily: fonts.Noto,
    "&:hover": {
      color: "#000"
    }
  },
  contactButton: {
    backgroundColor: "#1C542C",
    color: "white",
    fontWeight: "500",
    padding: "8px 12px",
    borderRadius: "20px",
    fontSize: "16px",
    border: "none",
    transition: "background-color 0.2s ease",
    fontFamily: fonts.Noto,
    "&:hover": {
      backgroundColor: "#164023"
    }
  },
  toggleButton: {
    border: "none",
    padding: "0.25rem 0.5rem",
    zIndex: 1031, // Higher than the side menu
  }
};

// Add event listener for menu state to handle overlay
document.addEventListener('DOMContentLoaded', () => {
  // Track menu state changes
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === 'class') {
        const isOpen = mutation.target.classList.contains('show');
        if (isOpen) {
          document.body.classList.add('menu-open');
        } else {
          document.body.classList.remove('menu-open');
        }
      }
    });
  });
  
  // Start observing the navbar collapse element
  setTimeout(() => {
    const navbarCollapse = document.querySelector('.custom-navbar-collapse');
    if (navbarCollapse) {
      observer.observe(navbarCollapse, { attributes: true });
    }
  }, 500);
});

export default Navbar;
