// Location-specific SEO content for programmatic location pages.
// Each entry powers a /plots-in-[slug] route.

export const locations = [
  {
    slug: "kumbalagodu",
    name: "Kumbalagodu",
    displayName: "Kumbalagodu, Bangalore",
    corridor: "Mysore Road",
    distance: "22 km from Bangalore city centre",
    h1: "Residential & Industrial Plots in Kumbalagodu, Bangalore",
    intro:
      "Kumbalagodu is one of South Bangalore's fastest-growing real estate micro-markets, located along the Mysore Road–NICE Road corridor. The area offers excellent connectivity to Kengeri, Mysore Road, and the Peripheral Ring Road, making it a strategic choice for both residential homebuyers and industrial investors.",
    whyInvest: [
      "Direct access to Mysore Road & NICE Road freight corridor",
      "Home to Kumbalagodu Industrial Area — one of Bangalore's key manufacturing hubs",
      "Growing social infrastructure: schools, hospitals, and retail within 5 km",
      "Strong price appreciation — 18–22% CAGR over the last 5 years",
      "BMRDA & KIADB approvals ensure legally clear land titles",
    ],
    infrastructure: [
      "BESCOM power supply — both LT and HT connections available",
      "BWSSB piped water supply",
      "Asphalted internal roads connecting to Mysore Road",
      "Underground drainage and street lighting",
      "Kengeri Metro Station within 8 km",
    ],
    nearbyLandmarks: [
      "Kengeri Bus Terminus — 6 km",
      "Global Village Tech Park — 6 km",
      "Cloudnine Hospital Kengeri — 4 km",
      "Gopalan Innovation Mall — 7 km",
      "NICE Road Junction — 3 km",
    ],
    plotTypes: ["Residential Plots", "Industrial Plots"],
    priceRange: "₹18–35 lakh per site (residential)",
    seoTitle: "Plots for Sale in Kumbalagodu Bangalore | BMRDA Approved Sites",
    seoDescription:
      "Buy BMRDA-approved residential and industrial plots in Kumbalagodu, Bangalore. Keerthi Builders offers 30×40 to 40×60 sq.ft sites with clear titles near Mysore Road. 5 completed projects. Call now.",
    seoKeywords:
      "plots in kumbalagodu, sites for sale kumbalagodu, residential plots kumbalagodu bangalore, industrial plots kumbalagodu, bmrda approved plots kumbalagodu, kumbalagodu real estate, land for sale kumbalagodu",
    schema: {
      areaCode: "560074",
      lat: 12.8494,
      lng: 77.469,
    },
  },
  {
    slug: "bidadi",
    name: "Bidadi",
    displayName: "Bidadi, Ramanagara District",
    corridor: "Mysore Road",
    distance: "35 km from Bangalore city centre",
    h1: "Residential Plots in Bidadi | BMRDA-Approved Sites Near Bangalore",
    intro:
      "Bidadi is an emerging residential and industrial town on the Bangalore–Mysore Highway, approximately 35 km from Bangalore. With the proposed RRTS (Rapid Rail Transit System) corridor and expanding industrial zones like the Toyota manufacturing plant and Bidadi Industrial Area, land values in Bidadi are rising steadily.",
    whyInvest: [
      "Proposed RRTS Bangalore–Mysore corridor passes through Bidadi",
      "Toyota Kirloskar Motor plant drives employment and residential demand",
      "Bidadi Industrial Area — over 400 factories employing thousands",
      "Peaceful, pollution-free environment ideal for families",
      "Affordable entry point compared to inner Bangalore suburbs",
    ],
    infrastructure: [
      "National Highway 275 (Bangalore–Mysore Expressway) connectivity",
      "Bidadi Railway Station on Bangalore–Mysore line",
      "BESCOM and BWSSB utilities in place",
      "Expanding civic infrastructure — new schools and hospitals opening",
      "NICE Road access for quick Bangalore connectivity",
    ],
    nearbyLandmarks: [
      "Bidadi Railway Station — 2 km",
      "Toyota Kirloskar Motor Plant — 4 km",
      "Bidadi Industrial Area — 3 km",
      "Presidency International School — 2 km",
      "Bangalore–Mysore Expressway Access — 1 km",
    ],
    plotTypes: ["Residential Plots"],
    priceRange: "₹12–22 lakh per site",
    seoTitle: "Residential Plots in Bidadi | Sites for Sale Near Mysore Road",
    seoDescription:
      "Buy approved residential plots in Bidadi, near Bangalore. Keerthi Builders offers 30×40 and 30×50 sq.ft sites with clear titles near Mysore Road Expressway. Growing corridor. Call now.",
    seoKeywords:
      "plots in bidadi, sites for sale bidadi, residential plots bidadi, land for sale bidadi bangalore, bidadi real estate, plots near mysore road bidadi, affordable plots near bangalore",
    schema: {
      areaCode: "562109",
      lat: 12.7993,
      lng: 77.2898,
    },
  },
  {
    slug: "mysore-road",
    name: "Mysore Road",
    displayName: "Mysore Road Corridor, Bangalore",
    corridor: "Mysore Road",
    distance: "15–40 km from Bangalore city centre",
    h1: "Plots Near Mysore Road Bangalore | Residential Sites for Sale",
    intro:
      "The Mysore Road corridor — spanning from Kengeri to Bidadi and beyond — is one of Bangalore's most active real estate growth zones. Excellent highway connectivity, proximity to industrial hubs, and strong rental demand from IT and manufacturing workers make this corridor a top choice for plot investors in 2024–25.",
    whyInvest: [
      "NICE Road and Peripheral Ring Road create a strong connectivity grid",
      "Established residential neighbourhoods: Kengeri, RR Nagar, Kumbalagodu",
      "Industrial demand from Peenya, Kumbalagodu, and Bidadi Industrial Areas",
      "Upcoming metro extension and RRTS projects will boost land values",
      "Strong rental demand from Global Village Tech Park and Mysore Road IT belt",
    ],
    infrastructure: [
      "6-lane Mysore Road with flyovers and grade separators",
      "Kengeri Metro Station operational",
      "NICE Road expressway for seamless freight movement",
      "BMTC bus routes connecting all major suburbs",
      "Proposed Peripheral Ring Road further enhancing accessibility",
    ],
    nearbyLandmarks: [
      "Kengeri Metro Station — entry point to Namma Metro",
      "Global Village Tech Park — major IT employer",
      "NICE Road Junction — freight and commuter corridor",
      "Orion Mall Rajajinagar — 15 km",
      "Mysore Road ISRO Layout — established suburb",
    ],
    plotTypes: ["Residential Plots", "Industrial Plots"],
    priceRange: "₹15–40 lakh per site",
    seoTitle: "Plots Near Mysore Road Bangalore | BMRDA Sites for Sale",
    seoDescription:
      "Buy BMRDA-approved plots near Mysore Road, Bangalore. Keerthi Builders offers residential and industrial sites in Kumbalagodu, Bidadi, and nearby areas. Clear titles. 20+ years experience. Call now.",
    seoKeywords:
      "plots near mysore road bangalore, sites for sale mysore road, residential plots mysore road, land for sale near mysore road, plots kengeri bangalore, kumbalagodu bidadi mysore road plots",
    schema: {
      areaCode: "560074",
      lat: 12.8744,
      lng: 77.3882,
    },
  },
];

export const getLocationBySlug = (slug) => locations.find((l) => l.slug === slug);
