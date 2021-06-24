// Third party
import styled from "styled-components";

// Local
import { COLORS } from "../../../styles/variables";

export const ContainerRoot = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
`

export const ContainerMainRoom = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: calc(100% - 60px);
  width: 100%;
  max-width: 70%;
  padding-top: 2%;
`

export const ContainerInfoRoom = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 36px;

  h2 {
    margin-right: 2%;
    color: ${COLORS.Black};
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 14%;
    border: none;
    border-radius: 20px;
    color: ${COLORS.Detail};
    background: ${COLORS.PinkDark};
  }
`

export const ContainerAsk = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2%;
`

export const ContainerEmptyAsks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  img {
    margin-bottom: 2%;
  }

  h2 {
    margin-bottom: 2%;
    color: ${COLORS.Black};
  }

  p {
    text-align: center;
    margin-bottom: 1%;
    max-width: 330px;
    color: ${COLORS.GrayDark};
  }
`