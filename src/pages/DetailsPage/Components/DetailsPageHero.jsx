import { useEffect } from 'react';
import { MapPin } from 'lucide-react';

const DetailsPageHero = ({ project }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.heroSection}>
        <img
          src={project.image}
          alt={project.name}
          style={styles.heroImage}
        />
        <div style={styles.overlay} />

        <div style={styles.infoBar}>
          <div style={styles.infoLeft}>
            <span style={styles.statusBadge}>
              {project.status === 'ongoing' ? (
                <><span style={styles.dot} /> Ongoing</>
              ) : (
                '✓ Completed'
              )}
            </span>
            <h1 style={styles.projectName}>{project.name}</h1>
            <p style={styles.projectLocation}>
              <MapPin size={14} style={{ marginRight: 6, flexShrink: 0 }} />
              {project.location}
            </p>
          </div>
          <div style={styles.infoRight}>
            <span style={styles.propertyType}>{project.property}</span>
          </div>
        </div>
      </div>

      <style>{`
        body { margin: 0; padding: 0; overflow-x: hidden; }
        @media (max-width: 575px) {
          .hero-info-bar { flex-direction: column !important; gap: 12px !important; }
        }
      `}</style>
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    margin: 0,
    padding: 0,
    backgroundColor: '#000',
  },
  heroSection: {
    width: '100%',
    height: '90vh',
    minHeight: 420,
    overflow: 'hidden',
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
    display: 'block',
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.65) 100%)',
    pointerEvents: 'none',
  },
  infoBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: '32px 40px',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 16,
  },
  infoLeft: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  statusBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    background: '#1A662F',
    color: '#fff',
    fontSize: '0.72rem',
    fontWeight: 700,
    letterSpacing: '1px',
    padding: '4px 12px',
    borderRadius: 4,
    width: 'fit-content',
    textTransform: 'uppercase',
  },
  dot: {
    display: 'inline-block',
    width: 7,
    height: 7,
    borderRadius: '50%',
    background: '#4ade80',
    marginRight: 7,
    boxShadow: '0 0 0 2px rgba(74,222,128,0.4)',
  },
  projectName: {
    color: '#fff',
    fontSize: 'clamp(1.6rem, 4vw, 2.8rem)',
    fontWeight: 700,
    margin: 0,
    lineHeight: 1.15,
    textShadow: '0 2px 8px rgba(0,0,0,0.4)',
  },
  projectLocation: {
    color: 'rgba(255,255,255,0.85)',
    fontSize: '0.95rem',
    display: 'flex',
    alignItems: 'center',
    margin: 0,
  },
  infoRight: {
    display: 'flex',
    alignItems: 'center',
  },
  propertyType: {
    background: 'rgba(255,255,255,0.15)',
    backdropFilter: 'blur(8px)',
    border: '1px solid rgba(255,255,255,0.3)',
    color: '#fff',
    fontSize: '0.82rem',
    fontWeight: 600,
    padding: '8px 18px',
    borderRadius: 30,
  },
};

export default DetailsPageHero;