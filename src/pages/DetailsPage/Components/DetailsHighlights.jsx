import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import fonts from "../../../components/Common/Font";

// Re-usable sub-component for each key-value pair on the right-hand side
const SpecItem = ({ label, value }) => (
  <div className="mb-3 mb-md-4">
    <h5 style={styles.specLabel}>
      {label}
    </h5>
    <p style={styles.specValue}>
      {value}
    </p>
  </div>
);

const DetailsHighlights = () => {
  return (
    <section id="project-highlights" className="py-3 py-md-4 py-lg-0" style={styles.section}>
      <Container fluid className="px-0">
        <Row className="g-0">
          {/* LEFT COLUMN – HEADING, DESCRIPTION & CTA */}
          <Col lg={8} md={7} className="d-flex flex-column" style={styles.leftColumn}>
            {/* Title */}
            <h2 className="mb-3 mb-md-4" style={styles.title}>
              Introducing Keerthi Infinity URVI –{" "}
              <span style={styles.titleBold}>
                Premium residential plots in the heart of Byalalu, Bangalore.
              </span>
            </h2>
            
            {/* Description paragraphs */}
            <div className="d-flex flex-column gap-3 gap-md-4">
              <p className="mb-0" style={styles.description}>
                At Keerthi Infinity URVI, your dream home begins with the perfect plot.
                Spread across prime land in Byalalu, this exclusive collection of
                residential plots offers the ideal foundation for your future.
                Strategically located with excellent connectivity to major IT hubs,
                educational institutions, and healthcare facilities, URVI provides
                the perfect blend of urban convenience and serene living. The project
                is designed with modern infrastructure, wide roads, and all essential
                amenities to ensure a comfortable lifestyle for you and your family.
              </p>
              <p className="mb-0" style={styles.description}>
                Keerthi Infinity URVI represents more than just land ownership – it's
                an investment in your family's future. With BMRDA approved layouts,
                clear titles, and transparent documentation, we ensure a hassle-free
                buying experience. The project features landscaped gardens, children's
                play areas, and 24/7 security, creating a safe and vibrant community
                for residents of all ages.
              </p>
            </div>
          </Col>
          
          {/* RIGHT COLUMN – PROJECT SPECIFICATIONS */}
          <Col lg={4} md={5} className="d-flex flex-column" style={styles.rightColumn}>
            <SpecItem label="Survey Number" value="SY NO.16/3" />
            <SpecItem label="Project Type" value="Residential Plots" />
            <SpecItem label="Total Plots" value="120 Plots" />
            <SpecItem
              label="Plot Sizes"
              value="30x40 Sq.ft, 30x50 Sq.ft, 40x60 Sq.ft"
            />
            <SpecItem
              label="Approvals"
              value="BMRDA Approved, BWSSB, BESCOM"
            />
            <SpecItem
              label="Location"
              value="Byalalu, Bangalore North"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

// Styles object
const styles = {
  section: {
    maxWidth: "1200px",
    margin: "0 auto",
    fontFamily: fonts.Noto,
    overflow: "hidden"
  },
  leftColumn: {
    fontFamily: fonts.Noto,
    padding: "clamp(20px, 4vw, 40px) clamp(20px, 4vw, 40px) clamp(20px, 4vw, 40px) clamp(16px, 3vw, 32px)"
  },
  title: {
    fontSize: "clamp(16px, 2.5vw, 18px)", // Responsive font size
    fontWeight: "400",
    color: "#111827",
    lineHeight: "1.25",
    fontFamily: fonts.Noto
  },
  titleBold: {
    fontWeight: "400",
    fontFamily: fonts.Noto
  },
  description: {
    color: "#374151",
    fontSize: "clamp(12px, 1.5vw, 13px)", // Responsive font size
    lineHeight: "1.5",
    fontFamily: fonts.Noto
  },
  rightColumn: {
    backgroundColor: "#f8f9fa",
    border: '1px solid #ddd',
    padding: "clamp(20px, 4vw, 40px) clamp(20px, 3vw, 35px)", // Responsive padding
    fontFamily: fonts.Noto
  },
  specLabel: {
    fontSize: "clamp(11px, 1.2vw, 12px)", // Responsive font size
    fontWeight: "400",
    color: "#000",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    margin: 0,
    fontFamily: fonts.Noto
  },
  specValue: {
    fontSize: "clamp(10px, 1.1vw, 11px)", // Responsive font size
    fontWeight: "400",
    color: "#374151",
    lineHeight: "1.4",
    margin: 0,
    fontFamily: fonts.Noto
  }
};

export default DetailsHighlights;
