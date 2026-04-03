import { Link } from 'react-router-dom';
import { allProjects } from '../../data/projectsData';
import SEO from '../../components/SEO/SEO';

const SITE_URL = 'https://www.keerthibuilders.com';

const BMRDAPage = () => {
  const approvedProjects = allProjects.filter((p) =>
    p.specs?.approvals?.includes('BMRDA') || p.specs?.approvals?.includes('KIADB')
  );

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is BMRDA approval for plots in Bangalore?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'BMRDA (Bangalore Metropolitan Region Development Authority) approval means the layout has been officially sanctioned by the authority, ensuring legal compliance, proper land use, and clear ownership. BMRDA-approved plots are eligible for bank loans and have marketable titles.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why should I buy a BMRDA-approved plot?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'BMRDA-approved plots offer legal security, clear titles, bank loan eligibility, and protection against encroachment or government acquisition. They also have better resale value than unapproved or revenue land.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between BMRDA and BDA plots?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'BDA (Bangalore Development Authority) develops layouts within Bruhat Bengaluru Mahanagara Palike limits. BMRDA covers the wider Bangalore Metropolitan Region — areas outside BBMP but within 40 km of the city. Both offer legally approved plots with clear titles.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are Keerthi Builders plots BMRDA approved?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, all Keerthi Builders residential layouts have BMRDA approval along with BWSSB water and BESCOM power connections. Commercial projects have KIADB approval. All projects include clear legal documentation and ready-to-register sale deeds.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'BMRDA Approved Plots by Keerthi Builders',
      itemListElement: approvedProjects.map((p, i) => ({
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
        { '@type': 'ListItem', position: 3, name: 'BMRDA Approved Plots', item: `${SITE_URL}/bmrda-approved-plots-bangalore` },
      ],
    },
  ];

  const faqs = [
    {
      q: 'What is BMRDA approval?',
      a: 'BMRDA (Bangalore Metropolitan Region Development Authority) approves residential layouts outside BBMP limits but within the 40 km Bangalore Metro Region. Approval confirms legal land use, clear survey numbers, proper demarcation, and infrastructure compliance.',
    },
    {
      q: 'What documents should I verify?',
      a: 'Verify the BMRDA Layout Plan approval letter, Encumbrance Certificate (EC), Khata Certificate, Survey sketch from the Revenue Department, and the Sale Deed. Keerthi Builders provides all these documents upfront.',
    },
    {
      q: 'Can I get a bank loan on BMRDA plots?',
      a: 'Yes. BMRDA-approved plots are eligible for plot purchase loans from all major nationalised and private banks including SBI, HDFC, ICICI, and Axis Bank. Typically 70–80% of plot value is financed.',
    },
    {
      q: 'What is KIADB approval for industrial plots?',
      a: 'KIADB (Karnataka Industrial Areas Development Board) approves industrial layouts. Keerthi Builders\' commercial projects like KTM Industal carry KIADB approval, ensuring legal compliance for manufacturing and warehousing use.',
    },
    {
      q: 'Is revenue land risky to buy?',
      a: 'Revenue land (agricultural/patta land without layout approval) carries higher legal risk — no guaranteed roads, drainage, or utilities, and may face government acquisition. Always prefer BMRDA/BDA/KIADB approved layouts for safety.',
    },
  ];

  return (
    <>
      <SEO
        title="BMRDA Approved Plots in Bangalore | Legal Sites for Sale | Keerthi Builders"
        description="Buy BMRDA-approved residential plots in Bangalore. Keerthi Builders offers legally clear sites in Kumbalagodu, Bidadi & South Bangalore. Bank loan eligible. 25+ years experience."
        keywords="bmrda approved plots bangalore, bmrda sites for sale bangalore, legal plots bangalore, bank loan eligible plots bangalore, clear title plots bangalore, bmrda layout bangalore"
        canonical={`${SITE_URL}/bmrda-approved-plots-bangalore`}
        schema={schema}
      />

      <div style={s.page}>
        <div style={s.breadcrumbBar}>
          <div style={s.container}>
            <Link to="/" style={s.bcLink}>Home</Link> &rsaquo;&nbsp;
            <Link to="/project" style={s.bcLink}>Projects</Link> &rsaquo;&nbsp;
            <span>BMRDA Approved Plots</span>
          </div>
        </div>

        <div style={s.hero}>
          <div style={s.container}>
            <p style={s.eyebrow}>100% Legal · Bank Loan Eligible · Clear Titles</p>
            <h1 style={s.h1}>BMRDA-Approved Residential Plots in Bangalore</h1>
            <p style={s.heroText}>
              Every Keerthi Builders project comes with full BMRDA or KIADB approval, transparent documentation, and ready-to-register sale deeds — giving you complete peace of mind before you invest.
            </p>
            <div style={s.heroActions}>
              <a href="tel:+919902876666" style={s.btnPrimary}>Call: +91 99028 76666</a>
              <Link to="/project" style={s.btnOutline}>Browse All Projects</Link>
            </div>
          </div>
        </div>

        <div style={s.container}>
          <div style={s.statsRow}>
            {[
              { n: '9+', l: 'BMRDA/KIADB Projects' },
              { n: '500+', l: 'Plots Delivered' },
              { n: '2000+', l: 'Happy Customers' },
              { n: '25+', l: 'Years of Trust' },
            ].map((s2, i) => (
              <div key={i} style={s.statCard}>
                <div style={s.statNum}>{s2.n}</div>
                <div style={s.statLabel}>{s2.l}</div>
              </div>
            ))}
          </div>

          {/* What BMRDA means */}
          <section style={s.section}>
            <h2 style={s.h2}>What Does BMRDA Approval Mean for You?</h2>
            <div style={s.benefitsGrid}>
              {[
                { icon: '🏛️', title: 'Legal Security', desc: 'Layout sanctioned by a government authority. Protected from encroachment and disputes.' },
                { icon: '🏦', title: 'Bank Loan Eligible', desc: 'All major banks finance BMRDA-approved plots — SBI, HDFC, ICICI, Axis and more.' },
                { icon: '📄', title: 'Clear Title', desc: 'Encumbrance-free land with clean survey records and no hidden liabilities.' },
                { icon: '💧', title: 'Utility Connections', desc: 'BWSSB water and BESCOM power connections are mandated in approved layouts.' },
                { icon: '📈', title: 'Better Resale Value', desc: 'Approved plots command 20–30% premium over unapproved land in same location.' },
                { icon: '🔑', title: 'Ready-to-Register', desc: 'Sale deed can be registered at Sub-Registrar office immediately on purchase.' },
              ].map((b, i) => (
                <div key={i} style={s.benefitCard}>
                  <div style={s.benefitIcon}>{b.icon}</div>
                  <h3 style={s.benefitTitle}>{b.title}</h3>
                  <p style={s.benefitDesc}>{b.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section style={s.section}>
            <h2 style={s.h2}>Our BMRDA & KIADB Approved Projects</h2>
            <div style={s.grid}>
              {approvedProjects.map((p) => (
                <Link key={p.id} to={`/project/${p.id}`} style={s.card}>
                  <img src={p.image} alt={p.name} style={s.img} loading="lazy" />
                  <div style={s.cardBody}>
                    <span style={{ ...s.badge, background: p.status === 'ongoing' ? '#1A662F' : '#555' }}>
                      {p.status === 'ongoing' ? 'Available' : 'Completed'}
                    </span>
                    <h3 style={s.cardTitle}>{p.name}</h3>
                    <p style={s.cardLoc}>{p.location}</p>
                    <p style={s.cardApproval}>{p.specs?.approvals}</p>
                    <span style={s.viewLink}>View Project &rarr;</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section style={s.section}>
            <h2 style={s.h2}>Frequently Asked Questions</h2>
            <div style={s.faqList}>
              {faqs.map((faq, i) => (
                <div key={i} style={s.faqItem}>
                  <h3 style={s.faqQ}>{faq.q}</h3>
                  <p style={s.faqA}>{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section style={s.ctaBox}>
            <h2 style={s.ctaTitle}>Need Help Verifying a Plot?</h2>
            <p style={s.ctaText}>Our legal team will walk you through every document before you invest. Call us for a free consultation.</p>
            <a href="tel:+919902876666" style={s.btnPrimary}>Call +91 99028 76666</a>
          </section>

          <section style={s.section}>
            <h2 style={s.h2}>Explore by Location</h2>
            <div style={s.linkGrid}>
              <Link to="/plots-in-kumbalagodu" style={s.locLink}>Plots in Kumbalagodu</Link>
              <Link to="/plots-in-bidadi" style={s.locLink}>Plots in Bidadi</Link>
              <Link to="/plots-near-mysore-road" style={s.locLink}>Plots near Mysore Road</Link>
              <Link to="/30x40-plots-bangalore" style={s.locLink}>30×40 Plots</Link>
              <Link to="/30x50-plots-bangalore" style={s.locLink}>30×50 Plots</Link>
              <Link to="/40x60-plots-bangalore" style={s.locLink}>40×60 Plots</Link>
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
  hero: { background: 'linear-gradient(135deg, #1A662F, #0f3d1c)', color: '#fff', padding: '60px 0 50px' },
  eyebrow: { fontSize: 12, color: '#a7d9b3', fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 8 },
  h1: { fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontWeight: 800, margin: '0 0 16px' },
  heroText: { color: '#c8e6cc', fontSize: '0.95rem', lineHeight: 1.7, maxWidth: 700, marginBottom: 28 },
  heroActions: { display: 'flex', gap: 12, flexWrap: 'wrap' },
  btnPrimary: { background: '#fff', color: '#1A662F', padding: '12px 28px', borderRadius: 50, fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' },
  btnOutline: { background: 'transparent', color: '#fff', padding: '12px 28px', borderRadius: 50, fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', border: '2px solid rgba(255,255,255,0.5)' },
  statsRow: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 16, margin: '32px 0' },
  statCard: { background: '#fff', borderRadius: 12, padding: '20px 16px', textAlign: 'center', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', border: '1px solid #e8f5eb' },
  statNum: { fontSize: '1.4rem', fontWeight: 800, color: '#1A662F', marginBottom: 4 },
  statLabel: { fontSize: '0.75rem', color: '#888' },
  section: { margin: '40px 0' },
  h2: { fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', fontWeight: 700, color: '#111', marginBottom: 20 },
  benefitsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 20 },
  benefitCard: { background: '#fff', borderRadius: 12, padding: 20, boxShadow: '0 2px 10px rgba(0,0,0,0.06)', border: '1px solid #eef2ee' },
  benefitIcon: { fontSize: 28, marginBottom: 10 },
  benefitTitle: { fontSize: '0.95rem', fontWeight: 700, color: '#111', margin: '0 0 6px' },
  benefitDesc: { fontSize: '0.82rem', color: '#666', lineHeight: 1.5, margin: 0 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: 20 },
  card: { background: '#fff', borderRadius: 12, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.07)', textDecoration: 'none', color: 'inherit', display: 'block' },
  img: { width: '100%', height: 155, objectFit: 'cover', display: 'block' },
  cardBody: { padding: 14 },
  badge: { display: 'inline-block', color: '#fff', fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 50, marginBottom: 6 },
  cardTitle: { fontSize: '0.93rem', fontWeight: 700, color: '#111', margin: '0 0 3px' },
  cardLoc: { fontSize: '0.77rem', color: '#888', margin: '0 0 4px' },
  cardApproval: { fontSize: '0.72rem', color: '#1A662F', fontWeight: 600, margin: '0 0 8px' },
  viewLink: { fontSize: '0.8rem', color: '#1A662F', fontWeight: 700 },
  faqList: { display: 'flex', flexDirection: 'column', gap: 0 },
  faqItem: { borderBottom: '1px solid #e8e8e8', padding: '18px 0' },
  faqQ: { fontSize: '0.95rem', fontWeight: 700, color: '#1A662F', margin: '0 0 6px' },
  faqA: { fontSize: '0.88rem', color: '#555', lineHeight: 1.6, margin: 0 },
  ctaBox: { background: 'linear-gradient(135deg, #1A662F, #0f3d1c)', borderRadius: 16, padding: '40px 32px', textAlign: 'center', margin: '40px 0' },
  ctaTitle: { color: '#fff', fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)', fontWeight: 800, marginBottom: 12 },
  ctaText: { color: '#c8e6cc', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: 24, maxWidth: 540, margin: '0 auto 24px' },
  linkGrid: { display: 'flex', flexWrap: 'wrap', gap: 10 },
  locLink: { background: '#f0f7f2', color: '#1A662F', padding: '8px 18px', borderRadius: 50, fontSize: '0.83rem', fontWeight: 600, textDecoration: 'none', border: '1px solid #c8e6c9' },
};

export default BMRDAPage;
