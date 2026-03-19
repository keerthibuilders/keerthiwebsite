import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { allProjects } from "../../data/projectsData";
import { ChevronDown, ChevronUp, MapPin } from "lucide-react";

const residentialProjects = allProjects.filter(p => p.type === "residential");
const commercialProjects  = allProjects.filter(p => p.type === "commercial");

const ProjectDropdown = ({ location }) => {
  const [open, setOpen]           = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileTab, setMobileTab]   = useState(null);
  const closeTimer = useRef(null);

  const isProjectActive =
    location.pathname === "/project" ||
    location.pathname === "/residential" ||
    location.pathname === "/commercial" ||
    location.pathname.startsWith("/project/");

  const openMenu      = () => { clearTimeout(closeTimer.current); setOpen(true); };
  const scheduleClose = () => { closeTimer.current = setTimeout(() => setOpen(false), 120); };

  const getBadge = (p) => {
    if (p.tag === "New Launch") return { label: "New", bg: "#fff3e0", color: "#e65100" };
    if (p.status === "ongoing")   return { label: "Ongoing", bg: "#e8f5e9", color: "#1C542C" };
    if (p.status === "completed") return null;
    return null;
  };

  const renderList = (projects) => {
    const newLaunches = projects.filter(p => p.tag === "New Launch");
    const ongoing     = projects.filter(p => p.status === "ongoing" && p.tag !== "New Launch");
    const completed   = projects.filter(p => p.status === "completed");
    const sorted      = [...newLaunches, ...ongoing, ...completed];

    return sorted.map(p => {
      const badge = getBadge(p);
      return (
        <Link key={p.id} to={`/project/${p.id}`} style={s.item} onClick={() => setOpen(false)}
          onMouseEnter={e => e.currentTarget.style.background = "#f0f7f2"}
          onMouseLeave={e => e.currentTarget.style.background = "transparent"}
        >
          <div style={{ flex: 1, minWidth: 0 }}>
            <span style={s.itemName}>{p.name}</span>
            <span style={s.itemLoc}>
              <MapPin size={9} style={{ marginRight: 3 }} />
              {p.location.split(",")[0]}
            </span>
          </div>
          {badge && (
            <span style={{ ...s.badge, background: badge.bg, color: badge.color }}>
              {badge.label}
            </span>
          )}
        </Link>
      );
    });
  };

  return (
    <>
      {/* ── DESKTOP ── */}
      <div
        className="pd-desktop"
        onMouseEnter={openMenu}
        onMouseLeave={scheduleClose}
        style={{ position: "relative" }}
      >
        <button style={{ ...s.trigger, fontWeight: isProjectActive ? 700 : 500 }}>
          Projects
          <ChevronDown size={14} style={{ marginLeft: 5, transform: open ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
        </button>

        {open && (
          <div style={s.dropdown} onMouseEnter={openMenu} onMouseLeave={scheduleClose}>
            <div style={s.cols}>
              {/* Residential */}
              <div style={s.col}>
                <div style={s.colHeader}>Residential</div>
                {renderList(residentialProjects)}
                <Link to="/residential" style={s.viewAll} onClick={() => setOpen(false)}>View all →</Link>
              </div>

              <div style={s.divider} />

              {/* Commercial */}
              <div style={s.col}>
                <div style={s.colHeader}>Commercial</div>
                {renderList(commercialProjects)}
                <Link to="/commercial" style={s.viewAll} onClick={() => setOpen(false)}>View all →</Link>
              </div>
            </div>

            <div style={s.footer}>
              <Link to="/project" style={s.footerLink} onClick={() => setOpen(false)}>All Projects →</Link>
            </div>
          </div>
        )}
      </div>

      {/* ── MOBILE ── */}
      <div className="pd-mobile" style={{ width: "100%" }}>
        <button style={s.mobileTrigger} onClick={() => setMobileOpen(!mobileOpen)}>
          <span>Projects</span>
          {mobileOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>

        {mobileOpen && (
          <div style={s.mobileMenu}>
            {[
              { key: "residential", label: "Residential", projects: residentialProjects, route: "/residential" },
              { key: "commercial",  label: "Commercial",  projects: commercialProjects,  route: "/commercial"  },
            ].map(type => (
              <div key={type.key}>
                <button
                  style={{ ...s.mobileTypeBtn, ...(mobileTab === type.key ? s.mobileTypeBtnActive : {}) }}
                  onClick={() => setMobileTab(mobileTab === type.key ? null : type.key)}
                >
                  <span>{type.label}</span>
                  {mobileTab === type.key ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </button>

                {mobileTab === type.key && (
                  <div style={s.mobileProjects}>
                    {renderList(type.projects)}
                    <Link to={type.route} style={s.viewAll}
                      onClick={() => { setMobileOpen(false); setMobileTab(null); }}
                    >
                      View all {type.label} →
                    </Link>
                  </div>
                )}
              </div>
            ))}
            <Link to="/project" style={s.mobileAllBtn}
              onClick={() => { setMobileOpen(false); setMobileTab(null); }}
            >
              All Projects
            </Link>
          </div>
        )}
      </div>

      <style>{`
        .pd-desktop { display: none; }
        .pd-mobile  { display: block; }
        @media (min-width: 992px) {
          .pd-desktop { display: block; }
          .pd-mobile  { display: none; }
        }
      `}</style>
    </>
  );
};

const s = {
  trigger: {
    background: "none", border: "none", color: "#1C542C",
    fontSize: 16, cursor: "pointer",
    display: "flex", alignItems: "center", padding: "8px 0",
  },
  dropdown: {
    position: "absolute", top: "calc(100% + 10px)", right: "-180px",
    width: 540, background: "#fff",
    borderRadius: 10, boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
    zIndex: 9999, overflow: "hidden",
    animation: "pdFade 0.15s ease",
  },
  cols: { display: "flex", padding: "20px 20px 12px" },
  col:  { flex: 1, minWidth: 0 },
  colHeader: {
    fontSize: 13, fontWeight: 700, color: "#1C542C",
    textTransform: "uppercase", letterSpacing: "0.8px",
    marginBottom: 12, paddingBottom: 8,
    borderBottom: "2px solid #1C542C",
  },
  divider: { width: 1, background: "#eee", margin: "0 16px" },
  badge: {
    fontSize: 10, fontWeight: 700,
    padding: "2px 7px", borderRadius: 4,
    flexShrink: 0, whiteSpace: "nowrap",
  },
  item: {
    display: "flex", flexDirection: "row", alignItems: "center", gap: 8,
    padding: "6px 8px", borderRadius: 5,
    textDecoration: "none", background: "transparent",
    transition: "background 0.15s", marginBottom: 2,
  },
  itemName: { fontSize: 13, fontWeight: 600, color: "#111" },
  itemLoc:  { fontSize: 11, color: "#888", display: "flex", alignItems: "center", marginTop: 1 },
  viewAll: {
    fontSize: 12, fontWeight: 600, color: "#1C542C",
    textDecoration: "none", display: "inline-block", marginTop: 6,
  },
  footer: {
    borderTop: "1px solid #f0f0f0", padding: "10px 20px",
    background: "#fafafa",
  },
  footerLink: {
    fontSize: 13, fontWeight: 600, color: "#1C542C", textDecoration: "none",
  },
  // mobile
  mobileTrigger: {
    width: "100%", background: "none", border: "none",
    borderBottom: "1px solid rgba(0,0,0,0.1)",
    color: "#1C542C", fontSize: 18, fontWeight: 500,
    padding: "1rem 0", display: "flex", alignItems: "center",
    justifyContent: "space-between", cursor: "pointer",
  },
  mobileMenu: { padding: "8px 0 4px" },
  mobileTypeBtn: {
    width: "100%", background: "#f8faf8", border: "none",
    borderRadius: 8, color: "#111", fontSize: 15, fontWeight: 600,
    padding: "11px 14px", display: "flex", alignItems: "center",
    justifyContent: "space-between", cursor: "pointer", marginBottom: 4,
  },
  mobileTypeBtnActive: { background: "#e8f5e9", color: "#1C542C" },
  mobileProjects: {
    background: "#f8faf8", borderRadius: "0 0 8px 8px",
    padding: "8px 12px 10px", marginBottom: 4,
  },
  mobileAllBtn: {
    display: "block", textAlign: "center",
    background: "#1C542C", color: "#fff",
    fontSize: 14, fontWeight: 600, textDecoration: "none",
    padding: "11px", borderRadius: 8, marginTop: 8,
  },
};

export default ProjectDropdown;
