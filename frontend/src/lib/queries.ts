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
        },

        _type == "stats" => {
          items[]{
            _key,
            value,
            suffix,
            label
          }
        },

        _type == "marquee" => {
          items
        },

        _type == "intro" => {
          tag,
          heading,
          headingHighlight,
          headingEnd,
          description,
          buttonText,
          buttonLink,
          symptomsLabel,

          challenges[]{
            _key,
            number,
            name,
            badge,
            color
          }
        },

        _type == "videoBand" => {
          tag,
          heading,
          headingHighlight,
          headingEnd,
          description,
          "videoUrl": video.asset->url
        },

        _type == "appendingEnrichment" => {
          appendingTag,
          appendingHeading,
          appendingHighlight,
          appendingButtonText,
          appendingButtonLink,

          enrichmentTag,
          enrichmentHeading,
          enrichmentHighlight,
          enrichmentButtonText,
          enrichmentButtonLink
        },

        _type == "compare" => {
          tag,
          heading,
          headingHighlight,
          headingSuffix,
          description,

          services[]{
            _key,
            name,
            summary,
            style,
            open,

            aspects[]{
              _key,
              label,
              value
            }
          }
        },

        _type == "alsoOffered" => {
          label,
          items[]{
            _key,
            title,
            category,
            buttonText,
            link,
            style
          }
        },

        _type == "why" => {
          tag,
          heading,
          headingHighlight,
          description,
          items[]{
            _key,
            number,
            title,
            description,
            color
          }
        },

        _type == "testimonials" => {
          tag,
          heading,
          headingHighlight,

          items[]{
            _key,
            stat,
            quote,
            author,
            role,
            number,
            featured,

            caseStudyText,
            caseStudyLink,

            "imageUrl": image.asset->url
          }
        },

        _type == "finalCta" => {
          heading,
          headingHighlight,
          description,

          buttons[]{
            _key,
            text,
            link,
            style
          }
        },

        _type == "servicesHero" => {
          eyebrow,
          heading,
          headingHighlight,
          description,
          ctaText,
          ctaLink,
          demoId
        },

        _type == "serviceList" => {
          tag,
          heading,
          headingHighlight,

          services[]{
            _key,
            name,
            "slug": slug.current,
            description,
            flag,
            style,
            icon,
            includes
          }
        },

        _type == "servicesCta" => {
  tag,
  heading,
  headingHighlight,
  description,
  buttonText,
  buttonLink,
  variant,
  screenLabel
},

        _type == "processHero" => {
          breadcrumbLabel,
          heading,
          headingHighlight,
          description,
          ctaText
        },

        _type == "pageHero" => {
          screenLabel,
          breadcrumbLabel,
          heading,
          headingHighlight,
          description,
          ctaText,
          demoId
        },

        _type == "processHero" => {
  breadcrumbLabel,
  heading,
  headingHighlight,
  description,
  ctaText
},

_type == "process" => {
  tag,
  heading,
  headingHighlight,
  headingSuffix,
  description,

  steps[]{
    _key,
    title,
    description,
    label
  }
},

_type == "caseStudies" => {
  tag,
  heading,
  headingHighlight,
  description,

  items[]{
    _key,
    stat,
    statHighlight,
    title,
    description
  },

  buttonText,
  buttonLink
},

      )
    }
  }
`;
