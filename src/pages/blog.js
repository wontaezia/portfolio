import React from 'react';
import { graphql } from 'gatsby';
import Layout from '@components/layout';
import SEO from '@components/seo';
import PostList from '@components/postList';

function Blog({ data }) {
  const { totalCount, edges } = data.allMarkdownRemark;

  return (
    <Layout>
      <SEO title="Blog" description="프론트엔드 정원태의 개발 블로그 입니다." />
      <PostList totalCount={totalCount} edges={edges} />
    </Layout>
  );
}

export default Blog;

export const query = graphql`
  query getPosts {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          timeToRead
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            slug
            img
            tags
          }
        }
      }
      totalCount
    }
  }
`;
