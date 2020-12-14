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
        <Title>{title}</Title>
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
  max-width: 64rem;
  padding: 12rem 0 16rem;
  margin: 0 auto;
  font-size: 1.4rem;
  line-height: 1.3;
`;

const Title = styled.h1`
  ${({ theme }) => theme.flex(null, 'center')}
  font-weight: 700;
  font-size: 40px;
  line-height: 1.2;
  cursor: text;
`;

const Body = styled.div`
  line-height: 1.8;

  img {
    width: 100%;
    margin: 2rem 0;
  }

  .thumbnail {
    height: 30rem;
    object-fit: cover;
  }

  iframe {
    width: 100%;
  }

  code {
    padding: 0.2rem 0.6rem;
    background: rgba(0, 0, 0, 0.1);
    color: ${({ theme }) => theme.$black};
    font-family: 'JetBrains Mono', 'Noto Sans KR', sans-serif;
    font-size: 1.2rem;
  }

  a {
    color: ${({ theme }) => theme.$darkGray};
    font-size: 1.3rem;
  }

  pre {
    padding: 2rem 0;
    margin-bottom: 2rem;
  }

  pre code {
    width: 100%;
  }

  h2,
  h3,
  h4,
  h5 {
    padding: 1rem 0;
    margin: 2rem auto 3rem;
    border-bottom: 0.1rem solid rgba(0, 0, 0, 0.1);
  }

  h2 {
    font-size: 2.6rem;
  }

  h3 {
    font-size: 2rem;
  }

  h4 {
    font-size: 1.8rem;
  }

  p.box {
    padding: 2rem 3rem;
    margin-bottom: 2rem;
    border-left: 0.5rem solid ${({ theme }) => theme.$black};
    background: rgb(247, 246, 243);

    b {
      display: block;
      margin-bottom: 2rem;
      font-size: 1.8rem;
    }

    .point {
      color: ${({ theme }) => theme.$darkGray};
      font-size: 1.3rem;
    }
  }

  li {
    position: relative;
    left: 20px;
    ${({ theme }) => theme.flex(null, 'center')}
    flex-wrap: wrap;
    padding: 0.4rem;
    font-size: 14px;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: -20px;
      display: inline-block;
      width: 6px;
      height: 6px;
      background: ${({ theme }) => theme.$black};
      border-radius: 50%;
      transform: translateY(-50%);
    }
  }

  figcaption {
    margin-top: -2rem;
  }

  figcaption a {
    color: ${({ theme }) => theme.$darkGray};
    font-size: 1.3rem;
  }
`;
