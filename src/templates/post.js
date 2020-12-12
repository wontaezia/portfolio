import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '@components/layout';
import SEO from '@components/seo';

function Post({ data }) {
  const {
    html,
    frontmatter: { title },
  } = data.markdownRemark;

  return (
    <Layout>
      <SEO title={title} />
      <Container>
        <Body dangerouslySetInnerHTML={{ __html: html }} />
      </Container>
    </Layout>
  );
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default Post;

const Container = styled.div`
  padding: 120px 0 160px;
`;
const Body = styled.div`
  h3 {
    padding: 10px 0;
    font-size: 20px;
  }

  li {
    position: relative;
    left: 20px;
    font-size: 14px;
    line-height: 1.8;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: -20px;
      display: inline-block;
      width: 6px;
      height: 6px;
      background: ${({ theme }) => theme.$mainColor};
      border-radius: 50%;
    }
  }
`;
