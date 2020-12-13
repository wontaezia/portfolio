import React from 'react';
import styled, { css } from 'styled-components';
import { skills } from '@data/';

function Skill() {
  return (
    <ul>
      {skills.map(({ id, title, icon, description }) => (
        <List key={id}>
          <Title>
            <Text>{title}</Text>
            <Icon>{icon}</Icon>
          </Title>
          <p>{description}</p>
        </List>
      ))}
    </ul>
  );
}

export default Skill;

const List = styled.li`
  font-size: 1.6rem;
`;

const Title = styled.div`
  ${({ theme }) => theme.flex(null, 'center')}
  margin: 4rem 0 2rem;

  ${({ length }) =>
    css`
      &.project${length} {
        margin-top: 0;
      }
    `}
`;

const Text = styled.h3`
  margin-right: 1rem;
  font-weight: bolder;
  font-size: 2rem;
`;

const Icon = styled.div`
  svg {
    margin-right: 1rem;
    font-size: 2rem;
  }
`;
