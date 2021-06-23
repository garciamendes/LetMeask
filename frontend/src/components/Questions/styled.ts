// Third party
import styled from "styled-components";

// Local
import { COLORS } from "../../styles/variables";

export const ContainerRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 2%;
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

  .content_manipulation_question {
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-self: flex-end;
    width: 12%;

    img {
      cursor: pointer;
    }
  }
`