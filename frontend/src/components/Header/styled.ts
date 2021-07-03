// Third party
import styled from "styled-components";

// Local
import { COLORS } from "../../styles/variables";

export const ContainerRoot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 100%;
  border-bottom: 1px solid #E2E2E2;

  .container_main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;

    .content_logo {
      img {
        max-width: 83px;
      }
    }

    .content_btns {
      display: flex;
      align-items: center;
      width: 40%;

    }
    
    .content_exit_room {
      cursor: pointer;
      height: 40px;
      width: 25%;
      border-radius: 8px;
      background: none;
      color: ${COLORS.Purple};
      border: 1px solid ${COLORS.Purple};
      transition: .24s;

      &:hover {
        color: ${COLORS.HoverPurple};
        border: 1px solid ${COLORS.HoverPurple};
      }
    }
  }

`