import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { MapPin, ArrowUpRight, CheckCircle } from "lucide-react";

const locations = [
  {
    area: "Kumbalagodu",
    tag: "ONGOING PROJECTS",
    type: "Residential & Industrial",
    highlight: "On Mysore Road · 18 km from Silk Board",
    why: "Fastest-growing micro-market on the Bangalore–Mysore Expressway (NH-275). BMRDA & KIADB approved with excellent connectivity to Electronic City and Kengeri Metro.",
    badges: ["BMRDA Approved", "30×40 to 40×60", "KIADB Industrial"],
    link: "/residential",
    accent: "#1A662F",
  },
  {
    area: "Bidadi",
    tag: "ONGOING PROJECTS",
    type: "Residential Layout",
    highlight: "30 km from Bangalore · Near Toyota Plant",
    why: "Premium residential plots along the Bangalore–Mysore corridor. Pollution-free, BMRDA-approved, excellent appreciation near Bidadi industrial township.",
    badges: ["BMRDA Approved", "Gated Community", "30×40 & 30×50"],
    link: "/residential",
    accent: "#1A662F",
  },
  {
    area: "Kengeri & Satellite Town",
    tag: "NEAR METRO",
    type: "Residential Layout",
    highlight: "Purple Line Metro terminus · Direct city access",
    why: "Minutes from Kengeri Metro Station. High demand from IT professionals. BMRDA-approved with clear titles and full civic amenities.",
    badges: ["Near Metro Station", "BMRDA Approved", "IT Corridor"],
    link: "/residential",
    accent: "#1A662F",
  },
  {
    area: "Mysore Road Corridor",
    tag: "HIGH GROWTH",
    type: "Residential & Industrial",
    highlight: "NH-275 · Bangalore–Mysore Expressway",
    why: "One of Bangalore's highest-appreciating corridors. Plots near Rajarajeshwari Nagar, Kambipura and Uttarahalli. Ideal for investment and end-use.",
    badges: ["NH-275 Access", "NICE Road Proximity", "High Appreciation"],
    link: "/project",
    accent: "#1A662F",
  },
  {
    area: "Ajjanahalli & Ramanagara",
    tag: "AFFORDABLE",
    type: "Residential Layout",
    highlight: "Near Silk Factory Road · Ramanagara District",
    why: "Budget-friendly BMRDA-approved plots. Rising demand due to proximity to the Bangalore–Mysore Expressway and new industrial zones in Ramanagara district.",
    badges: ["Affordable Pricing", "BMRDA Approved", "Expressway Access"],
    link: "/residential",
    accent: "#1A662F",
  },
  {
    area: "Kumbalagodu Industrial Estate",
    tag: "KIADB APPROVED",
    type: "Industrial Plots",
    highlight: "KIADB Phase 1 & 2 · Established industrial zone",
    why: "KIADB-approved industrial plots in Bangalore's premier industrial corridor. HT power, 40-ft wide roads, easy logistics via NICE Road and Mysore Road.",
    badges: ["KIADB Approved", "HT Power Supply", "40-ft Roads"],
    link: "/commercial",
    accent: "#b45309",
  },
];

const HomeLocationsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} style={s.section} aria-label="Plot locations across South Bangalore">

      {/* Header */}
      <div style={s.header}>
        <motion.span
          style={s.eyebrow}
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
        >
          WHERE WE BUILD
        </motion.span>
        <motion.h2
          style={s.title}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Plots Across South Bangalore
        </motion.h2>
        <motion.p
          style={s.subtitle}
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.18 }}
        >
          From Kumbalagodu to Bidadi — BMRDA-approved residential sites and KIADB
          industrial plots in the fastest-growing corridors of South Bangalore.
        </motion.p>
      </div>

      {/* Cards grid */}
      <div style={s.grid} className="locations-grid">
        {locations.map((loc, i) => (
          <motion.article
            key={loc.area}
            style={s.card}
            className="loc-card"
            initial={{ opacity: 0, y: 36 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
          >
            {/* Top accent line */}
            <div style={{ ...s.accentLine, background: loc.accent }} />

            <div style={s.cardInner}>
              {/* Tag row */}
              <div style={s.cardMeta}>
                <span style={{ ...s.tag, color: loc.accent, background: `${loc.accent}12`, borderColor: `${loc.accent}33` }}>
                  {loc.tag}
                </span>
                <span style={s.typeLabel}>{loc.type}</span>
              </div>

              {/* Area heading */}
              <h3 style={s.areaName}>{loc.area}</h3>

              {/* Distance */}
              <p style={s.highlight}>
                <MapPin size={11} style={{ marginRight: 5, color: loc.accent, flexShrink: 0 }} />
                {loc.highlight}
              </p>

              {/* Description */}
              <p style={s.why}>{loc.why}</p>

              {/* Badges */}
              <div style={s.badgesRow}>
                {loc.badges.map(b => (
                  <span key={b} style={s.badge}>
                    <CheckCircle size={10} style={{ marginRight: 4, color: loc.accent }} />
                    {b}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <Link to={loc.link} style={{ ...s.cta, color: loc.accent }} className="loc-cta">
                View Projects <ArrowUpRight size={13} style={{ marginLeft: 4 }} />
              </Link>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Trust bar */}
      <motion.div
        style={s.trustBar}
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.75 }}
      >
        {[
          "All layouts are BMRDA / KIADB approved",
          "Clear & encumbrance-free titles",
          "Home loan eligible plots",
          "500+ plots sold since 1998",
        ].map(item => (
          <span key={item} style={s.trustItem}>
            <CheckCircle size={13} style={{ color: "#1A662F", marginRight: 7, flexShrink: 0 }} />
            {item}
          </span>
        ))}
      </motion.div>

      <style>{`
        @media (max-width: 1023px) { .locations-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 639px)  { .locations-grid { grid-template-columns: 1fr !important; } }
        .loc-card:hover { transform: translateY(-4px); box-shadow: 0 12px 36px rgba(26,102,47,0.12) !important; }
        .loc-cta:hover { opacity: 0.7; }
      `}</style>
    </section>
  );
};

const s = {
  section: {
    background: "#fff",
    padding: "80px 40px",
    borderTop: "1px solid #f0f0f0",
  },
  header: {
    textAlign: "center",
    maxWidth: 660,
    margin: "0 auto 56px",
  },
  eyebrow: {
    display: "inline-block",
    fontSize: "0.68rem",
    fontWeight: 700,
    letterSpacing: "3px",
    color: "#1A662F",
    marginBottom: 12,
    textTransform: "uppercase",
  },
  title: {
    color: "#111",
    fontSize: "clamp(1.9rem, 3.5vw, 2.7rem)",
    fontWeight: 700,
    margin: "0 0 14px",
    lineHeight: 1.15,
  },
  subtitle: {
    color: "#555",
    fontSize: "1rem",
    lineHeight: 1.7,
    margin: 0,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 20,
    maxWidth: 1200,
    margin: "0 auto 48px",
  },
  card: {
    background: "#fff",
    border: "1px solid #e8e8e8",
    borderRadius: 14,
    overflow: "hidden",
    transition: "transform 0.25s ease, box-shadow 0.25s ease",
    boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
  },
  accentLine: {
    height: 3,
  },
  cardInner: {
    padding: "20px 22px 24px",
  },
  cardMeta: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginBottom: 10,
  },
  tag: {
    fontSize: "0.6rem",
    fontWeight: 700,
    letterSpacing: "1px",
    padding: "3px 9px",
    borderRadius: 4,
    border: "1px solid",
    textTransform: "uppercase",
  },
  typeLabel: {
    fontSize: "0.72rem",
    color: "#888",
    fontWeight: 500,
  },
  areaName: {
    color: "#111",
    fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
    fontWeight: 700,
    margin: "0 0 8px",
    lineHeight: 1.25,
  },
  highlight: {
    display: "flex",
    alignItems: "flex-start",
    color: "#666",
    fontSize: "0.76rem",
    margin: "0 0 10px",
    lineHeight: 1.4,
  },
  why: {
    color: "#444",
    fontSize: "0.82rem",
    lineHeight: 1.65,
    margin: "0 0 14px",
  },
  badgesRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: 6,
    marginBottom: 18,
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    fontSize: "0.67rem",
    color: "#444",
    background: "#f5f5f5",
    border: "1px solid #e0e0e0",
    borderRadius: 20,
    padding: "3px 9px",
  },
  cta: {
    display: "inline-flex",
    alignItems: "center",
    fontSize: "0.8rem",
    fontWeight: 700,
    textDecoration: "none",
    transition: "opacity 0.2s",
  },
  trustBar: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "12px 36px",
    maxWidth: 900,
    margin: "0 auto",
    padding: "22px 32px",
    background: "#f0f7f2",
    borderRadius: 12,
    border: "1px solid #c8e6c9",
  },
  trustItem: {
    display: "flex",
    alignItems: "center",
    color: "#333",
    fontSize: "0.82rem",
    fontWeight: 500,
  },
};

export default HomeLocationsSection;
