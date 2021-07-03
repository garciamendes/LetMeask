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

    .content_copy_code {
      display: flex;
      align-items: center;
      width: 70%;
      height: 40px;
      border-radius: 10px;
      background: none;
      border: 1px solid ${COLORS.Purple};
      transition: .24s;

      strong {
        font-size: 14px;

        span {
          color: ${COLORS.Purple}
        }
      }

      .btn_copy {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 20%;
        margin-right: 4%;
        border: none;
        border-radius: 8px 0 0 8px;
        background: ${COLORS.Purple};
        transition: .24s;

        &:hover {
          background: ${COLORS.HoverPurple};
        }
      }
    }
  }

`;