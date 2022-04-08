import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Button, Tag } from "@chakra-ui/react";
import { graphql, Link } from "gatsby";
import React from "react";
import FooterComponent from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

interface PostInterface {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string;
        date: string;
        tags: string;
        imageUrl: string;
        nextTitle: string;
        nextUrl: string;
        prevTitle: string;
        prevUrl: string;
      };
      html: string;
    };
  };
}

function BlogPost({ data }: PostInterface) {
  const post = data.markdownRemark;
  const tags = post.frontmatter.tags.split(",");
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <div className="max-w-screen-sm mx-auto pt-32 mb-12">
        <h1 className="text-4xl text-center mb-12">{post.frontmatter.title}</h1>
        {/* <small>{post.frontmatter.date}</small> */}
        <div
          className="markdown-body"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

        <div className="mt-4">
          {tags.map((tag) => (
            <Tag
              key={tag}
              variant="solid"
              colorScheme="whiteAlpha"
              size="lg"
              className="mr-2"
            >
              <span className="text-slate-600 dark:text-slate-200">{tag}</span>
            </Tag>
          ))}
        </div>

        <div className="mt-8 flex justify-between">
          <Link to={post.frontmatter.nextUrl}>
            <Button
              leftIcon={<ArrowBackIcon />}
              colorScheme="teal"
              variant="outline"
            >
              {post.frontmatter.nextTitle}
            </Button>
          </Link>
          <Link to={post.frontmatter.nextUrl}>
            <Button
              rightIcon={<ArrowForwardIcon />}
              colorScheme="teal"
              variant="outline"
            >
              {post.frontmatter.nextTitle}
            </Button>
          </Link>
        </div>
      </div>

      <FooterComponent></FooterComponent>
    </React.Fragment>
  );
}

export default BlogPost;

export const query = graphql`
  query BlogQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        imageUrl
        nextTitle
        nextUrl
        prevTitle
        prevUrl
        tags
      }
    }
  }
`;
