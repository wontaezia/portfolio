import React from 'react';
import styled, { css } from 'styled-components';
import { experiences } from '@data/';

function Education() {
  return (
    <ul>
      {experiences.map(({ id, title, time, description }) => (
        <li key={id}>
          <Title>{title}</Title>
          <Time>{time}</Time>
          <p>{description}</p>
        </li>
      ))}
    </ul>
  );
}

export default Education;

const Title = styled.h3`
  margin-top: 4rem;
  font-weight: bolder;
  font-size: 2rem;

  ${({ length }) =>
    css`
      &.project${length} {
        margin-top: 0;
      }
    `}
`;

const Time = styled.span`
  display: block;
  margin: 1rem 0 2rem;
  font-size: 14px;
`;
