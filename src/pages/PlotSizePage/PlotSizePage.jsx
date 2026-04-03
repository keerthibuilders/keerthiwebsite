import { useParams, Link, useNavigate } from 'react-router-dom';
// useParams kept as fallback for direct URL access
import { allProjects } from '../../data/projectsData';
import SEO from '../../components/SEO/SEO';

const SITE_URL = 'https://www.keerthibuilders.com';

const plotSizes = {
  '30x40': {
    label: '30×40',
    sqft: 1200,
    title: '30×40 Plots for Sale in Bangalore | BMRDA Approved Sites',
    description:
      'Buy 30×40 sq.ft BMRDA-approved residential plots in Bangalore. Keerthi Builders offers 1200 sq.ft sites in Kumbalagodu, Bidadi & South Bangalore with clear titles. 25+ years of trust.',
    keywords: '30x40 plots bangalore, 30 40 sites for sale bangalore, 1200 sqft plots bangalore, 30x40 residential plots south bangalore, buy 30x40 plot bangalore',
    h1: '30×40 Residential Plots in Bangalore',
    intro: 'A 30×40 sq.ft plot (1,200 sq.ft) is the most popular plot size in Bangalore for individual house construction. It comfortably accommodates a G+2 house with front setback, parking, and a small garden. Keerthi Builders offers 30×40 BMRDA-approved plots across South Bangalore\'s fastest-growing corridors.',
    benefits: [
      'Ideal for G+2 individual house — 2 BHK per floor with parking',
      'Most liquid plot size — easiest to resell in Bangalore market',
      'Fits standard Vastu-compliant east or north-facing layouts',
      'Lower entry cost compared to 40×60 plots with similar returns',
      'Eligible for home loans from all major banks',
    ],
    construction: [
      'Ground floor: 2 BHK + parking (600 sq.ft built-up)',
      'First floor: 2 BHK independent unit (rental income)',
      'Setbacks: 5ft front, 3ft sides as per BBMP/BMRDA norms',
      'Construction cost estimate: ₹18–25 lakh for G+1',
      'FAR (Floor Area Ratio): 1.75 applicable in BMRDA zones',
    ],
  },
  '30x50': {
    label: '30×50',
    sqft: 1500,
    title: '30×50 Plots for Sale in Bangalore | Residential Sites 1500 Sqft',
    description:
      'Buy 30×50 sq.ft BMRDA-approved residential plots in Bangalore. Keerthi Builders offers 1500 sq.ft sites near Mysore Road, Kumbalagodu & Bidadi with clear legal titles.',
    keywords: '30x50 plots bangalore, 30 50 sites for sale bangalore, 1500 sqft plots bangalore, 30x50 residential plots south bangalore',
    h1: '30×50 Residential Plots in Bangalore',
    intro: 'A 30×50 sq.ft plot (1,500 sq.ft) offers extra depth compared to the standard 30×40, allowing for a larger individual house or additional utility areas. Popular among buyers planning a spacious home with a dedicated car porch, garden, or future expansion room.',
    benefits: [
      'Extra 300 sq.ft depth allows for a larger living space or garden',
      'Suitable for G+2 with more comfortable room sizes',
      'Better resale premium over 30×40 in established areas',
      'Ideal for joint families needing 3 BHK + utility area',
      'Eligible for all bank home loan products',
    ],
    construction: [
      'Ground floor: 3 BHK + car porch (800 sq.ft built-up)',
      'First floor: 2 BHK + terrace access',
      'Setbacks: 5ft front, 3ft sides per BMRDA norms',
      'Construction cost estimate: ₹22–32 lakh for G+1',
      'FAR (Floor Area Ratio): 1.75 in BMRDA zones',
    ],
  },
  '40x60': {
    label: '40×60',
    sqft: 2400,
    title: '40×60 Plots for Sale in Bangalore | 2400 Sqft Sites BMRDA Approved',
    description:
      'Buy 40×60 sq.ft BMRDA-approved residential plots in Bangalore. Keerthi Builders offers premium 2400 sq.ft sites in South Bangalore for spacious homes. Clear titles. Call now.',
    keywords: '40x60 plots bangalore, 40 60 sites for sale bangalore, 2400 sqft plots bangalore, premium plots south bangalore, large plots bangalore',
    h1: '40×60 Premium Residential Plots in Bangalore',
    intro: 'A 40×60 sq.ft plot (2,400 sq.ft) is a premium plot size that allows for expansive individual homes, villa-style construction, or multi-unit development. Keerthi Builders\' 40×60 plots are located in prime corridors of South Bangalore with all approvals in place.',
    benefits: [
      'Largest standard plot size — maximum construction flexibility',
      'Suitable for villa construction, duplex homes, or 4+ BHK',
      'Significant capital appreciation — premium size in premium locations',
      'Option for commercial-residential mixed use in some zones',
      'High rental yield potential from multi-unit development',
    ],
    construction: [
      'Ground floor: 4 BHK + 2 car parking + utility (1200 sq.ft)',
      'Can accommodate a swimming pool or large garden',
      'Setbacks: 6ft front, 4ft sides per BMRDA norms',
      'Construction cost estimate: ₹35–55 lakh for G+1 villa',
      'FAR (Floor Area Ratio): up to 2.5 in select BMRDA zones',
    ],
  },
};

const PlotSizePage = ({ size: sizeProp }) => {
  const { size: sizeParam } = useParams();
  const size = sizeProp || sizeParam;
  const navigate = useNavigate();
  const data = plotSizes[size];

  if (!data) {
    navigate('/404', { replace: true });
    return null;
  }

  const relatedProjects = allProjects.filter((p) =>
    p.specs?.plotSizes?.includes(data.label)
  );

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: `${data.label} Plots by Keerthi Builders`,
      itemListElement: relatedProjects.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: p.name,
        url: `${SITE_URL}/project/${p.id}`,
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Projects', item: `${SITE_URL}/project` },
        { '@type': 'ListItem', position: 3, name: `${data.label} Plots`, item: `${SITE_URL}/${size}-plots-bangalore` },
      ],
    },
  ];

  return (
    <>
      <SEO
        title={data.title}
        description={data.description}
        keywords={data.keywords}
        canonical={`${SITE_URL}/${size}-plots-bangalore`}
        schema={schema}
      />

      <div style={s.page}>
        <div style={s.breadcrumbBar}>
          <div style={s.container}>
            <Link to="/" style={s.bcLink}>Home</Link> &rsaquo;&nbsp;
            <Link to="/project" style={s.bcLink}>Projects</Link> &rsaquo;&nbsp;
            <span style={s.bcCurrent}>{data.label} Plots Bangalore</span>
          </div>
        </div>

        <div style={s.hero}>
          <div style={s.container}>
            <p style={s.eyebrow}>Plot Size Guide · {data.sqft} sq.ft</p>
            <h1 style={s.h1}>{data.h1}</h1>
            <p style={s.heroText}>{data.intro}</p>
            <div style={s.heroActions}>
              <a href="tel:+919902876666" style={s.btnPrimary}>Call: +91 99028 76666</a>
              <Link to="/project" style={s.btnOutline}>View All Projects</Link>
            </div>
          </div>
        </div>

        <div style={s.container}>
          <div style={s.statsRow}>
            <div style={s.statCard}>
              <div style={s.statNum}>{data.label} sq.ft</div>
              <div style={s.statLabel}>Plot Dimensions</div>
            </div>
            <div style={s.statCard}>
              <div style={s.statNum}>{data.sqft}</div>
              <div style={s.statLabel}>Total Sq.ft Area</div>
            </div>
            <div style={s.statCard}>
              <div style={s.statNum}>{relatedProjects.length}+</div>
              <div style={s.statLabel}>Projects with this size</div>
            </div>
            <div style={s.statCard}>
              <div style={s.statNum}>BMRDA</div>
              <div style={s.statLabel}>Approved</div>
            </div>
          </div>

          {relatedProjects.length > 0 && (
            <section style={s.section}>
              <h2 style={s.h2}>Available {data.label} Plots — Our Projects</h2>
              <div style={s.grid}>
                {relatedProjects.map((p) => (
                  <Link key={p.id} to={`/project/${p.id}`} style={s.card}>
                    <img src={p.image} alt={p.name} style={s.img} loading="lazy" />
                    <div style={s.cardBody}>
                      <span style={{ ...s.badge, background: p.status === 'ongoing' ? '#1A662F' : '#666' }}>
                        {p.status === 'ongoing' ? 'Ongoing' : 'Completed'}
                      </span>
                      <h3 style={s.cardTitle}>{p.name}</h3>
                      <p style={s.cardLoc}>{p.location}</p>
                      <p style={s.cardSpec}>{p.specs?.plotSizes} · {p.specs?.totalPlots}</p>
                      <span style={s.viewLink}>View Project &rarr;</span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <div style={s.twoCol}>
            <section>
              <h2 style={s.h2}>Why Choose a {data.label} Plot?</h2>
              <ul style={s.list}>
                {data.benefits.map((b, i) => (
                  <li key={i} style={s.listItem}><span style={s.bullet}>✓</span>{b}</li>
                ))}
              </ul>
            </section>
            <section>
              <h2 style={s.h2}>Construction Potential</h2>
              <ul style={s.list}>
                {data.construction.map((c, i) => (
                  <li key={i} style={s.listItem}><span style={s.bullet}>◉</span>{c}</li>
                ))}
              </ul>
            </section>
          </div>

          <section style={s.ctaBox}>
            <h2 style={s.ctaTitle}>Book Your {data.label} Plot Today</h2>
            <p style={s.ctaText}>
              All our plots come with BMRDA approval, clear legal titles, and ready-to-register documents. Talk to our team to find the right plot for your needs.
            </p>
            <a href="tel:+919902876666" style={s.btnPrimary}>Call +91 99028 76666</a>
          </section>

          <section style={s.section}>
            <h2 style={s.h2}>Explore by Location & Size</h2>
            <div style={s.linkGrid}>
              <Link to="/plots-in-kumbalagodu" style={s.locLink}>Plots in Kumbalagodu</Link>
              <Link to="/plots-in-bidadi" style={s.locLink}>Plots in Bidadi</Link>
              <Link to="/plots-near-mysore-road" style={s.locLink}>Plots near Mysore Road</Link>
              <Link to="/30x40-plots-bangalore" style={s.locLink}>30×40 Plots</Link>
              <Link to="/30x50-plots-bangalore" style={s.locLink}>30×50 Plots</Link>
              <Link to="/40x60-plots-bangalore" style={s.locLink}>40×60 Plots</Link>
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
  breadcrumbBar: { background: '#fff', borderBottom: '1px solid #eee', padding: '10px 20px', fontSize: 13, color: '#888' },
  bcLink: { color: '#1A662F', textDecoration: 'none' },
  bcCurrent: { color: '#333' },
  hero: { background: 'linear-gradient(135deg, #1A662F, #0f3d1c)', color: '#fff', padding: '60px 0 50px' },
  eyebrow: { fontSize: 12, color: '#a7d9b3', fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 8 },
  h1: { fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontWeight: 800, margin: '0 0 16px' },
  heroText: { color: '#c8e6cc', fontSize: '0.95rem', lineHeight: 1.7, maxWidth: 700, marginBottom: 28 },
  heroActions: { display: 'flex', gap: 12, flexWrap: 'wrap' },
  btnPrimary: { background: '#fff', color: '#1A662F', padding: '12px 28px', borderRadius: 50, fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' },
  btnOutline: { background: 'transparent', color: '#fff', padding: '12px 28px', borderRadius: 50, fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', border: '2px solid rgba(255,255,255,0.5)' },
  statsRow: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 16, margin: '32px 0' },
  statCard: { background: '#fff', borderRadius: 12, padding: '20px 16px', textAlign: 'center', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', border: '1px solid #e8f5eb' },
  statNum: { fontSize: '1.3rem', fontWeight: 800, color: '#1A662F', marginBottom: 4 },
  statLabel: { fontSize: '0.75rem', color: '#888' },
  section: { margin: '40px 0' },
  twoCol: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32, margin: '40px 0' },
  h2: { fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', fontWeight: 700, color: '#111', marginBottom: 18 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 20 },
  card: { background: '#fff', borderRadius: 12, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.07)', textDecoration: 'none', color: 'inherit', display: 'block' },
  img: { width: '100%', height: 160, objectFit: 'cover', display: 'block' },
  cardBody: { padding: 14 },
  badge: { display: 'inline-block', color: '#fff', fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 50, marginBottom: 6 },
  cardTitle: { fontSize: '0.95rem', fontWeight: 700, color: '#111', margin: '0 0 4px' },
  cardLoc: { fontSize: '0.78rem', color: '#888', margin: '0 0 4px' },
  cardSpec: { fontSize: '0.78rem', color: '#1A662F', fontWeight: 600, margin: '0 0 8px' },
  viewLink: { fontSize: '0.8rem', color: '#1A662F', fontWeight: 700 },
  list: { listStyle: 'none', padding: 0, margin: 0 },
  listItem: { display: 'flex', alignItems: 'flex-start', gap: 10, padding: '8px 0', borderBottom: '1px solid #f0f0f0', fontSize: '0.88rem', color: '#444' },
  bullet: { color: '#1A662F', fontWeight: 700, flexShrink: 0 },
  ctaBox: { background: 'linear-gradient(135deg, #1A662F, #0f3d1c)', borderRadius: 16, padding: '40px 32px', textAlign: 'center', margin: '40px 0' },
  ctaTitle: { color: '#fff', fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)', fontWeight: 800, marginBottom: 12 },
  ctaText: { color: '#c8e6cc', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: 24, maxWidth: 540, margin: '0 auto 24px' },
  linkGrid: { display: 'flex', flexWrap: 'wrap', gap: 10 },
  locLink: { background: '#f0f7f2', color: '#1A662F', padding: '8px 18px', borderRadius: 50, fontSize: '0.83rem', fontWeight: 600, textDecoration: 'none', border: '1px solid #c8e6c9' },
};

export default PlotSizePage;
