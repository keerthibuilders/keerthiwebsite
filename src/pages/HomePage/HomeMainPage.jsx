import { useEffect } from 'react'
import SEO from '../../components/SEO/SEO'
import HomeHeroSection from './Components/HomeHeroSection'
import HomeProjectSection from './Components/HomeProjectSection'
import HomeTestimonial from './Components/HomeTestimonial'
import HomeOurPropertiesSection from './Components/HomeOurPropertiesSection'
import HomeLocationsSection from './Components/HomeLocationsSection'
import HomeContactSection from './Components/HomeContactSeaction'
import AllProject from './Components/AllProjects'
import SmartInvestment from './Components/SmartLandInvestment'

const HomeMainPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Keerthi Builders",
    "url": "https://www.keerthibuilders.com",
    "logo": "https://www.keerthibuilders.com/logo1.png",
    "description": "Trusted plot developers in South Bangalore since 1998. BMRDA-approved residential layouts in Kumbalagodu & Bidadi. KIADB industrial plots. 500+ families housed.",
    "telephone": "+91-99028-76666",
    "email": "keerthibuildersales@gmail.com",
    "foundingDate": "1998",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "#938, 1st Main Rd, Stage II, Kengeri Satellite Town",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "postalCode": "560060",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 12.9141,
      "longitude": 77.4845
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "areaServed": [
      "Kumbalagodu", "Bidadi", "Kengeri", "Mysore Road", "South Bangalore",
      "Ajjanahalli", "Ramanagara", "Gollahalli-Thittahalli", "Kengeri Satellite Town"
    ],
    "sameAs": [
      "https://www.instagram.com/keerthibuildersblr/",
      "https://www.facebook.com/keerthibuildersbangalore/",
      "https://www.youtube.com/channel/UCgrjUXJh7DfBnhQt3NxPLeA"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Where are Keerthi Builders plots located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Keerthi Builders develops BMRDA-approved residential layouts in Kumbalagodu, Bidadi, Gollahalli-Thittahalli and Shyanumangala — all along the Mysore Road corridor in South Bangalore. Industrial plots are in the Kumbalagodu KIADB industrial zone."
        }
      },
      {
        "@type": "Question",
        "name": "Are Keerthi Builders plots BMRDA approved?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. All residential layouts by Keerthi Builders carry BMRDA (Bangalore Metropolitan Region Development Authority) approval, along with BWSSB water connection, BESCOM electricity and clear encumbrance-free title deeds. Industrial plots are KIADB approved."
        }
      },
      {
        "@type": "Question",
        "name": "What plot sizes are available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Residential plots are available in 30×40, 30×50 and 40×60 sq ft dimensions. Industrial plots vary by project. Contact us at +91 99028 76666 for availability in specific sizes."
        }
      },
      {
        "@type": "Question",
        "name": "How far are the plots from Mysore Road?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Kumbalagodu projects are directly on Mysore Road (NH-275), approximately 18 km from Silk Board junction. Bidadi projects are about 30 km from Bangalore city on the Bangalore–Mysore Expressway."
        }
      },
      {
        "@type": "Question",
        "name": "What is the price of residential plots in Kumbalagodu and Bidadi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Plot prices vary by project, size and location. Keerthi Builders offers competitive pricing with transparent documentation. Call +91 99028 76666 or visit our site for current pricing on specific projects."
        }
      },
      {
        "@type": "Question",
        "name": "Are home loans available on Keerthi Builders plots?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. All Keerthi Builders residential plots are BMRDA-approved with clear titles, making them eligible for home loans from leading banks and housing finance companies."
        }
      },
      {
        "@type": "Question",
        "name": "What amenities are included in Keerthi Builders layouts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All layouts include asphalted internal roads, underground drainage, BWSSB water connection, BESCOM power, street lighting, avenue plantation, children's play area, park and 24/7 gated security."
        }
      },
      {
        "@type": "Question",
        "name": "How do I book a site visit to a Keerthi Builders project?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Call or WhatsApp us at +91 99028 76666, or email keerthibuildersales@gmail.com. Our team will arrange a free site visit at your convenience. You can also fill in the contact form on our website."
        }
      },
      {
        "@type": "Question",
        "name": "How far are Kumbalagodu plots from Bangalore city centre?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Kumbalagodu is approximately 18 km from Silk Board junction via Mysore Road (NH-275), about 30–40 minutes by car. It has excellent connectivity via NICE Road, the Bangalore–Mysore Expressway and the upcoming Kengeri metro extension."
        }
      },
      {
        "@type": "Question",
        "name": "Are there plots near Kengeri metro station?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Keerthi Builders has BMRDA-approved residential plots in Kengeri Satellite Town and nearby areas. Kengeri is the terminus of the Purple Line metro, offering direct connectivity to Majestic, MG Road and Whitefield."
        }
      },
      {
        "@type": "Question",
        "name": "What is the registration process for buying a plot from Keerthi Builders?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our team assists you through the entire process: plot selection, agreement, verification of BMRDA approval and title deed, payment, and sub-registrar registration. All plots carry clear, encumbrance-free titles. We provide full legal documentation support."
        }
      },
      {
        "@type": "Question",
        "name": "Do Keerthi Builders plots have BESCOM and BWSSB connections?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. All Keerthi Builders residential layouts include BESCOM electricity connection, BWSSB water supply, underground drainage, asphalted internal roads and street lighting. Industrial plots include BESCOM high-tension power supply."
        }
      },
      {
        "@type": "Question",
        "name": "What industrial plots are available on Mysore Road?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Keerthi Builders offers KIADB-approved industrial plots in the Kumbalagodu Industrial Estate, Phase 1 and Phase 2. These plots are ideal for manufacturing, warehousing and logistics businesses, with HT power, 40-ft roads and direct access to Mysore Road and NICE Road."
        }
      }
    ]
  };

  return (
    <div>
      <SEO
        title="BMRDA-Approved Residential Plots & Industrial Sites in South Bangalore"
        description="Keerthi Builders – Trusted plot developers in South Bangalore since 1998. BMRDA-approved residential layouts in Kumbalagodu & Bidadi. 30×40, 30×50, 40×60 plots. KIADB industrial sites. Clear titles guaranteed."
        keywords="plots for sale south bangalore, residential plots kumbalagodu, BMRDA approved plots, sites for sale bidadi, 30x40 plots bangalore, plot developers south bangalore, site developers mysore road, residential sites near kengeri, land for sale south bangalore, gated community plots bangalore"
        canonical="https://www.keerthibuilders.com/"
        schema={[orgSchema, faqSchema]}
      />
      <HomeHeroSection />
      <SmartInvestment />
      <HomeProjectSection />
      <HomeOurPropertiesSection />
      <HomeLocationsSection />
      <AllProject />
      <HomeTestimonial />
      <HomeContactSection />
    </div>
  )
}

export default HomeMainPage
