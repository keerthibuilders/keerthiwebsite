import React, { useRef, useState, useEffect } from "react";
import { Container, Card, Image } from "react-bootstrap";
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
      name: "Kaushik RK",
      role: "Motorcycle Enthusiast",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "At RealRoadies, we redefine corporate events by merging adventure, teamwork, and brand visibility—all powered by motorcycles. Whether it's about brand activation, employee engagement, leadership development, CSR initiatives, diversity & inclusion, or wellness programs, we craft unforgettable experiences that go beyond the ordinary and create a lasting impact."
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Motorcycle Enthusiast",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "As an HR professional, I was looking for something different for our annual team event. RealRoadies delivered beyond expectations! The customized motorcycle journey through scenic routes created lasting memories and strengthened team bonds. Our employees are still talking about it months later."
    },
    {
      id: 3,
      name: "Rajiv Mehta",
      role: "Motorcycle Enthusiast",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      text: "We partnered with RealRoadies for our brand activation campaign, and the results were phenomenal. Their motorcycle-themed events created the perfect buzz around our product launch. The professional approach combined with their passion for riding made the collaboration seamless."
    },
    {
      id: 4,
      name: "Ananya Patel",
      role: "Motorcycle Enthusiast",
      image: "https://randomuser.me/api/portraits/women/29.jpg",
      text: "The leadership development program by RealRoadies was unlike any corporate training I've experienced. Using motorcycle journeys as a metaphor for business challenges was brilliant. My team returned more confident, resilient, and united. Highly recommend for any organization looking to invest in their leaders."
    }
  ];

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
        height: 320px !important; /* Reduced from 400px to 320px */
        position: relative;
        padding-bottom: 80px !important; /* Space for author area */
        font-family: ${fonts.Noto};
      }
      
      .testimonial-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 15px 30px rgba(0,0,0,0.1) !important;
      }
      
      .testimonial-text {
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 7; /* Reduced from 10 to 7 lines */
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
                    <Image
                      src={testimonial.image}
                      roundedCircle
                      width={50}
                      height={50}
                      alt={testimonial.name}
                      style={styles.testimonialImage}
                    />
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
    position: "absolute", // Position at bottom
    bottom: "20px",
    left: "20px",
    right: "20px",
    borderTop: "1px solid #eee",
    paddingTop: "15px",
    fontFamily: fonts.Noto,
  },
  testimonialImage: {
    border: "3px solid white",
    boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
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
