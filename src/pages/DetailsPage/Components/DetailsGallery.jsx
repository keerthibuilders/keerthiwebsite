import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const DetailsGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    {
      id: 1,
      title: 'Luxury Suite',
      image: 'https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 2,
      title: 'Ocean View',
      image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 3,
      title: 'Modern Interior',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
      id: 4,
      title: 'Elegant Dining',
      image: 'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
      id: 5,
      title: 'Rooftop Terrace',
      image: 'https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
      id: 6,
      title: 'Spa Wellness',
      image: 'https://images.pexels.com/photos/210464/pexels-photo-210464.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 7,
      title: 'Fitness Center',
      image: 'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 8,
      title: 'Swimming Pool',
      image: 'https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg?auto=compress&cs=tinysrgb&w=1200'
    }
  ];

  const getPrevIndex = () => {
    return currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
  };

  const getNextIndex = () => {
    return currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1;
  };

  const nextSlide = () => {
    setCurrentIndex(getNextIndex());
  };

  const prevSlide = () => {
    setCurrentIndex(getPrevIndex());
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-rotation
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section
      id="gallery"
      className="py-3 py-md-4 py-lg-0"
      style={styles.detailsGallery}
    >
      <Container fluid className="px-3 px-md-4">
        <Row>
          <Col xs={12}>
            <h2 className="text-start mb-3 mb-md-4 mb-lg-5" style={styles.sectionTitle}>
              Gallery
            </h2>
          </Col>
        </Row>
        
        <Row>
          <Col xs={12}>
            <div className="position-relative overflow-hidden" style={styles.carouselWrapper}>
              {/* Left Arrow */}
              <button
                className="btn position-absolute d-flex align-items-center justify-content-center"
                style={{...styles.arrowButton, ...styles.leftArrow}}
                onClick={prevSlide}
                aria-label="Previous image"
              >
                &#8249;
              </button>
              
              {/* Gallery Container */}
              <div className="d-flex align-items-center justify-content-center w-100 h-100 position-relative">
                {/* Left Image (Half Hidden) */}
                <div
                  className="position-absolute d-none d-md-block"
                  style={styles.leftImage}
                  onClick={prevSlide}
                >
                  <img
                    src={galleryImages[getPrevIndex()].image}
                    alt={galleryImages[getPrevIndex()].title}
                    className="w-100 h-100"
                    style={styles.cardImage}
                  />
                </div>

                {/* Center Image (Full Visible) */}
                <div className="position-relative" style={styles.centerImage}>
                  <img
                    src={galleryImages[currentIndex].image}
                    alt={galleryImages[currentIndex].title}
                    className="w-100 h-100"
                    style={styles.cardImage}
                  />
                </div>

                {/* Right Image (Half Hidden) */}
                <div
                  className="position-absolute d-none d-md-block"
                  style={styles.rightImage}
                  onClick={nextSlide}
                >
                  <img
                    src={galleryImages[getNextIndex()].image}
                    alt={galleryImages[getNextIndex()].title}
                    className="w-100 h-100"
                    style={styles.cardImage}
                  />
                </div>
              </div>
              
              {/* Right Arrow */}
              <button
                className="btn position-absolute d-flex align-items-center justify-content-center"
                style={{...styles.arrowButton, ...styles.rightArrow}}
                onClick={nextSlide}
                aria-label="Next image"
              >
                &#8250;
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const styles = {
  detailsGallery: {
    backgroundColor: '#fff',
    overflow: 'hidden'
  },
  sectionTitle: {
    fontSize: '32px',
    fontWeight: '500',
    color: '#333'
  },
  carouselWrapper: {
    height: '300px'
  },
  // Left image (half hidden outside screen)
  leftImage: {
    left: '-50px',
    width: '250px',
    height: '300px',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
    transform: 'scale(0.8)',
    opacity: 0.6,
    zIndex: 1
  },
  // Center image (full visible)
  centerImage: {
    width: '400px',
    height: '350px',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
    transform: 'scale(1)',
    opacity: 1,
    zIndex: 3
  },
  // Right image (half hidden outside screen)
  rightImage: {
    right: '-50px',
    width: '250px',
    height: '300px',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
    transform: 'scale(0.8)',
    opacity: 0.6,
    zIndex: 1
  },
  cardImage: {
    objectFit: 'cover',
    transition: 'transform 0.3s ease'
  },
  arrowButton: {
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    border: 'none',
    borderRadius: '50px',
    width: '50px',
    height: '50px',
    cursor: 'pointer',
    fontSize: '24px',
    color: '#333',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
    zIndex: 10,
    transition: 'all 0.3s ease'
  },
  leftArrow: {
    left: '15px'
  },
  rightArrow: {
    right: '15px'
  }
};

export default DetailsGallery;
