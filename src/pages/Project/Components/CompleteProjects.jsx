import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const CompleteProjects = () => {
  const completedProjects = [
    {
      id: 1,
      name: "Siddeshwara Layout",
      location: "Gollahalli-thittahalli,Kumbalagodu, Bangalore.",
      property: "Residential Property",
      image: "https://res.cloudinary.com/dqmnu220b/image/upload/v1751709010/sideshwara_layout_1_gudpii.png",
    },
    {
      id: 2,
      name: "Keerthi Iinfinity Urvi Phase 1",
      location: "Gollahalli-thittahalli,Kumbalagodu, Bangalore.",
      property: "Residential Property",
      image: "https://res.cloudinary.com/dqmnu220b/image/upload/v1751709024/urvi_phase_one_1_rqst4s.png",
    },
    {
      id: 3,
      name: "KTM Industal Phase 1",
      location: "Kumbalagodu, Bangalore.",
      property: "Industrial Property",
      image: "https://res.cloudinary.com/dqmnu220b/image/upload/v1751707964/industal_phase_-_1_1_lo3zmi.png",
    },
    {
      id: 4,
      name: "APS Keerthi Iinfinity",
      location: "Ajjanahalli, Dodda aladamara, Bangalore.",
      property: "Residential Property",
      image: "https://res.cloudinary.com/dqmnu220b/image/upload/v1751707931/aps_keerthi_1_objcq4.png",
    },
    {
      id: 5,
      name: "KTM Industal Phase 2",
      location: "Kumbalagodu, Bangalore.",
      property: "Industrial Property",
      image: "https://res.cloudinary.com/dqmnu220b/image/upload/v1751707979/industal_phase_-_2_1_tjqvd2.png",
    },
    {
      id: 6,
      name: "KTM Villa Enclave",
      location: "Gollahalli-thittahalli,Kumbalagodu, Bangalore.",
      property: "Residential Property",
      image: "https://res.cloudinary.com/dqmnu220b/image/upload/v1751709126/ktm_villa_enclave_jmyiyj.png",
    }
  ];

  return (
    <div>
      <Row>
        {completedProjects.map((project) => (
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
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    overflow: "hidden",
  },
  projectImage: {
    height: "250px",
    objectFit: "cover",
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

export default CompleteProjects;
