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
      justify-content: space-between;
      align-items: center;
      width: 27%;
    }

    .content_copy_code {
      display: flex;
      align-items: center;
      width: 53%;
      height: 40px;
      border-radius: 10px;
      background: none;
      border: 1px solid ${COLORS.Purple};
      transition: .24s;

      strong {
        font-size: 14px;
      }

      .btn_copy {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 30%;
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

    .content_exit_room {
      cursor: pointer;
      height: 40px;
      width: 41%;
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