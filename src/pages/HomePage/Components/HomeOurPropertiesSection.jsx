import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Home, Building2, CheckCircle, MapPin } from "lucide-react";

const categories = [
  {
    type: "Residential",
    tag: "RESIDENTIAL LAYOUTS",
    icon: Home,
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=85&fit=crop",
    headline: "Live Where You Belong",
    subline: "BMRDA-Approved Plots in South Bangalore",
    description:
      "Thoughtfully planned residential layouts in Kumbalagodu & Bidadi — wide asphalted roads, underground drainage, clear titles and full civic amenities.",
    stats: [
      { value: "7", label: "Projects" },
      { value: "500+", label: "Plots Sold" },
      { value: "25+", label: "Acres" },
    ],
    features: ["BMRDA Approved", "30×40 to 40×60 plots", "Gated Community"],
    cta: "Explore Residential",
    link: "/residential",
    overlayFrom: "rgba(0,0,0,0.1)",
    overlayTo: "rgba(0,0,0,0.96)",
    accent: "#4ade80",
    tagBg: "rgba(26,102,47,0.85)",
  },
  {
    type: "Commercial",
    tag: "INDUSTRIAL PROPERTIES",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=85&fit=crop",
    headline: "Build Your Business Here",
    subline: "KIADB-Approved Industrial Plots, Mysore Road",
    description:
      "KIADB-approved industrial sites in Kumbalagodu's thriving industrial corridor — HT power, 40-ft roads, and NICE Road access for effortless logistics.",
    stats: [
      { value: "2", label: "Projects" },
      { value: "75+", label: "Plots" },
      { value: "15+", label: "Acres" },
    ],
    features: ["KIADB Approved", "HT Power Supply", "40-ft Roads"],
    cta: "Explore Commercial",
    link: "/commercial",
    overlayFrom: "rgba(0,0,0,0.1)",
    overlayTo: "rgba(0,0,0,0.96)",
    accent: "#ffc107",
    tagBg: "rgba(120,80,0,0.85)",
  },
];

const HomeOurPropertiesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} style={s.section}>
      {/* Header */}
      <div style={s.header}>
        <motion.span
          style={s.eyebrow}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          WHAT WE BUILD
        </motion.span>
        <motion.h2
          style={s.title}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          Our Portfolio
        </motion.h2>
        <motion.p
          style={s.subtitle}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Two decades of delivering trusted plots across South Bangalore —
          residential communities and industrial corridors on Mysore Road.
        </motion.p>
      </div>

      {/* Cards */}
      <div style={s.grid} className="portfolio-grid">
        {categories.map((cat, i) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={cat.type}
              style={s.card}
              className="portfolio-card"
              initial={{ opacity: 0, y: 48 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.3 + i * 0.15 }}
            >
              {/* Background image */}
              <img src={cat.image} alt={cat.subline} style={s.cardImg} className="portfolio-card-img" />

              {/* Gradient overlay — light at top, heavy at bottom */}
              <div style={{
                ...s.cardOverlay,
                background: `linear-gradient(to bottom, ${cat.overlayFrom} 0%, rgba(0,0,0,0.55) 45%, ${cat.overlayTo} 100%)`,
              }} />

              {/* Category tag — top left */}
              <div style={s.cardTop}>
                <span style={{ ...s.tag, background: cat.tagBg }}>
                  <Icon size={10} style={{ marginRight: 5, opacity: 0.9 }} />
                  {cat.tag}
                </span>
              </div>

              {/* Content — pinned to bottom */}
              <div style={s.cardBottom}>
                {/* Stats */}
                <div style={s.statsRow}>
                  {cat.stats.map((stat) => (
                    <div key={stat.label} style={s.statItem}>
                      <span style={{ ...s.statVal, color: cat.accent }}>{stat.value}</span>
                      <span style={s.statLabel}>{stat.label}</span>
                    </div>
                  ))}
                </div>

                <p style={s.subline}>{cat.subline}</p>
                <h3 style={s.cardTitle}>{cat.headline}</h3>
                <p style={s.cardDesc}>{cat.description}</p>

                {/* Feature chips */}
                <div style={s.featureRow}>
                  {cat.features.map(f => (
                    <span key={f} style={s.featureChip}>
                      <CheckCircle size={10} style={{ color: cat.accent, marginRight: 4 }} />
                      {f}
                    </span>
                  ))}
                </div>

                {/* Location */}
                <p style={s.locationNote}>
                  <MapPin size={11} style={{ color: cat.accent, marginRight: 5, flexShrink: 0 }} />
                  Mysore Road Corridor, South Bangalore
                </p>

                <Link
                  to={cat.link}
                  style={{ ...s.cardCta, background: cat.accent, color: i === 0 ? "#0a2010" : "#1a0e00" }}
                  className="portfolio-cta"
                >
                  {cat.cta}
                  <ArrowUpRight size={16} style={{ marginLeft: 6 }} />
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>

      <style>{`
        .portfolio-card {
          position: relative;
          overflow: hidden;
          border-radius: 16px;
        }
        .portfolio-card-img {
          transition: transform 0.8s ease;
        }
        .portfolio-card:hover .portfolio-card-img {
          transform: scale(1.05);
        }
        .portfolio-cta:hover {
          filter: brightness(1.08);
          transform: translateY(-1px);
        }
        @media (max-width: 767px) {
          .portfolio-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

const s = {
  section: {
    background: "#1A662F",
    padding: "72px 40px",
  },
  header: {
    textAlign: "center",
    maxWidth: 680,
    margin: "0 auto 52px",
  },
  eyebrow: {
    display: "inline-block",
    fontSize: "0.7rem",
    fontWeight: 700,
    letterSpacing: "3px",
    color: "#4ade80",
    marginBottom: 14,
    textTransform: "uppercase",
  },
  title: {
    color: "#fff",
    fontSize: "clamp(2rem, 4vw, 3rem)",
    fontWeight: 700,
    margin: "0 0 16px",
    lineHeight: 1.1,
  },
  subtitle: {
    color: "rgba(255,255,255,0.65)",
    fontSize: "1rem",
    lineHeight: 1.7,
    margin: 0,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 24,
    maxWidth: 1200,
    margin: "0 auto",
  },
  card: {
    height: 560,
  },
  cardImg: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  cardOverlay: {
    position: "absolute",
    inset: 0,
    zIndex: 1,
  },
  cardTop: {
    position: "absolute",
    top: 22,
    left: 22,
    zIndex: 2,
  },
  tag: {
    display: "inline-flex",
    alignItems: "center",
    fontSize: "0.62rem",
    fontWeight: 700,
    letterSpacing: "1.5px",
    padding: "5px 12px",
    borderRadius: 5,
    color: "#fff",
    backdropFilter: "blur(8px)",
  },
  cardBottom: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: "0 28px 32px",
    zIndex: 2,
  },
  statsRow: {
    display: "flex",
    gap: 24,
    marginBottom: 14,
  },
  statItem: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
  statVal: {
    fontSize: "1.8rem",
    fontWeight: 700,
    lineHeight: 1,
  },
  statLabel: {
    fontSize: "0.65rem",
    color: "rgba(255,255,255,0.5)",
    textTransform: "uppercase",
    letterSpacing: "0.8px",
  },
  subline: {
    fontSize: "0.72rem",
    fontWeight: 600,
    color: "rgba(255,255,255,0.55)",
    textTransform: "uppercase",
    letterSpacing: "1px",
    margin: "0 0 6px",
  },
  cardTitle: {
    color: "#fff",
    fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
    fontWeight: 700,
    margin: "0 0 10px",
    lineHeight: 1.2,
  },
  cardDesc: {
    color: "rgba(255,255,255,0.7)",
    fontSize: "0.87rem",
    lineHeight: 1.6,
    margin: "0 0 14px",
    maxWidth: 420,
  },
  featureRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: 7,
    marginBottom: 12,
  },
  featureChip: {
    display: "inline-flex",
    alignItems: "center",
    fontSize: "0.67rem",
    color: "rgba(255,255,255,0.7)",
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: 20,
    padding: "3px 9px",
  },
  locationNote: {
    display: "flex",
    alignItems: "center",
    color: "rgba(255,255,255,0.4)",
    fontSize: "0.72rem",
    margin: "0 0 18px",
  },
  cardCta: {
    display: "inline-flex",
    alignItems: "center",
    fontWeight: 700,
    fontSize: "0.88rem",
    padding: "11px 22px",
    borderRadius: 50,
    textDecoration: "none",
    transition: "filter 0.2s ease, transform 0.2s ease",
  },
};

export default HomeOurPropertiesSection;
