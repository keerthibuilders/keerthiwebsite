import React, { useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const DetailsAmenities = () => {
  const scrollContainerRef = useRef(null);

  const amenities = [
    {
      id: 1,
      title: 'Swimming Pool',
      image: 'https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 2,
      title: 'Fitness Center',
      image: 'https://images.pexels.com/photos/260352/pexels-photo-260352.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 3,
      title: 'Park',
      image: 'https://images.pexels.com/photos/635405/pexels-photo-635405.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 4,
      title: 'Restaurant',
      image: 'https://images.pexels.com/photos/776538/pexels-photo-776538.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 5,
      title: 'Spa & Wellness',
      image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 6,
      title: 'Conference Room',
      image: 'https://images.pexels.com/photos/416320/pexels-photo-416320.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 7,
      title: 'Rooftop Terrace',
      image: 'https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 8,
      title: 'Library',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -270,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 270,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <style>{styles.hideScrollbarStyles}</style>
      <section id="amenities" className="py-3 py-md-4 py-lg-5" style={styles.detailsAmenities}>
        <Container fluid className="px-3 px-md-4">
          <Row>
            <Col xs={12}>
              <h2 className="text-start mb-3 mb-md-4 mb-lg-5" style={styles.sectionTitle}>
                Amenities
              </h2>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <div className="position-relative overflow-hidden" style={styles.carouselWrapper}>
                <button
                  className="btn position-absolute d-flex align-items-center justify-content-center"
                  style={{...styles.arrowButton, ...styles.leftArrow}}
                  onClick={scrollLeft}
                  aria-label="Scroll left"
                >
                  &#8249;
                </button>
                
                <div
                  ref={scrollContainerRef}
                  style={styles.scrollContainer}
                  className="amenities-scroll overflow-auto"
                >
                  <div className="d-flex gap-3 gap-md-4" style={styles.amenitiesGrid}>
                    {amenities.map((amenity) => (
                      <div
                        key={amenity.id}
                        className="flex-shrink-0"
                        style={styles.amenityCard}
                      >
                        <div
                          className="position-relative d-flex align-items-end"
                          style={{
                            ...styles.cardImage,
                            backgroundImage: `url(${amenity.image})`
                          }}
                        >
                          <div className="position-absolute bottom-0 start-0 w-100" style={styles.cardOverlay}>
                            <h3 className="text-white m-0" style={styles.cardTitle}>
                              {amenity.title}
                            </h3>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <button
                  className="btn position-absolute d-flex align-items-center justify-content-center"
                  style={{...styles.arrowButton, ...styles.rightArrow}}
                  onClick={scrollRight}
                  aria-label="Scroll right"
                >
                  &#8250;
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

const styles = {
  hideScrollbarStyles: `
    .amenities-scroll::-webkit-scrollbar {
      display: none;
      width: 0;
      height: 0;
    }
    .amenities-scroll::-webkit-scrollbar-track {
      display: none;
    }
    .amenities-scroll::-webkit-scrollbar-thumb {
      display: none;
    }
    .amenities-scroll {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  `,
  detailsAmenities: {
    backgroundColor: '#fff',
    overflow: 'hidden'
  },
  sectionTitle: {
    fontSize: 'clamp(24px, 4vw, 32px)', // Responsive font size
    fontWeight: '500',
    color: '#333'
  },
  carouselWrapper: {
    // No additional styles needed - using Bootstrap classes
  },
  scrollContainer: {
    overflowX: 'scroll',
    overflowY: 'hidden',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none'
  },
  amenitiesGrid: {
    minWidth: 'fit-content',
    paddingRight: '20px'
  },
  amenityCard: {
    overflow: 'hidden',
    cursor: 'pointer',
    minWidth: 'clamp(220px, 25vw, 255px)', // Responsive width
    height: 'fit-content'
  },
  cardImage: {
    height: 'clamp(200px, 30vw, 330px)', // Responsive height
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  },
  cardOverlay: {
    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 50%, transparent 100%)',
    padding: 'clamp(15px, 3vw, 30px) clamp(15px, 2vw, 20px) clamp(15px, 2vw, 20px)'
  },
  cardTitle: {
    fontSize: 'clamp(16px, 2vw, 18px)', // Responsive font size
    fontWeight: '500',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
  },
  arrowButton: {
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(31, 30, 30, 0.9)',
    border: 'none',
    borderRadius: '50%',
    width: 'clamp(40px, 5vw, 50px)', // Responsive size
    height: 'clamp(40px, 5vw, 50px)', // Responsive size
    cursor: 'pointer',
    fontSize: 'clamp(16px, 2vw, 20px)', // Responsive font size
    color: '#fff',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    zIndex: 10
  },
  leftArrow: {
    left: 'clamp(10px, 2vw, 15px)' // Responsive positioning
  },
  rightArrow: {
    right: 'clamp(10px, 2vw, 15px)' // Responsive positioning
  }
};

export default DetailsAmenities;
