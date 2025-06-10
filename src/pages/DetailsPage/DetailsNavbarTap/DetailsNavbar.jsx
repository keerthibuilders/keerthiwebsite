import React, { useState, useEffect } from 'react';
import { Navbar as BootstrapNavbar, Container, Nav } from "react-bootstrap";
import fonts from "../../../components/Common/Font";

const DetailsNavbar = () => {
  const [activeLink, setActiveLink] = useState('project-highlights');
  const [isSticky, setIsSticky] = useState(false);

  const navItems = [
    'Project Highlights',
    'Amenities',
    'Plan',
    'Gallery',
    'Location'
  ];

  const handleLinkClick = (item, event) => {
    event.preventDefault();
    const id = item.toLowerCase().replace(' ', '-');
    setActiveLink(id);
    
    // Smooth scroll to the target section
    const targetElement = document.getElementById(id);
    if (targetElement) {
      const navbarHeight = document.querySelector('.details-page-navbar')?.offsetHeight || 0;
      const offsetTop = targetElement.offsetTop - navbarHeight - 20;
      
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    
    // Auto-scroll the clicked link into view on mobile
    if (window.innerWidth <= 991.98) {
      setTimeout(() => {
        const clickedLink = event.target;
        const navMenu = clickedLink.closest('.details-page-menu');
        if (navMenu && clickedLink) {
          const linkRect = clickedLink.getBoundingClientRect();
          const menuRect = navMenu.getBoundingClientRect();
          const scrollLeft = navMenu.scrollLeft;
          
          const linkCenter = linkRect.left - menuRect.left + scrollLeft + (linkRect.width / 2);
          const menuCenter = menuRect.width / 2;
          const targetScrollLeft = linkCenter - menuCenter;
          
          navMenu.scrollTo({
            left: Math.max(0, targetScrollLeft),
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  };

  // Update active link based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.details-page-navbar');
      if (navbar) {
        const navbarTop = navbar.offsetTop;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Handle sticky navbar
        if (scrollTop > navbarTop) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
        
        // Update active link based on scroll position
        const navbarHeight = navbar.offsetHeight;
        const sections = navItems.map(item => {
          const id = item.toLowerCase().replace(' ', '-');
          const element = document.getElementById(id);
          return { id, element };
        }).filter(section => section.element);
        
        let currentSection = sections[0]?.id || 'project-highlights';
        
        for (const section of sections) {
          const rect = section.element.getBoundingClientRect();
          const elementTop = rect.top + scrollTop;
          
          if (scrollTop >= elementTop - navbarHeight - 100) {
            currentSection = section.id;
          }
        }
        
        if (currentSection !== activeLink) {
          setActiveLink(currentSection);
          
          // Auto-scroll active link into view on mobile
          if (window.innerWidth <= 991.98) {
            setTimeout(() => {
              const activeElement = document.querySelector(`.details-page-menu a[href="#${currentSection}"]`);
              const navMenu = document.querySelector('.details-page-menu');
              
              if (activeElement && navMenu) {
                const linkRect = activeElement.getBoundingClientRect();
                const menuRect = navMenu.getBoundingClientRect();
                const scrollLeft = navMenu.scrollLeft;
                
                const linkLeft = linkRect.left - menuRect.left + scrollLeft;
                const linkRight = linkLeft + linkRect.width;
                const visibleLeft = scrollLeft;
                const visibleRight = scrollLeft + menuRect.width;
                
                if (linkLeft < visibleLeft || linkRight > visibleRight) {
                  const linkCenter = linkLeft + (linkRect.width / 2);
                  const menuCenter = menuRect.width / 2;
                  const targetScrollLeft = linkCenter - menuCenter;
                  
                  navMenu.scrollTo({
                    left: Math.max(0, targetScrollLeft),
                    behavior: 'smooth'
                  });
                }
              }
            }, 100);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems, activeLink]);

  return (
    <BootstrapNavbar
      className={`details-page-navbar ${isSticky ? 'sticky-details-navbar' : ''} py-2 py-lg-3`}
      style={{
        ...styles.navbar,
        ...(isSticky ? styles.stickyNavbar : {})
      }}
    >
      <Container className="px-3 px-lg-4">
        {/* Always show navigation - no toggle button */}
        <Nav className="details-page-menu d-flex flex-row overflow-auto w-100 py-2 py-lg-0" style={styles.nav}>
          {navItems.map((item, index) => {
            const id = item.toLowerCase().replace(' ', '-');
            return (
              <a
                key={id}
                href={`#${id}`}
                className={`details-nav-link flex-shrink-0 text-nowrap px-3 px-lg-4 py-2 text-decoration-none ${
                  activeLink === id ? 'active fw-semibold' : ''
                } ${index === navItems.length - 1 ? 'pe-4' : ''}`}
                style={{
                  ...styles.navLink,
                  ...(activeLink === id ? styles.activeNavLink : {}),
                  ...(isSticky ? styles.stickyNavLink : {})
                }}
                onClick={(event) => handleLinkClick(item, event)}
              >
                {item}
              </a>
            );
          })}
        </Nav>
      </Container>

      {/* Complete styles for horizontal scrolling mobile navbar */}
      <style>
        {`
          /* Hide scrollbar but keep horizontal scroll functionality */
          .details-page-menu::-webkit-scrollbar {
            display: none;
          }
          
          .details-page-menu {
            -ms-overflow-style: none !important;
            scrollbar-width: none !important;
            -webkit-overflow-scrolling: touch !important;
            scroll-behavior: smooth !important;
            overflow-x: auto !important;
            overflow-y: hidden !important;
          }
          
          /* Force navbar styling - override any hero background effects */
          .details-page-navbar {
            background-color: #fff !important;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1) !important;
            width: 100% !important;
            position: relative !important;
          }
          
          /* Navigation link base styles */
          .details-page-navbar .details-nav-link {
            color: #4b5563 !important;
            text-shadow: none !important;
            font-weight: 500 !important;
            transition: all 0.3s ease !important;
            border: none !important;
            background: none !important;
            text-decoration: none !important;
            white-space: nowrap !important;
            flex-shrink: 0 !important;
          }
          
          /* Hover state */
          .details-page-navbar .details-nav-link:hover {
            color: #1C542C !important;
            text-shadow: none !important;
            text-decoration: none !important;
            transform: translateY(-1px) !important;
          }
          
          /* Active state */
          .details-page-navbar .details-nav-link.active {
            color: #1C542C !important;
            font-weight: 600 !important;
            text-shadow: none !important;
            border-bottom: none !important;
            text-decoration: none !important;
          }
          
          /* Override any hero background styling */
          body.has-video-background .details-page-navbar,
          body.has-details-page-hero-bg .details-page-navbar {
            background-color: #fff !important;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1) !important;
          }
          
          body.has-video-background .details-page-navbar .details-nav-link,
          body.has-details-page-hero-bg .details-page-navbar .details-nav-link {
            color: #4b5563 !important;
            text-shadow: none !important;
          }
          
          body.has-video-background .details-page-navbar .details-nav-link:hover,
          body.has-details-page-hero-bg .details-page-navbar .details-nav-link:hover {
            color: #1C542C !important;
            text-shadow: none !important;
          }
          
          body.has-video-background .details-page-navbar .details-nav-link.active,
          body.has-details-page-hero-bg .details-page-navbar .details-nav-link.active {
            color: #1C542C !important;
            font-weight: 600 !important;
            text-shadow: none !important;
          }
          
          /* Sticky navbar with semi-transparent grey background */
          .sticky-details-navbar {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            z-index: 1040 !important;
            backdrop-filter: blur(10px) !important;
            -webkit-backdrop-filter: blur(10px) !important;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1) !important;
            transition: all 0.3s ease !important;
            background-color: rgba(253, 253, 253, 0.8) !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.2) !important;
          }
          
          /* Sticky navbar text - black on grey background */
          .sticky-details-navbar .details-nav-link {
            color: #000000 !important;
            text-shadow: none !important;
            font-weight: 500 !important;
          }
          
          .sticky-details-navbar .details-nav-link:hover {
            color: #1C542C !important;
            text-shadow: none !important;
          }
          
          .sticky-details-navbar .details-nav-link.active {
            color: #1C542C !important;
            text-shadow: none !important;
            font-weight: 600 !important;
          }
          
          /* Override hero styling for sticky state */
          body.has-video-background .sticky-details-navbar,
          body.has-details-page-hero-bg .sticky-details-navbar {
            background-color: rgba(128, 128, 128, 0.8) !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.2) !important;
          }
          
          body.has-video-background .sticky-details-navbar .details-nav-link,
          body.has-details-page-hero-bg .sticky-details-navbar .details-nav-link {
            color: #000000 !important;
            text-shadow: none !important;
            font-weight: 500 !important;
          }
          
          body.has-video-background .sticky-details-navbar .details-nav-link:hover,
          body.has-video-background .sticky-details-navbar .details-nav-link.active,
          body.has-details-page-hero-bg .sticky-details-navbar .details-nav-link:hover,
          body.has-details-page-hero-bg .sticky-details-navbar .details-nav-link.active {
            color: #1C542C !important;
            text-shadow: none !important;
          }
          
          /* Mobile responsive adjustments */
          @media (max-width: 575.98px) {
            .details-page-navbar .container {
              padding-left: 0.75rem !important;
              padding-right: 0.75rem !important;
            }
            
            .details-page-menu {
              padding-left: 0 !important;
              padding-right: 0 !important;
            }
            
            .details-nav-link {
              font-size: 14px !important;
              padding: 0.6rem 0.75rem !important;
              min-width: auto !important;
            }
          }
          
          @media (min-width: 576px) and (max-width: 767.98px) {
            .details-nav-link {
              font-size: 15px !important;
              padding: 0.65rem 1rem !important;
            }
          }
          
          @media (min-width: 768px) and (max-width: 991.98px) {
            .details-nav-link {
              font-size: 15px !important;
              padding: 0.7rem 1.25rem !important;
            }
          }
          
          @media (min-width: 992px) {
            .details-page-menu {
              justify-content: center !important;
              overflow-x: visible !important;
            }
            
            .details-nav-link {
              font-size: 16px !important;
              padding: 0.75rem 1.5rem !important;
            }
          }
          
          /* Smooth scrolling for the entire page */
          html {
            scroll-behavior: smooth;
          }
          
          /* Ensure proper flex behavior */
          .details-page-menu {
            display: flex !important;
            flex-direction: row !important;
            flex-wrap: nowrap !important;
            align-items: center !important;
          }
          
          /* Touch scrolling improvements for mobile */
          @media (max-width: 991.98px) {
            .details-page-menu {
              -webkit-overflow-scrolling: touch !important;
              scroll-snap-type: x proximity !important;
            }
            
            .details-nav-link {
              scroll-snap-align: center !important;
            }
          }
        `}
      </style>
    </BootstrapNavbar>
  );
};

// Complete styles object
const styles = {
  navbar: {
    backgroundColor: "#fff",
    fontFamily: fonts.Noto,
    borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
    width: "100%",
    position: "relative"
  },
  stickyNavbar: {
    backgroundColor: "rgba(128, 128, 128, 0.8)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1040
  },
    nav: {
    fontFamily: fonts.Noto,
    gap: "0",
    display: "flex",
    flexDirection: "row",
    overflowX: "auto",
    overflowY: "hidden",
    width: "100%",
    alignItems: "center"
  },
  navLink: {
    color: "#4b5563",
    fontWeight: "500",
    transition: "all 0.3s ease",
    fontSize: "16px",
    fontFamily: fonts.Noto,
    cursor: "pointer",
    border: "none",
    textDecoration: "none",
    whiteSpace: "nowrap",
    flexShrink: 0,
    backgroundColor: "transparent"
  },
  activeNavLink: {
    color: "#1C542C",
    fontWeight: "600"
  },
  stickyNavLink: {
    color: "#000000",
    fontWeight: "500"
  }
};

export default DetailsNavbar;

