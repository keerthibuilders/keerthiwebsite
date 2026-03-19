import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { allProjects } from "../../../data/projectsData";
import fonts from "../../../components/Common/Font";

const AllProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [turning, setTurning] = useState(false);
  const mobileRef = useRef(null);
  const navigate = useNavigate();

  const count = allProjects.length;

  // Auto-advance
  useEffect(() => {
    if (paused || turning) return;
    const t = setInterval(() => next(), 3500);
    return () => clearInterval(t);
  }, [paused, turning, current]);

  // Sync mobile scroll
  useEffect(() => {
    if (mobileRef.current) {
      mobileRef.current.scrollTo({ left: current * window.innerWidth, behavior: "smooth" });
    }
  }, [current]);

  const go = (idx) => {
    if (turning || idx === current) return;
    setTurning(true);
    setTimeout(() => { setCurrent(idx); setTurning(false); }, 400);
    setPaused(true);
    setTimeout(() => setPaused(false), 5000);
  };
  const prev = () => go(current === 0 ? count - 1 : current - 1);
  const next = () => {
    if (turning) return;
    setTurning(true);
    setTimeout(() => { setCurrent(p => (p + 1) % count); setTurning(false); }, 400);
  };

  const prevIdx = (current - 1 + count) % count;
  const nextIdx = (current + 1) % count;

  return (
    <section
      ref={ref}
      style={s.section}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Header */}
      <motion.div
        style={s.header}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <span style={s.eyebrow}>OUR PROJECTS</span>
        <h2 style={s.title}>All Projects</h2>
      </motion.div>

      {/* Desktop carousel */}
      <motion.div
        className="d-none d-lg-flex"
        style={s.carouselWrap}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, delay: 0.15 }}
      >
        {/* Prev button */}
        <button
          style={s.navBtn}
          className="all-nav-btn"
          onClick={prev}
          disabled={turning}
          aria-label="Previous"
        >
          &#8249;
        </button>

        {/* Left side image */}
        <div
          style={s.sideWrap}
          onClick={prev}
        >
          <img
            src={allProjects[prevIdx].image}
            alt={allProjects[prevIdx].name}
            style={{
              ...s.sideImg,
              opacity: turning ? 0.25 : 0.55,
              transform: turning ? "rotateY(-12deg)" : "rotateY(0deg)",
            }}
          />
        </div>

        {/* Center image */}
        <div
          style={s.centerWrap}
          onClick={() => navigate(`/project/${allProjects[current].id}`)}
          className="all-center"
        >
          <img
            src={allProjects[current].image}
            alt={allProjects[current].name}
            style={{
              ...s.centerImg,
              transform: turning ? "rotateY(-6deg)" : "rotateY(0deg)",
              boxShadow: turning
                ? "0 24px 60px rgba(0,0,0,0.4)"
                : "0 12px 40px rgba(0,0,0,0.25)",
            }}
          />
        </div>

        {/* Right side image */}
        <div
          style={s.sideWrap}
          onClick={next}
        >
          <img
            src={allProjects[nextIdx].image}
            alt={allProjects[nextIdx].name}
            style={{
              ...s.sideImg,
              opacity: turning ? 0.25 : 0.55,
              transform: turning ? "rotateY(12deg)" : "rotateY(0deg)",
            }}
          />
        </div>

        {/* Next button */}
        <button
          style={{ ...s.navBtn, ...s.navBtnRight }}
          className="all-nav-btn"
          onClick={next}
          disabled={turning}
          aria-label="Next"
        >
          &#8250;
        </button>
      </motion.div>

      {/* Mobile horizontal scroll */}
      <div
        className="d-lg-none"
        ref={mobileRef}
        style={s.mobileScroll}
        onScroll={(e) => {
          const idx = Math.round(e.target.scrollLeft / window.innerWidth);
          if (idx !== current) setCurrent(idx);
        }}
      >
        {allProjects.map((p) => (
          <div
            key={p.id}
            style={s.mobileSlide}
            onClick={() => navigate(`/project/${p.id}`)}
          >
            <img src={p.image} alt={p.name} style={s.mobileImg} />
          </div>
        ))}
      </div>

      {/* Dots */}
      <div style={s.dots}>
        {allProjects.map((_, i) => (
          <button
            key={i}
            style={{
              ...s.dot,
              background: i === current ? "#1C542C" : "#ccc",
              transform: turning && i === current ? "rotateZ(180deg)" : "rotateZ(0deg)",
            }}
            onClick={() => go(i)}
            aria-label={`Project ${i + 1}`}
            disabled={turning}
            className="border-0"
          />
        ))}
      </div>

      <style>{`
        .all-nav-btn {
          background: rgba(28,84,44,0.82) !important;
          transition: all 0.25s ease;
          backdrop-filter: blur(4px);
        }
        .all-nav-btn:hover:not(:disabled) {
          background: rgba(28,84,44,1) !important;
          transform: scale(1.1);
        }
        .all-nav-btn:disabled { opacity: 0.5; cursor: not-allowed; }
        .all-center { cursor: pointer; }
        .all-center:hover img {
          transform: scale(1.015) !important;
          box-shadow: 0 20px 56px rgba(0,0,0,0.35) !important;
        }
        @media (max-width: 991px) {
          #all-project-mobile::-webkit-scrollbar { display: none; }
        }
      `}</style>
    </section>
  );
};

const s = {
  section: {
    padding: "56px 0 48px",
    backgroundColor: "#e8f5e9",
    position: "relative",
    overflow: "hidden",
    fontFamily: fonts.Noto,
    backgroundImage: "radial-gradient(#c8e6c9 10%, transparent 10%), radial-gradient(#c8e6c9 10%, transparent 10%)",
    backgroundSize: "20px 20px",
    backgroundPosition: "0 0, 10px 10px",
  },
  header: {
    textAlign: "center",
    marginBottom: 36,
  },
  eyebrow: {
    display: "block",
    fontSize: "0.68rem",
    fontWeight: 700,
    letterSpacing: "3px",
    color: "#1C542C",
    marginBottom: 8,
    textTransform: "uppercase",
  },
  title: {
    fontSize: "clamp(24px, 4vw, 36px)",
    fontWeight: 600,
    color: "#1C542C",
    margin: 0,
    fontFamily: fonts.Noto,
  },
  carouselWrap: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 0,
    perspective: "1000px",
    perspectiveOrigin: "center",
    position: "relative",
    maxWidth: 1200,
    margin: "0 auto",
  },
  navBtn: {
    width: 60,
    height: 60,
    borderRadius: "50%",
    border: "2px solid rgba(255,255,255,0.35)",
    color: "#fff",
    fontSize: 30,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 6px 16px rgba(0,0,0,0.3)",
    flexShrink: 0,
    position: "absolute",
    zIndex: 10,
    left: 16,
    lineHeight: 1,
  },
  navBtnRight: {
    left: "auto",
    right: 16,
  },
  sideWrap: {
    flex: "0 0 300px",
    height: 360,
    overflow: "hidden",
    borderRadius: 12,
    cursor: "pointer",
    transformStyle: "preserve-3d",
    marginLeft: -80,
    marginRight: -80,
    position: "relative",
    zIndex: 1,
  },
  sideImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    transition: "all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1)",
    transformStyle: "preserve-3d",
  },
  centerWrap: {
    flex: "0 0 640px",
    height: 460,
    overflow: "hidden",
    borderRadius: 16,
    position: "relative",
    zIndex: 3,
    transformStyle: "preserve-3d",
  },
  centerImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    transition: "all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1)",
    transformStyle: "preserve-3d",
  },
  mobileScroll: {
    display: "flex",
    overflowX: "auto",
    scrollSnapType: "x mandatory",
    WebkitOverflowScrolling: "touch",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
    height: "60vw",
    minHeight: 220,
    maxHeight: 340,
  },
  mobileSlide: {
    minWidth: "100vw",
    flex: "0 0 100vw",
    scrollSnapAlign: "center",
    overflow: "hidden",
  },
  mobileImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  dots: {
    display: "flex",
    justifyContent: "center",
    gap: 8,
    marginTop: 24,
    flexWrap: "wrap",
  },
  dot: {
    width: 8,
    height: 12,
    borderRadius: 60,
    cursor: "pointer",
    transition: "all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1)",
    padding: 0,
  },
};

export default AllProjectsSection;
