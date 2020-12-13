import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${({ theme }) => theme.$text};

    &::selection {
      background: ${({ theme }) => theme.$mainColor};
      color: ${({ theme }) => theme.$white};
    }
  }

  html {
    -webkit-font-smoothing: antialiased;
  }

  body {
    line-height: 1;
    overflow-x: hidden;
    background-color: ${({ theme }) => theme.$background}
  }

  ol,
  ul, 
  li {
    list-style: none;
  }

  svg {
    color: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    max-width: 100%;
  }

  button,
  input {
    outline: 0;
    border: 0;
    background: none;
  }

  a,
  button,
  input,
  textarea {
    font-family: inherit
  }

  html,
  body {
    width: 100%;
    height: 100%;
    font-size: 10px;
    font-family: 'Poppins', 'Noto Sans KR', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
 Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  code {
    font-family: 'JetBrains Mono';
    font-size: 13px;
  }

  .codeTitle {
    margin-top: 300px;
  }
`;

export default GlobalStyle;
