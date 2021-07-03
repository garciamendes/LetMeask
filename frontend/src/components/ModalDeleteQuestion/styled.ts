// Third party
import styled from "styled-components";
import { COLORS } from "../../styles/variables";

export const ContainerRoot = styled.div`
  z-index: 999;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
`

export const ContainerContentModal = styled.div`
  position: relative;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: none;
  border-radius: 20px;
  padding: 2%;
  width: 420px;
  background: #fff;

  img {
    width: 60px;
  }

  h1 {
    font-size: 25px;
    color: ${COLORS.Black};
  }

  p {
    color: ${COLORS.GrayDark};
  }

  .container_btns {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
    margin-top: 2%;

    button {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 40px;
      width: 30%;
      font-size: 16px;
      border: none;
      border-radius: 8px;
      transition: .24s;

      &.cancel {
        background: ${COLORS.GrayLight};
        color: ${COLORS.GrayDark};

        &:hover {
          background: ${COLORS.HoverGrayLight};
        }
      }

      &.delete {
        background: ${COLORS.Danger};
        color: ${COLORS.Detail};

        &:hover {
          background: ${COLORS.HoverDanger};
        }
      }
    }
  }
`