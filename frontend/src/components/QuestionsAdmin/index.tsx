// React
import React from "react";

// Local
import {
  ContainerRoot,
  ContainerInfoQuestion,
  ContainerInfoUser
} from "./styled";

export type QuetionsProps = {
  question: string;
  name: string;
  avatar: string;
}

export function QuestionsAdmin(props: any) {
  return (
    <ContainerRoot
      style={{
        background: `${props.isAnswered ? "#DBDCDD" : props.isHighlighted ? "#F4F0FF" : ""}`,
        border: `${props.isHighlighted ? "1px solid #835AFD" : ""}`
      }}
    >
      <ContainerInfoQuestion>
        <p>{props.question} </p>
      </ContainerInfoQuestion>
      <ContainerInfoUser>
        <div className="content_info_user">
          <img src={props.avatar} alt={props.name} />
          <span>{props.name}</span>
        </div>
        <div className="content_manipulation_question">
          <div>
            <svg onClick={props.onAnswered} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12.0003" cy="11.9998" r="9.00375" stroke={props.isAnswered ? "#835AFD" : "#737380"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M8.44287 12.3391L10.6108 14.507L10.5968 14.493L15.4878 9.60193" stroke={props.isAnswered ? "#835AFD" : "#737380"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <div>
            <svg
              style={{
                cursor: `${props.isAnswered ? "not-allowed" : "pointer"}`
              }}
              onClick={props.isAnswered ? {} : props.onHighlighted}
              width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
            >
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 17.9999H18C19.657 17.9999 21 16.6569 21 14.9999V6.99988C21 5.34288 19.657 3.99988 18 3.99988H6C4.343 3.99988 3 5.34288 3 6.99988V14.9999C3 16.6569 4.343 17.9999 6 17.9999H7.5V20.9999L12 17.9999Z"
                stroke={props.isHighlighted ? "#835AFD" : "#737380"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <div>
            <svg onClick={props.onDelete} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 5.99988H5H21" stroke="#E73F5D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M8 5.99988V3.99988C8 3.46944 8.21071 2.96074 8.58579 2.58566C8.96086 2.21059 9.46957 1.99988 10 1.99988H14C14.5304 1.99988 15.0391 2.21059 15.4142 2.58566C15.7893 2.96074 16 3.46944 16 3.99988V5.99988M19 5.99988V19.9999C19 20.5303 18.7893 21.039 18.4142 21.4141C18.0391 21.7892 17.5304 21.9999 17 21.9999H7C6.46957 21.9999 5.96086 21.7892 5.58579 21.4141C5.21071 21.039 5 20.5303 5 19.9999V5.99988H19Z" stroke="#E73F5D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </div>
      </ContainerInfoUser>
    </ContainerRoot>
  );
}