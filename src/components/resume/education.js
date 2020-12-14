import React from 'react';
import styled, { css } from 'styled-components';
import { experiences } from '@data/';

function Education() {
  return (
    <Container>
      {experiences.map(({ id, title, time, description }) => (
        <li key={id}>
          <Title className={`education${id}`} length={experiences.length}>
            {title}
          </Title>
          <Time>{time}</Time>
          <p>{description}</p>
        </li>
      ))}
    </Container>
  );
}

export default Education;

const Container = styled.ul`
  ${({ theme }) => theme.flex(null, null, 'column-reverse')}
`;

const Title = styled.h3`
  margin-top: 4rem;
  font-weight: bolder;
  font-size: 2rem;

  ${({ length }) =>
    css`
      &.education${length} {
        margin-top: 0;
      }
    `}
`;

const Time = styled.span`
  display: block;
  margin: 1rem 0 2rem;
  font-size: 14px;
`;
