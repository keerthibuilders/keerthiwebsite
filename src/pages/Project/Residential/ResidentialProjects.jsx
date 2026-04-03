import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../../../components/SEO/SEO";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "react-bootstrap";
import { MapPin, Home, ArrowRight, CheckCircle, Clock } from "lucide-react";
const ongoingProjects = [
  {
    id: 1,
    name: "Keerthi Infinity Lavish",
    location: "Gollahalli-Thittahalli, Kumbalagodu, Bangalore",
    property: "Residential Layout",
    image: "/assets/images/13.webp",
    tag: "Premium",
    slug: "keerthi-infinity-lavish",
  },
  {
    id: 2,
    name: "Keerthi Infinity Ullahas",
    location: "Shyanumangala, Bidadi",
    property: "Residential Layout",
    image: "/assets/images/11.webp",
    tag: "New Launch",
    slug: "keerthi-infinity-ullahas",
  },
  {
    id: 3,
    name: "KTM Infinity Urvi Phase 2",
    location: "Gollahalli-Thittahalli, Kumbalagodu, Bangalore",
    property: "Residential Layout",
    image: "/assets/images/12.webp",
    tag: "Hot Selling",
    slug: "ktm-infinity-urvi-phase-2",
  },
];

const completedProjects = [
  {
    id: 4,
    name: "KTM Villa Enclave",
    location: "Gollahalli-Thittahalli, Kumbalagodu, Bangalore",
    property: "Residential Layout",
    image: "/assets/images/1.webp",
    slug: "ktm-villa-enclave",
  },
  {
    id: 5,
    name: "APS Keerthi Infinity",
    location: "Ajjanahalli, Dodda Aladamara, Bangalore",
    property: "Residential Layout",
    image: "/assets/images/7.webp",
    slug: "aps-keerthi-infinity",
  },
  {
    id: 6,
    name: "Siddeshwara Layout",
    location: "Gollahalli-Thittahalli, Kumbalagodu, Bangalore",
    property: "Residential Layout",
    image: "/assets/images/2.webp",
    slug: "siddeshwara-layout",
  },
  {
    id: 7,
    name: "Keerthi Infinity Urvi Phase 1",
    location: "Gollahalli-Thittahalli, Kumbalagodu, Bangalore",
    property: "Residential Layout",
    image: "/assets/images/3.webp",
    slug: "keerthi-infinity-urvi-phase-1",
  },
  {
    id: 8,
    name: "Keerthi Infinity BMTC Ruppi's Enclave",
    location: "Near Ruppi's Resort, Kumbalagodu, Bangalore",
    property: "Residential Layout",
    image: "/assets/images/6.webp",
    slug: "keerthi-infinity-bmtc-ruppis-enclave",
  },
];

const tagColors = {
  "New Launch": { bg: "#e8f5e9", color: "#1A662F", border: "#a5d6a7" },
  "Hot Selling": { bg: "#fff3e0", color: "#e65100", border: "#ffcc80" },
  Premium: { bg: "#fce4ec", color: "#880e4f", border: "#f48fb1" },
};

const ResidentialProjects = () => {
  const [activeTab, setActiveTab] = useState("ongoing");
  const [hoveredId, setHoveredId] = useState(null);

  const projects = activeTab === "ongoing" ? ongoingProjects : completedProjects;

  return (
    <>
      <SEO
        title="Residential Plots in Kumbalagodu, Bidadi & South Bangalore – BMRDA Approved"
        description="BMRDA-approved residential plots for sale in Kumbalagodu, Bidadi, Kengeri & Mysore Road corridor. 30×40, 30×50, 40×60 sq ft plots with clear titles, BWSSB water, BESCOM power & gated community amenities."
        keywords="residential plots for sale kumbalagodu, BMRDA approved plots bidadi, 30x40 plots south bangalore, residential layouts near kengeri, plots near mysore road, gated community plots bangalore, affordable residential sites south bangalore, home plots near electronic city, BMRDA approved sites bangalore"
        canonical="https://www.keerthibuilders.com/residential"
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
            <span style={{ color: "#fff" }}>Residential</span>
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={styles.heroTitle}
          >
            Residential Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={styles.heroSubtitle}
          >
            Thoughtfully planned layouts crafted for modern living
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            style={styles.statsRow}
            className="res-stats"
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
          {/* Filter tabs */}
          <div style={styles.tabsWrapper}>
            <div style={styles.tabsContainer} className="res-tabs">
              <button
                style={{
                  ...styles.tabBtn,
                  ...(activeTab === "ongoing" ? styles.tabBtnActive : {}),
                }}
                onClick={() => setActiveTab("ongoing")}
              >
                <Clock size={16} style={{ marginRight: 6 }} />
                Ongoing Projects
                <span
                  style={{
                    ...styles.tabCount,
                    background: activeTab === "ongoing" ? "#fff" : "#1A662F",
                    color: activeTab === "ongoing" ? "#1A662F" : "#fff",
                  }}
                >
                  {ongoingProjects.length}
                </span>
              </button>
              <button
                style={{
                  ...styles.tabBtn,
                  ...(activeTab === "completed" ? styles.tabBtnActive : {}),
                }}
                onClick={() => setActiveTab("completed")}
              >
                <CheckCircle size={16} style={{ marginRight: 6 }} />
                Completed Projects
                <span
                  style={{
                    ...styles.tabCount,
                    background: activeTab === "completed" ? "#fff" : "#1A662F",
                    color: activeTab === "completed" ? "#1A662F" : "#fff",
                  }}
                >
                  {completedProjects.length}
                </span>
              </button>
            </div>
          </div>

          {/* Section label */}
          <div style={styles.sectionHeader}>
            <div style={styles.sectionLine} />
            <h2 style={styles.sectionTitle}>
              {activeTab === "ongoing" ? "Ongoing Projects" : "Completed Projects"}
            </h2>
            <div style={styles.sectionLine} />
          </div>

          {/* Cards Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              style={styles.grid}
              className="res-grid"
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
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
                    {/* Gradient overlay */}
                    <div style={styles.imageGradient} />

                    {/* Status badge */}
                    <div
                      style={{
                        ...styles.statusBadge,
                        background: activeTab === "ongoing" ? "#1A662F" : "#4a4a4a",
                      }}
                    >
                      {activeTab === "ongoing" ? (
                        <>
                          <span style={styles.statusDot} /> ONGOING
                        </>
                      ) : (
                        <>
                          <CheckCircle size={10} style={{ marginRight: 4 }} /> COMPLETED
                        </>
                      )}
                    </div>

                    {/* Tag badge (only ongoing) */}
                    {project.tag && (
                      <div
                        style={{
                          ...styles.tagBadge,
                          background: tagColors[project.tag]?.bg,
                          color: tagColors[project.tag]?.color,
                          border: `1px solid ${tagColors[project.tag]?.border}`,
                        }}
                      >
                        {project.tag}
                      </div>
                    )}

                    {/* Hover explore button */}
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
                      <Home size={12} style={{ marginRight: 5 }} />
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
          </AnimatePresence>
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
            Looking for Your Dream Home?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            style={styles.ctaSubtitle}
          >
            Talk to our experts and find the right property for you.
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
        @media (max-width: 991px) {
          .res-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 575px) {
          .res-grid { grid-template-columns: 1fr !important; }
          .res-hero-title { font-size: 2rem !important; }
          .res-stats { flex-wrap: wrap !important; gap: 20px !important; }
          .res-stat-item { width: 45% !important; }
          .res-tabs {
            flex-direction: column !important;
            gap: 8px !important;
            border-radius: 12px !important;
            width: 100% !important;
          }
          .res-tabs button {
            border-radius: 8px !important;
            width: 100% !important;
            justify-content: center !important;
          }
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

  /* ── Tabs ── */
  tabsWrapper: {
    display: "flex",
    justifyContent: "center",
    marginBottom: 48,
  },
  tabsContainer: {
    display: "flex",
    gap: 12,
    background: "#fff",
    borderRadius: 50,
    padding: "6px",
    boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  tabBtn: {
    display: "flex",
    alignItems: "center",
    padding: "10px 24px",
    borderRadius: 50,
    border: "none",
    background: "transparent",
    color: "#555",
    fontWeight: 500,
    fontSize: "0.92rem",
    cursor: "pointer",
    transition: "all 0.25s ease",
    whiteSpace: "nowrap",
  },
  tabBtnActive: {
    background: "#1A662F",
    color: "#fff",
    boxShadow: "0 4px 14px rgba(26,102,47,0.3)",
  },
  tabCount: {
    marginLeft: 8,
    borderRadius: 50,
    fontSize: "0.72rem",
    fontWeight: 700,
    padding: "2px 8px",
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
    gridTemplateColumns: "repeat(3, 1fr)",
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
    height: 240,
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
    color: "#fff",
    fontSize: "0.68rem",
    fontWeight: 700,
    letterSpacing: "1.2px",
    padding: "4px 10px",
    borderRadius: 4,
  },
  statusDot: {
    display: "inline-block",
    width: 6,
    height: 6,
    borderRadius: "50%",
    background: "#4ade80",
    marginRight: 6,
    boxShadow: "0 0 0 2px rgba(74,222,128,0.35)",
  },
  tagBadge: {
    position: "absolute",
    top: 14,
    right: 14,
    fontSize: "0.68rem",
    fontWeight: 700,
    padding: "4px 10px",
    borderRadius: 4,
    letterSpacing: "0.5px",
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
    transition: "transform 0.2s",
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
    transition: "transform 0.2s, box-shadow 0.2s",
  },
};

export default ResidentialProjects;
