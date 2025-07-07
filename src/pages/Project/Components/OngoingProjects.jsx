import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const OngoingProjects = () => {
  const ongoingProjects = [
    {
      id: 1,
      name: "KTM Villa Enclave Phase 2",
      location: "Gollahalli-thittahalli,Kumbalagodu, Bangalore.",
      property: "Residential Property",
      image: "https://res.cloudinary.com/dqmnu220b/image/upload/v1751709558/ongoing_ktm_villa_phase_2_1_afx5qd.png",
    },
    {
      id: 2,
      name: "Keerthi Iinfinity Ullahas",
      location: "Shyanumangala,Bidadi.",
      property: "Residential Property",
      image: "https://res.cloudinary.com/dqmnu220b/image/upload/v1751709535/ongoing_bidadi_1_dlahge.png",
    },
    {
      id: 3,
      name: "KTM Iinfinity Urvi Phase 2",
      location: "Gollahalli-thittahalli,Kumbalagodu, Bangalore.",
      property: "Residential Property",
      image: "https://res.cloudinary.com/dqmnu220b/image/upload/v1751709544/ongoing_ktm_urvi_phase_2_1_qpgh2x.png",
    },
    
  ];

  return (
    <div>
      <Row>
        {ongoingProjects.map((project) => (
          <Col lg={6} md={6} sm={12} key={project.id} className="mb-4">
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
    </div>
  );
};

const styles = {
  sectionTitle: {
    color: "#1A662F",
    fontWeight: "600",
    fontSize: "1.8rem",
    marginBottom: "2rem",
    textAlign: "center",
  },
  projectCard: {
    border: "none",
    borderRadius: "0",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    overflow: "hidden",
  },
  projectImage: {
    height: "250px",
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
    marginBottom: "1rem",
  },
  location: {
    color: "#6c757d",
    fontSize: "0.9rem",
    marginBottom: "0",
  },
};

export default OngoingProjects;
