import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Phone, Mail, MapPin, Clock, HardHat, Paintbrush, Wrench } from 'lucide-react';
import fonts from '../../../components/Common/Font';

const HomeContactSection = () => {
  const sectionRef = useRef(null);
  
  // Define the video URL as a constant
  const animationVideoUrl = "https://res.cloudinary.com/dqmnu220b/video/upload/v1749364250/wniuljdtfg64uqrokofh.mp4";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.2 }
    );

    const infoItems = document.querySelectorAll('.info-item');
    infoItems.forEach(item => observer.observe(item));

    const qualityItems = document.querySelectorAll('.quality-item');
    qualityItems.forEach(item => observer.observe(item));

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} style={styles.section} className="contact-section">
      <div className="background-pattern"></div>

      {/* Background Video Watermark */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={styles.backgroundVideo}
      >
        <source src={animationVideoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Video Overlay */}
      <div id='contact'style={styles.videoOverlay}></div>

      <Container style={styles.containerWrapper}>
        <Row className="align-items-start">
          <Col lg={6} className="info-column">
            <div className="content-wrapper">
              <h2 style={styles.heading} className="heading-animated">Contact Us</h2>
              <div className="underline-animated"></div>
              <p style={styles.subtext}>
                If you have any questions or want to <strong>get a free estimate</strong> for your project,
                contact us via email or phone call. We will be very happy to help you!
              </p>

              <div className="info-items-container">
                <div style={styles.infoItem} className="info-item">
                  <div style={styles.iconWrapper}>
                    <Phone style={styles.icon} />
                  </div>
                  <div style={styles.infoContent}>
                    <span style={styles.infoLabel}>Phone</span>
                    <a href="tel:+14706011911" style={styles.infoText}>470-601-1911</a>
                  </div>
                </div>

                <div style={styles.infoItem} className="info-item">
                  <div style={styles.iconWrapper}>
                    <Mail style={styles.icon} />
                  </div>
                  <div style={styles.infoContent}>
                    <span style={styles.infoLabel}>Email</span>
                    <a href="mailto:contact@keerthibuilders.com" style={styles.infoText}>contact@keerthibuilders.com</a>
                  </div>
                </div>

                <div style={styles.infoItem} className="info-item">
                  <div style={styles.iconWrapper}>
                    <MapPin style={styles.icon} />
                  </div>
                  <div style={styles.infoContent}>
                    <span style={styles.infoLabel}>Address</span>
                    <span style={styles.infoText}>2271 Rodao Dr SW, Lilburn, GA 30047</span>
                  </div>
                </div>

                <div style={styles.infoItem} className="info-item">
                  <div style={styles.iconWrapper}>
                    <Clock style={styles.icon} />
                  </div>
                  <div style={styles.infoContent}>
                    <span style={styles.infoLabel}>Working Hours</span>
                    <span style={styles.infoText}>Monday – Friday: 8:00 am – 5:00 pm</span>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={6} className="quality-column">
            <div className="quality-wrapper">
              <div className="quality-items-container">
                <div style={styles.qualityItem} className="quality-item">
                  <div style={styles.qualityIconWrapper}>
                    <HardHat style={styles.qualityIcon} />
                  </div>
                  <div style={styles.qualityContent}>
                    <h3 style={styles.qualityTitle}>Superior Build-Ready Plots</h3>
                    <p style={styles.qualityText}>
                      Ready for your dream home or next project—our plots are developed with future-ready infrastructure, excellent soil condition, and easy access to essential amenities.
                    </p>
                  </div>
                </div>

                <div style={styles.qualityItem} className="quality-item">
                  <div style={styles.qualityIconWrapper}>
                    <Paintbrush style={styles.qualityIcon} />
                  </div>
                  <div style={styles.qualityContent}>
                    <h3 style={styles.qualityTitle}>Unmatched Quality</h3>
                    <p style={styles.qualityText}>
                      Every square foot reflects our 10+ years of experience. From layout planning to land grading, we follow industry-best practices to ensure value that lasts.
                    </p>
                  </div>
                </div>

                <div style={styles.qualityItem} className="quality-item">
                  <div style={styles.qualityIconWrapper}>
                    <Wrench style={styles.qualityIcon} />
                  </div>
                  <div style={styles.qualityContent}>
                    <h3 style={styles.qualityTitle}>Best Price in Town</h3>
                    <p style={styles.qualityText}>
                      We offer premium plots at prices that make sense. With Keerthi Builders, you get unmatched value—no inflated costs, just honest pricing and prime locations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <style>{`
        .contact-section {
          position: relative;
          overflow: hidden;
          font-family: ${fonts.Noto};
        }
        
        .background-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: radial-gradient(#21623C 1px, transparent 1px);
          background-size: 30px 30px;
          opacity: 0.05;
          z-index: 1;
        }
        
        .content-wrapper, .quality-wrapper {
          position: relative;
          z-index: 3;
        }
        
        .heading-animated {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.6s ease forwards;
          font-family: ${fonts.Noto};
        }
        
        .underline-animated {
          height: 3px;
          width: 0;
          background-color: #21623C;
          margin-bottom: 20px;
          animation: expandWidth 1s ease forwards 0.6s;
        }
        
        .info-item, .quality-item {
          opacity: 0;
          transform: translateX(-20px);
        }
        
        .info-item:nth-child(1).animate-in {
          animation: fadeInLeft 0.5s ease forwards 0.2s;
        }
        
        .info-item:nth-child(2).animate-in {
          animation: fadeInLeft 0.5s ease forwards 0.4s;
        }
        
        .info-item:nth-child(3).animate-in {
          animation: fadeInLeft 0.5s ease forwards 0.6s;
        }
        
        .info-item:nth-child(4).animate-in {
          animation: fadeInLeft 0.5s ease forwards 0.8s;
        }
        
        .quality-item:nth-child(1).animate-in {
          animation: fadeInRight 0.5s ease forwards 0.2s;
        }
        
        .quality-item:nth-child(2).animate-in {
          animation: fadeInRight 0.5s ease forwards 0.4s;
        }
        
        .quality-item:nth-child(3).animate-in {
          animation: fadeInRight 0.5s ease forwards 0.6s;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes expandWidth {
          from {
            width: 0;
          }
          to {
            width: 60px;
          }
        }
      `}</style>
    </section>
  );
};

const styles = {
  section: {
    padding: '20px 0',
    backgroundColor: '#fff',
    position: 'relative',
    fontFamily: fonts.Noto,
    overflow: 'hidden',
  },
  backgroundVideo: {
    position: 'absolute',
    bottom: -15,
    left: 0,
    width: '60%',
    height: '30%',
    objectFit: 'fill',
    zIndex: 0,
    opacity: 0.7,
  },
  videoOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '60%', 
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    zIndex: 1,
  },
  containerWrapper: {
    position: 'relative',
    zIndex: 3,
  },
  heading: {
    fontSize: '30px',
    fontWeight: '600',
    marginBottom: '10px',
    color: '#21623C',
    fontFamily: fonts.Noto,
  },
  subtext: {
    fontSize: '13px',
    color: '#555',
    marginBottom: '20px',
    lineHeight: '1.2',
    fontFamily: fonts.Noto,
  },
  infoItem: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '20px',
    position: 'relative',
    fontFamily: fonts.Noto,
  },
  iconWrapper: {
    borderRadius: '50%',
    width: '46px',
    height: '46px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '16px',
    flexShrink: 0,
  },
  icon: {
    color: '#21623C',
    size: 20,
  },
  infoContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  infoLabel: {
    fontSize: '14px',
    color: '#888',
    marginBottom: '4px',
    fontFamily: fonts.Noto,
  },
  infoText: {
    fontSize: '14px',
    color: '#333',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
    fontFamily: fonts.Noto,
    ':hover': {
      color: '#21623C',
    }
  },
  qualityItem: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '25px',
    position: 'relative',
    padding: '15px 15px 15px 20px',
    borderLeft: '3px solid #21623c',
    transition: 'all 0.3s ease',
    boxShadow: '0 3px 10px rgba(0,0,0,0.05)',
    borderRadius: '0 8px 8px 0',
    fontFamily: fonts.Noto,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    ':hover': {
      backgroundColor: 'rgba(33, 98, 60, 0.05)',
      transform: 'translateX(5px)',
    }
  },
  qualityIconWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '15px',
    flexShrink: 0,
    transition: 'all 0.3s ease',
  },
  qualityIcon: {
    color: '#21623C',
    size: 40,
    strokeWidth: 1.5,
  },
  qualityContent: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  qualityTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#21623C',
    marginBottom: '8px',
    fontFamily: fonts.Noto,
  },
  qualityText: {
    fontSize: '13px',
    color: '#555',
    lineHeight: '1.5',
    fontFamily: fonts.Noto,
  }
};

export default HomeContactSection;
