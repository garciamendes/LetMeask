// React
import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

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
import { QuestionsAdmin } from "../../../components/QuestionsAdmin";

// Hooks
import { useRoom } from '../../../hooks/useRoom';

// Services
import { database } from '../../../services/firebase';

type RoomParams = {
  id: string
}

export function AdminRoom() {
  const history = useHistory();
  const params = useParams<RoomParams>();
  const roomId = params.id
  //const { user } = useAuth();
  const { questions, title } = useRoom(roomId);

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm("Tem certeza que você deseja excluir esta pergunta?")) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove()
    }
  }

  async function handleEndRoom() {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date(),
    })

    history.push('/')
  }

  return (
    <ContainerRoot>
      <Header isAdmin onEnd={handleEndRoom} />
      <ContainerMainRoom>
        <ContainerInfoRoom>
          <h2>Sala {title}</h2>

          {questions.length > 0 && (
            <span>
              {questions.length} perguntas
            </span>
          )}
        </ContainerInfoRoom>
        <ContainerAsk>

          {questions.length > 0 && (
            <div className="scroll_questions">
              {questions.map(question => (
                <QuestionsAdmin
                  key={question.id}
                  question={question.content}
                  avatar={question.author.avatar}
                  name={question.author.name}

                  onDelete={() => handleDeleteQuestion(question.id)}
                />
              ))}
            </div>
          )}

          {questions.length <= 0 && (
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
