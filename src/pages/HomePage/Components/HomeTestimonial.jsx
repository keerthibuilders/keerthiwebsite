import React, { useRef, useState, useEffect } from "react";
import { Container, Card } from "react-bootstrap";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import fonts from "../../../components/Common/Font";

const HomeTestimonial = () => {
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonialData = [
    {
      id: 1,
      name: "Vedavyas Rao",
      role: " IT Engineer ",
      text: "Santhosh took me through three plots in and around Kengeri. Each one was better than the other. The layouts and planning are very good and Santhosh explained me on many things which I wasn't aware of and he answered all my naive questions. These layouts seems good for investments."
    },
    {
      id: 2,
      name: "Guru Saitej",
      role: "Happy Customer",
      text: "Very neat and clean business anyone can trust. Human being thinking of level very helping nature hood MD Mr Manjunath . Thanking you for understanding problems and situations. So kind of supporting business. Anyone can trust."
    },
    {
      id: 3,
      name: "Prathik Jain",
      role: "Plot Owner",
      text: "Very genuine people & well planned plots. I just bought one about 3 months ago. Very happy with the prices & entire process so far. Would definitely recommend to my near & dear ones."
    },
    {
      id: 4,
      name: "Prasad S",
      role: "Professional",
      text: "'Keerthi iinfinity' is one of the leading and fast growing Developers in Bangalore,&Ruppees Enclave is to Good, The Site Price is for Money.👍"
    }
  ];

  // Function to generate profile picture from initials
  const generateProfilePic = (name) => {
    const initials = name.split(' ').map(word => word.charAt(0)).join('').toUpperCase();
    const colors = ['#1C542C', '#1C542C', '#1C542C', '#1C542C', '#1C542C'];
    const colorIndex = name.length % colors.length;
    const backgroundColor = colors[colorIndex];
    
    return (
      <div style={{
        ...styles.profilePicture,
        backgroundColor: backgroundColor
      }}>
        {initials}
      </div>
    );
  };

  // Check scroll position to show/hide navigation arrows
  const checkScrollPosition = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setShowLeftArrow(container.scrollLeft > 20);
      setShowRightArrow(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 20
      );
      
      // Calculate active index for indicators
      const scrollPercentage = container.scrollLeft / (container.scrollWidth - container.clientWidth);
      const newIndex = Math.round(scrollPercentage * (testimonialData.length - 1));
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollPosition);
      // Initial check
      checkScrollPosition();
    }
    
    return () => {
      if (container) {
        container.removeEventListener('scroll', checkScrollPosition);
      }
    };
  }, []);

  // Scroll functions
  const scrollLeft = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const cardWidth = container.querySelector('.testimonial-card').offsetWidth + 24; // card + gap
      container.scrollBy({
        left: -cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const cardWidth = container.querySelector('.testimonial-card').offsetWidth + 24; // card + gap
      container.scrollBy({
        left: cardWidth,
        behavior: 'smooth'
      });
    }
  };

  // Scroll to specific index
  const scrollToIndex = (index) => {
    const container = scrollContainerRef.current;
    if (container) {
      const totalScrollWidth = container.scrollWidth - container.clientWidth;
      const scrollPercentage = index / (testimonialData.length - 1);
      
      container.scrollTo({
        left: totalScrollWidth * scrollPercentage,
        behavior: 'smooth'
      });
    }
  };

  // Add CSS for animations
  useEffect(() => {
    const cssToAdd = `
      .testimonial-container::-webkit-scrollbar {
        display: none;
      }
      
      .testimonial-container {
        -ms-overflow-style: none;
        scrollbar-width: none;
        font-family: ${fonts.Noto};
      }
      
      .testimonial-card {
        transition: all 0.3s ease;
        height: 320px !important;
        position: relative;
        padding-bottom: 80px !important;
        font-family: ${fonts.Noto};
      }
      
      .testimonial-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 15px 30px rgba(0,0,0,0.1) !important;
      }
      
      .testimonial-text {
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 7;
        -webkit-box-orient: vertical;
        font-family: ${fonts.Noto};
      }
      
      .testimonial-footer {
        position: absolute;
        bottom: 20px;
        left: 20px;
        right: 20px;
        border-top: 1px solid #eee;
        padding-top: 15px;
        font-family: ${fonts.Noto};
      }
      
      .testimonial-indicator {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #ddd;
        margin: 0 5px;
        cursor: pointer;
        transition: all 0.3s ease;
      }
      
      .testimonial-indicator.active {
        background-color: #25723B;
        width: 24px;
        border-radius: 4px;
      }
      
      .nav-arrow {
        transition: all 0.3s ease;
        opacity: 0.7;
      }
      
      .nav-arrow:hover {
        opacity: 1;
        background-color: #25723B !important;
        color: white !important;
      }
      
      @media (max-width: 768px) {
        .testimonial-card {
          min-width: 85vw;
        }
      }
      
      @media (min-width: 769px) and (max-width: 1199px) {
        .testimonial-card {
          min-width: 45vw;
        }
      }
      
      @media (min-width: 1200px) {
        .testimonial-card {
          min-width: 30vw;
        }
      }
    `;
    
    const style = document.createElement('style');
    style.textContent = cssToAdd;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section className="py-5" style={{...styles.testimonialSection, fontFamily: fonts.Noto}}>
      <Container>
        <div className="text-Start mb-2">
          <h3 className="mb-3" style={{...styles.sectionTitle, fontFamily: fonts.Noto}}>Hear It from Our Happy Plot Owners</h3>
          <p style={{...styles.sectionDescription, fontFamily: fonts.Noto}}>
           Real stories from real people who chose Keerthi Builders. Discover why families and investors across Bangalore trust us with their future.</p>
        </div>
        
        <div style={styles.scrollWrapper}>
          {/* Left Navigation Arrow */}
          {showLeftArrow && (
            <button
              className="nav-arrow"
              style={styles.navArrowLeft}
              onClick={scrollLeft}
              aria-label="Previous testimonial"
            >
              <FaChevronLeft />
            </button>
          )}
          
          {/* Right Navigation Arrow */}
          {showRightArrow && (
            <button
              className="nav-arrow"
              style={styles.navArrowRight}
              onClick={scrollRight}
              aria-label="Next testimonial"
            >
              <FaChevronRight />
            </button>
          )}
          
          {/* Testimonial Cards */}
          <div
            className="testimonial-container d-flex"
            style={styles.scrollContainer}
            ref={scrollContainerRef}
          >
            {testimonialData.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="testimonial-card text-left"
                style={{...styles.testimonialCard}}
              >
                <Card.Body className="p-4">
                  <FaQuoteLeft style={styles.quoteIcon} />
                  
                  <p className="testimonial-text" style={{...styles.testimonialText, fontFamily: fonts.Noto}}>
                    {testimonial.text}
                  </p>
                  
                  {/* Author area - positioned absolutely at bottom */}
                  <div className="testimonial-footer" style={styles.testimonialFooter}>
                    {generateProfilePic(testimonial.name)}
                    <div style={styles.testimonialAuthor}>
                      <h6 style={{...styles.testimonialName, fontFamily: fonts.Noto}}>{testimonial.name}</h6>
                      <small style={{...styles.testimonialRole, fontFamily: fonts.Noto}}>{testimonial.role}</small>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
          
          {/* Indicators */}
          <div style={styles.indicatorsContainer}>
            {testimonialData.map((_, index) => (
              <div
                key={index}
                className={`testimonial-indicator ${index === activeIndex ? 'active' : ''}`}
                onClick={() => scrollToIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

const styles = {
  testimonialSection: {
    backgroundColor: "#fff",
    padding: "20px 0",
    fontFamily: fonts.Noto,
  },
  sectionTitle: {
    fontSize: "30px",
    fontWeight: "500",
    color: "#212529",
    fontFamily: fonts.Noto,
  },
  sectionDescription: {
    color: "#6c757d",
    fontSize: "16px",
    margin: "0 auto",
    fontFamily: fonts.Noto,
  },
  scrollWrapper: {
    position: "relative",
    padding: "20px 0 0px",
  },
  scrollContainer: {
    overflowX: "auto",
    overflowY: "hidden",
    padding: "20px 10px",
    gap: "24px",
    scrollBehavior: "smooth",
    fontFamily: fonts.Noto,
  },
  testimonialCard: {
    borderRadius: "0px",
    backgroundColor: "#f9f9f9",
    flex: "0 0 auto",
    minWidth: "350px",
    maxWidth: "400px",
    height: "200px",
    margin: "0 0px",
    position: "relative",
    fontFamily: fonts.Noto,
  },
  quoteIcon: {
    fontSize: "2rem",
    color: "#25723B",
    opacity: "0.3",
    marginBottom: "1rem",
  },
  testimonialText: {
    fontSize: "12px",
    color: "#495057",
    lineHeight: "1.6",
    overflow: "hidden",
    display: "-webkit-box",
    WebkitLineClamp: 7,
    WebkitBoxOrient: "vertical",
    fontFamily: fonts.Noto,
  },
  testimonialFooter: {
    display: "flex",
    alignItems: "center",
    position: "absolute",
    bottom: "20px",
    left: "20px",
    right: "20px",
    borderTop: "1px solid #eee",
    paddingTop: "15px",
    fontFamily: fonts.Noto,
  },
  profilePicture: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: "18px",
    fontWeight: "600",
    fontFamily: fonts.Noto,
    border: "3px solid white",
    boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
    flexShrink: 0,
  },
  testimonialAuthor: {
    marginLeft: "15px",
    textAlign: "left",
    fontFamily: fonts.Noto,
  },
  testimonialName: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#212529",
    margin: "0",
    fontFamily: fonts.Noto,
  },
  testimonialRole: {
    fontSize: "12px",
    color: "#25723B",
    fontWeight: "500",
    fontFamily: fonts.Noto,
  },
  navArrowLeft: {
    position: "absolute",
    left: "0",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: "10",
    backgroundColor: "white",
    border: "none",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
    cursor: "pointer",
  },
  navArrowRight: {
    position: "absolute",
    right: "0",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: "10",
    backgroundColor: "white",
    border: "none",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
    cursor: "pointer",
  },
  indicatorsContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
  }
};


export default HomeTestimonial;
