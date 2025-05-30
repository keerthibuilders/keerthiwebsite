import React from "react";
import fonts from "../../../components/Common/Font";

// Re‑usable sub‑component for each key‑value pair on the right‑hand side
const SpecItem = ({ label, value }) => (
  <div style={styles.specItem}>
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
    <section style={styles.section}>
      {/* Wrapper grid */}
      <div style={styles.gridContainer}>
        {/* LEFT COLUMN – HEADING, DESCRIPTION & CTA */}
        <div style={styles.leftColumn}>
          {/* Title */}
          <h2 style={styles.title}>
            Introducing Keerthi Infinity URVI –{" "}
            <span style={styles.titleBold}>
              Premium residential plots in the heart of Byalalu, Bangalore.
            </span>
          </h2>
          
          {/* Description paragraphs */}
          <div style={styles.descriptionContainer}>
            <p style={styles.description}>
              At Keerthi Infinity URVI, your dream home begins with the perfect plot.
              Spread across prime land in Byalalu, this exclusive collection of 
              residential plots offers the ideal foundation for your future. 
              Strategically located with excellent connectivity to major IT hubs, 
              educational institutions, and healthcare facilities, URVI provides 
              the perfect blend of urban convenience and serene living. The project 
              is designed with modern infrastructure, wide roads, and all essential 
              amenities to ensure a comfortable lifestyle for you and your family.
            </p>
            <p style={styles.description}>
              Keerthi Infinity URVI represents more than just land ownership – it's 
              an investment in your family's future. With BMRDA approved layouts, 
              clear titles, and transparent documentation, we ensure a hassle-free 
              buying experience. The project features landscaped gardens, children's 
              play areas, and 24/7 security, creating a safe and vibrant community 
              for residents of all ages.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN – PROJECT SPECIFICATIONS */}
        <aside style={styles.rightColumn}>
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
        </aside>
      </div>

      {/* Custom styles */}
      <style>
        {`
          @media (max-width: 768px) {
            .grid-container {
              grid-template-columns: 1fr !important;
              gap: 0px !important;
            }
            
            .right-column {
              margin: 0px -100vw -8px -32px !important;
              padding: 24px 32px !important;
              width: 100vw !important;
              position: relative !important;
              left: 0 !important;
            }
            
            .title {
              font-size: 16px !important;
            }
            
            .description {
              font-size: 12px !important;
            }
          }
          
          @media (max-width: 480px) {
            .section {
              padding: 0px 16px !important;
            }
            
            .right-column {
              margin: 0px -100vw -32px -16px !important;
              padding: 24px 16px !important;
              width: 100vw !important;
              position: relative !important;
              left: 0 !important;
            }
            
            .title {
              font-size: 15px !important;
            }
            
            .description {
              font-size: 11px !important;
            }
          }
        `}
      </style>
    </section>
  );
};

// Styles object
const styles = {
  section: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0px 0px",
    fontFamily: fonts.Noto,
    overflow: "hidden"
  },
  gridContainer: {
    display: "grid",
    gap: "0px",
    gridTemplateColumns: "2fr 1fr",
    fontFamily: fonts.Noto
  },
  leftColumn: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    fontFamily: fonts.Noto,
    paddingRight: "40px",
    paddingLeft: "32px",
    paddingTop: "40px"
  },
  title: {
    fontSize: "18px",
    fontWeight: "400",
    color: "#111827",
    lineHeight: "1.25",
    fontFamily: fonts.Noto
  },
  titleBold: {
    fontWeight: "400",
    fontFamily: fonts.Noto
  },
  descriptionContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    fontFamily: fonts.Noto
  },
  description: {
    color: "#374151",
    fontSize: "13px",
    lineHeight: "1.5",
    margin: 0,
    fontFamily: fonts.Noto
  },
  rightColumn: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    backgroundColor: "#f8f9fa",
    border: '1px solid #ddd',
    padding: "40px 35px",
    margin: "-8px -100vw 0 0",
    width: "100vw",
    position: "relative",
    fontFamily: fonts.Noto,
    minHeight: "100%"
  },
  specItem: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    fontFamily: fonts.Noto
  },
  specLabel: {
    fontSize: "12px",
    fontWeight: "400",
    color: "#000",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    margin: 0,
    fontFamily: fonts.Noto
  },
  specValue: {
    fontSize: "11px",
    fontWeight: "400",
    color: "#374151",
    lineHeight: "1.4",
    margin: 0,
    fontFamily: fonts.Noto
  }
};

export default DetailsHighlights;
