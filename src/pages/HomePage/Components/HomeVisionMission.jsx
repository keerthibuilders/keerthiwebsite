import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomeVisionMission = () => {
  return (
    <div className="p-0 mx-auto" style={styles.wrapper}>
      <div className="position-relative" style={styles.imageContainer}>
        <div style={styles.imageWrapper}>
          <img
            src="../../assets/images/interior.jpg"
            alt="Furniture"
            className="img-fluid"
            style={styles.image}
          />
        </div>
        
        {/* Mission Text - Top Left */}
        <div className="position-absolute bg-white p-3 rounded shadow-sm" style={styles.missionBox}>
          <h3 className="mb-2 fw-semibold" style={styles.title}>Mission</h3>
          <p className="mb-0 small lh-base" style={styles.missionText}>
            At Crafting, our mission is to redefine luxury living by crafting exquisite
            furniture that blends timeless elegance with modern functionality. We are
            dedicated to delivering superior craftsmanship, sustainable materials, and
            innovative designs that transform spaces into sophisticated sanctuaries.
          </p>
        </div>
        
        {/* Vision Text - Bottom Right */}
        <div className="position-absolute bg-white p-3 rounded shadow-sm" style={styles.visionBox}>
          <h3 className="mb-2 fw-semibold" style={styles.title}>Vision</h3>
          <p className="mb-0 small lh-base" style={styles.visionText}>
            Our vision is to become a global leader in luxury furniture design, inspiring
            homes with creativity, comfort, and conscious craftsmanship. We envision a
            future where every piece tells a story of elegance, purpose, and innovation.
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    backgroundColor: '#fff',
    borderRadius: '32px',
    fontFamily: 'sans-serif',
    maxWidth: '1200px',
  },
  imageContainer: {
    borderTopLeftRadius: '20px',
    borderBottomRightRadius: '20px',

    overflow: 'hidden',
    position: 'relative',
  },
  imageWrapper: {
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '0',
      left: '0',
      width: '400px',
      height: '150px',
      backgroundColor: 'white',
      borderTopLeftRadius: '20px',
    borderBottomRightRadius: '20px',
      zIndex: 2,
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '0',
      right: '0',
      width: '400px',
      height: '150px',
      backgroundColor: 'white',
      borderTopleftRadius: '40px',
      zIndex: 2,
    },
  },
  image: {
    width: '100%',
    height: '300px',
    display: 'block',
    objectFit: 'cover',
    position: 'relative',
    zIndex: 1,
  },
  missionBox: {
    top: '0px',
    left: '0px',
    maxWidth: '400px',
    borderRadius: '40px',
    zIndex: 3,
  },
  visionBox: {
    bottom: '0px',
    right: '0px',
    borderRadius: '40px',
    maxWidth: '400px',
    zIndex: 3,
  },
  title: {
    fontSize: '16px',
    color: '#1e2e25',
  },
  missionText: {
    fontSize: '13px',
    color: '#333',
  },
  visionText: {
    fontSize: '13px',
    color: '#333',
  },
};

export default HomeVisionMission;
