import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { MdOutlinePhone } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { LuMapPin } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook, CiYoutube } from "react-icons/ci";
import fonts from '../Common/Font';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [webPoints, setWebPoints] = useState([]);
  const footerRef = useRef(null);
  const webRef = useRef(null);
  const animationRef = useRef(null);

  // Handle navigation function
  const handleNavigation = (targetId, event) => {
    event.preventDefault();
    
    // Special handling for About Us page
    if (targetId === 'about') {
      navigate('/about');
      return;
    }
    
    // Check if we're on the home page
    const isHomePage = window.location.pathname === '/' || window.location.pathname === '/home';
    
    if (isHomePage) {
      // If on home page, scroll to the section
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on another page, navigate to home page with hash
      navigate(`/#${targetId}`);
    }
  };

  // Handle mouse movement to track position
  const handleMouseMove = (e) => {
    if (!footerRef.current) return;
    
    const rect = footerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  // Handle mouse enter/leave for the footer
  const handleMouseEnter = () => {
    setIsHovering(true);
    // Generate random web points when mouse enters
    if (footerRef.current) {
      const width = footerRef.current.offsetWidth;
      const height = footerRef.current.offsetHeight;
      
      // Generate 15-20 random points for the web
      const points = [];
      const numPoints = Math.floor(Math.random() * 6) + 15; // 15-20 points
      
      for (let i = 0; i < numPoints; i++) {
        points.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 3 + 1, // Random size for points
          connections: []
        });
      }
      
      // Determine connections between points (not all points connect to all others)
      points.forEach((point, i) => {
        const numConnections = Math.floor(Math.random() * 5) + 2; // 2-6 connections per point
        const possibleConnections = [...points];
        possibleConnections.splice(i, 1); // Remove self from possible connections
        
        // Shuffle and take first numConnections
        const shuffled = possibleConnections.sort(() => 0.5 - Math.random());
        point.connections = shuffled.slice(0, numConnections).map(p => points.indexOf(p));
      });
      
      setWebPoints(points);
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  // Draw and animate spider web effect
  useEffect(() => {
    if (!isHovering || !webRef.current || webPoints.length === 0) return;
    const canvas = webRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas dimensions to match footer
    if (footerRef.current) {
      canvas.width = footerRef.current.offsetWidth;
      canvas.height = footerRef.current.offsetHeight;
    }
    
    let animationProgress = 0;
    let lastTime = 0;
    
    const animate = (timestamp) => {
      if (!lastTime) lastTime = timestamp;
      const deltaTime = timestamp - lastTime;
      lastTime = timestamp;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Increase animation progress
      animationProgress += deltaTime * 0.001; // Adjust speed here
      if (animationProgress > 1) animationProgress = 1;
      
      // Draw web with animation
      drawAnimatedWeb(ctx, animationProgress);
      
      // Draw glowing effect around cursor
      drawCursorGlow(ctx);
      
      // Continue animation if not complete
      if (animationProgress < 1 && isHovering) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };
    
    const drawAnimatedWeb = (ctx, progress) => {
      // Draw connections first (lines)
      ctx.strokeStyle = 'rgba(244, 220, 104, 0.15)';
      ctx.lineWidth = 0.5;
      
      webPoints.forEach((point, i) => {
        point.connections.forEach(connIndex => {
          if (connIndex > i) { // Avoid drawing the same connection twice
            const connPoint = webPoints[connIndex];
            
            // Calculate how much of the line to draw based on progress
            const startX = point.x;
            const startY = point.y;
            const endX = connPoint.x;
            const endY = connPoint.y;
            
            const currentEndX = startX + (endX - startX) * progress;
            const currentEndY = startY + (endY - startY) * progress;
            
            ctx.beginPath();
            ctx.moveTo(startX, startY);
            ctx.lineTo(currentEndX, currentEndY);
            ctx.stroke();
            
            // Add small glow to intersections
            if (progress > 0.8) {
              const glowOpacity = (progress - 0.8) * 5; // 0 to 1 in the last 20% of animation
              ctx.fillStyle = `rgba(255, 255, 255, ${glowOpacity * 0.2})`;
              ctx.beginPath();
              ctx.arc(endX, endY, 2, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        });
      });
      
      // Draw points (nodes)
      webPoints.forEach(point => {
        // Scale point size with progress for a growing effect
        const currentSize = point.size * progress;
        
        // Draw glowing node
        const gradient = ctx.createRadialGradient(
          point.x, point.y, 0,
          point.x, point.y, currentSize * 3
        );
        gradient.addColorStop(0, 'transparent');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(point.x, point.y, currentSize * 3, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw solid node center
        ctx.fillStyle = 'transparent';
        ctx.beginPath();
        ctx.arc(point.x, point.y, currentSize, 0, Math.PI * 2);
        ctx.fill();
      });
      
      // Add some "silk" strands from cursor to nearby points
      if (progress > 0.5) {
        const silkOpacity = (progress - 0.5) * 2; // 0 to 1 in the last 50% of animation
        ctx.strokeStyle = `rgba(255, 255, 255, ${silkOpacity * 0.3})`;
        ctx.lineWidth = 0.3;
        
        // Find 3 closest points to cursor
        const sortedPoints = [...webPoints].sort((a, b) => {
          const distA = Math.hypot(a.x - mousePosition.x, a.y - mousePosition.y);
          const distB = Math.hypot(b.x - mousePosition.x, b.y - mousePosition.y);
          return distA - distB;
        });
        
        const closestPoints = sortedPoints.slice(0, 3);
        
        closestPoints.forEach(point => {
          // Draw wavy line from cursor to point
          ctx.beginPath();
          ctx.moveTo(mousePosition.x, mousePosition.y);
          
          // Add some waviness to the silk strand
          const midX = (mousePosition.x + point.x) / 2;
          const midY = (mousePosition.y + point.y) / 2;
          const offset = Math.sin(animationProgress * 10) * 10; // Wavy effect
          
          ctx.quadraticCurveTo(
            midX + offset,
            midY - offset,
            point.x,
            point.y
          );
          
          ctx.stroke();
        });
      }
    };
    
    const drawCursorGlow = (ctx) => {
      // Draw glowing effect around cursor
      const gradient = ctx.createRadialGradient(
        mousePosition.x, mousePosition.y, 0,
        mousePosition.x, mousePosition.y, 50
      );
      gradient.addColorStop(0, 'transparent');
      gradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(mousePosition.x, mousePosition.y, 50, 0, Math.PI * 2);
      ctx.fill();
      
      // Draw small center point
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.beginPath();
      ctx.arc(mousePosition.x, mousePosition.y, 2, 0, Math.PI * 2);
      ctx.fill();
    };
    
    // Start animation
    animationRef.current = requestAnimationFrame(animate);
    
    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePosition, isHovering, webPoints]);

  // Update canvas size on window resize
  useEffect(() => {
    const handleResize = () => {
      if (webRef.current && footerRef.current) {
        webRef.current.width = footerRef.current.offsetWidth;
        webRef.current.height = footerRef.current.offsetHeight;
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <footer
      ref={footerRef}
      style={styles.footer}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      id="contact"
    >
      {/* Spider web canvas overlay */}
      <canvas
        ref={webRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />
      
      <Container style={{ position: 'relative', zIndex: 2 }}>
        <Row className="gy-4">
          {/* Company Info */}
          <Col md={3} lg={4} className="text-start">
            <h5 style={styles.heading}>Keerthi Builders</h5>
            <p style={styles.paragraph}>
              At Keerthi Builders, we're passionate about crafting exceptional living spaces that connect you with your
              dreams. Our team of experts is dedicated to curating unique homes that cater to your
              interests and preferences.
            </p>
          </Col>
          
          {/* Useful Links */}
          <Col md={3} lg={2} className="text-start">
            <h5 style={styles.heading}>Useful Links</h5>
            <ul style={styles.linksList}>
              <li style={styles.listItem}>
                <a
                  href="#hero-section"
                  style={styles.link}
                  onClick={(e) => handleNavigation('hero-section', e)}
                >
                  Home
                </a>
              </li>
              <li style={styles.listItem}>
                <a
                  href="#project-section"
                  style={styles.link}
                  onClick={(e) => handleNavigation('project-section', e)}
                >
                  Projects
                </a>
              </li>
              <li style={styles.listItem}>
                <a
                  href="#about"
                  style={styles.link}
                  onClick={(e) => handleNavigation('about', e)}
                >
                  About Us
                </a>
              </li>
              <li style={styles.listItem}>
                <a
                  href="#contact"
                  style={styles.link}
                  onClick={(e) => handleNavigation('contact', e)}
                >
                  Contact us
                </a>
              </li>
            </ul>
          </Col>
          
          {/* Contact Info */}
          <Col md={3} lg={4} className="text-start">
            <h5 style={styles.heading}>Contact</h5>
            <ul style={styles.contactList}>
              <li style={styles.contactItem}>
                <IoMailOutline style={styles.icon} />
                <a
                  href="mailto:keerthibuildersales@gmail.com"
                  style={styles.link}
                >
                  keerthibuildersales@gmail.com
                </a>
              </li>
              <li style={styles.contactItem}>
                <MdOutlinePhone style={styles.icon} />
                <a href="tel:+91990287666" style={styles.link}>+91 990 287 6666</a>
              </li>
              <li style={styles.contactItem}>
                <LuMapPin style={{...styles.icon, width:'20px' }} />
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.link}
                >
                  #938, 1st Main Rd, Stage II, Kengeri Satellite Town, Bengaluru, Karnataka 560060.
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        
        <hr style={styles.divider} />
        
        {/* Copyright & Social Media */}
        <Row className="align-items-center">
          <Col md={7} className="text-center text-md-start">
            <p style={styles.copyright}>
              <small>Copyright © {new Date().getFullYear()} Keerthi Builders. All Rights Reserved.</small>
            </p>
          </Col>
                    <Col md={5} className="d-flex justify-content-center justify-content-md-end">
            <ul style={styles.socialList}>
              <li style={styles.socialItem}>
                <a
                  href="https://wa.me/919742063580"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  style={styles.socialLink}
                >
                  <FaWhatsapp />
                </a>
              </li>
              <li style={styles.socialItem}>
                <a
                  href="https://www.instagram.com/keerthibuildersblr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  style={styles.socialLink}
                >
                  <FaInstagram />
                </a>
              </li>
              <li style={styles.socialItem}>
                <a
                  href="https://www.facebook.com/keerthibuildersbangalore/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  style={styles.socialLink}
                >
                  <CiFacebook />
                </a>
              </li>
              <li style={styles.socialItem}>
                <a
                  href="https://www.youtube.com/channel/UCgrjUXJh7DfBnhQt3NxPLeA"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  style={styles.socialLink}
                >
                  <CiYoutube />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      {/* Add CSS for hover effects */}
      <style>
        {`
          .footer-link:hover {
            color: #ffc107 !important;
            transition: color 0.3s ease;
          }
          
          .social-link:hover {
            background-color: rgba(255, 255, 255, 0.2) !important;
            transform: translateY(-3px) !important;
            transition: all 0.3s ease;
          }
          
          @media (max-width: 767.98px) {
            .social-list {
              justify-content: center !important;
              margin: 0 !important;
            }
            
            .social-item {
              margin: 0 0.5rem !important;
            }
          }
          
          @media (min-width: 768px) {
            .social-list {
              justify-content: flex-end !important;
              margin: 0 !important;
            }
          }
        `}
      </style>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#1A662F',
    color: '#fff',
    padding: '3rem 0 2rem',
    position: 'relative',
    overflow: 'hidden',
    fontFamily: fonts.Noto
  },
  heading: {
    color: '#fff',
    fontSize: '16px',
    fontWeight: '500',
    textTransform: 'uppercase',
    marginBottom: '1.5rem',
    position: 'relative',
    paddingBottom: '0.5rem',
    borderBottom: '2px solid #ffc107',
    display: 'inline-block',
    fontFamily: fonts.Noto
  },
  paragraph: {
    color: '#fff',
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '1.6',
    marginBottom: '1rem',
    fontFamily: fonts.Noto
  },
  linksList: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  listItem: {
    marginBottom: '0.75rem'
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
    fontSize: '14px',
    fontWeight: '400',
    fontFamily: fonts.Noto,
    cursor: 'pointer'
  },
  contactList: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  contactItem: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '0.75rem'
  },
  icon: {
    color: '#fff',
    fontSize: '1rem',
    marginRight: '0.75rem',
    width: '16px',
    marginTop: '0.25rem',
    flexShrink: 0
  },
  divider: {
    borderColor: 'rgba(255, 255, 255, 0.2)',
    margin: '2rem 0'
  },
  copyright: {
    color: '#fff',
    fontSize: '14px',
    fontWeight: '400',
    marginBottom: '0',
    fontFamily: fonts.Noto
  },
  socialList: {
    display: 'flex',
    listStyle: 'none',
    padding: 0,
    margin: 0,
    flexWrap: 'wrap'
  },
  socialItem: {
    display: 'inline-block',
    marginLeft: '1rem'
  },
  socialLink: {
    color: '#fff',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
    textDecoration: 'none'
  }
};

export default Footer;

