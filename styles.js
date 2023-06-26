import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root {
  --navigation-height: 50px;
}
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    font-family: system-ui;
  }

  h1 {
    text-align: center;
    margin: 20px 0;
    text-transform: uppercase;
  }
`;
