import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import gsap from 'gsap';
import { links, paths } from '@data/';

function Menu({ isMenuOpen, handleMenu }) {
  useEffect(() => {
    if (isMenuOpen) {
      openMenu();
    }
    if (!isMenuOpen) {
      closeMenu();
    }
  }, [isMenuOpen]);

  return (
    <Container className="container">
      <SecondaryBackground className="secondaryBackground" />
      <Layer className="layer">
        <Inner>
          <Nav>
            {paths.map(({ id, path, menu }) => {
              return (
                <li key={id}>
                  <Link to={path} onClick={handleMenu} className="menu">
                    {menu}
                  </Link>
                </li>
              );
            })}
          </Nav>
          <SocialMedia>
            {links.map(({ id, url, icon }) => {
              return (
                <li key={id}>
                  <a href={url} rel="noreferrer" target="_blank">
                    {icon}
                  </a>
                </li>
              );
            })}
          </SocialMedia>
        </Inner>
      </Layer>
    </Container>
  );
}

export default Menu;

const Container = styled.div`
  ${({ theme }) => theme.fixed(9)}
  display: none;
`;

const SecondaryBackground = styled.div`
  ${({ theme }) => theme.fixed(-1)}
  background: ${({ theme }) => theme.$black};
`;

const Layer = styled.div`
  position: relative;
  height: 100%;
  background: ${({ theme }) => theme.$mainColor};
  overflow: hidden;
`;

const Inner = styled.div`
  ${({ theme }) => theme.flex('space-between', 'center')}
  max-width: 128rem;
  width: 100%;
  height: 100%;
  padding: 0 5rem;
  margin: 0 auto;
`;

const Nav = styled.ul`
  li {
    width: 70rem;
    height: 13.5rem;
    font-weight: 700;
    font-size: 8rem;
    overflow: hidden;

    a {
      position: relative;
      display: block;
      color: ${({ theme }) => theme.$white};

      &:hover {
        color: ${({ theme }) => theme.$black};
      }
    }
  }
`;

const SocialMedia = styled.ul`
  position: absolute;
  bottom: 6rem;
  ${({ theme }) => theme.flex('center')}

  li {
    font-size: 2rem;
    transition: 0.3s ease-in-out;
    cursor: pointer;

    &:not(:last-child) {
      margin-right: 4rem;
    }
  }

  svg {
    fill: ${({ theme }) => theme.$white};

    &:hover {
      fill: ${({ theme }) => theme.$black};
    }
  }
`;

const staggerReveal = () => {
  gsap.from(['.secondaryBackground', '.layer'], {
    duration: 0.8,
    height: 0,
    transformOrigin: 'right top',
    skewY: 2,
    ease: 'Power3.easeInOut',
    stagger: {
      amount: 0.1,
    },
  });
};

const staggerText = () => {
  gsap.from('.menu', {
    duration: 0.8,
    y: 100,
    delay: 0,
    ease: 'Power3.easeInOut',
    stagger: {
      amount: 0.4,
    },
  });
};

const openMenu = () => {
  gsap.to('.container', {
    duration: 0,
    css: { display: 'block' },
  });
  gsap.to(['.secondaryBackground', '.layer'], {
    duration: 0,
    opacity: 1,
    height: '100%',
  });
  staggerReveal();
  staggerText();
};

const closeMenu = () => {
  gsap.to(['.layer', '.secondaryBackground'], {
    duration: 0.8,
    height: 0,
    ease: 'Power3.easeInOut',
    stagger: {
      amount: 0.07,
    },
  });
  gsap.to('.container', {
    duration: 1,
    css: { display: 'none' },
  });
};
