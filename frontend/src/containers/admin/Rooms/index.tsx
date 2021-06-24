// React
import React, { useState } from 'react';

// Local
import {
  ContainerRoot,
  ContainerInfoRoom,
  ContainerAsk,
  ContainerMainRoom,
  ContainerEmptyAsks
} from './styled';
import EmptyAsk from "../../../static/images/empty-questions.svg";

// Components
import { Header } from "../../../components/Header";
import { Questions } from "../../../components/Questions";

export function AdminRoom() {
  const [askAmount, setAskAmount] = useState([1]);

  return (
    <ContainerRoot>
      <Header isAdmin />
      <ContainerMainRoom>
        <ContainerInfoRoom>
          <h2>Sala React Q{"&"}A</h2>

          {askAmount.length > 0 && (
            <span>
              {askAmount} perguntas
            </span>
          )}
        </ContainerInfoRoom>
        <ContainerAsk>

          {askAmount.length > 0 && (
            <div className="scroll_questions">
              <Questions
                question={"Testaasdasdasdasdndo"}
                avatar={"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}
                name={"Matheus Garcia"}
              />
            </div>
          )}

          {askAmount.length === 0 && (
            <ContainerEmptyAsks>
              <img src={EmptyAsk} alt="empty asks" />
              <h2>Nenhuma pergunta por aqui...</h2>
              <p>Envie o código desta sala para seus amigos e comece a responder perguntas!</p>
            </ContainerEmptyAsks>
          )}
        </ContainerAsk>
      </ContainerMainRoom>
    </ContainerRoot>
  )
}
