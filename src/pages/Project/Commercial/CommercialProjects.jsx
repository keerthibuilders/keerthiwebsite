import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import comphase1 from "../../../../public/assets/images/4.webp"
import comphase2 from "../../../../public/assets/images/5.webp"

const CommercialProjects = () => {
  
   
    const completedProjects = [
    {
      id: 1,
      name: "KTM Industal Phase 1",
      location: "Kumbalagodu, Bangalore.",
      property: "Industrial Property",
      image: comphase1,
    },
    {
      id: 2,
      name: "KTM Industal Phase 2",
      location: "Kumbalagodu, Bangalore.",
      property: "Industrial Property",
      image: comphase2,
    },
    
  ];

  return (
    <div style={styles.mainContainer}>
      <Container>

        <Row>
          <h2 style={styles.sectionTitle}>Completed Projects</h2>
          {completedProjects.map((project) => (
            <Col xl={6} lg={6} md={6} sm={12} key={project.id} className="mb-4">
              <Card style={styles.projectCard} className="h-100">
                <Card.Img 
                  variant="top" 
                  src={project.image} 
                  alt={project.name}
                  style={styles.projectImage}
                />
                
                <Card.Body style={styles.cardBody}>
                  <Card.Title style={styles.projectName}>{project.name}</Card.Title>
                  <p style={styles.location}>
                    <i className="fas fa-map-marker-alt"></i> {project.location}
                  </p>
                  <p style={{ color: "#6c757d", fontSize: "0.9rem" }}>
                    <i className="fas fa-home"></i> {project.property}
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

const styles = {
  mainContainer: {
    padding: "2rem 0",
  },
  sectionTitle: {
    color: "#1A662F",
    fontWeight: "500",
    fontSize: "32px",
    marginBottom: "2rem",
  },
  projectCard: {
    border: "none",
    borderRadius: "0",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    overflow: "hidden",
  },
  projectImage: {
    height: "400px",
    objectFit: "fit",
    borderRadius: "0",
  },
  cardBody: {
    padding: "1.5rem",
  },
  projectName: {
    color: "#1A662F",
    fontWeight: "600",
    fontSize: "1.3rem",
    marginBottom: "0.5rem",
  },
  location: {
    color: "#6c757d",
    fontSize: "0.9rem",
    marginBottom: "0",
  },
};

export default CommercialProjects;
