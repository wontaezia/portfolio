import React from 'react';
import styled from 'styled-components';
import data from '@data/';

function Project() {
  const { projects } = data;

  return (
    <Container>
      {projects.map(
        ({ id, title, time, team, description, whatIDid, techStack }) => (
          <Inner key={id}>
            <Title>{title}</Title>
            <Detail>
              <Time>
                <span>작업 기간</span>
                <span>{time}</span>
              </Time>
              <Team>
                <span>참여 인원</span>
                <span>{team}</span>
              </Team>
              <Description>
                <span>설명</span>
                <div>
                  {description.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </Description>
              <WhatIDid>
                <span>구현 내용</span>
                <ul>
                  {whatIDid.map((line, index) => (
                    <li key={index}>{line}</li>
                  ))}
                </ul>
              </WhatIDid>
              <TechStack>
                <span>기술 스택</span>
                <ul>
                  {techStack.map((stack, index) => (
                    <li key={index}>{stack}</li>
                  ))}
                </ul>
              </TechStack>
            </Detail>
          </Inner>
        )
      )}
    </Container>
  );
}

export default Project;

const Container = styled.div`
  ${({ theme }) => theme.flex(null, null, 'column-reverse')}
`;

const Inner = styled.div``;

const Title = styled.div`
  margin-top: 4rem;
  font-weight: bolder;
  font-size: 2rem;

  &::before {
    content: '';
    display: inline-block;
    width: 1rem;
    height: 1rem;
    margin-right: 0.5em;
    background: ${({ theme }) => theme.$mainColor};
    transform: translateY(-0.2rem);
  }
`;

const Description = styled.li``;

const Detail = styled.ul`
  padding: 4rem 0 2rem 2rem;
  line-height: 1.6;

  & > li {
    display: flex;
    padding: 0.6rem 0;

    span,
    p,
    li {
      font-size: 1.8rem;
    }

    p {
    }
  }

  span:first-child {
    font-weight: bolder;
    font-size: 1.8rem;
    min-width: 14rem;
  }
`;

const Time = styled.li``;

const Team = styled.li``;

const WhatIDid = styled.li`
  li::before {
    content: '- ';
  }
`;

const TechStack = styled.li`
  ul {
    display: flex;
    flex-wrap: wrap;
  }

  li {
    margin-right: 2rem;
  }
`;
