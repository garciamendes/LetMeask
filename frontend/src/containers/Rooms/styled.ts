// Third party
import styled from "styled-components";

// Local
import { COLORS } from "../../styles/variables";

export const ContainerRoot = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;

  .scroll_questions {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    height: 60%;
    width: 100%;

    &::-webkit-scrollbar {
      width: 2px;
      height: 0;
    }

    &::-webkit-scrollbar-thumb {
      background: ${COLORS.HoverPurple};
    }
  }
`

export const ContainerMainRoom = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: calc(100% - 60px);
  width: 100%;
  margin-top: 5px;
  max-width: 70%;
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
    width: 20%;
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
    font-size: 19px;
    margin-bottom: 2%;
    color: ${COLORS.Black};
  }

  p {
    font-size: 14px;
    text-align: center;
    margin-bottom: 1%;
    max-width: 330px;
    color: ${COLORS.GrayDark};
  }
`

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 1% 0;
  width: 100%;

  textarea {
    overflow-y: auto;
    resize: none;
    border: none;
    padding: 1%;
    font-size: 17px;
    min-height: 100px;
    box-shadow: 0px 2px 12px rgba(0, 0, 0, .04);
    border-radius: 10px;

    &::-webkit-scrollbar {
      width: 2px;
    }

    &::-webkit-scrollbar-thumb {
      background: ${COLORS.HoverPurple};
    }
  }

  .container_send_question_login {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1%;

    .content_info_user {
        display: flex;
        align-items: center;
        width: 35%;

        .img_user {
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }

        .user_name {
          margin-left: 2%;
          color: ${COLORS.GrayDark};
        }
      }

    span {
      font-size: 16px;
      color: ${COLORS.GrayDark};

      button {
        cursor: pointer;
        border: none;
        background: none;
        font-size: 16px;
        text-decoration: underline;
        color: ${COLORS.PinkDark};
        transition: .24s;

        &:hover {
          color: ${COLORS.PinkLight};
        } 
      }
    }
  }
`