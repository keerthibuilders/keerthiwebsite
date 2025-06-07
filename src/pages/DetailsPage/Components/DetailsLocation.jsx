import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaAngleRight, FaMapMarkerAlt, FaRoute, FaClock, FaPhone, FaChevronDown, FaChevronUp, FaGraduationCap, FaHospital, FaBuilding, FaBed, FaGamepad } from 'react-icons/fa';

const DetailsLocation = () => {
  const [openAccordion, setOpenAccordion] = useState('Schools');
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const placesData = {
    Schools: [
      { name: 'Delhi Public School', distance: '0.8 km', time: '3 min drive' },
      { name: 'Kendriya Vidyalaya', distance: '1.2 km', time: '5 min drive' },
      { name: 'Ryan International School', distance: '2.1 km', time: '8 min drive' },
      { name: 'Presidency School', distance: '1.5 km', time: '6 min drive' }
    ],
    Hospitals: [
      { name: 'Apollo Hospital', distance: '2.3 km', time: '10 min drive' },
      { name: 'Fortis Healthcare', distance: '3.1 km', time: '12 min drive' },
      { name: 'Manipal Hospital', distance: '1.8 km', time: '7 min drive' },
      { name: 'Columbia Asia', distance: '2.7 km', time: '11 min drive' }
    ],
    'Tech Parks': [
      { name: 'Electronic City', distance: '5.2 km', time: '18 min drive' },
      { name: 'Whitefield Tech Park', distance: '12.3 km', time: '35 min drive' },
      { name: 'Bagmane Tech Park', distance: '8.7 km', time: '25 min drive' },
      { name: 'Embassy Tech Village', distance: '15.1 km', time: '42 min drive' }
    ],
    Hotels: [
      { name: 'The Leela Palace', distance: '4.2 km', time: '15 min drive' },
      { name: 'ITC Gardenia', distance: '6.8 km', time: '22 min drive' },
      { name: 'Taj West End', distance: '7.3 km', time: '24 min drive' },
      { name: 'Sheraton Grand', distance: '5.9 km', time: '19 min drive' }
    ],
    Entertainment: [
      { name: 'Forum Mall', distance: '3.4 km', time: '12 min drive' },
      { name: 'Phoenix MarketCity', distance: '8.1 km', time: '26 min drive' },
      { name: 'UB City Mall', distance: '6.7 km', time: '21 min drive' },
      { name: 'Orion Mall', distance: '4.8 km', time: '16 min drive' }
    ]
  };

  const categoryIcons = {
    Schools: FaGraduationCap,
    Hospitals: FaHospital,
    'Tech Parks': FaBuilding,
    Hotels: FaBed,
    Entertainment: FaGamepad
  };

  const categories = Object.keys(placesData);

  const handleAccordionToggle = (category) => {
    setOpenAccordion(openAccordion === category ? null : category);
  };

  const handleMapLoad = () => {
    setIsMapLoaded(true);
  };

  const styles = {
    container: {
      padding: '20px 20px',
      backgroundColor: '#fff',
      minHeight: '100vh'
    },
    sectionTitle: {
      fontSize: '32px',
      fontWeight: '500',
      color: '#2c3e50',
      marginBottom: '20px',
      textAlign: 'left',
      position: 'relative'
    },
   
    mapContainer: {
      position: 'relative',
      borderRadius: '0px',
      overflow: 'hidden',
      boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
      background: '#fff'
    },
    mapLoader: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 2,
      display: isMapLoaded ? 'none' : 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      color: '#6c757d'
    },
    spinner: {
      width: '40px',
      height: '40px',
      border: '4px solid #f3f3f3',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
      marginBottom: '10px'
    },
    iframe: {
      border: 0,
      filter: isMapLoaded ? 'none' : 'blur(2px)',
      transition: 'filter 0.3s ease'
    },
    infoPanel: {
      background: 'linear-gradient(135deg, #fff 0%, #f8f9fa 100%)',
      borderRadius: '0px',
      padding: '2rem',
      boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
      height: 'fit-content',
      border: '1px solid #e9ecef'
    },
    panelHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '1.5rem',
      paddingBottom: '1rem',
      borderBottom: '2px solid #e9ecef'
    },
    panelTitle: {
      fontSize: '16px',
      fontWeight: '500',
      color: '#2c3e50',
      margin: 0,
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    },
    viewButton: {
      background: '#1C542C',
      border: 'none',
      color: 'white',
      padding: '10px 20px',
      borderRadius: '0px',
      fontWeight: '400',
      fontSize: '12px',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },
    accordionContainer: {
      maxHeight: '400px',
      overflowY: 'auto',
      paddingRight: '5px'
    },
    accordionItem: {
      borderBottom: '1px solid #e9ecef'
    },
    accordionHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15px 0',
      background: 'transparent',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    accordionHeaderContent: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontSize: '1rem',
      fontWeight: '600',
      color: '#2c3e50'
    },
    activeAccordionHeaderContent: {
      color: '#1C542C'
    },
    accordionIcon: {
      fontSize: '1.1rem'
    },
    chevronIcon: {
      fontSize: '0.9rem',
      transition: 'transform 0.3s ease',
      color: '#6c757d'
    },
    activeChevronIcon: {
      color: '#1C542C'
    },
    accordionContent: {
      overflow: 'hidden',
      transition: 'all 0.4s ease',
      maxHeight: '0',
      opacity: 0
    },
    openAccordionContent: {
      maxHeight: '1000px',
      opacity: 1,
      paddingBottom: '10px'
    },
    placeItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '12px 0',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      borderRadius: '5px'
    },
    placeInfo: {
      flex: 1
    },
    placeName: {
      fontSize: '0.95rem',
      fontWeight: '500',
      color: '#2c3e50',
      marginBottom: '4px'
    },
    placeDetails: {
      display: 'flex',
      gap: '15px',
      fontSize: '0.8rem',
      color: '#6c757d'
    },
    placeDetail: {
      display: 'flex',
      alignItems: 'center',
      gap: '4px'
    },
    arrowIcon: {
      color: '#fcbf12',
      fontSize: '1rem',
      transition: 'transform 0.3s ease'
    },
   
  };

  const keyframes = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    
    .place-item:hover {
      background-color: #f8f9fa;
      padding-left: 10px;
      margin-left: 5px;
    }
    
    .place-item:hover .arrow-icon {
      transform: translateX(5px);
    }
    
    .view-button:hover {
      transform: translateY(-2px);
    }
    
    .accordion-header:hover .accordion-header-content {
      color: #1C542C !important;
    }
    
    .accordion-header:hover .chevron-icon {
      color: #1C542C !important;
    }
    
    .accordion-container::-webkit-scrollbar {
      width: 6px;
    }
    
    .accordion-container::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 3px;
    }
    
    .accordion-container::-webkit-scrollbar-thumb {
      background: #1C542C;
      border-radius: 3px;
    }
    
    .accordion-container::-webkit-scrollbar-thumb:hover {
      background: #1C542C;
    }
  `;

  return (
    <>
      <style>{keyframes}</style>
      <div className="container-fluid" style={styles.container}>
        <h2 style={styles.sectionTitle}>
          Location
        </h2>
        
        <div className="row g-4">
          {/* Left: Google Map */}
          <div className="col-lg-7">
            <div style={styles.mapContainer}>
              <div style={styles.mapLoader}>
                <div style={styles.spinner}></div>
                <span>Loading Map...</span>
              </div>
              <div className="ratio ratio-4x3">
                <iframe
                  title="Brigade Insignia Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.3002523437813!2d77.58064247502787!3d13.092771287236373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae197b121c69c5%3A0xf231b11a366b230b!2sBrigade%20Insignia!5e0!3m2!1sen!2sin!4v1717137469146!5m2!1sen!2sin"
                  allowFullScreen
                  loading="lazy"
                  style={styles.iframe}
                  onLoad={handleMapLoad}
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right: Info Panel */}
          <div className="col-lg-5">
            <div style={styles.infoPanel}>
              <div style={styles.panelHeader}>
                <h5 style={styles.panelTitle}>
                  <FaMapMarkerAlt />
                  Know Your Neighbourhood
                </h5>
                <button 
                  style={styles.viewButton}
                  className="view-button"
                  onClick={() => window.open('https://maps.google.com', '_blank')}
                >
                  View on Map
                </button>
              </div>

              <div style={styles.accordionContainer} className="accordion-container">
                {categories.map((category) => {
                  const IconComponent = categoryIcons[category];
                  const isOpen = openAccordion === category;
                  
                  return (
                    <div
                      key={category}
                      style={styles.accordionItem}
                    >
                      <div
                        style={styles.accordionHeader}
                        className="accordion-header"
                        onClick={() => handleAccordionToggle(category)}
                      >
                        <div 
                          style={{
                            ...styles.accordionHeaderContent,
                            ...(isOpen ? styles.activeAccordionHeaderContent : {})
                          }}
                          className="accordion-header-content"
                        >
                          <IconComponent style={styles.accordionIcon} />
                          {category}
                        </div>
                        {isOpen ? (
                          <FaChevronUp 
                            style={{
                              ...styles.chevronIcon,
                              ...styles.activeChevronIcon
                            }}
                            className="chevron-icon"
                          />
                        ) : (
                          <FaChevronDown                             style={styles.chevronIcon}
                            className="chevron-icon"
                          />
                        )}
                      </div>
                      
                      <div
                        style={{
                          ...styles.accordionContent,
                          ...(isOpen ? styles.openAccordionContent : {})
                        }}
                      >
                        {placesData[category].map((place, idx) => (
                          <div
                            key={idx}
                            style={styles.placeItem}
                            className="place-item"
                          >
                            <div style={styles.placeInfo}>
                              <div style={styles.placeName}>{place.name}</div>
                              <div style={styles.placeDetails}>
                                <div style={styles.placeDetail}>
                                  <FaRoute />
                                  {place.distance}
                                </div>
                                <div style={styles.placeDetail}>
                                  <FaClock />
                                  {place.time}
                                </div>
                              </div>
                            </div>
                            
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

            
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsLocation;

