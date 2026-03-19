import { Link } from 'react-router-dom';
import SEO from '../../components/SEO/SEO';

const NotFoundPage = () => (
  <>
    <SEO
      title="Page Not Found"
      description="The page you're looking for doesn't exist. Browse Keerthi Builders' BMRDA-approved residential plots and industrial sites in South Bangalore."
      noIndex={true}
    />
    <div style={s.page}>
      {/* Background pattern */}
      <div style={s.pattern} />

      <div style={s.card}>
        {/* Logo */}
        <img src="/logo1.png" alt="Keerthi Builders" style={s.logo} />

        {/* Error code */}
        <div style={s.codeWrap}>
          <span style={s.code}>4</span>
          <div style={s.icon}>
            <svg viewBox="0 0 64 64" fill="none" style={{ width: 80, height: 80 }}>
              <rect x="8" y="20" width="48" height="36" rx="4" fill="#1A662F" opacity="0.15" stroke="#1A662F" strokeWidth="2.5"/>
              <rect x="20" y="8" width="24" height="16" rx="3" fill="#1A662F" opacity="0.15" stroke="#1A662F" strokeWidth="2.5"/>
              <line x1="24" y1="36" x2="40" y2="36" stroke="#1A662F" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="24" y1="42" x2="34" y2="42" stroke="#1A662F" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </div>
          <span style={s.code}>4</span>
        </div>

        <h1 style={s.title}>Plot Not Found</h1>
        <p style={s.subtitle}>
          Looks like this page has been sold or relocated.<br />
          Let's find you the right plot.
        </p>

        {/* Quick links */}
        <div style={s.links}>
          <Link to="/" style={s.primary}>Go Home</Link>
          <Link to="/residential" style={s.secondary}>Residential Plots</Link>
          <Link to="/commercial" style={s.secondary}>Industrial Plots</Link>
          <Link to="/project" style={s.secondary}>All Projects</Link>
        </div>

        {/* Contact strip */}
        <div style={s.contact}>
          <span style={s.contactText}>Need help finding a plot?</span>
          <a href="tel:+919902876666" style={s.phone}>+91 99028 76666</a>
        </div>
      </div>
    </div>
  </>
);

const s = {
  page: {
    minHeight: '100vh',
    background: '#f8fdf9',
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
    backgroundImage: 'radial-gradient(#c8e6c9 1px, transparent 1px)',
    backgroundSize: '28px 28px',
    opacity: 0.6,
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
    boxShadow: '0 8px 48px rgba(26,102,47,0.12)',
    border: '1px solid #e0f0e5',
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
    color: '#1A662F',
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
    textDecoration: 'none',
    padding: '10px 24px',
    borderRadius: 50,
    fontWeight: 700,
    fontSize: '0.88rem',
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
    transition: 'background 0.2s',
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

export default NotFoundPage;
