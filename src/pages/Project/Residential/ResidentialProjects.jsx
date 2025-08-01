import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ktmLavish from "../../../../public/assets/images/13.webp"
import keerthiIinfinityUrviPhase2 from "../../../../public/assets/images/12.webp"
import keerthiIinfinityUllahas from "../../../../public/assets/images/11.webp"
import ktmVilla from "../../../../public/assets/images/1.webp"
import siddeshwara from "../../../../public/assets/images/2.webp"
import iinfinityUrvi from "../../../../public/assets/images/3.webp"
import aPSKeerthi from "../../../../public/assets/images/7.webp"
const ResidentialProjects = () => {
  const ongoingProjects = [
    {
      id: 1,
      name: "Keerthi Iifinity Lavish",
      location: "Gollahalli-thittahalli,Kumbalagodu, Bangalore.",
      property: "Residential Property",
      image: ktmLavish,
    },
    {
      id: 2,
      name: "Keerthi Iinfinity Ullahas",
      location: "Shyanumangala,Bidadi.",
      property: "Residential Property",
      image: keerthiIinfinityUllahas,
    },
    {
      id: 3,
      name: "KTM Iinfinity Urvi Phase 2",
      location: "Gollahalli-thittahalli,Kumbalagodu, Bangalore.",
      property: "Residential Property",
      image: keerthiIinfinityUrviPhase2,
    },
  ];
  const completedProjects = [
    {
          id: 4,
          name: "KTM Villa Enclave",
          location: "Gollahalli-thittahalli,Kumbalagodu, Bangalore.",
          property: "Residential Property",
          image: ktmVilla,
        },
        {
      id: 5,
      name: "APS Keerthi Iinfinity",
      location: "Ajjanahalli, Dodda aladamara, Bangalore.",
      property: "Residential Property",
      image: aPSKeerthi,
    },
    {
      id: 6,
      name: "Siddeshwara Layout",
      location: "Gollahalli-thittahalli,Kumbalagodu, Bangalore.",
      property: "Residential Property",
      image: siddeshwara,
    },
    {
      id: 7,
      name: "Keerthi Iinfinity Urvi Phase 1",
      location: "Gollahalli-thittahalli,Kumbalagodu, Bangalore.",
      property: "Residential Property",
      image: iinfinityUrvi,
    },
  ];

  return (
    <div style={styles.mainContainer}>
      <Container>
        <Row>
          <h2 style={styles.sectionTitle}>Ongoing Projects</h2>
          {ongoingProjects.map((project) => (
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
        <Row>
          <h2 style={styles.sectionTitle} >Completed Projects</h2>
          {completedProjects.map((project) => (
            <Col xl={6} lg={6} md={6} sm={12} key={project.id} className="mb-4">
              <Card style={styles.projectCard} className="h-150">
                <Card.Img 
                  variant="top" 
                  src={project.image} 
                  alt={project.name}
                  style={styles.projectImage}
                  content="fit"
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

export default ResidentialProjects;
