import { Container } from "@chakra-ui/react";
import { graphql } from "gatsby";
import React, { Fragment } from "react";
import Navbar from "../components/Navbar/Navbar";
import PostItemComponent from "../components/PostItem/PostItem";
import SEO from "../components/Seo/Seo";

interface Props {
  data: {
    allMarkdownRemark: {
      edges: {
        node: {
          fields: {
            slug: string;
          };
          frontmatter: {
            title: string;
            date: string;
            author: string;
            imageUrl: string;
            alt: string;
          };
          id: string;
        };
      }[];
    };
  };
}

function BlogListComponent({ data }: Props) {
  const posts = data.allMarkdownRemark.edges.map((edge) => edge.node);
  console.log(posts);
  return (
    <Fragment>
      <SEO/>
      <Navbar></Navbar>
      <Container maxW="60ch">
        <div className="max-w-screen-sm mx-auto pt-20">
          <div className="mx-6">
            <h1 className="font-bold text-xl mb-4">Posts</h1>
            <div className="grid grid-cols-2 gap-5">
              {posts.map((post) => (
                <PostItemComponent
                  key={post.id}
                  imageUrl={post.frontmatter.imageUrl}
                  title={post.frontmatter.title}
                  alt={post.frontmatter.alt}
                  url={`/posts` + post.fields.slug}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Fragment>
  );
}

export default BlogListComponent;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            author
            date
            title
            imageUrl
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
