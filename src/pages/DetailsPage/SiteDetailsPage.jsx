import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import SEO from '../../components/SEO/SEO'
import { motion } from 'framer-motion'
import { getProjectById, allProjects } from '../../data/projectsData'
import {
  MapPin, CheckCircle, ChevronRight,
  ShieldCheck, Zap, Droplets, Lightbulb, Lock,
  Trees, Leaf, Baby, Route,
  Phone, MessageCircle, X, ZoomIn,
  GraduationCap, Hospital, Building2, ShoppingBag, Clock,
  ChevronDown, ChevronUp
} from 'lucide-react'

// ── Amenities Data ───────────────────────────────────────────────
const amenities = [
  { icon: ShieldCheck, label: 'Gated Community',       color: '#1C542C' },
  { icon: Route,       label: 'Concrete Roads',         color: '#1C542C' },
  { icon: Baby,        label: "Children's Play Area",   color: '#1C542C' },
  { icon: Trees,       label: 'Park & Green Belt',      color: '#1C542C' },
  { icon: Droplets,    label: 'Underground Drainage',   color: '#1C542C' },
  { icon: Zap,         label: 'BESCOM Power',           color: '#1C542C' },
  { icon: Droplets,    label: 'BWSSB Water Supply',     color: '#1C542C' },
  { icon: Lightbulb,   label: 'Street Lighting',        color: '#1C542C' },
  { icon: Lock,        label: '24/7 Security',          color: '#1C542C' },
  { icon: Leaf,        label: 'Avenue Plantation',      color: '#1C542C' },
]

// ── Category icons for nearby places ─────────────────────────────
const categoryIcons = {
  Schools:      GraduationCap,
  Hospitals:    Hospital,
  'Tech Parks': Building2,
  Shopping:     ShoppingBag,
}

const WHATSAPP_NUMBER = '919999999999' // update this

// ─────────────────────────────────────────────────────────────────
const SiteDetailsPage = () => {
  const { id } = useParams()
  const project = getProjectById(id)

  const [planFullscreen, setPlanFullscreen] = useState(false)
  const [openAccordion, setOpenAccordion] = useState('Schools')
  const [activeSection, setActiveSection] = useState('project-highlights')

  const navItems = [
    { label: 'Highlights',  id: 'project-highlights' },
    { label: 'Amenities',   id: 'amenities' },
    { label: 'Plan',        id: 'plan' },
    { label: 'Gallery',     id: 'gallery' },
    { label: 'Location',    id: 'location' },
  ]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  useEffect(() => {
    const handleScroll = () => {
      let current = 'project-highlights'
      for (const item of navItems) {
        const el = document.getElementById(item.id)
        if (el && window.scrollY >= el.offsetTop - 145) current = item.id
      }
      setActiveSection(current)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (sectionId) => {
    const el = document.getElementById(sectionId)
    if (!el) return
    window.scrollTo({ top: el.offsetTop - 145, behavior: 'smooth' })
    setActiveSection(sectionId)
  }

  if (!project) {
    return (
      <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
        <h2>Project not found.</h2>
        <Link to="/" style={{ color: '#1C542C', fontWeight: 600, textDecoration: 'none' }}>← Back to Home</Link>
      </div>
    )
  }

  const seoDescription = `${project.description1.slice(0, 145)}…`;
  const seoImage = `https://www.keerthibuilders.com${project.gallery?.[0] || project.image}`;
  const seoCanonical = `https://www.keerthibuilders.com/project/${project.id}`;
  const listingPage = project.type === 'residential' ? 'residential' : 'commercial';
  const listingLabel = project.type === 'residential' ? 'Residential' : 'Commercial';

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "LandForSale",
    "name": project.name,
    "description": seoDescription,
    "image": seoImage,
    "url": seoCanonical,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": project.location,
      "addressRegion": "Karnataka",
      "addressCountry": "IN"
    },
    "offers": {
      "@type": "Offer",
      "availability": project.status === "ongoing"
        ? "https://schema.org/InStock"
        : "https://schema.org/SoldOut",
      "seller": {
        "@type": "RealEstateAgent",
        "name": "Keerthi Builders",
        "url": "https://www.keerthibuilders.com",
        "telephone": "+91-99028-76666"
      }
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.keerthibuilders.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": listingLabel,
        "item": `https://www.keerthibuilders.com/${listingPage}`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": project.name,
        "item": seoCanonical
      }
    ]
  };

  const seoKeywords = project.type === 'residential'
    ? `${project.name}, ${project.location}, BMRDA approved plots ${project.location}, residential plots ${project.location}, plots for sale south bangalore, 30x40 plots bangalore, gated community plots`
    : `${project.name}, ${project.location}, KIADB approved industrial plots, industrial plots kumbalagodu, commercial land mysore road`;

  return (
    <>
      <SEO
        title={`${project.name} – ${project.specs?.plotSizes || ''} Plots in ${project.location}`}
        description={seoDescription}
        keywords={seoKeywords}
        canonical={seoCanonical}
        image={seoImage}
        schema={[projectSchema, breadcrumbSchema]}
      />
      {/* ── HERO ─────────────────────────────────────────────── */}
      <div style={s.hero}>
        <img src={project.image} alt={project.name} style={s.heroImg} />
        <div style={s.heroOverlay} />
        <div style={s.heroBreadcrumb}>
          <Link to="/" style={s.breadLink}>Home</Link>
          <ChevronRight size={14} style={{ margin: '0 4px', opacity: 0.6 }} />
          <Link to={project.type === 'residential' ? '/residential' : '/commercial'} style={s.breadLink}>
            {project.type === 'residential' ? 'Residential' : 'Commercial'}
          </Link>
          <ChevronRight size={14} style={{ margin: '0 4px', opacity: 0.6 }} />
          <span style={{ color: '#fff' }}>{project.name}</span>
        </div>
        <div style={s.heroInfo}>
          <span style={{ ...s.statusBadge, background: project.status === 'ongoing' ? '#1C542C' : '#374151' }}>
            {project.status === 'ongoing'
              ? <><span style={s.dot} />  ONGOING</>
              : <><CheckCircle size={10} style={{ marginRight: 5 }} /> COMPLETED</>}
          </span>
          <h1 style={s.heroTitle}>{project.name}</h1>
          <p style={s.heroLoc}>
            <MapPin size={15} style={{ marginRight: 6 }} />
            {project.location}
          </p>
        </div>
        {/* Scroll cue */}
        <div style={s.scrollCue}>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.4 }}>
            <ChevronDown size={28} color="#fff" />
          </motion.div>
        </div>
      </div>

      {/* ── STICKY NAV ──────────────────────────────────────── */}
      <div style={s.stickyNav}>
        <div style={s.stickyNavInner}>
          {navItems.map(item => (
            <button
              key={item.id}
              style={{ ...s.navBtn, ...(activeSection === item.id ? s.navBtnActive : {}) }}
              onClick={() => scrollTo(item.id)}
            >
              {item.label}
              {activeSection === item.id && <span style={s.navUnderline} />}
            </button>
          ))}
        </div>
      </div>
      {/* ── HIGHLIGHTS ──────────────────────────────────────── */}
      <section id="project-highlights" style={s.section}>
        <div style={s.container}>
          <SectionHeading label="Project Highlights" />
          <div style={s.highlightsGrid} className="details-highlights-grid">
            {/* Description */}
            <div style={s.highlightsLeft}>
              <h2 style={s.highlightsTitle}>
                Introducing <span style={{ color: '#1C542C' }}>{project.name}</span>
              </h2>
              <p style={s.highlightsSub}>{project.property} · {project.location}</p>
              <p style={s.paraText}>{project.description1}</p>
              <p style={s.paraText}>{project.description2}</p>
              <div style={s.specsGrid}>
                {[
                  ['Survey No.', project.specs.surveyNumber],
                  ['Total Plots', project.specs.totalPlots],
                  ['Plot Sizes', project.specs.plotSizes],
                  ['Approvals', project.specs.approvals],
                  ['Project Type', project.specs.projectType],
                  ['Location', project.specs.location],
                ].map(([k, v]) => (
                  <div key={k} style={s.specItem}>
                    <span style={s.specKey}>{k}</span>
                    <span style={s.specVal}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Quick info card */}
            <div style={s.highlightsRight}>
              <div style={s.infoCard} className="details-info-card">
                <div style={s.infoCardHeader}>
                  <h3 style={s.infoCardTitle}>Project Info</h3>
                </div>
                {[
                  { label: 'Status',       value: project.status === 'ongoing' ? 'Ongoing' : 'Completed' },
                  { label: 'Type',         value: project.property },
                  { label: 'Survey No.',   value: project.specs.surveyNumber },
                  { label: 'Total Plots',  value: project.specs.totalPlots },
                  { label: 'Plot Sizes',   value: project.specs.plotSizes },
                  { label: 'Approvals',    value: project.specs.approvals },
                ].map(({ label, value }) => (
                  <div key={label} style={s.infoRow}>
                    <span style={s.infoLabel}>{label}</span>
                    <span style={s.infoValue}>{value}</span>
                  </div>
                ))}
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I'm interested in ${project.name}`}
                  target="_blank"
                  rel="noreferrer"
                  style={s.infoCardBtn}
                >
                  <MessageCircle size={16} style={{ marginRight: 8 }} />
                  Enquire on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AMENITIES ───────────────────────────────────────── */}
      <section id="amenities" style={{ ...s.section, background: '#f5f7f5' }}>
        <div style={s.container}>
          <SectionHeading label="Amenities" />
          <p style={{ ...s.paraText, maxWidth: 560, marginBottom: 40 }}>
            Every plot at {project.name} comes with a complete set of modern infrastructure and community amenities.
          </p>
          <div style={s.amenitiesGrid} className="details-amenities-grid">
            {amenities.map(({ icon: Icon, label }) => (
              <motion.div
                key={label}
                whileHover={{ y: -4 }}
                style={s.amenityCard}
              >
                <div style={s.amenityIconWrap}>
                  <Icon size={26} color="#1C542C" />
                </div>
                <span style={s.amenityLabel}>{label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLAN ─────────────────────────────────────────────── */}
      <section id="plan" style={s.section}>
        <div style={s.container}>
          <SectionHeading label="Master Plan" />
          {project.planImage ? (
            <div style={s.planWrapper}>
              <div style={s.planImgBox} onClick={() => setPlanFullscreen(true)}>
                <img src={project.planImage} alt="Master Plan" style={s.planImg} />
                <div style={s.planOverlay}>
                  <ZoomIn size={28} color="#fff" />
                  <span style={{ color: '#fff', fontWeight: 600, marginTop: 6 }}>Click to Expand</span>
                </div>
              </div>
            </div>
          ) : (
            <div style={s.planComingSoon}>
              <span style={s.planComingSoonText}>Master Plan Coming Soon</span>
              <p style={{ color: '#888', fontSize: '0.88rem', margin: 0 }}>
                Contact us for a detailed site layout and plot map.
              </p>
            </div>
          )}
        </div>
        {/* Fullscreen modal */}
        {planFullscreen && project.planImage && (
          <div style={s.fsOverlay} onClick={() => setPlanFullscreen(false)}>
            <button style={s.fsClose} onClick={() => setPlanFullscreen(false)}>
              <X size={22} />
            </button>
            <img src={project.planImage} alt="Master Plan" style={s.fsImg} onClick={e => e.stopPropagation()} />
          </div>
        )}
      </section>

      {/* ── GALLERY ──────────────────────────────────────────── */}
      <section id="gallery" style={{ ...s.section, background: '#f5f7f5' }}>
        <div style={s.container}>
          <SectionHeading label="Gallery" />
          <div style={s.galleryGrid} className="details-gallery-grid">
            <div style={{ ...s.galleryMain }}>
              <img src={(project.gallery && project.gallery[0]) || project.image} alt={project.name} style={s.galleryImg} />
              <div style={s.galleryBadge}>{project.name}</div>
            </div>
            {[1, 2, 3, 4].map(i => (
              <div key={i} style={s.galleryThumb}>
                <img
                  src={(project.gallery && project.gallery[i]) || project.image}
                  alt={`${project.name} ${i}`}
                  style={{ ...s.galleryImg, filter: 'brightness(0.85)' }}
                />
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 28 }}>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Please share more photos of ${project.name}`}
              target="_blank"
              rel="noreferrer"
              style={s.galleryWABtn}
            >
              <MessageCircle size={16} style={{ marginRight: 8 }} />
              Request More Photos on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── LOCATION ─────────────────────────────────────────── */}
      <section id="location" style={s.section}>
        <div style={s.container}>
          <SectionHeading label="Location & Connectivity" />
          <div style={s.locationGrid} className="details-location-grid">
            {/* Map */}
            <div style={s.mapBox}>
              <iframe
                title={`${project.name} Location`}
                src={project.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
              />
            </div>
            {/* Nearby places accordion */}
            <div style={s.nearbyBox}>
              <h3 style={s.nearbyTitle}>
                <MapPin size={16} style={{ marginRight: 8, color: '#1C542C' }} />
                Know Your Neighbourhood
              </h3>
              {project.nearby && Object.keys(project.nearby).map(cat => {
                const Icon = categoryIcons[cat]
                const isOpen = openAccordion === cat
                return (
                  <div key={cat} style={s.accordionItem}>
                    <button
                      style={s.accordionHeader}
                      onClick={() => setOpenAccordion(isOpen ? null : cat)}
                    >
                      <span style={s.accordionHeaderLeft}>
                        {Icon && <Icon size={15} style={{ marginRight: 8, color: isOpen ? '#1C542C' : '#555' }} />}
                        <span style={{ color: isOpen ? '#1C542C' : '#333', fontWeight: isOpen ? 700 : 500 }}>{cat}</span>
                      </span>
                      {isOpen ? <ChevronUp size={16} color="#1C542C" /> : <ChevronDown size={16} color="#888" />}
                    </button>
                    {isOpen && (
                      <div style={s.accordionBody}>
                        {project.nearby[cat].map(place => (
                          <div key={place.name} style={s.placeRow}>
                            <span style={s.placeName}>{place.name}</span>
                            <span style={s.placeDist}>
                              <Clock size={11} style={{ marginRight: 4 }} />
                              {place.distance} · {place.time}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── RELATED PROJECTS ─────────────────────────────────── */}
      {(() => {
        const related = allProjects
          .filter(p => p.type === project.type && p.id !== project.id)
          .slice(0, 3)
        if (!related.length) return null
        return (
          <section style={{ ...s.section, background: '#f5f7f5' }}>
            <div style={s.container}>
              <SectionHeading label="Related Projects" />
              <div style={s.relatedGrid} className="details-related-grid">
                {related.map(p => (
                  <Link key={p.id} to={`/project/${p.id}`} style={s.relatedCard} className="related-card">
                    <div style={s.relatedImgWrap}>
                      <img src={p.image} alt={p.name} style={s.relatedImg} className="related-card-img" />
                      <div style={s.relatedOverlay} />
                      <span style={{
                        ...s.relatedBadge,
                        background: p.status === 'ongoing' ? '#1C542C' : '#374151',
                      }}>
                        {p.status === 'ongoing' ? 'Ongoing' : 'Completed'}
                      </span>
                    </div>
                    <div style={s.relatedBody}>
                      <span style={s.relatedType}>{p.property}</span>
                      <h4 style={s.relatedName}>{p.name}</h4>
                      <p style={s.relatedLoc}>
                        <MapPin size={12} style={{ marginRight: 4, flexShrink: 0 }} />
                        {p.location}
                      </p>
                      <span style={s.relatedCta}>
                        View Details <ChevronRight size={14} style={{ marginLeft: 2 }} />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )
      })()}

      {/* ── CONTACT CTA ──────────────────────────────────────── */}
      <section style={s.ctaBanner}>
        <div style={s.container}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center' }}
          >
            <h2 style={s.ctaTitle}>Interested in {project.name}?</h2>
            <p style={s.ctaSub}>Talk to our experts today. Get pricing, site visit, and all details.</p>
            <div style={s.ctaBtns}>
              <a href={`tel:+91${WHATSAPP_NUMBER}`} style={s.callBtn}>
                <Phone size={18} style={{ marginRight: 8 }} />
                Call Us Now
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I'm interested in ${project.name} at ${project.location}`}
                target="_blank"
                rel="noreferrer"
                style={s.waBtn}
              >
                <MessageCircle size={18} style={{ marginRight: 8 }} />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        .details-info-card { position: sticky; top: 148px; }
        @media (max-width: 991px) {
          .details-info-card { position: relative !important; top: auto !important; }
        }
        .plan-img-box:hover .plan-hover-overlay { opacity: 1 !important; }
        .gallery-img-box:hover img { transform: scale(1.05); }
        .related-card:hover { transform: translateY(-6px); box-shadow: 0 12px 32px rgba(0,0,0,0.13) !important; }
        .related-card:hover .related-card-img { transform: scale(1.06); }

        @media (max-width: 1100px) {
          .details-amenities-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
        @media (max-width: 991px) {
          .details-related-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .details-highlights-grid { grid-template-columns: 1fr !important; }
          .details-location-grid { grid-template-columns: 1fr !important; }
          .details-gallery-grid {
            grid-template-columns: 1fr 1fr !important;
            grid-template-rows: 220px 220px !important;
          }
          .details-gallery-main { grid-row: auto !important; }
          .details-amenities-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 575px) {
          .details-related-grid { grid-template-columns: 1fr !important; }
          .details-amenities-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .details-specs-grid { grid-template-columns: 1fr !important; }
          .details-cta-btns { flex-direction: column !important; align-items: center; }
          .details-gallery-grid { grid-template-columns: 1fr !important; grid-template-rows: auto !important; }
        }
      `}</style>
    </>
  )
}

// ── Section Heading Component ─────────────────────────────────────
const SectionHeading = ({ label }) => (
  <div style={{ marginBottom: 32 }}>
    <span style={{
      display: 'inline-block',
      background: '#e8f5e9',
      color: '#1C542C',
      fontSize: '0.72rem',
      fontWeight: 700,
      letterSpacing: '1.5px',
      padding: '4px 12px',
      borderRadius: 4,
      textTransform: 'uppercase',
      marginBottom: 10,
    }}>
      {label}
    </span>
    <div style={{ width: 48, height: 3, background: '#1C542C', borderRadius: 2 }} />
  </div>
)

// ── Styles ────────────────────────────────────────────────────────
const s = {
  /* Hero */
  hero: {
    position: 'relative',
    height: '88vh',
    minHeight: 480,
    overflow: 'hidden',
    background: '#000',
    paddingTop: 80,
  },
  heroImg: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
  },
  heroOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.08) 35%, rgba(0,0,0,0.72) 100%)',
    pointerEvents: 'none',
  },
  heroBreadcrumb: {
    position: 'absolute',
    top: 100,
    left: 40,
    display: 'flex',
    alignItems: 'center',
    fontSize: '0.82rem',
    color: 'rgba(255,255,255,0.7)',
    flexWrap: 'wrap',
  },
  breadLink: {
    color: 'rgba(255,255,255,0.7)',
    textDecoration: 'none',
  },
  heroInfo: {
    position: 'absolute',
    bottom: 72,
    left: 40,
    right: 40,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  statusBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    color: '#fff',
    fontSize: '0.68rem',
    fontWeight: 700,
    letterSpacing: '1.5px',
    padding: '4px 12px',
    borderRadius: 4,
    width: 'fit-content',
    textTransform: 'uppercase',
  },
  dot: {
    display: 'inline-block',
    width: 7,
    height: 7,
    borderRadius: '50%',
    background: '#4ade80',
    marginRight: 7,
    boxShadow: '0 0 0 2px rgba(74,222,128,0.35)',
  },
  heroTitle: {
    color: '#fff',
    fontSize: 'clamp(1.8rem, 5vw, 3.2rem)',
    fontWeight: 700,
    margin: 0,
    lineHeight: 1.1,
    textShadow: '0 2px 12px rgba(0,0,0,0.4)',
  },
  heroLoc: {
    color: 'rgba(255,255,255,0.85)',
    fontSize: '0.95rem',
    display: 'flex',
    alignItems: 'center',
    margin: 0,
  },
  scrollCue: {
    position: 'absolute',
    bottom: 24,
    left: '50%',
    transform: 'translateX(-50%)',
    opacity: 0.7,
  },

  /* Sticky nav */
  stickyNav: {
    position: 'sticky',
    top: 84,
    background: '#fff',
    borderBottom: '1px solid #e9ecef',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 16px',
    height: 56,
    gap: 8,
    zIndex: 1019,
    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
    overflowX: 'auto',
    WebkitOverflowScrolling: 'touch',
  },
  stickyNavInner: {
    display: 'flex',
    gap: 4,
    alignItems: 'center',
  },
  navBtn: {
    position: 'relative',
    background: 'none',
    border: 'none',
    padding: '0 16px',
    height: 56,
    cursor: 'pointer',
    fontSize: '0.88rem',
    fontWeight: 500,
    color: '#555',
    whiteSpace: 'nowrap',
    transition: 'color 0.2s',
  },
  navBtnActive: {
    color: '#1C542C',
    fontWeight: 700,
  },
  navUnderline: {
    position: 'absolute',
    bottom: 0,
    left: 16,
    right: 16,
    height: 3,
    background: '#1C542C',
    borderRadius: '2px 2px 0 0',
    display: 'block',
  },
  navWABtn: {
    display: 'inline-flex',
    alignItems: 'center',
    background: '#1C542C',
    color: '#fff',
    padding: '8px 18px',
    borderRadius: 50,
    fontWeight: 700,
    fontSize: '0.82rem',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    flexShrink: 0,
  },

  /* Sections */
  section: {
    padding: '56px 0',
    background: '#fff',
  },
  container: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '0 24px',
  },

  /* Highlights */
  highlightsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 360px',
    gap: 48,
    alignItems: 'start',
  },
  highlightsLeft: {},
  highlightsTitle: {
    fontSize: 'clamp(1.4rem, 3vw, 2rem)',
    fontWeight: 700,
    color: '#111',
    marginBottom: 6,
    lineHeight: 1.2,
  },
  highlightsSub: {
    color: '#6c757d',
    fontSize: '0.9rem',
    marginBottom: 20,
  },
  paraText: {
    color: '#374151',
    fontSize: '0.95rem',
    lineHeight: 1.75,
    marginBottom: 16,
  },
  specsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px 32px',
    marginTop: 32,
    paddingTop: 28,
    borderTop: '1px solid #eee',
  },
  specItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
  },
  specKey: {
    fontSize: '0.7rem',
    fontWeight: 700,
    color: '#999',
    textTransform: 'uppercase',
    letterSpacing: '0.8px',
  },
  specVal: {
    fontSize: '0.9rem',
    color: '#111',
    fontWeight: 500,
  },

  /* Info card */
  highlightsRight: {},
  infoCard: {
    background: '#fff',
    borderRadius: 8,
    border: '1px solid #e9ecef',
    boxShadow: '0 8px 32px rgba(0,0,0,0.07)',
    overflow: 'hidden',
  },
  infoCardHeader: {
    background: '#1C542C',
    padding: '20px 24px',
  },
  infoCardTitle: {
    color: '#fff',
    fontWeight: 700,
    fontSize: '1.05rem',
    margin: 0,
  },
  infoRow: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '12px 24px',
    borderBottom: '1px solid #f0f0f0',
    gap: 12,
  },
  infoLabel: {
    fontSize: '0.78rem',
    color: '#888',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    flexShrink: 0,
  },
  infoValue: {
    fontSize: '0.82rem',
    color: '#111',
    fontWeight: 500,
    textAlign: 'right',
  },
  infoCardBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#1C542C',
    color: '#fff',
    fontWeight: 700,
    fontSize: '0.9rem',
    textDecoration: 'none',
    padding: '14px',
    margin: 16,
    borderRadius: 10,
  },

  /* Amenities */
  amenitiesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: 20,
  },
  amenityCard: {
    background: '#fff',
    borderRadius: 8,
    padding: '24px 16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 12,
    boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
    cursor: 'default',
    transition: 'box-shadow 0.25s',
  },
  amenityIconWrap: {
    width: 56,
    height: 56,
    borderRadius: '50%',
    background: '#e8f5e9',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  amenityLabel: {
    fontSize: '0.8rem',
    fontWeight: 600,
    color: '#333',
    textAlign: 'center',
    lineHeight: 1.3,
  },

  /* Plan */
  planWrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
  planImgBox: {
    position: 'relative',
    maxWidth: 700,
    width: '100%',
    borderRadius: 8,
    overflow: 'hidden',
    cursor: 'pointer',
    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
  },
  planImg: {
    width: '100%',
    display: 'block',
    objectFit: 'cover',
    transition: 'transform 0.3s',
  },
  planOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'rgba(0,0,0,0.35)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0,
    transition: 'opacity 0.3s',
    ':hover': { opacity: 1 },
  },
  fsOverlay: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0,0,0,0.92)',
    zIndex: 9999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  fsClose: {
    position: 'fixed',
    top: 20,
    right: 20,
    background: '#fff',
    border: 'none',
    borderRadius: '50%',
    width: 44,
    height: 44,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    zIndex: 10001,
  },
  fsImg: {
    maxWidth: '90vw',
    maxHeight: '90vh',
    objectFit: 'contain',
    borderRadius: 8,
  },

  /* Related projects */
  relatedGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 24,
  },
  relatedCard: {
    background: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    textDecoration: 'none',
    boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
    transition: 'transform 0.25s, box-shadow 0.25s',
    display: 'block',
  },
  relatedImgWrap: {
    position: 'relative',
    height: 180,
    overflow: 'hidden',
  },
  relatedImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
    transition: 'transform 0.4s',
  },
  relatedOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.45) 100%)',
  },
  relatedBadge: {
    position: 'absolute',
    top: 12,
    left: 12,
    color: '#fff',
    fontSize: '0.62rem',
    fontWeight: 700,
    letterSpacing: '1px',
    padding: '3px 9px',
    borderRadius: 4,
    textTransform: 'uppercase',
  },
  relatedBody: {
    padding: '16px 18px 20px',
  },
  relatedType: {
    display: 'inline-block',
    background: '#e8f5e9',
    color: '#1C542C',
    fontSize: '0.68rem',
    fontWeight: 600,
    padding: '2px 8px',
    borderRadius: 3,
    marginBottom: 8,
  },
  relatedName: {
    color: '#111',
    fontWeight: 700,
    fontSize: '0.95rem',
    margin: '0 0 6px',
    lineHeight: 1.3,
  },
  relatedLoc: {
    color: '#6c757d',
    fontSize: '0.78rem',
    display: 'flex',
    alignItems: 'flex-start',
    margin: '0 0 12px',
  },
  relatedCta: {
    display: 'inline-flex',
    alignItems: 'center',
    color: '#1C542C',
    fontSize: '0.8rem',
    fontWeight: 600,
  },

  /* Plan coming soon */
  planComingSoon: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    padding: '60px 24px',
    background: '#f5f7f5',
    borderRadius: 8,
    border: '2px dashed #c8dfc8',
    textAlign: 'center',
  },
  planComingSoonText: {
    fontSize: '1.05rem',
    fontWeight: 700,
    color: '#1C542C',
  },

  /* Gallery */
  galleryGrid: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr 1fr',
    gridTemplateRows: '240px 240px',
    gap: 12,
    borderRadius: 8,
    overflow: 'hidden',
  },
  galleryMain: {
    gridRow: '1 / 3',
    position: 'relative',
    overflow: 'hidden',
  },
  galleryThumb: {
    position: 'relative',
    overflow: 'hidden',
  },
  galleryImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
    transition: 'transform 0.4s',
  },
  galleryBadge: {
    position: 'absolute',
    bottom: 14,
    left: 14,
    background: 'rgba(0,0,0,0.55)',
    color: '#fff',
    fontSize: '0.78rem',
    fontWeight: 600,
    padding: '4px 10px',
    borderRadius: 4,
    backdropFilter: 'blur(4px)',
  },
  galleryWABtn: {
    display: 'inline-flex',
    alignItems: 'center',
    background: '#1C542C',
    color: '#fff',
    padding: '12px 28px',
    borderRadius: 50,
    fontWeight: 700,
    fontSize: '0.88rem',
    textDecoration: 'none',
  },

  /* Location */
  locationGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 400px',
    gap: 32,
    alignItems: 'start',
  },
  mapBox: {
    height: 440,
    borderRadius: 8,
    overflow: 'hidden',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  },
  nearbyBox: {
    background: '#fff',
    borderRadius: 8,
    border: '1px solid #e9ecef',
    overflow: 'hidden',
    boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
  },
  nearbyTitle: {
    fontSize: '1rem',
    fontWeight: 700,
    color: '#111',
    display: 'flex',
    alignItems: 'center',
    padding: '20px 20px 16px',
    borderBottom: '1px solid #f0f0f0',
    margin: 0,
  },
  accordionItem: {
    borderBottom: '1px solid #f0f0f0',
  },
  accordionHeader: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '14px 20px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },
  accordionHeaderLeft: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '0.9rem',
  },
  accordionBody: {
    padding: '4px 20px 12px',
  },
  placeRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px 0',
    borderBottom: '1px solid #f8f8f8',
  },
  placeName: {
    fontSize: '0.84rem',
    color: '#333',
    fontWeight: 500,
  },
  placeDist: {
    fontSize: '0.76rem',
    color: '#888',
    display: 'flex',
    alignItems: 'center',
  },

  /* CTA Banner */
  ctaBanner: {
    background: '#f5f8f5',
    borderTop: '1px solid #e0ece2',
    padding: '64px 24px',
  },
  ctaTitle: {
    color: '#1C542C',
    fontWeight: 700,
    fontSize: 'clamp(1.4rem, 3.5vw, 2rem)',
    marginBottom: 10,
  },
  ctaSub: {
    color: '#555',
    fontSize: '1rem',
    marginBottom: 32,
  },
  ctaBtns: {
    display: 'flex',
    gap: 14,
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  callBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    background: '#1C542C',
    color: '#fff',
    padding: '13px 30px',
    borderRadius: 6,
    fontWeight: 600,
    fontSize: '0.95rem',
    textDecoration: 'none',
  },
  waBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    background: 'transparent',
    color: '#1C542C',
    padding: '13px 30px',
    borderRadius: 6,
    fontWeight: 600,
    fontSize: '0.95rem',
    textDecoration: 'none',
    border: '2px solid #1C542C',
  },
}

export default SiteDetailsPage
