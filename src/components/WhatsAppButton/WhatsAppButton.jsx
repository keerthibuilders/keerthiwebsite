import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const WhatsAppPage = () => {
  const whatsappNumber = "919742063580"; 
  const message =
    "Hello! I am interested in your properties. Can you please provide more information?";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div>
      {/* WhatsApp Button */}
      <div
        onClick={handleWhatsAppClick}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#25D366", // Original WhatsApp green color
          borderRadius: "50%",
          width: "40px", // Slightly larger for better visibility
          height: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          boxShadow: "0 4px 12px rgba(37, 211, 102, 0.4)", // Green shadow for glow effect
          zIndex: 1000,
          transition: "all 0.3s ease", // Smooth hover transition
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = "scale(1.1)";
          e.target.style.boxShadow = "0 6px 20px rgba(37, 211, 102, 0.6)";
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = "scale(1)";
          e.target.style.boxShadow = "0 4px 12px rgba(37, 211, 102, 0.4)";
        }}
      >
        <FaWhatsapp size={28} color="#fff" />
      </div>
    </div>
  );
};

export default WhatsAppPage;
