import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    image: "/assets/images/13.webp",
    name: "Keerthi Infinity Lavish",
    location: "Gollahalli-Thittahalli, Bengaluru",
    tag: "Ongoing",
    tagColor: "#1C542C",
    link: "/project/keerthi-infinity-lavish",
  },
  {
    image: "/assets/images/11.webp",
    name: "Keerthi Infinity Ullahas",
    location: "Shyanumangala, Bidadi",
    tag: "New Launch",
    tagColor: "#e65100",
    link: "/project/keerthi-infinity-ullahas",
  },
  {
    image: "/assets/images/12.webp",
    name: "KTM Infinity Urvi Phase 2",
    location: "Gollahalli-Thittahalli, Bengaluru",
    tag: "Ongoing",
    tagColor: "#1C542C",
    link: "/project/ktm-infinity-urvi-phase-2",
  },
];

const HomeProjectSection = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handle = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setCurrent(c => (c + 1) % projects.length);
    }, 4000);
    return () => clearInterval(t);
  }, [paused]);

  const prev = () => { setCurrent(c => (c - 1 + projects.length) % projects.length); setPaused(true); };
  const next = () => { setCurrent(c => (c + 1) % projects.length); setPaused(true); };

  return (
    <section style={s.section}>
      <h2 style={s.heading}>New Launches & Ongoing Projects</h2>

      <div
        style={{ ...s.track, height: isMobile ? 260 : 420 }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Cards */}
        <div style={s.cards}>
          {projects.map((p, i) => {
            const offset = i - current;
            const isActive = offset === 0;
            const isLeft = offset === -1 || (current === 0 && i === projects.length - 1);
            const isRight = offset === 1 || (current === projects.length - 1 && i === 0);

            const cardW = isMobile ? Math.min(window.innerWidth - 60, 300) : 560;
            const cardH = isMobile ? 220 : 380;

            return (
              <Link
                to={p.link}
                key={i}
                style={{
                  ...s.card,
                  width: cardW,
                  height: cardH,
                  ...(isActive ? s.cardActive : {}),
                  ...(isLeft || isRight ? s.cardSide : {}),
                  ...(!isActive && !isLeft && !isRight ? s.cardHidden : {}),
                  transform: isActive
                    ? "translateX(0) scale(1)"
                    : isLeft
                    ? isMobile ? "translateX(-85%) scale(0.8)" : "translateX(-62%) scale(0.85)"
                    : isRight
                    ? isMobile ? "translateX(85%) scale(0.8)" : "translateX(62%) scale(0.85)"
                    : "translateX(0) scale(0.7)",
                }}
              >
                <img src={p.image} alt={p.name} style={s.img} />
              </Link>
            );
          })}
        </div>

        {/* Arrows */}
        <button style={{ ...s.arrow, left: 16 }} onClick={prev}>
          <ChevronLeft size={22} />
        </button>
        <button style={{ ...s.arrow, right: 16 }} onClick={next}>
          <ChevronRight size={22} />
        </button>
      </div>

      {/* Dots */}
      <div style={s.dots}>
        {projects.map((_, i) => (
          <button
            key={i}
            style={{ ...s.dot, ...(i === current ? s.dotActive : {}) }}
            onClick={() => { setCurrent(i); setPaused(true); }}
          />
        ))}
      </div>
    </section>
  );
};

const s = {
  section: {
    padding: "50px 0 40px",
    background: "#e8f5e9",
    textAlign: "center",
  },
  heading: {
    fontSize: 28,
    fontWeight: 700,
    color: "#1C542C",
    marginBottom: 32,
  },
  track: {
    position: "relative",
    height: 420,
    overflow: "hidden",
    maxWidth: 1100,
    margin: "0 auto",
  },
  cards: {
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    position: "absolute",
    width: 560,
    height: 380,
    borderRadius: 12,
    overflow: "hidden",
    textDecoration: "none",
    transition: "transform 0.5s ease, opacity 0.5s ease",
    opacity: 0.5,
    cursor: "pointer",
  },
  cardActive: {
    opacity: 1,
    zIndex: 3,
    boxShadow: "0 12px 40px rgba(0,0,0,0.22)",
  },
  cardSide: {
    opacity: 0.55,
    zIndex: 2,
  },
  cardHidden: {
    opacity: 0,
    zIndex: 1,
    pointerEvents: "none",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  overlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 55%)",
  },
  info: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    textAlign: "left",
  },
  tag: {
    display: "inline-block",
    fontSize: 11,
    fontWeight: 700,
    color: "#fff",
    padding: "3px 10px",
    borderRadius: 4,
    marginBottom: 8,
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
  name: {
    fontSize: 20,
    fontWeight: 700,
    color: "#fff",
    margin: "0 0 6px",
  },
  loc: {
    fontSize: 13,
    color: "rgba(255,255,255,0.8)",
    margin: 0,
    display: "flex",
    alignItems: "center",
  },
  arrow: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 10,
    background: "rgba(28,84,44,0.85)",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    width: 42,
    height: 42,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  dots: {
    display: "flex",
    justifyContent: "center",
    gap: 8,
    marginTop: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    background: "#bbb",
    border: "none",
    cursor: "pointer",
    padding: 0,
    transition: "background 0.3s",
  },
  dotActive: {
    background: "#1C542C",
    width: 24,
    borderRadius: 4,
  },
};

export default HomeProjectSection;
