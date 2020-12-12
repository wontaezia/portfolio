import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import theme from '@styles/theme';
import GlobalStyle from '@styles/global';
import Header from '@components/header';

function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Inner>
          <Header />
          <main>{children}</main>
        </Inner>
      </Container>
    </ThemeProvider>
  );
}

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

const Container = styled.div`
  max-width: 128rem;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

const Inner = styled.div`
  padding: 0 5rem;
`;
