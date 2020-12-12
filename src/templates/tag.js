import React from 'react';
import { graphql } from 'gatsby';
import Layout from '@components/layout';
import SEO from '@components/seo';
import PostList from '@components/postList';

function tagPosts({ data, pageContext }) {
  const { tag } = pageContext;
  const { totalCount, edges } = data.allMarkdownRemark;

  return (
    <Layout>
      <SEO title="" />
      <PostList totalCount={totalCount} edges={edges} tag={tag} />
    </Layout>
  );
}

export default tagPosts;

export const tagQuery = graphql`
  query($tag: [String]) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { tags: { in: $tag } } }
    ) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            tags
            date(formatString: "YYYY MMMM DD")
            author
            title
            img
            slug
          }
        }
      }
      totalCount
    }
  }
`;
