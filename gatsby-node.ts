import { GatsbyNode } from "gatsby";
import { createFilePath } from "gatsby-source-filesystem";
import { resolve } from "path";

interface IEdge {
  node: {
    fields: {
      slug: string;
    };
  };
}

interface IAllMarkdownRemarkResult {
  allMarkdownRemark: {
    edges: IEdge[];
  };
}

export const onCreateNode: GatsbyNode["onCreateNode"] = ({
  node,
  getNode,
  actions,
}) => {
  const { createNodeField } = actions;
  if (node.internal.type === `Mdx` || node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions;

  const result = await graphql<IAllMarkdownRemarkResult>(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  console.log(result);

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: resolve(`src/templates/blog-post.tsx`),
      context: {
        slug: node.fields.slug,
      },
    });
  });
};
