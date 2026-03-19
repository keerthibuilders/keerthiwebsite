import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../../../components/SEO/SEO";
import { motion } from "framer-motion";
import { Container } from "react-bootstrap";
import { MapPin, Building2, ArrowRight, CheckCircle } from "lucide-react";
const completedProjects = [
  {
    id: 1,
    name: "KTM Industal Phase 1",
    location: "Kumbalagodu, Bangalore",
    property: "Industrial Property",
    image: "/assets/images/4.webp",
    slug: "ktm-industal-phase-1",
    tag: "Completed",
  },
  {
    id: 2,
    name: "KTM Industal Phase 2",
    location: "Kumbalagodu, Bangalore",
    property: "Industrial Property",
    image: "/assets/images/5.webp",
    slug: "ktm-industal-phase-2",
    tag: "Completed",
  },
];

const CommercialProjects = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <>
      <SEO
        title="Industrial Plots in Kumbalagodu – KIADB Approved | Mysore Road Bangalore"
        description="KIADB-approved industrial plots on Mysore Road, Kumbalagodu industrial corridor. HT power, 40-ft roads, NICE Road access. Ideal for manufacturing, warehousing & logistics. Clear title, immediate possession."
        keywords="industrial plots kumbalagodu, KIADB approved plots bangalore, commercial plots mysore road, industrial land for sale bangalore, warehouse plots bangalore, manufacturing zone plots south bangalore, industrial sites near NICE road, KIADB industrial plots"
        canonical="https://www.keerthibuilders.com/commercial"
      />
      {/* ── Hero ── */}
      <div style={styles.hero}>
        <div style={styles.heroOverlay} />
        <Container style={styles.heroContent}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={styles.heroBreadcrumb}
          >
            Home &nbsp;/&nbsp; Projects &nbsp;/&nbsp;{" "}
            <span style={{ color: "#fff" }}>Commercial</span>
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={styles.heroTitle}
          >
            Commercial Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={styles.heroSubtitle}
          >
            Industrial and commercial spaces built for scale and success
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            style={styles.statsRow}
            className="com-stats"
          >
            {[
              { value: "20+",   label: "Projects Completed" },
              { value: "25+",   label: "Years of Experience" },
              { value: "2.0K+", label: "Happy Customers" },
              { value: "50+",   label: "Lakhs sqft. Delivered" },
            ].map((s) => (
              <div key={s.label} style={styles.statItem}>
                <span style={styles.statValue}>{s.value}</span>
                <span style={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </motion.div>
        </Container>
      </div>

      {/* ── Main Content ── */}
      <div style={styles.pageBody}>
        <Container>
          {/* Section label */}
          <div style={styles.sectionHeader}>
            <div style={styles.sectionLine} />
            <h2 style={styles.sectionTitle}>Completed Projects</h2>
            <div style={styles.sectionLine} />
          </div>

          {/* Cards Grid */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            style={styles.grid}
            className="com-grid"
          >
            {completedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                style={{
                  ...styles.card,
                  transform: hoveredId === project.id ? "translateY(-8px)" : "translateY(0)",
                  boxShadow:
                    hoveredId === project.id
                      ? "0 20px 50px rgba(26,102,47,0.18)"
                      : "0 4px 20px rgba(0,0,0,0.08)",
                }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Image */}
                <div style={styles.imageWrapper}>
                  <img
                    src={project.image}
                    alt={project.name}
                    style={{
                      ...styles.cardImage,
                      transform: hoveredId === project.id ? "scale(1.07)" : "scale(1)",
                    }}
                  />
                  <div style={styles.imageGradient} />

                  {/* Status badge */}
                  <div style={styles.statusBadge}>
                    <CheckCircle size={10} style={{ marginRight: 4 }} /> COMPLETED
                  </div>

                  {/* Hover overlay */}
                  <div
                    style={{
                      ...styles.hoverOverlay,
                      opacity: hoveredId === project.id ? 1 : 0,
                    }}
                  >
                    <Link to={`/project/${project.slug}`} style={styles.exploreBtn}>
                      Explore Project <ArrowRight size={14} style={{ marginLeft: 6 }} />
                    </Link>
                  </div>
                </div>

                {/* Card body */}
                <div style={styles.cardBody}>
                  <div style={styles.propertyTag}>
                    <Building2 size={12} style={{ marginRight: 5 }} />
                    {project.property}
                  </div>
                  <h3 style={styles.cardTitle}>{project.name}</h3>
                  <p style={styles.cardLocation}>
                    <MapPin size={13} style={{ marginRight: 5, flexShrink: 0 }} />
                    {project.location}
                  </p>
                  <div style={styles.cardDivider} />
                  <Link to={`/project/${project.slug}`} style={styles.viewDetailsLink}>
                    View Details <ArrowRight size={14} style={{ marginLeft: 4 }} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </div>

      {/* ── CTA Banner ── */}
      <div style={styles.ctaBanner}>
        <Container style={{ textAlign: "center" }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={styles.ctaTitle}
          >
            Looking for Commercial Space?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            style={styles.ctaSubtitle}
          >
            Talk to our experts and find the right property for your business.
          </motion.p>
          <motion.a
            href="tel:+919999999999"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.25 }}
            style={styles.ctaBtn}
          >
            Contact Us Today
          </motion.a>
        </Container>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .com-grid { grid-template-columns: 1fr !important; }
          .com-stats { flex-wrap: wrap !important; gap: 20px !important; }
        }
        @media (max-width: 575px) {
          .com-stats > div { width: 45% !important; }
        }
      `}</style>
    </>
  );
};

const styles = {
  /* ── Hero ── */
  hero: {
    position: "relative",
    minHeight: 420,
    background: "linear-gradient(135deg, #0a1f0f 0%, #1A662F 60%, #0d3b1e 100%)",
    display: "flex",
    alignItems: "center",
    paddingTop: 110,
    paddingBottom: 60,
    overflow: "hidden",
  },
  heroOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
    pointerEvents: "none",
  },
  heroContent: {
    position: "relative",
    zIndex: 2,
  },
  heroBreadcrumb: {
    color: "rgba(255,255,255,0.6)",
    fontSize: "0.85rem",
    letterSpacing: "0.5px",
    marginBottom: 12,
  },
  heroTitle: {
    color: "#fff",
    fontSize: "clamp(2rem, 5vw, 3.2rem)",
    fontWeight: 700,
    letterSpacing: "-0.5px",
    marginBottom: 12,
    lineHeight: 1.15,
  },
  heroSubtitle: {
    color: "rgba(255,255,255,0.72)",
    fontSize: "1.05rem",
    marginBottom: 40,
    maxWidth: 500,
  },
  statsRow: {
    display: "flex",
    gap: 40,
    flexWrap: "wrap",
  },
  statItem: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
  statValue: {
    color: "#fff",
    fontSize: "1.7rem",
    fontWeight: 700,
    lineHeight: 1,
  },
  statLabel: {
    color: "rgba(255,255,255,0.6)",
    fontSize: "0.78rem",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },

  /* ── Page body ── */
  pageBody: {
    background: "#f5f7f5",
    paddingTop: 56,
    paddingBottom: 64,
  },

  /* ── Section header ── */
  sectionHeader: {
    display: "flex",
    alignItems: "center",
    gap: 16,
    marginBottom: 36,
  },
  sectionLine: {
    flex: 1,
    height: 1,
    background: "linear-gradient(to right, transparent, #c8e6c9)",
  },
  sectionTitle: {
    color: "#1A662F",
    fontWeight: 700,
    fontSize: "1.35rem",
    whiteSpace: "nowrap",
    margin: 0,
    letterSpacing: "0.3px",
  },

  /* ── Grid ── */
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 28,
  },

  /* ── Card ── */
  card: {
    background: "#fff",
    borderRadius: 16,
    overflow: "hidden",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
  },
  imageWrapper: {
    position: "relative",
    overflow: "hidden",
    height: 280,
  },
  cardImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.45s ease",
    display: "block",
  },
  imageGradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "55%",
    background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 100%)",
    pointerEvents: "none",
  },
  statusBadge: {
    position: "absolute",
    top: 14,
    left: 14,
    display: "flex",
    alignItems: "center",
    background: "#4a4a4a",
    color: "#fff",
    fontSize: "0.68rem",
    fontWeight: 700,
    letterSpacing: "1.2px",
    padding: "4px 10px",
    borderRadius: 4,
  },
  hoverOverlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(26,102,47,0.55)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "opacity 0.3s ease",
    backdropFilter: "blur(2px)",
  },
  exploreBtn: {
    display: "inline-flex",
    alignItems: "center",
    background: "#fff",
    color: "#1A662F",
    padding: "10px 22px",
    borderRadius: 50,
    fontWeight: 700,
    fontSize: "0.85rem",
    textDecoration: "none",
    boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
  },
  cardBody: {
    padding: "20px 22px 22px",
  },
  propertyTag: {
    display: "inline-flex",
    alignItems: "center",
    background: "#e8f5e9",
    color: "#1A662F",
    fontSize: "0.72rem",
    fontWeight: 600,
    padding: "3px 10px",
    borderRadius: 4,
    marginBottom: 10,
    letterSpacing: "0.3px",
  },
  cardTitle: {
    color: "#1a1a1a",
    fontWeight: 700,
    fontSize: "1.05rem",
    marginBottom: 8,
    lineHeight: 1.3,
  },
  cardLocation: {
    color: "#6c757d",
    fontSize: "0.82rem",
    display: "flex",
    alignItems: "flex-start",
    margin: 0,
    lineHeight: 1.5,
  },
  cardDivider: {
    height: 1,
    background: "#f0f0f0",
    margin: "14px 0",
  },
  viewDetailsLink: {
    display: "inline-flex",
    alignItems: "center",
    color: "#1A662F",
    fontWeight: 600,
    fontSize: "0.85rem",
    textDecoration: "none",
  },

  /* ── CTA ── */
  ctaBanner: {
    background: "linear-gradient(135deg, #0a1f0f 0%, #1A662F 100%)",
    padding: "64px 16px",
  },
  ctaTitle: {
    color: "#fff",
    fontWeight: 700,
    fontSize: "clamp(1.4rem, 4vw, 2rem)",
    marginBottom: 12,
  },
  ctaSubtitle: {
    color: "rgba(255,255,255,0.72)",
    fontSize: "1rem",
    marginBottom: 32,
  },
  ctaBtn: {
    display: "inline-block",
    background: "#fff",
    color: "#1A662F",
    padding: "14px 36px",
    borderRadius: 50,
    fontWeight: 700,
    fontSize: "0.95rem",
    textDecoration: "none",
    boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
  },
};

export default CommercialProjects;
