import React from 'react';
import keerthiIinfinityUllahas from "../../../../public/assets/images/smart-inv-image.webp"
import sminv1 from "../../../../public/assets/images/101.png"
import sminv2 from "../../../../public/assets/images/102.png"
import sminv3 from "../../../../public/assets/images/103.png"
import sminv4 from "../../../../public/assets/images/104.png"
import sminv5 from "../../../../public/assets/images/105.png"
import sminv6 from "../../../../public/assets/images/106.png"

const SmartLandInvestment = () => {
  const benefits = [
    {
      icon: sminv1,
      text: 'Early access to best pricing, premium options, and exclusive booking priority',
    },
    {
      icon: sminv2,
      text: 'Affordable investment opportunity with minimum entry of only ₹5 Lakhs',
    },
    {
      icon: sminv3,
      text: 'Enjoy fixed 15% returns with secure 12-month investment tenure',
    },
    {
      icon: sminv4,
      text: 'Secure better rates and preferred plots with limited early-bird offers',
    },
    {
      icon: sminv5,
      text: 'Risk-free reservation with refundable token, as per terms and conditions',
    },
    {
      icon: sminv6,
      text: 'Lock in your opportunity early, decide later with flexible investment terms',
    },
  ];

  return (
    <div style={styles.section}>
      <div style={styles.container}>
         <div style={styles.right}>
          <div style={styles.imageBox}>
            <img
              src={keerthiIinfinityUllahas}
              alt="Project Visual"
              style={styles.image}
            />
          </div>
        </div>
        {/* Left Content */}
        <div style={styles.left}>
          <h2 style={styles.title}>Smart Land Investment with Assured Returns</h2>
          <p style={styles.subtitle}>
            Secure early access to a BDA-approved land development project near Mysore Road with just ₹5 Lakhs.
            Enjoy 15% assured returns in 12 months, early-bird pricing, refundable token, and priority plot selection —
            all with zero pressure to commit immediately.
          </p>

          <div style={styles.benefitsGrid}>
            {benefits.map((item, index) => (
              <div style={styles.benefitItem} key={index}>
                <img src={item.icon} alt="icon" style={styles.icon} />
                <p style={styles.benefitText}>{item.text}</p>
              </div>
            ))}
          </div>

          <div style={styles.buttonGroup}>
            <button style={{ ...styles.button, ...styles.outline }}>View more details</button>
            <a href="https://wa.me/919902876666?text=Hello%20I%20would%20like%20more%20information%20" target="_blank" style={{ ...styles.button, ...styles.filled }}>Contact us</a>
          </div>
        </div>

        {/* Right Image Box */}
       
      </div>
    </div>
  );
};

const styles = {
  section: {
    background: '#ffffff',
    padding: '50px 20px',
    fontFamily: 'Segoe UI, sans-serif',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    maxWidth: '1200px',
    margin: '0 auto',
    gap: '40px',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  left: {
    flex: 1,
    minWidth: '300px',
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    minWidth: '300px',
  },
  title: {
    fontSize: '26px',
    color: '#1C542C',
    fontWeight: '700',
    marginBottom: '15px',
  },
  subtitle: {
    fontSize: '14px',
    color: '#1C542C',
fontWeight: '500',
    marginBottom: '30px',
    lineHeight: 1.6,
  },
  benefitsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
    marginBottom: '30px',
  },
  benefitItem: {
    display: 'flex',
    gap: '10px',
    alignItems: 'flex-start',
  },
  icon: {
    width: '40px',
    height: '40px',
  },
  benefitText: {
    fontSize: '14px',
    color: '#222',
    fontWeight:'400',
    lineHeight: '1.5',
  },
  buttonGroup: {
    display: 'flex',
    gap: '15px',
    flexWrap: 'wrap',
  },
  button: {
    padding: '10px 20px',
    borderRadius: '4px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  outline: {
    border: '1px solid #1C542C',
    background: 'transparent',
    color: '#1C542C',
  },
  filled: {
    background: '#1C542C',
    color: '#fff',
    border: 'none',
  },
  imageBox: {
    width: '500px',
    height: '400px',
    backgroundColor: '#f5f5f5',
   
    borderRadius: '8px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
};

export default SmartLandInvestment;
