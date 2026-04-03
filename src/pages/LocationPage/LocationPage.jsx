import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import { getLocationBySlug } from '../../data/locationData';
import { allProjects } from '../../data/projectsData';
import SEO from '../../components/SEO/SEO';

const SITE_URL = 'https://www.keerthibuilders.com';

const LocationPage = () => {
  const { slug } = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  // Support both /plots-in-:slug and /plots-near-:slug patterns
  const resolvedSlug = slug || pathname.replace(/^\/(plots-in-|plots-near-)/, '');
  const loc = getLocationBySlug(resolvedSlug);

  if (!loc) {
    navigate('/404', { replace: true });
    return null;
  }

  // Filter projects relevant to this location
  const relatedProjects = allProjects.filter((p) => {
    const loc_lower = loc.name.toLowerCase();
    return (
      p.location.toLowerCase().includes(loc_lower) ||
      p.specs?.location?.toLowerCase().includes(loc_lower) ||
      (loc.slug === 'mysore-road') // Mysore Road shows all
    );
  });

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'RealEstateAgent',
      name: 'Keerthi Builders',
      url: SITE_URL,
      telephone: '+91-99028-76666',
      address: {
        '@type': 'PostalAddress',
        addressLocality: loc.name,
        addressRegion: 'Karnataka',
        addressCountry: 'IN',
        postalCode: loc.schema.areaCode,
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: loc.schema.lat,
        longitude: loc.schema.lng,
      },
      areaServed: loc.displayName,
      description: loc.seoDescription,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: `Keerthi Builders Projects in ${loc.name}`,
      itemListElement: relatedProjects.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: p.name,
        url: `${SITE_URL}/project/${p.id}`,
        description: p.description1.slice(0, 150),
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Projects', item: `${SITE_URL}/project` },
        { '@type': 'ListItem', position: 3, name: loc.name, item: `${SITE_URL}/plots-in-${loc.slug}` },
      ],
    },
  ];

  return (
    <>
      <SEO
        title={loc.seoTitle}
        description={loc.seoDescription}
        keywords={loc.seoKeywords}
        canonical={`${SITE_URL}/plots-in-${loc.slug}`}
        schema={schema}
      />

      <div style={s.page}>
        {/* Breadcrumb */}
        <div style={s.breadcrumbBar}>
          <div style={s.container}>
            <span style={s.breadcrumb}>
              <Link to="/" style={s.bcLink}>Home</Link> &rsaquo;&nbsp;
              <Link to="/project" style={s.bcLink}>Projects</Link> &rsaquo;&nbsp;
              <span style={s.bcCurrent}>{loc.name}</span>
            </span>
          </div>
        </div>

        {/* Hero */}
        <div style={s.hero}>
          <div style={s.container}>
            <p style={s.corridor}>{loc.corridor} Corridor · {loc.distance}</p>
            <h1 style={s.h1}>{loc.h1}</h1>
            <p style={s.intro}>{loc.intro}</p>
            <div style={s.heroActions}>
              <a href="tel:+919902876666" style={s.btnPrimary}>Call: +91 99028 76666</a>
              <a href="https://wa.me/919902876666" style={s.btnOutline} target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
            </div>
          </div>
        </div>

        <div style={s.container}>

          {/* Quick stats */}
          <div style={s.statsRow}>
            <div style={s.statCard}>
              <div style={s.statNum}>{relatedProjects.length}+</div>
              <div style={s.statLabel}>Projects in {loc.name}</div>
            </div>
            <div style={s.statCard}>
              <div style={s.statNum}>{loc.plotTypes.length}</div>
              <div style={s.statLabel}>Property Types</div>
            </div>
            <div style={s.statCard}>
              <div style={s.statNum}>25+</div>
              <div style={s.statLabel}>Years Experience</div>
            </div>
            <div style={s.statCard}>
              <div style={s.statNum}>{loc.priceRange}</div>
              <div style={s.statLabel}>Price Range</div>
            </div>
          </div>

          {/* Projects grid */}
          <section style={s.section}>
            <h2 style={s.h2}>Our Projects in {loc.name}</h2>
            <div style={s.projectsGrid}>
              {relatedProjects.map((p) => (
                <Link key={p.id} to={`/project/${p.id}`} style={s.projectCard}>
                  <div style={s.imgWrap}>
                    <img src={p.image} alt={p.name} style={s.projectImg} loading="lazy" />
                    <span style={{ ...s.badge, background: p.status === 'ongoing' ? '#1A662F' : '#666' }}>
                      {p.status === 'ongoing' ? 'Ongoing' : 'Completed'}
                    </span>
                  </div>
                  <div style={s.cardBody}>
                    <h3 style={s.cardTitle}>{p.name}</h3>
                    <p style={s.cardLocation}>{p.location}</p>
                    <div style={s.specRow}>
                      <span style={s.specTag}>{p.specs?.totalPlots}</span>
                      <span style={s.specTag}>{p.specs?.plotSizes}</span>
                    </div>
                    <p style={s.cardDesc}>{p.description1.slice(0, 100)}…</p>
                    <span style={s.viewBtn}>View Project &rarr;</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Why invest */}
          <section style={s.section}>
            <h2 style={s.h2}>Why Invest in {loc.name}?</h2>
            <ul style={s.list}>
              {loc.whyInvest.map((item, i) => (
                <li key={i} style={s.listItem}>
                  <span style={s.bullet}>✓</span>{item}
                </li>
              ))}
            </ul>
          </section>

          {/* Infrastructure */}
          <section style={s.twoCol}>
            <div>
              <h2 style={s.h2}>Infrastructure & Connectivity</h2>
              <ul style={s.list}>
                {loc.infrastructure.map((item, i) => (
                  <li key={i} style={s.listItem}><span style={s.bullet}>◉</span>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 style={s.h2}>Key Landmarks Nearby</h2>
              <ul style={s.list}>
                {loc.nearbyLandmarks.map((item, i) => (
                  <li key={i} style={s.listItem}><span style={s.bullet}>📍</span>{item}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* CTA */}
          <section style={s.ctaBox}>
            <h2 style={s.ctaTitle}>Looking for Plots in {loc.name}?</h2>
            <p style={s.ctaText}>
              Keerthi Builders has delivered 20+ projects across South Bangalore with 100% legal clarity and on-time handover. Talk to our team today.
            </p>
            <div style={s.ctaActions}>
              <a href="tel:+919902876666" style={s.btnPrimary}>Call Now</a>
              <Link to="/project" style={s.btnOutline}>View All Projects</Link>
            </div>
          </section>

          {/* Internal links to other location pages */}
          <section style={s.section}>
            <h2 style={s.h2}>Explore Other Locations</h2>
            <div style={s.locationLinks}>
              <Link to="/plots-in-kumbalagodu" style={s.locLink}>Plots in Kumbalagodu</Link>
              <Link to="/plots-in-bidadi" style={s.locLink}>Plots in Bidadi</Link>
              <Link to="/plots-near-mysore-road" style={s.locLink}>Plots near Mysore Road</Link>
              <Link to="/30x40-plots-bangalore" style={s.locLink}>30×40 Plots Bangalore</Link>
              <Link to="/bmrda-approved-plots-bangalore" style={s.locLink}>BMRDA Approved Plots</Link>
            </div>
          </section>

        </div>
      </div>
    </>
  );
};

const s = {
  page: { background: '#f9fafb', minHeight: '100vh' },
  container: { maxWidth: 1140, margin: '0 auto', padding: '0 20px' },
  breadcrumbBar: { background: '#fff', borderBottom: '1px solid #eee', padding: '10px 0' },
  breadcrumb: { fontSize: 13, color: '#888' },
  bcLink: { color: '#1A662F', textDecoration: 'none' },
  bcCurrent: { color: '#333' },

  hero: {
    background: 'linear-gradient(135deg, #1A662F 0%, #0f3d1c 100%)',
    color: '#fff',
    padding: '60px 0 50px',
  },
  corridor: { fontSize: 13, color: '#a7d9b3', marginBottom: 8, fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase' },
  h1: { fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontWeight: 800, margin: '0 0 16px', lineHeight: 1.2 },
  intro: { fontSize: '1rem', color: '#c8e6cc', lineHeight: 1.7, maxWidth: 720, marginBottom: 28 },
  heroActions: { display: 'flex', gap: 12, flexWrap: 'wrap' },
  btnPrimary: {
    background: '#fff', color: '#1A662F', padding: '12px 28px',
    borderRadius: 50, fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none',
  },
  btnOutline: {
    background: 'transparent', color: '#fff', padding: '12px 28px',
    borderRadius: 50, fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none',
    border: '2px solid rgba(255,255,255,0.5)',
  },

  statsRow: {
    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
    gap: 16, margin: '32px 0',
  },
  statCard: {
    background: '#fff', borderRadius: 12, padding: '20px 16px',
    textAlign: 'center', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', border: '1px solid #e8f5eb',
  },
  statNum: { fontSize: '1.4rem', fontWeight: 800, color: '#1A662F', marginBottom: 4 },
  statLabel: { fontSize: '0.78rem', color: '#888' },

  section: { margin: '40px 0' },
  twoCol: {
    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: 32, margin: '40px 0',
  },
  h2: { fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)', fontWeight: 700, color: '#111', marginBottom: 20 },

  projectsGrid: {
    display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24,
  },
  projectCard: {
    background: '#fff', borderRadius: 14, overflow: 'hidden',
    boxShadow: '0 2px 16px rgba(0,0,0,0.07)', border: '1px solid #eef2ee',
    textDecoration: 'none', color: 'inherit', display: 'block',
    transition: 'transform 0.2s',
  },
  imgWrap: { position: 'relative', height: 180, overflow: 'hidden' },
  projectImg: { width: '100%', height: '100%', objectFit: 'cover' },
  badge: {
    position: 'absolute', top: 10, left: 10,
    color: '#fff', fontSize: 11, fontWeight: 700,
    padding: '3px 10px', borderRadius: 50,
  },
  cardBody: { padding: '16px' },
  cardTitle: { fontSize: '1rem', fontWeight: 700, color: '#111', margin: '0 0 4px' },
  cardLocation: { fontSize: '0.8rem', color: '#888', margin: '0 0 8px' },
  specRow: { display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 8 },
  specTag: {
    background: '#f0f7f2', color: '#1A662F', fontSize: '0.72rem',
    padding: '3px 8px', borderRadius: 4, fontWeight: 600,
  },
  cardDesc: { fontSize: '0.82rem', color: '#666', lineHeight: 1.5, margin: '0 0 10px' },
  viewBtn: { fontSize: '0.82rem', color: '#1A662F', fontWeight: 700 },

  list: { listStyle: 'none', padding: 0, margin: 0 },
  listItem: {
    display: 'flex', alignItems: 'flex-start', gap: 10,
    padding: '8px 0', borderBottom: '1px solid #f0f0f0',
    fontSize: '0.9rem', color: '#444',
  },
  bullet: { color: '#1A662F', fontWeight: 700, flexShrink: 0 },

  ctaBox: {
    background: 'linear-gradient(135deg, #1A662F, #0f3d1c)',
    borderRadius: 16, padding: '40px 32px', textAlign: 'center',
    margin: '40px 0',
  },
  ctaTitle: { color: '#fff', fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', fontWeight: 800, marginBottom: 12 },
  ctaText: { color: '#c8e6cc', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: 24, maxWidth: 560, margin: '0 auto 24px' },
  ctaActions: { display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' },

  locationLinks: { display: 'flex', flexWrap: 'wrap', gap: 10 },
  locLink: {
    background: '#f0f7f2', color: '#1A662F', padding: '8px 18px',
    borderRadius: 50, fontSize: '0.85rem', fontWeight: 600,
    textDecoration: 'none', border: '1px solid #c8e6c9',
  },
};

export default LocationPage;
