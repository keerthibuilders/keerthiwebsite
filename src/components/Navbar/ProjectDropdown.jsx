import { Dropdown, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import fonts from "../Common/Font";

const ProjectDropdown = ({ 
  showProjectDropdown, 
  setShowProjectDropdown, 
  handleNavigation, 
  location 
}) => {
  return (
    <div className="nav-dropdown-wrapper" style={{ position: 'relative' }}>
      <Dropdown 
        show={showProjectDropdown} 
        onToggle={setShowProjectDropdown}
        className="nav-dropdown"
        drop="down"
      >
        <Dropdown.Toggle
          as="a"
          className="d-flex align-items-center text-decoration-none"
          style={{
            ...styles.navLink,
            fontWeight: location.pathname === '/project' || 
                       location.pathname === '/residential' || 
                       location.pathname === '/commercial' ? '600' : '500',
            cursor: 'pointer',
            gap: '8px'
          }}
        >
          Projects 
          <span 
            className="dropdown-arrow"
            style={{
              ...styles.dropdownArrow,
              transform: showProjectDropdown ? 'rotate(180deg)' : 'rotate(0deg)'
            }}
          >
            ▼
          </span>
        </Dropdown.Toggle>

        <Dropdown.Menu 
          className="dropdown-menu-custom"
        >
          <div className="dropdown-content-wrapper">
            <Row className="g-0 h-100">
              {/* Left Side - Project Types */}

              <Col xs={12} lg={4} className="dropdown-left-section">
                <div className=" p-3 p-lg-0 border-bottom border-lg-end border-lg-bottom-0">
                  
                  <Dropdown.Item
                    className={`dropdown-item-custom mb-2 ${location.pathname === '/residential' || location.pathname === '/'  ? 'active' : ''}`}
                    onClick={(e) => handleNavigation('residential', e)}
                  >
                    <div className="d-flex align-items-center">
                      <i className="fas fa-home me-3 d-none d-lg-inline"></i>
                      <div>
                        <div className="dropdown-item-title">Residential</div>
                       
                      </div>
                    </div>
                  </Dropdown.Item>
                  
                  <Dropdown.Item
                    className={`dropdown-item-custom ${location.pathname === '/commercial' ? 'active' : ''}`}
                    onClick={(e) => handleNavigation('commercial', e)}
                  >
                    <div className="d-flex align-items-center">
                      <i className="fas fa-building me-3 d-none d-lg-inline"></i>
                      <div>
                        <div className="dropdown-item-title">Commercial</div>
                        
                      </div>
                    </div>
                  </Dropdown.Item>
                </div>
              </Col>

              {/* Right Side - Featured Projects */}
              <Col xs={12} lg={8} className="dropdown-right-section">
                <div className="p-3 p-lg-0">
                  
                  <Row className="g-2 g-lg-3">
                    {/* Project Card 1 */}
                    <Col xs={12} sm={6} lg={6}>
                      <Card 
                        className={`project-card-custom h-100 border-0 shadow-sm ${location.pathname === '/keerthi-paradise' ? 'active' : ''}`}
                        onClick={(e) => handleNavigation('keerthi-paradise', e)}
                        style={{ cursor: 'pointer' }}
                      >
                        <div className="d-flex d-lg-block">
                          <Card.Img 
                            src="./../assets/images/13.webp" 
                            alt="Keerthi Iinfinity Lavish"
                            className="project-card-image flex-shrink-0"
                            style={styles.projectCardImage}
                          />
                          <Card.Body className="p-2 p-lg-3 flex-grow-1">
                            <Card.Title className="project-card-title mb-1">
                              Keerthi Iinfinity Lavish
                            </Card.Title>
                            <Card.Text className="project-card-location mb-0">
                    
                            Kumbalagodu, Bangalore.
                            </Card.Text>
                          
                          </Card.Body>
                        </div>
                      </Card>
                    </Col>

                    {/* Project Card 2 */}
                    <Col xs={12} sm={6} lg={6}>
                      <Card 
                        className={`project-card-custom h-100 border-0 shadow-sm ${location.pathname === '/keerthi-elite' ? 'active' : ''}`}
                        onClick={(e) => handleNavigation('keerthi-elite', e)}
                        style={{ cursor: 'pointer' }}
                      >
                        <div className="d-flex d-lg-block">
                          <Card.Img 
                            src="./../assets/images/12.webp" 
                            alt="Keerthi Iinfinity Urvi Phase-2"
                            className="project-card-image flex-shrink-0"
                            style={styles.projectCardImage}
                          />
                          <Card.Body className="p-2 p-lg-3 flex-grow-1">
                            <Card.Title className="project-card-title mb-1">
                             Keerthi Iinfinity Urvi Phase-2
                            </Card.Title>
                            <Card.Text className="project-card-location mb-0">
                              
                              Shyanumangala,Bidadi.
                            </Card.Text>
                        
                          </Card.Body>
                        </div>
                      </Card>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
        </Dropdown.Menu>

        <style>
          {`
            /* Custom dropdown styles */
            .nav-dropdown-wrapper {
              position: relative !important;
            }
            
            .nav-dropdown {
              position: relative !important;
            }
            
            .nav-dropdown .dropdown-toggle::after {
              display: none !important;
            }
            
            .dropdown-arrow {
              font-size: 10px;
              color: #1C542C;
              transition: transform 0.3s ease;
              display: inline-block;
              line-height: 1;
            }
            
            .dropdown-menu-custom {
              position: absolute !important;
              top: calc(100% + 8px) !important;
              left: auto !important;
              right: 0 !important;
              z-index: 9999 !important;
              border: 1px solid rgba(0,0,0,0.1) !important;
              border-radius: 0px !important;
              overflow: hidden !important;
              transform: none !important;
              margin-top: 26px !important;
              background-color: #ffffff !important;
              min-width: 600px !important;
              max-width: calc(100vw - 40px) !important;
              padding: 25px !important;
            }
            
            .dropdown-content-wrapper {
              min-height: 200px;
            }
            
            .dropdown-section-title {
              color: #1A662F !important;
              font-weight: 600 !important;
              font-size: 14px !important;
              text-transform: uppercase !important;
              letter-spacing: 0.5px !important;
              font-family: ${fonts.Noto} !important;
            }
            
            .dropdown-item-custom {
              border: none !important;
              background: transparent !important;
              padding: 12px 0 !important;
              transition: all 0.2s ease !important;
              border-radius: 0px !important;
            }
            
            .dropdown-item-custom:hover {
              background-color: rgba(28, 84, 44, 0.05) !important;
              color: inherit !important;
            }
            
            .dropdown-item-custom.active {
              background: transparent !important;
            }
            
            .dropdown-item-custom.active .dropdown-item-title {
              color: #1C542C !important;
              font-weight: 700 !important;
            }
            
            .dropdown-item-title {
              font-weight: 600 !important;
              color: #888 !important;
              font-size: 15px !important;
              font-family: ${fonts.Noto} !important;
              line-height: 1.3 !important;
              transition: color 0.2s ease !important;
            }
            
            .dropdown-item-desc {
              color: #666 !important;
              font-size: 12px !important;
              font-family: ${fonts.Noto} !important;
              line-height: 1.3 !important;
            }
            
            .project-card-custom {
              transition: all 0.3s ease !important;
              border-radius: 0px !important;
            }
            
            .project-card-custom:hover {
              transform: translateY(-2px) !important;
              box-shadow: 0 6px 20px rgba(0,0,0,0.15) !important;
            }
            
            .project-card-custom.active {
              border: none !important;
              background: transparent !important;
            }
            
            .project-card-custom.active .project-card-title {
              color: #1C542C !important;
              font-weight: 500 !important;
            }
            
            .project-card-title {
              font-size: 14px !important;
              font-weight: 500 !important;
              color: #888 !important;
              font-family: ${fonts.Noto} !important;
              line-height: 1.3 !important;
              transition: color 0.2s ease !important;
            }
            
            .project-card-location {
              font-size: 12px !important;
              color: #666 !important;
              font-family: ${fonts.Noto} !important;
              line-height: 1.3 !important;
            }
            
            .project-card-type {
              font-size: 11px !important;
              font-family: ${fonts.Noto} !important;
            }
            
            .project-card-image {
              height: 100px !important;
              object-fit: cover !important;
              border-radius: 6px 6px 0 0 !important;
            }
            
            .dropdown-left-section {
              padding-right: 15px !important;
            }
            
            .dropdown-right-section {
              padding-left: 15px !important;
            }
            
            /* Desktop styles */
            @media (min-width: 992px) {
              .nav-dropdown .dropdown-toggle:hover {
                color: #164023 !important;
              }
              
              .nav-dropdown:hover .dropdown-menu {
                display: block !important;
              }
            }
            
            /* Tablet styles */
            @media (max-width: 1199px) and (min-width: 992px) {
              .dropdown-menu-custom {
                min-width: 500px !important;
                max-width: calc(100vw - 40px) !important;
                padding: 20px !important;
              }
              
              .project-card-image {
                height: 100px !important;
              }
              
              .project-card-title {
                font-size: 13px !important;
              }
              
              .project-card-location {
                font-size: 11px !important;
              }
            }
            
            /* Mobile styles */
            @media (max-width: 991.98px) {
              .nav-dropdown-wrapper {
                width: 100% !important;
                display: block !important;
              }
              
              .nav-dropdown {
                width: 100% !important;
                display: block !important;
                position: relative !important;
              }
              
              .nav-dropdown .dropdown-toggle {
                color: #1C542C !important;
                padding: 1rem 0 !important;
                width: 100% !important;
                border-bottom: 1px solid rgba(0, 0, 0, 0.1) !important;
                font-size: 18px !important;
                font-weight: 500 !important;
                display: block !important;
                text-align: left !important;
              }
              
              .dropdown-menu-custom {
                position: static !important;
                transform: none !important;
                box-shadow: none !important;
                border: none !important;
                background: transparent !important;
                padding: 0 !important;
                margin: 0 !important;
                width: 100% !important;
                border-radius: 0 !important;
                min-width: auto !important;
                max-width: none !important;
                z-index: auto !important;
              }
              
              .dropdown-content-wrapper {
                padding: 0 1rem !important;
                min-height: auto !important;
              }
              
              .dropdown-left-section,
              .dropdown-right-section {
                padding: 0 !important;
              }
              
              .dropdown-item-custom {
                padding: 0.75rem 0 !important;
                border-bottom: 1px solid rgba(0, 0, 0, 0.05) !important;
                margin-bottom: 0.5rem !important;
              }
              
                            .project-card-custom {
                margin-bottom: 0.75rem !important;
                border: 1px solid rgba(0,0,0,0.1) !important;
              }
              
              .project-card-custom.active {
                border: 1px solid rgba(0,0,0,0.1) !important;
                background: transparent !important;
              }
              
              .project-card-image {
                width: 100px !important;
                height: 70px !important;
                object-fit: cover !important;
                border-radius: 0px !important;
              }
              
              .project-card-title {
                font-size: 14px !important;
              }
              
              .project-card-location {
                font-size: 12px !important;
              }
            }
            
            /* Small mobile styles */
            @media (max-width: 576px) {
              .nav-dropdown .dropdown-toggle {
                font-size: 16px !important;
                padding: 0.75rem 0 !important;
              }
              
              .dropdown-content-wrapper {
                padding: 0 0.5rem !important;
              }
              
              .project-card-custom {
                padding: 0.75rem !important;
              }
              
              .project-card-image {
                width: 80px !important;
                height: 50px !important;
              }
              
              .project-card-title {
                font-size: 13px !important;
              }
              
              .project-card-location {
                font-size: 11px !important;
              }
              
              .dropdown-item-title {
                font-size: 14px !important;
              }
            }
            
            /* Extra small mobile styles */
            @media (max-width: 375px) {
              .dropdown-content-wrapper {
                padding: 0 0.25rem !important;
              }
              
              .project-card-image {
                width: 65px !important;
                height: 45px !important;
              }
              
              .project-card-title {
                font-size: 12px !important;
              }
              
              .project-card-location {
                font-size: 10px !important;
              }
              
              .dropdown-item-title {
                font-size: 13px !important;
              }
            }
            
            /* Hover effects for better UX */
            @media (hover: hover) {
              .dropdown-item-custom:hover .dropdown-item-title {
                color: #1C542C !important;
              }
              
              .project-card-custom:hover .project-card-title {
                color: #1C542C !important;
              }
            }
            
            /* Dark mode support */
            @media (prefers-color-scheme: dark) {
              .dropdown-menu-custom {
                background-color: #2d3748 !important;
                border-color: #4a5568 !important;
              }
              
              .dropdown-item-title {
                color: #e2e8f0 !important;
              }
              
              .dropdown-item-desc,
              .project-card-location {
                color: #a0aec0 !important;
              }
              
              .project-card-custom {
                background-color: #4a5568 !important;
                border-color: #718096 !important;
              }
            }
            
            /* Print styles */
            @media print {
              .nav-dropdown {
                display: none !important;
              }
            }
            
            /* High contrast mode support */
            @media (prefers-contrast: high) {
              .dropdown-menu-custom {
                border: 2px solid #000 !important;
              }
              
              .dropdown-item-custom:hover {
                background-color: #000 !important;
                color: #fff !important;
              }
              
              .project-card-custom:hover {
                border-color: #000 !important;
              }
            }
            
            /* Reduced motion support */
            @media (prefers-reduced-motion: reduce) {
              .dropdown-arrow,
              .project-card-custom,
              .dropdown-item-custom {
                transition: none !important;
              }
              
              .project-card-custom:hover {
                transform: none !important;
              }
            }
          `}
        </style>
      </Dropdown>
    </div>
  );
};

const styles = {
  navLink: {
    fontFamily: fonts.Noto,
    color: "#1C542C",
    fontSize: "16px",
    fontWeight: "500",
    textDecoration: "none"
  },
  dropdownArrow: {
    fontSize: "10px",
    color: "#1C542C",
    transition: "transform 0.3s ease",
    display: "inline-block",
    lineHeight: "1"
  },
  projectCardImage: {
    width: "100%",
    height: "80px",
    objectFit: "cover",
    borderRadius: "6px 6px 0 0"
  }
};

export default ProjectDropdown;

