// Third party
import styled from "styled-components";

// Local
import { COLORS } from "../../styles/variables";

export const ContainerRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 95%;
  padding: 2%;
  margin: 1% 0;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, .04);
  border-radius: 10px;
  background: ${COLORS.Detail};
`

export const ContainerInfoQuestion = styled.div`
  display: flex;
  height: auto;
  width: 100%;
`

export const ContainerInfoUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  .content_info_user {
    display: flex;
    align-items: center;
    margin-top: 2%;
    width: 35%;

    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }

    span {
      margin-left: 2%;
      color: ${COLORS.GrayDark};
    }
  }

  button {
    cursor: pointer;
    background: none;
    border: none;

    &.content_manipulation_question {
      display: flex;
      align-items: center;
      align-self: flex-end;
      gap: 10px;

      .amount_likes {
        font-size: 18px;
        margin-top: 6px;
        color: ${COLORS.GrayDark}
      }
    }

    &.liked {

      .amount_likes {
        color: ${COLORS.Purple};
      }

      svg path {
        stroke: ${COLORS.Purple};
      }
    }
  }

`