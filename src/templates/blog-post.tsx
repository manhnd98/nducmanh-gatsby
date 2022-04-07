import { graphql } from "gatsby";
import React from "react";

interface PostInterface {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string;
        date: string;
      };
      html: string;
    };
  };
}

function BlogPost({ data }: PostInterface) {
  const post = data.markdownRemark;
  return <div>
    <h1>{post.frontmatter.title}</h1>
    <small>{post.frontmatter.date}</small>
    <div className='markdown-body' dangerouslySetInnerHTML={{ __html: post.html }} />
  </div>;
}

export default BlogPost;

export const query = graphql`
  query BlogQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`;
