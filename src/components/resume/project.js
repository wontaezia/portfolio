import React from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';
import { projects } from '@data/';
import device from '@styles/device';

function Project() {
  return (
    <Container>
      {projects.map(
        ({
          id,
          title,
          time,
          team,
          description,
          whatIDid,
          techStack,
          links,
        }) => (
          <Inner key={id}>
            <Title className={`project${id}`} length={projects.length}>
              {title}
              <Links>
                {links.github && (
                  <a href={links.github} rel="noreferrer" target="_blank">
                    Github &gt;
                  </a>
                )}
                {links.posting && (
                  <Link to={links.posting}>블로그 포스팅 &gt;</Link>
                )}
              </Links>
            </Title>
            <Detail>
              <li>
                <span>작업 기간</span>
                <span>{time}</span>
              </li>
              <li>
                <span>참여 인원</span>
                <span>{team}</span>
              </li>
              <li>
                <span>설명</span>
                <div>
                  {description.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </li>
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

const Title = styled.h3`
  ${({ theme }) => theme.flex(null, 'center')}
  flex-wrap: wrap;
  margin-top: 4rem;
  font-weight: bolder;
  font-size: 2rem;
  line-height: 1.5;

  ${({ length }) =>
    css`
      &.project${length} {
        margin-top: 0;
      }
    `}

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

const Detail = styled.ul`
  padding: 4rem 0 2rem 2rem;
  line-height: 1.6;

  & > li {
    display: flex;
    flex-direction: column;
    padding: 0.6rem 0;

    span,
    p,
    li {
      font-size: 1.8rem;
    }
  }

  span:first-child {
    padding-bottom: 1rem;
    min-width: 14rem;
    font-weight: bolder;
    font-size: 1.8rem;
  }

  @media ${device.tablet} {
    & > li {
      flex-direction: row;
    }

    span:first-child {
      padding-bottom: 0;
    }
  }
`;

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

const Links = styled.div`
  a {
    font-size: 1.4rem;
    padding: 0.2rem 0.4rem;
    background: ${({ theme }) => theme.$mainColor};
    color: ${({ theme }) => theme.$white};

    &:first-child {
      margin: 0 1.6rem 0 2rem;
    }
  }
`;
