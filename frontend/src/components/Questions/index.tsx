// React
import React from "react";

// Local
import {
  ContainerRoot,
  ContainerInfoQuestion,
  ContainerInfoUser
} from "./styled";
import Like from "../../static/images/like.svg";

export type QuetionsProps = {
  question: string;
  name: string;
  avatar: string;
}

export function Questions(props: QuetionsProps) {
  return (
    <ContainerRoot>
      <ContainerInfoQuestion>
        <p>{props.question} </p>
      </ContainerInfoQuestion>
      <ContainerInfoUser>
        <div className="content_info_user">
          <img src={props.avatar} alt={props.name} />
          <span>{props.name}</span>
        </div>
        <div className="content_manipulation_question">
          <span className="amount_likes">10</span>
          <img src={Like} alt="check" />
        </div>
      </ContainerInfoUser>
    </ContainerRoot>
  );
}