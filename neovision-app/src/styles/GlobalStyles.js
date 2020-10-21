import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    color: var(--white);
    text-decoration: none;
  }
  html, border-style, #root {
    max-height: 100vh;
    max-width: 100vw;

    height: 100%;
    width: 100%;
  }
  *, button, input {
    border: 0;
    background: none;
    font-family: Arial, Helvetica, sans-serif;
  }
  :root {
    --default: #696969;
    --white: #d9d9d9;
    --primary: #714195;
    --secondary: #783293;
    --icon: #f7931d;
  }
`;
