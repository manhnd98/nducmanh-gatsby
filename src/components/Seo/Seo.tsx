import { useLocation } from "@reach/router";
import { graphql, useStaticQuery } from "gatsby";
interface SeoProps {
  title?: string;
  description?: string;
  image?: string;
  article?: string;
}
function SEO(props: SeoProps) {
  const { pathname } = useLocation();
  const {site} = useStaticQuery(query);

//   const {title, description, siteUrl} = site.siteMetaData as ISiteMetadata;
    console.log(site);
    console.log(props)

  return null;
}

const query = graphql`
    query SEO {
        site {
            siteMetadata {
                author
                description
                siteUrl
                title
                social {
                    name
                    url
                }
            }
        }
    }
`;

export default SEO;
