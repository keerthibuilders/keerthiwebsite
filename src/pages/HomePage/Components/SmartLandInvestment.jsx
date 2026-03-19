import React from 'react';


const highlights = [
  {
    title: 'BDA & RERA Approved Layouts',
    desc: 'All our projects are fully approved and compliant, giving you complete peace of mind.',
  },
  {
    title: 'Prime South Bangalore Locations',
    desc: 'Strategically located layouts near Mysore Road, Kanakapura Road, and Kumbalgodu.',
  },
  {
    title: 'Clear Title & Legal Assurance',
    desc: 'Every plot comes with clear documentation and end-to-end legal support.',
  },
  {
    title: 'Trusted Legacy Since 1999',
    desc: 'Over two decades of delivering quality land developments across South Bangalore.',
  },
];

const SmartLandInvestment = () => {
  return (
    <div style={styles.section}>
      <div style={styles.container}>
        {/* Left */}
        <div style={styles.left}>
          <p style={styles.tag}>South Bangalore's Trusted Land Developer</p>
          <h2 style={styles.title}>Building Legacies Across South Bangalore for Over 25 Years</h2>
          <p style={styles.subtitle}>
            Keerthi Builders is one of South Bangalore's most respected land developers, known for delivering
            BDA-approved, legally clear, and infrastructure-ready layouts in the city's fastest-growing corridors.
          </p>

          <div style={styles.grid}>
            {highlights.map((item, i) => (
              <div style={styles.card} key={i}>
                <h4 style={styles.cardTitle}>{item.title}</h4>
                <p style={styles.cardDesc}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div style={styles.buttonGroup}>
            <a href="/projects" style={{ ...styles.button, ...styles.filled }}>View Our Projects</a>
            <a href="tel:+919902876666" style={{ ...styles.button, ...styles.outline }}>Call Now</a>
          </div>
        </div>

        {/* Right — Why us callout */}
        <div style={styles.right}>
          <div style={styles.callout}>
            <p style={styles.calloutTag}>Our Focus Areas</p>
            <ul style={styles.focusList}>
              {[
                'Residential Plotted Layouts',
                'Villa & Row House Communities',
                'Commercial Land Development',
'Gated Community Projects',
              ].map((item, i) => (
                <li key={i} style={styles.focusItem}>
                  <span style={styles.dot} />
                  {item}
                </li>
              ))}
            </ul>
            <div style={styles.divider} />
            <p style={styles.calloutNote}>
              All projects are delivered with full legal documentation, BDA/RERA approvals, and ready-to-register titles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  section: {
    background: '#f9f9f6',
    padding: '60px 20px',
    fontFamily: "'Noto Sans', sans-serif",
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    maxWidth: '1200px',
    margin: '0 auto',
    gap: '60px',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  left: {
    flex: 2,
    minWidth: '300px',
  },
  right: {
    flex: 1,
    minWidth: '260px',
    display: 'flex',
    justifyContent: 'center',
  },
  tag: {
    fontSize: '13px',
    fontWeight: '600',
    color: '#8B6914',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginBottom: '10px',
  },
  title: {
    fontSize: '28px',
    color: '#1C542C',
    fontWeight: '700',
    marginBottom: '15px',
    lineHeight: '1.35',
  },
  subtitle: {
    fontSize: '15px',
    color: '#555',
    lineHeight: '1.7',
    marginBottom: '30px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
    marginBottom: '35px',
  },
  card: {
    background: '#fff',
    border: '1px solid #e4e4e4',
    borderRadius: '8px',
    padding: '16px',
  },
  cardTitle: {
    fontSize: '14px',
    fontWeight: '700',
    color: '#1C542C',
    marginBottom: '6px',
  },
  cardDesc: {
    fontSize: '13px',
    color: '#555',
    lineHeight: '1.5',
    margin: 0,
  },
  buttonGroup: {
    display: 'flex',
    gap: '15px',
    flexWrap: 'wrap',
  },
  button: {
    padding: '11px 24px',
    borderRadius: '4px',
    fontWeight: '600',
    fontSize: '14px',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
  },
  filled: {
    background: '#1C542C',
    color: '#fff',
    border: 'none',
  },
  outline: {
    border: '1px solid #1C542C',
    background: 'transparent',
    color: '#1C542C',
  },
  callout: {
    background: '#fff',
    border: '1px solid #dde8e1',
    borderRadius: '12px',
    padding: '32px 28px',
    width: '100%',
    maxWidth: '320px',
  },
  calloutTag: {
    fontSize: '12px',
    fontWeight: '700',
    color: '#8B6914',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginBottom: '18px',
  },
  focusList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  focusItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '14px',
    color: '#222',
    fontWeight: '500',
  },
  dot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: '#1C542C',
    flexShrink: 0,
  },
  divider: {
    height: '1px',
    background: '#e4e4e4',
    margin: '20px 0',
  },
  calloutNote: {
    fontSize: '13px',
    color: '#777',
    lineHeight: '1.6',
    margin: 0,
  },
};

export default SmartLandInvestment;
