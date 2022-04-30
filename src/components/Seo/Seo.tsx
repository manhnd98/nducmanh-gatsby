import { useLocation } from "@reach/router";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";
import { ISiteMetadata } from "../../model/meta.model";
interface SeoProps {
  title?: string;
  description?: string;
  image?: string;
  article?: string;
}
function SEO({ title, description, image }: SeoProps) {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);

  const {
    defaultTitle,
    defaultDescription,
    siteUrl,
    defaultImage,
    titleTemplate,
  } = site.siteMetadata as ISiteMetadata;
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
  };

  console.log(seo)

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      {/* {seo.url && <meta property="og:url" content={seo.url} />} */}
      {/* {(article ? true : null) && <meta property="og:type" content="article" />} */}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  );
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        author
        defaultDescription: description
        siteUrl
        defaultTitle: title
        defaultImage: image
        titleTemplate
        social {
          name
          url
        }
      }
    }
  }
`;

export default SEO;
