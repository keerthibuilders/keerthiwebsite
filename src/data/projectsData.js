// Central data store for all projects.
// Images use public URL strings (served from /public/).

export const allProjects = [
  // ── RESIDENTIAL – ONGOING ──────────────────────────────────────
  {
    id: "keerthi-infinity-lavish",
    name: "Keerthi Infinity Lavish",
    location: "Gollahalli-Thittahalli, Kumbalagodu, Bangalore",
    property: "Residential Layout",
    status: "ongoing",
    type: "residential",
    tag: "Premium",
    image: "/assets/images/13.webp",
    description1:
      "Keerthi Infinity Lavish is an exclusive residential layout nestled in the serene surroundings of Gollahalli-Thittahalli, Kumbalagodu. Designed to offer premium living with meticulously planned plots, the project blends natural landscapes with modern infrastructure, providing residents a perfect balance of tranquility and urban convenience.",
    description2:
      "With BMRDA-approved layouts, clear legal titles, and transparent documentation, Keerthi Infinity Lavish ensures a completely hassle-free buying experience. The project features wide asphalted roads, underground drainage, BESCOM power, BWSSB water connection, and 24/7 security — making it an ideal investment for your family's future.",
    specs: {
      surveyNumber: "SY NO. 45/2",
      projectType: "Residential Plots",
      totalPlots: "85 Plots",
      plotSizes: "30×40, 30×50, 40×60 Sq.ft",
      approvals: "BMRDA Approved, BWSSB, BESCOM",
      location: "Kumbalagodu, Bangalore North",
    },
    planImage: null,
    gallery: [
      "/assets/images/13.webp",
      "/assets/images/13.webp",
      "/assets/images/13.webp",
      "/assets/images/13.webp",
      "/assets/images/13.webp",
    ],
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15574.12!2d77.46899!3d12.84939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f4c00000001%3A0x0!2sKumbalagodu%2C+Bangalore!5e0!3m2!1sen!2sin!4v1717000000001",
    nearby: {
      Schools: [
        { name: "Kumarans Public School, Kengeri", distance: "3.2 km", time: "10 min" },
        { name: "Delhi Public School, Mysore Road", distance: "5.1 km", time: "15 min" },
        { name: "Vidyashilp Academy", distance: "6.4 km", time: "20 min" },
      ],
      Hospitals: [
        { name: "Cloudnine Hospital, Kengeri", distance: "3.6 km", time: "12 min" },
        { name: "Columbia Asia Hospital, Mysore Road", distance: "4.8 km", time: "15 min" },
        { name: "Narayan Multispeciality Hospital", distance: "7.2 km", time: "22 min" },
      ],
      "Tech Parks": [
        { name: "Global Village Tech Park", distance: "6.2 km", time: "18 min" },
        { name: "Electronic City Phase 1", distance: "16 km", time: "38 min" },
        { name: "Manyata Tech Park", distance: "30 km", time: "55 min" },
      ],
      Shopping: [
        { name: "Gopalan Innovation Mall", distance: "7.1 km", time: "22 min" },
        { name: "Orion Mall, Rajajinagar", distance: "15 km", time: "38 min" },
        { name: "Phoenix Marketcity", distance: "18 km", time: "42 min" },
      ],
    },
  },
  {
    id: "keerthi-infinity-ullahas",
    name: "Keerthi Infinity Ullahas",
    location: "Shyanumangala, Bidadi",
    property: "Residential Layout",
    status: "ongoing",
    type: "residential",
    tag: "New Launch",
    image: "/assets/images/11.webp",
    description1:
      "Keerthi Infinity Ullahas is a thoughtfully planned residential layout located in Shyanumangala, Bidadi — one of Bangalore's fastest-growing corridors. The project offers spacious plots in a calm, pollution-free environment with excellent road connectivity and proximity to key civic amenities.",
    description2:
      "With approved layouts and a clean land title, Ullahas is an excellent choice for homebuyers and investors alike. The project is developed with wide internal roads, avenue plantation, underground utilities, and a dedicated children's play area, creating a vibrant community from the ground up.",
    specs: {
      surveyNumber: "SY NO. 32/1",
      projectType: "Residential Plots",
      totalPlots: "65 Plots",
      plotSizes: "30×40, 30×50 Sq.ft",
      approvals: "BMRDA Approved, BWSSB, BESCOM",
      location: "Shyanumangala, Bidadi",
    },
    planImage: null,
    gallery: [
      "/assets/images/11.webp",
      "/assets/images/11.webp",
      "/assets/images/11.webp",
      "/assets/images/11.webp",
      "/assets/images/11.webp",
    ],
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15620.89!2d77.28981!3d12.79926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae5e3b00000001%3A0x0!2sBidadi%2C+Karnataka!5e0!3m2!1sen!2sin!4v1717000000002",
    nearby: {
      Schools: [
        { name: "Presidency International School, Bidadi", distance: "2.1 km", time: "7 min" },
        { name: "Sri Chaitanya Techno School", distance: "3.4 km", time: "10 min" },
        { name: "The International School Bangalore", distance: "12 km", time: "22 min" },
      ],
      Hospitals: [
        { name: "Bidadi Primary Health Centre", distance: "1.8 km", time: "6 min" },
        { name: "BGS Gleneagles Global Hospital", distance: "15 km", time: "30 min" },
        { name: "Columbia Asia Hospital, Mysore Road", distance: "32 km", time: "50 min" },
      ],
      "Tech Parks": [
        { name: "Bidadi Industrial Area", distance: "2.5 km", time: "8 min" },
        { name: "NICE Road IT Corridor", distance: "12 km", time: "25 min" },
        { name: "Electronic City Phase 1", distance: "38 km", time: "65 min" },
      ],
      Shopping: [
        { name: "Bidadi Local Market", distance: "2.0 km", time: "7 min" },
        { name: "Ramanagara Market", distance: "18 km", time: "30 min" },
        { name: "IKEA Nagasandra", distance: "28 km", time: "45 min" },
      ],
    },
  },
  {
    id: "ktm-infinity-urvi-phase-2",
    name: "KTM Infinity Urvi Phase 2",
    location: "Gollahalli-Thittahalli, Kumbalagodu, Bangalore",
    property: "Residential Layout",
    status: "ongoing",
    type: "residential",
    tag: "Hot Selling",
    image: "/assets/images/12.webp",
    description1:
      "Building on the success of Phase 1, KTM Infinity Urvi Phase 2 brings more premium residential plots to Kumbalagodu's thriving real estate corridor. The second phase offers larger plot configurations, enhanced landscaping, and upgraded infrastructure — all within an already-established community.",
    description2:
      "Phase 2 features a gated township setup with improved amenities, broader roads, and state-of-the-art utilities. BMRDA-approved with all statutory compliances in place, this phase is ideal for those who missed Phase 1 and are looking for a verified, investment-grade residential plot near Bangalore.",
    specs: {
      surveyNumber: "SY NO. 16/4",
      projectType: "Residential Plots",
      totalPlots: "95 Plots",
      plotSizes: "30×40, 30×50, 40×60 Sq.ft",
      approvals: "BMRDA Approved, BWSSB, BESCOM",
      location: "Kumbalagodu, Bangalore West",
    },
    planImage: null,
    gallery: [
      "/assets/images/12.webp",
      "/assets/images/12.webp",
      "/assets/images/12.webp",
      "/assets/images/12.webp",
      "/assets/images/12.webp",
    ],
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15574.12!2d77.46899!3d12.84939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f4c00000002%3A0x0!2sKumbalagodu%2C+Bangalore!5e0!3m2!1sen!2sin!4v1717000000003",
    nearby: {
      Schools: [
        { name: "Kumarans Public School, Kengeri", distance: "3.2 km", time: "10 min" },
        { name: "Delhi Public School, Mysore Road", distance: "5.1 km", time: "15 min" },
        { name: "Vidyashilp Academy", distance: "6.4 km", time: "20 min" },
      ],
      Hospitals: [
        { name: "Cloudnine Hospital, Kengeri", distance: "3.6 km", time: "12 min" },
        { name: "Columbia Asia Hospital, Mysore Road", distance: "4.8 km", time: "15 min" },
        { name: "Narayan Multispeciality Hospital", distance: "7.2 km", time: "22 min" },
      ],
      "Tech Parks": [
        { name: "Global Village Tech Park", distance: "6.2 km", time: "18 min" },
        { name: "Electronic City Phase 1", distance: "16 km", time: "38 min" },
        { name: "Manyata Tech Park", distance: "30 km", time: "55 min" },
      ],
      Shopping: [
        { name: "Gopalan Innovation Mall", distance: "7.1 km", time: "22 min" },
        { name: "Orion Mall, Rajajinagar", distance: "15 km", time: "38 min" },
        { name: "Phoenix Marketcity", distance: "18 km", time: "42 min" },
      ],
    },
  },

  // ── RESIDENTIAL – COMPLETED ─────────────────────────────────────
  {
    id: "ktm-villa-enclave",
    name: "KTM Villa Enclave",
    location: "Gollahalli-Thittahalli, Kumbalagodu, Bangalore",
    property: "Residential Layout",
    status: "completed",
    type: "residential",
    image: "/assets/images/1.webp",
    description1:
      "KTM Villa Enclave is a successfully completed residential layout in Kumbalagodu, Bangalore. Designed with a vision for quality living, the enclave offers well-demarcated plots with all essential amenities already in place — from asphalted roads and underground drainage to BESCOM power and BWSSB water supply.",
    description2:
      "Delivered on schedule and fully occupied, KTM Villa Enclave stands as a testament to Keerthi Builders' commitment to quality and transparency. The project has brought together a thriving community of homeowners who enjoy the peaceful suburban environment with easy access to Bangalore city.",
    specs: {
      surveyNumber: "SY NO. 28/3",
      projectType: "Residential Plots",
      totalPlots: "72 Plots",
      plotSizes: "30×40, 30×50 Sq.ft",
      approvals: "BMRDA Approved, BWSSB, BESCOM",
      location: "Kumbalagodu, Bangalore",
    },
    planImage: null,
    gallery: [
      "/assets/images/1.webp",
      "/assets/images/1.webp",
      "/assets/images/1.webp",
      "/assets/images/1.webp",
      "/assets/images/1.webp",
    ],
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15574.12!2d77.46899!3d12.84939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f4c00000003%3A0x0!2sKumbalagodu%2C+Bangalore!5e0!3m2!1sen!2sin!4v1717000000004",
    nearby: {
      Schools: [
        { name: "Kumarans Public School, Kengeri", distance: "3.2 km", time: "10 min" },
        { name: "Delhi Public School, Mysore Road", distance: "5.1 km", time: "15 min" },
        { name: "Vidyashilp Academy", distance: "6.4 km", time: "20 min" },
      ],
      Hospitals: [
        { name: "Cloudnine Hospital, Kengeri", distance: "3.6 km", time: "12 min" },
        { name: "Columbia Asia Hospital, Mysore Road", distance: "4.8 km", time: "15 min" },
        { name: "Narayan Multispeciality Hospital", distance: "7.2 km", time: "22 min" },
      ],
      "Tech Parks": [
        { name: "Global Village Tech Park", distance: "6.2 km", time: "18 min" },
        { name: "Electronic City Phase 1", distance: "16 km", time: "38 min" },
        { name: "Manyata Tech Park", distance: "30 km", time: "55 min" },
      ],
      Shopping: [
        { name: "Gopalan Innovation Mall", distance: "7.1 km", time: "22 min" },
        { name: "Orion Mall, Rajajinagar", distance: "15 km", time: "38 min" },
        { name: "Phoenix Marketcity", distance: "18 km", time: "42 min" },
      ],
    },
  },
  {
    id: "aps-keerthi-infinity",
    name: "APS Keerthi Infinity",
    location: "Ajjanahalli, Dodda Aladamara, Bangalore",
    property: "Residential Layout",
    status: "completed",
    type: "residential",
    image: "/assets/images/7.webp",
    description1:
      "APS Keerthi Infinity is a completed residential layout located in Ajjanahalli, Dodda Aladamara — a quiet, green suburb of Bangalore. The project was conceived to offer affordable yet quality living spaces with all modern utilities and clear documentation.",
    description2:
      "Successfully handed over to homeowners, APS Keerthi Infinity has become a beloved residential community known for its wide roads, greenery, and well-maintained common areas. The project reflects Keerthi Builders' core philosophy of building trust through transparency and quality.",
    specs: {
      surveyNumber: "SY NO. 11/2",
      projectType: "Residential Plots",
      totalPlots: "60 Plots",
      plotSizes: "30×40, 40×60 Sq.ft",
      approvals: "BMRDA Approved, BWSSB, BESCOM",
      location: "Ajjanahalli, Dodda Aladamara, Bangalore",
    },
    planImage: null,
    gallery: [
      "/assets/images/7.webp",
      "/assets/images/7.webp",
      "/assets/images/7.webp",
      "/assets/images/7.webp",
      "/assets/images/7.webp",
    ],
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15554.55!2d77.51079!3d12.91923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15c600000001%3A0x0!2sRajarajeshwari+Nagar%2C+Bangalore!5e0!3m2!1sen!2sin!4v1717000000005",
    nearby: {
      Schools: [
        { name: "Sri Sri Ravi Shankar Vidya Mandir", distance: "2.8 km", time: "9 min" },
        { name: "Jnana Sweekar Public School", distance: "3.5 km", time: "11 min" },
        { name: "Presidency School, RR Nagar", distance: "5.2 km", time: "16 min" },
      ],
      Hospitals: [
        { name: "Sakra Premium Hospital", distance: "5.2 km", time: "16 min" },
        { name: "Narayana Health City", distance: "6.8 km", time: "20 min" },
        { name: "Columbia Asia Hospital, Whitefield", distance: "16 km", time: "38 min" },
      ],
      "Tech Parks": [
        { name: "Ecospace Business Park", distance: "5.5 km", time: "17 min" },
        { name: "Embassy Golf Links", distance: "8.2 km", time: "22 min" },
        { name: "Electronic City Phase 2", distance: "12 km", time: "28 min" },
      ],
      Shopping: [
        { name: "Total Mall, Mysore Road", distance: "5.4 km", time: "16 min" },
        { name: "Forum Mall, Koramangala", distance: "8.9 km", time: "25 min" },
        { name: "Phoenix Marketcity", distance: "18 km", time: "42 min" },
      ],
    },
  },
  {
    id: "siddeshwara-layout",
    name: "Siddeshwara Layout",
    location: "Gollahalli-Thittahalli, Kumbalagodu, Bangalore",
    property: "Residential Layout",
    status: "completed",
    type: "residential",
    image: "/assets/images/2.webp",
    description1:
      "Siddeshwara Layout is one of Keerthi Builders' flagship completed residential projects in Kumbalagodu. Strategically located with excellent connectivity to Mysore Road and Kengeri, the layout has emerged as a preferred address for families seeking peaceful suburban living.",
    description2:
      "The layout is fully developed with asphalted roads, street lighting, underground utilities, and proper drainage. With all plots handed over and the community fully settled, Siddeshwara Layout is a shining example of Keerthi Builders' delivery excellence and commitment to homeowners.",
    specs: {
      surveyNumber: "SY NO. 19/1",
      projectType: "Residential Plots",
      totalPlots: "80 Plots",
      plotSizes: "30×40, 30×50, 40×60 Sq.ft",
      approvals: "BMRDA Approved, BWSSB, BESCOM",
      location: "Kumbalagodu, Bangalore",
    },
    planImage: null,
    gallery: [
      "/assets/images/2.webp",
      "/assets/images/2.webp",
      "/assets/images/2.webp",
      "/assets/images/2.webp",
      "/assets/images/2.webp",
    ],
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15574.12!2d77.46899!3d12.84939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f4c00000004%3A0x0!2sKumbalagodu%2C+Bangalore!5e0!3m2!1sen!2sin!4v1717000000006",
    nearby: {
      Schools: [
        { name: "Kumarans Public School, Kengeri", distance: "3.2 km", time: "10 min" },
        { name: "Delhi Public School, Mysore Road", distance: "5.1 km", time: "15 min" },
        { name: "Vidyashilp Academy", distance: "6.4 km", time: "20 min" },
      ],
      Hospitals: [
        { name: "Cloudnine Hospital, Kengeri", distance: "3.6 km", time: "12 min" },
        { name: "Columbia Asia Hospital, Mysore Road", distance: "4.8 km", time: "15 min" },
        { name: "Narayan Multispeciality Hospital", distance: "7.2 km", time: "22 min" },
      ],
      "Tech Parks": [
        { name: "Global Village Tech Park", distance: "6.2 km", time: "18 min" },
        { name: "Electronic City Phase 1", distance: "16 km", time: "38 min" },
        { name: "Manyata Tech Park", distance: "30 km", time: "55 min" },
      ],
      Shopping: [
        { name: "Gopalan Innovation Mall", distance: "7.1 km", time: "22 min" },
        { name: "Orion Mall, Rajajinagar", distance: "15 km", time: "38 min" },
        { name: "Phoenix Marketcity", distance: "18 km", time: "42 min" },
      ],
    },
  },
  {
    id: "keerthi-infinity-urvi-phase-1",
    name: "Keerthi Infinity Urvi Phase 1",
    location: "Gollahalli-Thittahalli, Kumbalagodu, Bangalore",
    property: "Residential Layout",
    status: "completed",
    type: "residential",
    image: "/assets/images/3.webp",
    description1:
      "Keerthi Infinity Urvi Phase 1 was the project that put Keerthi Builders on the map as a trusted residential developer in Kumbalagodu. This fully sold-out phase offered premium plots in a well-planned layout with best-in-class infrastructure and legal clarity.",
    description2:
      "Phase 1 has been fully delivered and the community is thriving. The success of this phase — with 100% handover and happy homeowners — paved the way for KTM Infinity Urvi Phase 2. It remains one of the most sought-after completed projects in the Kumbalagodu micro-market.",
    specs: {
      surveyNumber: "SY NO. 16/3",
      projectType: "Residential Plots",
      totalPlots: "120 Plots",
      plotSizes: "30×40, 30×50, 40×60 Sq.ft",
      approvals: "BMRDA Approved, BWSSB, BESCOM",
      location: "Byalalu, Bangalore North",
    },
    planImage: null,
    gallery: [
      "/assets/images/3.webp",
      "/assets/images/3.webp",
      "/assets/images/3.webp",
      "/assets/images/3.webp",
      "/assets/images/3.webp",
    ],
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15574.12!2d77.46899!3d12.84939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f4c00000005%3A0x0!2sKumbalagodu%2C+Bangalore!5e0!3m2!1sen!2sin!4v1717000000007",
    nearby: {
      Schools: [
        { name: "Kumarans Public School, Kengeri", distance: "3.2 km", time: "10 min" },
        { name: "Delhi Public School, Mysore Road", distance: "5.1 km", time: "15 min" },
        { name: "Vidyashilp Academy", distance: "6.4 km", time: "20 min" },
      ],
      Hospitals: [
        { name: "Cloudnine Hospital, Kengeri", distance: "3.6 km", time: "12 min" },
        { name: "Columbia Asia Hospital, Mysore Road", distance: "4.8 km", time: "15 min" },
        { name: "Narayan Multispeciality Hospital", distance: "7.2 km", time: "22 min" },
      ],
      "Tech Parks": [
        { name: "Global Village Tech Park", distance: "6.2 km", time: "18 min" },
        { name: "Electronic City Phase 1", distance: "16 km", time: "38 min" },
        { name: "Manyata Tech Park", distance: "30 km", time: "55 min" },
      ],
      Shopping: [
        { name: "Gopalan Innovation Mall", distance: "7.1 km", time: "22 min" },
        { name: "Orion Mall, Rajajinagar", distance: "15 km", time: "38 min" },
        { name: "Phoenix Marketcity", distance: "18 km", time: "42 min" },
      ],
    },
  },

  // ── COMMERCIAL ──────────────────────────────────────────────────
  {
    id: "ktm-industal-phase-1",
    name: "KTM Industal Phase 1",
    location: "Kumbalagodu, Bangalore",
    property: "Industrial Property",
    status: "completed",
    type: "commercial",
    image: "/assets/images/4.webp",
    description1:
      "KTM Industal Phase 1 is a completed industrial and commercial property development in Kumbalagodu — one of Bangalore's key industrial corridors. Designed to meet the growing demand for organized industrial spaces, Phase 1 offers well-planned industrial plots with excellent road and logistics connectivity.",
    description2:
      "The project has been fully developed and handed over, with all plots now occupied by thriving businesses. KTM Industal Phase 1 features wide internal roads to accommodate heavy vehicles, BESCOM high-tension power connectivity, adequate water supply, and proper effluent drainage — making it a benchmark industrial development.",
    specs: {
      surveyNumber: "SY NO. 52/1",
      projectType: "Industrial Plots",
      totalPlots: "40 Plots",
      plotSizes: "40×60, 50×80, 60×100 Sq.ft",
      approvals: "KIADB Approved, BESCOM HT, BWSSB",
      location: "Kumbalagodu Industrial Area, Bangalore",
    },
    planImage: null,
    gallery: [
      "/assets/images/4.webp",
      "/assets/images/4.webp",
      "/assets/images/4.webp",
      "/assets/images/4.webp",
      "/assets/images/4.webp",
    ],
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15574.12!2d77.46899!3d12.84939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f4c00000006%3A0x0!2sKumbalagodu+Industrial+Area%2C+Bangalore!5e0!3m2!1sen!2sin!4v1717000000008",
    nearby: {
      Schools: [
        { name: "Kumarans Public School, Kengeri", distance: "3.5 km", time: "11 min" },
        { name: "Delhi Public School, Mysore Road", distance: "5.4 km", time: "16 min" },
        { name: "Vidyashilp Academy", distance: "6.8 km", time: "21 min" },
      ],
      Hospitals: [
        { name: "Cloudnine Hospital, Kengeri", distance: "3.9 km", time: "13 min" },
        { name: "Columbia Asia Hospital, Mysore Road", distance: "5.2 km", time: "16 min" },
        { name: "Narayan Multispeciality Hospital", distance: "7.5 km", time: "23 min" },
      ],
      "Tech Parks": [
        { name: "Kumbalagodu Industrial Area", distance: "0.5 km", time: "2 min" },
        { name: "NICE Road Freight Corridor", distance: "2.8 km", time: "8 min" },
        { name: "Peenya Industrial Area", distance: "14 km", time: "30 min" },
      ],
      Shopping: [
        { name: "Kengeri Market", distance: "4.2 km", time: "13 min" },
        { name: "Gopalan Innovation Mall", distance: "7.5 km", time: "23 min" },
        { name: "Orion Mall, Rajajinagar", distance: "16 km", time: "40 min" },
      ],
    },
  },
  {
    id: "ktm-industal-phase-2",
    name: "KTM Industal Phase 2",
    location: "Kumbalagodu, Bangalore",
    property: "Industrial Property",
    status: "completed",
    type: "commercial",
    image: "/assets/images/5.webp",
    description1:
      "KTM Industal Phase 2 expands on the success of Phase 1, offering larger industrial plot configurations in the Kumbalagodu industrial zone. Phase 2 was designed with upgraded infrastructure, wider roads, and enhanced power and water supply to accommodate larger manufacturing and warehousing operations.",
    description2:
      "With all statutory approvals in place and full infrastructure developed, KTM Industal Phase 2 has been handed over and is fully operational. The project stands as a complete industrial township, providing businesses with a ready-to-build environment in one of Bangalore's fastest-growing industrial corridors.",
    specs: {
      surveyNumber: "SY NO. 52/3",
      projectType: "Industrial Plots",
      totalPlots: "35 Plots",
      plotSizes: "50×80, 60×100, 80×120 Sq.ft",
      approvals: "KIADB Approved, BESCOM HT, BWSSB",
      location: "Kumbalagodu Industrial Area, Bangalore",
    },
    planImage: null,
    gallery: [
      "/assets/images/5.webp",
      "/assets/images/5.webp",
      "/assets/images/5.webp",
      "/assets/images/5.webp",
      "/assets/images/5.webp",
    ],
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15574.12!2d77.46899!3d12.84939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f4c00000007%3A0x0!2sKumbalagodu+Industrial+Area%2C+Bangalore!5e0!3m2!1sen!2sin!4v1717000000009",
    nearby: {
      Schools: [
        { name: "Kumarans Public School, Kengeri", distance: "3.5 km", time: "11 min" },
        { name: "Delhi Public School, Mysore Road", distance: "5.4 km", time: "16 min" },
        { name: "Vidyashilp Academy", distance: "6.8 km", time: "21 min" },
      ],
      Hospitals: [
        { name: "Cloudnine Hospital, Kengeri", distance: "3.9 km", time: "13 min" },
        { name: "Columbia Asia Hospital, Mysore Road", distance: "5.2 km", time: "16 min" },
        { name: "Narayan Multispeciality Hospital", distance: "7.5 km", time: "23 min" },
      ],
      "Tech Parks": [
        { name: "Kumbalagodu Industrial Area", distance: "0.5 km", time: "2 min" },
        { name: "NICE Road Freight Corridor", distance: "2.8 km", time: "8 min" },
        { name: "Peenya Industrial Area", distance: "14 km", time: "30 min" },
      ],
      Shopping: [
        { name: "Kengeri Market", distance: "4.2 km", time: "13 min" },
        { name: "Gopalan Innovation Mall", distance: "7.5 km", time: "23 min" },
        { name: "Orion Mall, Rajajinagar", distance: "16 km", time: "40 min" },
      ],
    },
  },
];

export const getProjectById = (id) => allProjects.find((p) => p.id === id);
