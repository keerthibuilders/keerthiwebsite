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
      const navbarHeight = document.querySelector('.details-tab-navbar')?.offsetHeight || 0;
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
        const navMenu = clickedLink.closest('.details-tab-menu');
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
      const navbar = document.querySelector('.details-tab-navbar');
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
              const activeElement = document.querySelector(`.details-tab-menu a[href="#${currentSection}"]`);
              const navMenu = document.querySelector('.details-tab-menu');
              
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
      className={`details-tab-navbar ${isSticky ? 'sticky-tab-navbar' : ''} py-2 py-lg-3`}
      style={{
        ...styles.navbar,
        ...(isSticky ? styles.stickyNavbar : {})
      }}
    >
      <Container className="px-3 px-lg-4">
        {/* Always show navigation - no toggle button */}
        <Nav className="details-tab-menu d-flex flex-row overflow-auto w-100 py-2 py-lg-0" style={styles.nav}>
          {navItems.map((item, index) => {
            const id = item.toLowerCase().replace(' ', '-');
            return (
              <a
                key={id}
                href={`#${id}`}
                className={`nav-link flex-shrink-0 text-nowrap px-3 px-lg-4 py-2 text-decoration-none ${
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

      {/* Enhanced styles to override hero background styling */}
      <style>
        {`
          /* Essential horizontal scroll styles */
          .details-tab-menu::-webkit-scrollbar {
            display: none;
          }
          
          .details-tab-menu {
            -ms-overflow-style: none;
            scrollbar-width: none;
            -webkit-overflow-scrolling: touch;
            scroll-behavior: smooth;
          }
          
          /* Force black text for details tab navbar - override hero styling */
          .details-tab-navbar {
            background-color: #fff !important;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1) !important;
          }
          
          .details-tab-navbar .nav-link {
            color: #4b5563 !important;
            text-shadow: none !important;
          }
          
          .details-tab-navbar .nav-link:hover {
            color: #1C542C !important;
            text-shadow: none !important;
          }
          
          .details-tab-navbar .nav-link.active {
            color: #1C542C !important;
            font-weight: 600 !important;
            text-shadow: none !important;
            border-bottom: none !important;
          }
          
          /* Override any hero background styling for this navbar */
          body.has-details-page-hero-bg .details-tab-navbar {
            background-color: #fff !important;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1) !important;
          }
          
          body.has-details-page-hero-bg .details-tab-navbar .nav-link {
            color: #4b5563 !important;
            text-shadow: none !important;
          }
          
          body.has-details-page-hero-bg .details-tab-navbar .nav-link:hover {
            color: #1C542C !important;
            text-shadow: none !important;
          }
          
          body.has-details-page-hero-bg .details-tab-navbar .nav-link.active {
            color: #1C542C !important;
            font-weight: 600 !important;
            text-shadow: none !important;
            border-bottom: none !important;
          }
          
          /* Sticky navbar positioning with grey semi-transparent background */
          .sticky-tab-navbar {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            z-index: 1040 !important;
            backdrop-filter: blur(10px) !important;
            -webkit-backdrop-filter: blur(10px) !important;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1) !important;
            transition: all 0.3s ease !important;
            background-color: rgba(128, 128, 128, 0.8) !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.2) !important;
          }
          
          /* Sticky navbar text colors - black text on grey background */
          .sticky-tab-navbar .nav-link {
            color: #000000 !important;
            text-shadow: none !important;
            font-weight: 500 !important;
          }
          
          .sticky-tab-navbar .nav-link:hover {
            color: #1C542C !important;
            text-shadow: none !important;
          }
          
          .sticky-tab-navbar .nav-link.active {
            color: #1C542C !important;
            text-shadow: none !important;
            font-weight: 600 !important;
          }
          
          /* Override hero styling for sticky state too */
          body.has-details-page-hero-bg .sticky-tab-navbar {
            background-color: rgba(128, 128, 128, 0.8) !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.2) !important;
          }
          
          body.has-details-page-hero-bg .sticky-tab-navbar .nav-link {
            color: #000000 !important;
            text-shadow: none !important;
            font-weight: 500 !important;
          }
          
          body.has-details-page-hero-bg .sticky-tab-navbar .nav-link:hover,
          body.has-details-page-hero-bg .sticky-tab-navbar .nav-link.active {
            color: #1C542C !important;
            text-shadow: none !important;
          }
          
          /* Smooth page scrolling */
          html {
            scroll-behavior: smooth;
          }
          
          /* Hover effects */
          .nav-link:hover {
            transform: translateY(-1px);
            transition: all 0.3s ease;
          }
        `}
      </style>
    </BootstrapNavbar>
  );
};

// Updated styles object
const styles = {
  navbar: {
    backgroundColor: "#fff",
    fontFamily: fonts.Noto,
    borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease"
  },
  stickyNavbar: {
    backgroundColor: "rgba(128, 128, 128, 0.8)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.2)"
  },
  nav: {
    fontFamily: fonts.Noto,
    gap: "0"
  },
  navLink: {
    color: "#4b5563",
    fontWeight: "500",
    transition: "all 0.3s ease",
    fontSize: "16px",
    fontFamily: fonts.Noto,
    cursor: "pointer",
    border: "none"
  },
  activeNavLink: {
    color: "#1C542C"
  },
  stickyNavLink: {
    color: "#000000",
    fontWeight: "500"
  }
};

export default DetailsNavbar;
