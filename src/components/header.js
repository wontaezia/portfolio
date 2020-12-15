import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Menu from '@components/menu';

function Header() {
  const { location } = window;
  const [disabled, setDisabled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const disableMenu = () => {
    setDisabled(!disabled);
  };

  const handleMenu = () => {
    disableMenu();
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    let timer = setTimeout(() => {
      setDisabled(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, [disabled]);

  return (
    <Container>
      <Inner>
        <Logo isMenuOpen={isMenuOpen} onClick={handleMenu}>
          <Link to="/">&lt;WT /&gt;</Link>
        </Logo>
        <HamburgerIcon
          onClick={handleMenu}
          isMenuOpen={isMenuOpen}
          disabled={disabled}
        >
          <span />
          <span />
          <span />
        </HamburgerIcon>
        <Menu handleMenu={handleMenu} isMenuOpen={isMenuOpen} />
      </Inner>
    </Container>
  );
}

export default Header;

const Container = styled.header`
  height: 10rem;
`;

const Inner = styled.div`
  position: relative;
  ${({ theme }) => theme.flex('space-between', 'center')}
  height: 10rem;
  z-index: 10;
`;

const Logo = styled.h1`
  position: relative;
  color: ${({ isMenuOpen, theme }) =>
    isMenuOpen ? theme.$white : theme.$black};
  font-weight: 700;
  font-size: 1.6rem;
  transition: color 1s ease-in-out;
  z-index: 9;
`;

const HamburgerIcon = styled.button`
  position: relative;
  ${({ theme }) => theme.flex(null, 'center')}
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  z-index: 9;

  span {
    position: absolute;
    top: 50%;
    left: 0;
    display: block;
    width: 3rem;
    height: 0.2rem;
    background-color: ${({ isMenuOpen, theme }) =>
      isMenuOpen ? theme.$white : theme.$black};
    transition: 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transition-property: transform background;

    &:first-child {
      transform: ${({ isMenuOpen }) =>
        isMenuOpen ? 'rotate(45deg)' : 'translateY(8px)'};
    }

    &:nth-child(2) {
      opacity: ${({ isMenuOpen }) => (isMenuOpen ? 0 : 1)};
    }

    &:last-child {
      transform: ${({ isMenuOpen }) =>
        isMenuOpen ? 'rotate(-45deg)' : 'translateY( -8px)'};
    }
  }
`;
