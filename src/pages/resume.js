import React from 'react';
import styled from 'styled-components';
import Layout from '@components/layout';
import SEO from '@components/seo';
import Project from '@components/project';

function Resume() {
  return (
    <Layout>
      <SEO title="Resume" description="프론트엔드 개발자 이력서" />
      <Title>안녕하세요, 정원태입니다.</Title>
      <Container>
        <Subhead>프론트엔드 개발자</Subhead>
        <p>
          사용자의 입장에서 해결해야 할 문제점을 찾고 협업을 통해 개선해나가는
          과정 속에서 성장하고 있는 신입 프론트엔드 개발자입니다.
        </p>
        <p>
          사용자 누구나 기대한 대로 작동하는 웹사이트를 선호하며 기술 문서 읽는
          것을 좋아해 새로운 기술에 빠르게 적응합니다.
        </p>

        <Subhead>Project</Subhead>
        <Project />
        <Subhead>Education</Subhead>
        <Education></Education>
      </Container>
    </Layout>
  );
}

export default Resume;

const Title = styled.h1`
  padding-bottom: 3rem;
  margin: 18rem 0 8rem;
  font-weight: 700;
  font-size: 5rem;
  line-height: 1.333;
`;

const Container = styled.div`
  p {
    font-size: 1.8rem;
    line-height: 1.6;
  }
`;

const Subhead = styled.h2`
  margin: 6rem 0 4rem;
  font-size: 2.8rem;
  font-weight: bolder;
  color: ${({ theme }) => theme.$mainColor};
`;

const Education = styled.div``;
