// React
import React from "react";

// Local
import {
  ContainerRoot,
  ContainerInfoQuestion,
  ContainerInfoUser
} from "./styled";
import Check from "../../static/images/check.svg";
import Answer from "../../static/images/answer.svg";
import Delete from "../../static/images/delete.svg";

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
          <img src={Check} alt="check" />
          <img src={Answer} alt="answer" />
          <img src={Delete} alt="delete" />
        </div>
      </ContainerInfoUser>
    </ContainerRoot>
  );
}