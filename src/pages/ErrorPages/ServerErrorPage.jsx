import { Link } from 'react-router-dom';
import SEO from '../../components/SEO/SEO';

const ServerErrorPage = () => (
  <>
    <SEO
      title="Server Error"
      description="Something went wrong on our end. Please try again in a moment."
      noIndex={true}
    />
    <div style={s.page}>
      <div style={s.pattern} />

      <div style={s.card}>
        <img src="/logo1.png" alt="Keerthi Builders" style={s.logo} />

        <div style={s.codeWrap}>
          <span style={s.code}>5</span>
          <div style={s.icon}>
            <svg viewBox="0 0 64 64" fill="none" style={{ width: 80, height: 80 }}>
              <circle cx="32" cy="32" r="22" fill="#fbbf24" opacity="0.15" stroke="#fbbf24" strokeWidth="2.5"/>
              <line x1="32" y1="20" x2="32" y2="34" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round"/>
              <circle cx="32" cy="42" r="2" fill="#fbbf24"/>
            </svg>
          </div>
          <span style={s.code}>0</span>
        </div>

        <h1 style={s.title}>Something Went Wrong</h1>
        <p style={s.subtitle}>
          Our server ran into an issue. We're already on it.<br />
          Please try again in a few moments.
        </p>

        <div style={s.links}>
          <button onClick={() => window.location.reload()} style={s.primary}>
            Try Again
          </button>
          <Link to="/" style={s.secondary}>Back to Home</Link>
          <Link to="/project" style={s.secondary}>Browse Projects</Link>
        </div>

        <div style={s.contact}>
          <span style={s.contactText}>If this persists, call us directly:</span>
          <a href="tel:+919902876666" style={s.phone}>+91 99028 76666</a>
        </div>
      </div>
    </div>
  </>
);

const s = {
  page: {
    minHeight: '100vh',
    background: '#fefdf8',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px 20px',
    position: 'relative',
    overflow: 'hidden',
  },
  pattern: {
    position: 'absolute',
    inset: 0,
    backgroundImage: 'radial-gradient(#fde68a 1px, transparent 1px)',
    backgroundSize: '28px 28px',
    opacity: 0.5,
    zIndex: 0,
  },
  card: {
    position: 'relative',
    zIndex: 1,
    background: '#fff',
    borderRadius: 20,
    padding: '48px 40px',
    maxWidth: 520,
    width: '100%',
    textAlign: 'center',
    boxShadow: '0 8px 48px rgba(251,191,36,0.12)',
    border: '1px solid #fef3c7',
  },
  logo: {
    height: 48,
    marginBottom: 32,
    objectFit: 'contain',
  },
  codeWrap: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 24,
  },
  code: {
    fontSize: 'clamp(72px, 12vw, 96px)',
    fontWeight: 800,
    color: '#b45309',
    lineHeight: 1,
    letterSpacing: '-4px',
  },
  icon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 'clamp(1.4rem, 3vw, 1.8rem)',
    fontWeight: 700,
    color: '#111',
    margin: '0 0 12px',
  },
  subtitle: {
    color: '#666',
    fontSize: '0.95rem',
    lineHeight: 1.7,
    margin: '0 0 32px',
  },
  links: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'center',
    marginBottom: 28,
  },
  primary: {
    background: '#1A662F',
    color: '#fff',
    border: 'none',
    padding: '10px 24px',
    borderRadius: 50,
    fontWeight: 700,
    fontSize: '0.88rem',
    cursor: 'pointer',
    transition: 'background 0.2s',
  },
  secondary: {
    background: '#f0f7f2',
    color: '#1A662F',
    textDecoration: 'none',
    padding: '10px 20px',
    borderRadius: 50,
    fontWeight: 600,
    fontSize: '0.85rem',
    border: '1px solid #c8e6c9',
  },
  contact: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    flexWrap: 'wrap',
    paddingTop: 20,
    borderTop: '1px solid #f0f0f0',
  },
  contactText: {
    color: '#888',
    fontSize: '0.82rem',
  },
  phone: {
    color: '#1A662F',
    fontWeight: 700,
    fontSize: '0.88rem',
    textDecoration: 'none',
  },
};

export default ServerErrorPage;
