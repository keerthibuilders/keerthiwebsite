import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO/SEO";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "react-bootstrap";
import { MapPin, Home, Building2, LayoutGrid, ArrowRight } from "lucide-react";
import { allProjects } from "../../data/projectsData";


const FILTERS = [
  { key: "all",         label: "All Projects",  icon: LayoutGrid },
  { key: "residential", label: "Residential",   icon: Home },
  { key: "commercial",  label: "Commercial",    icon: Building2 },
];


const ProjectMainPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredId, setHoveredId]       = useState(null);

  const filtered = allProjects.filter(p =>
    activeFilter === "all" || p.type === activeFilter
  );

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "All Keerthi Builders Projects – Residential & Industrial Plots South Bangalore",
    "url": "https://www.keerthibuilders.com/project",
    "numberOfItems": allProjects.length,
    "itemListElement": allProjects.map((p, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": p.name,
      "url": `https://www.keerthibuilders.com/project/${p.id}`,
      "description": `${p.property} in ${p.location}. Status: ${p.status}.`
    }))
  };

  return (
    <>
      <SEO
        title="All Projects – BMRDA Plots & Industrial Sites South Bangalore"
        description="Browse all Keerthi Builders projects — BMRDA-approved residential plots in Kumbalagodu, Bidadi & Kengeri, and KIADB industrial sites on Mysore Road. 30×40, 30×50, 40×60 plots. Ongoing & completed."
        keywords="all residential plots bangalore, BMRDA approved layouts south bangalore, plots for sale kumbalagodu bidadi, site developers south bangalore, residential plots near mysore road, industrial plots kumbalagodu, KIADB plots bangalore"
        canonical="https://www.keerthibuilders.com/project"
        schema={itemListSchema}
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
            Home &nbsp;/&nbsp; <span style={{ color: "#fff" }}>All Projects</span>
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={styles.heroTitle}
          >
            Our Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={styles.heroSubtitle}
          >
            Explore our residential layouts and commercial spaces across Bangalore
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            style={styles.statsRow}
            className="proj-stats"
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

          {/* Category filter */}
          <div style={styles.tabsWrapper}>
            <div style={styles.tabsContainer} className="proj-tabs">
              {FILTERS.map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  style={{
                    ...styles.tabBtn,
                    ...(activeFilter === key ? styles.tabBtnActive : {}),
                  }}
                  onClick={() => setActiveFilter(key)}
                >
                  <Icon size={15} style={{ marginRight: 6 }} />
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Section label */}
          <div style={styles.sectionHeader}>
            <div style={styles.sectionLine} />
            <h2 style={styles.sectionTitle}>
              {filtered.length} Project{filtered.length !== 1 ? "s" : ""}
            </h2>
            <div style={styles.sectionLine} />
          </div>

          {/* Cards Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              style={styles.grid}
              className="proj-grid"
            >
              {filtered.map((project, index) => {
                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: index * 0.07 }}
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

                      {/* Hover overlay */}
                      <div style={{
                        ...styles.hoverOverlay,
                        opacity: hoveredId === project.id ? 1 : 0,
                      }}>
                        <Link to={`/project/${project.id}`} style={styles.exploreBtn}>
                          Explore Project <ArrowRight size={14} style={{ marginLeft: 6 }} />
                        </Link>
                      </div>
                    </div>

                    {/* Card body */}
                    <div style={styles.cardBody}>
                      <div style={styles.propertyTag}>
                        {project.type === "residential"
                          ? <Home size={12} style={{ marginRight: 5 }} />
                          : <Building2 size={12} style={{ marginRight: 5 }} />}
                        {project.property}
                      </div>
                      <h3 style={styles.cardTitle}>{project.name}</h3>
                      <p style={styles.cardLocation}>
                        <MapPin size={13} style={{ marginRight: 5, flexShrink: 0 }} />
                        {project.location}
                      </p>
                      <div style={styles.cardDivider} />
                      <Link to={`/project/${project.id}`} style={styles.viewDetailsLink}>
                        View Details <ArrowRight size={14} style={{ marginLeft: 4 }} />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div style={styles.emptyState}>
              <p style={{ color: "#888", fontSize: "1rem" }}>No projects match this filter.</p>
            </div>
          )}
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
            Find Your Perfect Plot Today
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
            href="https://wa.me/919945619999"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.25 }}
            style={styles.ctaBtn}
          >
            Contact Us on WhatsApp
          </motion.a>
        </Container>
      </div>

      <style>{`
        @media (max-width: 991px) {
          .proj-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 575px) {
          .proj-grid { grid-template-columns: 1fr !important; }
          .proj-stats { flex-wrap: wrap !important; gap: 20px !important; }
          .proj-tabs { flex-wrap: wrap !important; gap: 8px !important; border-radius: 14px !important; }
          .proj-status-row { flex-wrap: wrap !important; }
        }
      `}</style>
    </>
  );
};

const styles = {
  /* ── Hero ── */
  hero: {
    position: "relative",
    minHeight: 440,
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
  heroContent: { position: "relative", zIndex: 2 },
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
    maxWidth: 520,
  },
  statsRow: { display: "flex", gap: 40, flexWrap: "wrap" },
  statItem: { display: "flex", flexDirection: "column", gap: 2 },
  statValue: { color: "#fff", fontSize: "1.7rem", fontWeight: 700, lineHeight: 1 },
  statLabel: {
    color: "rgba(255,255,255,0.6)",
    fontSize: "0.78rem",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },

  /* ── Page body ── */
  pageBody: { background: "#f5f7f5", paddingTop: 56, paddingBottom: 64 },

  /* ── Category tabs ── */
  tabsWrapper: { display: "flex", justifyContent: "center", marginBottom: 20 },
  tabsContainer: {
    display: "flex",
    gap: 8,
    background: "#fff",
    borderRadius: 50,
    padding: "6px",
    boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
  },
  tabBtn: {
    display: "flex",
    alignItems: "center",
    padding: "10px 22px",
    borderRadius: 50,
    border: "none",
    background: "transparent",
    color: "#555",
    fontWeight: 500,
    fontSize: "0.9rem",
    cursor: "pointer",
    transition: "all 0.25s ease",
    whiteSpace: "nowrap",
  },
  tabBtnActive: {
    background: "#1A662F",
    color: "#fff",
    boxShadow: "0 4px 14px rgba(26,102,47,0.3)",
  },

  /* ── Status filter ── */
  statusRow: {
    display: "flex",
    justifyContent: "center",
    gap: 10,
    marginBottom: 44,
    flexWrap: "wrap",
  },
  statusBtn: {
    display: "inline-flex",
    alignItems: "center",
    padding: "7px 18px",
    borderRadius: 50,
    border: "1px solid #ddd",
    background: "#fff",
    color: "#555",
    fontWeight: 500,
    fontSize: "0.83rem",
    cursor: "pointer",
    transition: "all 0.2s",
    gap: 4,
  },
  statusBtnActive: {
    background: "#1A662F",
    color: "#fff",
    border: "1px solid #1A662F",
    boxShadow: "0 3px 10px rgba(26,102,47,0.25)",
  },
  statusCount: {
    marginLeft: 6,
    borderRadius: 50,
    fontSize: "0.68rem",
    fontWeight: 700,
    padding: "1px 7px",
  },

  /* ── Section header ── */
  sectionHeader: { display: "flex", alignItems: "center", gap: 16, marginBottom: 32 },
  sectionLine: { flex: 1, height: 1, background: "linear-gradient(to right, transparent, #c8e6c9)" },
  sectionTitle: {
    color: "#1A662F",
    fontWeight: 700,
    fontSize: "1.2rem",
    whiteSpace: "nowrap",
    margin: 0,
    letterSpacing: "0.3px",
  },

  /* ── Grid ── */
  grid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 },

  /* ── Card ── */
  card: {
    background: "#fff",
    borderRadius: 16,
    overflow: "hidden",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
  },
  imageWrapper: { position: "relative", overflow: "hidden", height: 240 },
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
    fontSize: "0.65rem",
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
  typeBadge: {
    position: "absolute",
    bottom: 12,
    left: 14,
    display: "inline-flex",
    alignItems: "center",
    color: "#fff",
    fontSize: "0.62rem",
    fontWeight: 600,
    padding: "3px 8px",
    borderRadius: 4,
    backdropFilter: "blur(4px)",
    background: "rgba(0,0,0,0.35)",
    letterSpacing: "0.4px",
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
  },
  cardBody: { padding: "20px 22px 22px" },
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
  cardDivider: { height: 1, background: "#f0f0f0", margin: "14px 0" },
  viewDetailsLink: {
    display: "inline-flex",
    alignItems: "center",
    color: "#1A662F",
    fontWeight: 600,
    fontSize: "0.85rem",
    textDecoration: "none",
  },

  emptyState: {
    textAlign: "center",
    padding: "60px 0",
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

export default ProjectMainPage;
