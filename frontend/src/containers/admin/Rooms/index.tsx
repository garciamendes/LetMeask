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
import { ModalDeleteQuestion } from '../../../components/ModalDeleteQuestion';

// Hooks
import { useRoom } from '../../../hooks/useRoom';

// Services
import { database } from '../../../services/firebase';
import { ModalCloseRoom } from '../../../components/ModalCloseRoom';

type RoomParams = {
  id: string
}

export function AdminRoom() {
  const history = useHistory();
  const params = useParams<RoomParams>();
  const roomId = params.id
  //const { user } = useAuth();
  const { questions, title } = useRoom(roomId);

  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);
  const [openModalCloseRoom, setOpenModalCloseRoom] = useState<boolean>(false);

  const [idQuestion, setIdQuestion] = useState<any>(null);

  async function handleDeleteQuestion(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    setOpenModalDelete(false);
  }

  // Foi respondida
  async function handleAnsweredQuestion(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true,
      isHighlighted: false
    });
  }

  // Respondendo
  async function handleHighlightedQuestion(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: true,
      isAnswered: false
    });
  }

  async function handleEndRoom() {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date(),
    })

    history.push('/')
  }

  return (
    <ContainerRoot>
      {openModalDelete &&
        <ModalDeleteQuestion
          onCancel={() => setOpenModalDelete(false)}
          onDelete={() => handleDeleteQuestion(idQuestion && idQuestion)}
        />
      }

      {openModalCloseRoom &&
        <ModalCloseRoom
          onCancel={() => setOpenModalCloseRoom(false)}
          onCloseRoom={handleEndRoom}
        />
      }

      <Header isAdmin onEnd={() => setOpenModalCloseRoom(true)} />
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

                  isAnswered={question.isAnswered}
                  isHighlighted={question.isHighlighted}

                  onAnswered={() => handleAnsweredQuestion(question.id)}
                  onHighlighted={() => handleHighlightedQuestion(question.id)}
                  onDelete={() => {
                    setOpenModalDelete(true)
                    setIdQuestion(question.id)
                  }}
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
