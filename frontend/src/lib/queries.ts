export const SITE_SETTINGS_QUERY = `
  *[_type == "siteSettings"][0]{
    siteName,
    "logoUrl": logo.asset->url,
    headerCtaText,
    headerCtaLink
  }
`;
