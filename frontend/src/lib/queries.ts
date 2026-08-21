export const SITE_SETTINGS_QUERY = `
  *[_type == "siteSettings"][0]{
    siteName,
    "logoUrl": logo.asset->url,
    headerCtaText,
    headerCtaLink
  }
`;

export const PAGE_QUERY = `
  *[
    _type == "page" &&
    slug.current == $slug
  ][0]{
    _id,
    title,
    slug,
    sections[]{
      _type,

      ...select(
        _type == "hero" => {
          badge,
          heading,
          headingHighlight,
          rotatingWords,
          description,

          primaryButton{
            text,
            link
          },

          secondaryButton{
            text,
            link
          },

          finePrint,
          trustLabel,
          trustItems
        }
      )
    }
  }
`;
