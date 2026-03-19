import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'Keerthi Builders';
const SITE_URL  = 'https://www.keerthibuilders.com';
const DEFAULT_IMAGE = `${SITE_URL}/assets/images/og-cover.webp`;
const DEFAULT_KEYWORDS = 'plots for sale south bangalore, residential plots kumbalagodu, BMRDA approved plots bangalore, sites for sale bidadi, land developers mysore road, residential plots near kengeri, 30x40 plots bangalore, gated community plots, plot developers south bangalore, site developers bangalore';

/**
 * Drop-in SEO component — place once per page/route.
 *
 * Props:
 *   title       – page title (appended with " | Keerthi Builders")
 *   description – 150-160 char summary
 *   keywords    – comma-separated keyword string (merged with defaults)
 *   canonical   – full URL (defaults to SITE_URL)
 *   image       – absolute OG image URL
 *   noIndex     – true to set noindex,nofollow
 *   schema      – JSON-LD object or array (optional)
 */
const SEO = ({
  title,
  description,
  keywords = '',
  canonical = SITE_URL,
  image = DEFAULT_IMAGE,
  noIndex = false,
  schema = null,
}) => {
  const fullTitle    = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | BMRDA-Approved Plots in South Bangalore`;
  const mergedKeywords = keywords ? `${keywords}, ${DEFAULT_KEYWORDS}` : DEFAULT_KEYWORDS;
  const schemas = schema ? (Array.isArray(schema) ? schema : [schema]) : [];

  return (
    <Helmet>
      {/* ── Primary ── */}
      <title>{fullTitle}</title>
      <meta name="description"  content={description} />
      <meta name="keywords"     content={mergedKeywords} />
      <meta name="robots"       content={noIndex ? 'noindex,nofollow' : 'index,follow'} />
      <link rel="canonical"     href={canonical} />

      {/* ── Hreflang (English / India) ── */}
      <link rel="alternate" hreflang="en-in"      href={canonical} />
      <link rel="alternate" hreflang="en"         href={canonical} />
      <link rel="alternate" hreflang="x-default"  href={canonical} />

      {/* ── Open Graph ── */}
      <meta property="og:site_name"       content={SITE_NAME} />
      <meta property="og:type"            content="website" />
      <meta property="og:url"             content={canonical} />
      <meta property="og:title"           content={fullTitle} />
      <meta property="og:description"     content={description} />
      <meta property="og:image"           content={image} />
      <meta property="og:image:width"     content="1200" />
      <meta property="og:image:height"    content="630" />
      <meta property="og:locale"          content="en_IN" />
      <meta property="article:publisher"  content="https://www.facebook.com/keerthibuildersbangalore/" />

      {/* ── Twitter Card ── */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:title"       content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image"       content={image} />

      {/* ── JSON-LD (supports multiple schemas) ── */}
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
