// Third party
import { createGlobalStyle } from "styled-components";

// Local
import { COLORS } from "./variables";

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', Tahoma, Geneva, Verdana, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscal;
    outline: none;
  }

  html,
  body,
  #root {
    height: 100%;
    background: ${COLORS.Background};
    
    .button {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 50px;
      border: none;
      color: ${COLORS.Detail};
      font-size: 16px;
      border-radius: 8px;
      background: ${COLORS.Purple};
      transition: .24s;

      &:not(:disabled):hover {
        background: ${COLORS.HoverPurple};
      }

      &:disabled {
        opacity: .6;
        cursor: not-allowed;
      }
    }
  }

`;