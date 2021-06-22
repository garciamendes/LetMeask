// Third party
import styled from "styled-components";

// Local
import { COLORS } from "../../styles/variables";

export const ContainerRoot = styled.div`
  display: flex;
  height: 100%;

  .container_right_secondary {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 55%;
    height: 100%;
    padding: 0 5%;

    .input_in_class {
      border: 1px solid ${COLORS.GrayMedium};
      border-radius: 8px;
      padding: 0 5%;
      margin: 5% 0;
      font-size: 18px;
      width: 90%;
      height: 50px;
    }
  }

`

export const ContainerLeftMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 46%;
  padding: 0 3%;
  background: ${COLORS.Purple};

  img {
    max-width: 270px;
  }

  strong {
    max-width: 350px;
    font-weight: 700;
    font-size: 36px;
    line-height: 42px;
    margin-top: 16px;
    color: #f8f8f8;
  }

  p {
    max-width: 420px;
    font-size: 24px;
    line-height: 32px;
    margin-top: 16px;
    color: #f8f8f8;
  }
`

export const ContainerRightMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 54%;

  h3 {
    color: ${COLORS.Black};
    font-size: 26px;
  }

  .content_exist_room {
    margin-top: 5%;
    color: #737380;

    a {
      margin-left: 5px;
      color: #E559F9;
    }
  }
`
