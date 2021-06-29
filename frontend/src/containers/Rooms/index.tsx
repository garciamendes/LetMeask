// React
import React, { FormEvent, useState } from 'react';
import { useParams } from 'react-router-dom';

// Third party
import { toast } from 'react-toastify';

// Local
import {
  ContainerRoot,
  ContainerInfoRoom,
  ContainerMainRoom,
  ContainerForm,
  ContainerEmptyAsks
} from './styled';
import EmptyAsk from "../../static/images/empty-questions.svg";

// Components
import { Header } from "../../components/Header";
import { Button } from '../../components/Button';

// Services
import { useAuth } from '../../hooks/useAuth';
import { database } from '../../services/firebase';
import { Questions } from '../../components/Questions';
import { useRoom } from '../../hooks/useRoom';

type RoomParams = {
  id: string
}

export function Rooms() {
  const params = useParams<RoomParams>();
  const roomId = params.id
  const { user, signInWithGoogle } = useAuth();
  const { questions, title } = useRoom(roomId);
  const [newQuestion, setNewQuestion] = useState("");

  async function handleSignIn() {
    if (!user) {
      await signInWithGoogle();
    }
  }

  async function handleSendQuestion(event: FormEvent) {
    event.preventDefault();

    if (newQuestion.trim() === "") {

      return toast.error('Digite uma pergunta', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }

    if (!user) {

      return toast.warning('Você precisa inscreve-se para enviar perguntas', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }

    const question = {
      content: newQuestion,
      author: {
        name: user.name,
        avatar: user.avatar
      },
      isHighlighted: false,
      isAnswered: false,
    }

    await database.ref(`rooms/${roomId}/questions`).push(question);
    setNewQuestion("");

  }

  async function handleLikeQustions(questionId: string, likeId: string | undefined) {
    if (likeId) {
      await database.ref(`rooms/${roomId}/questions/${questionId}/likes/${likeId}`).remove();
    } else {
      await database.ref(`rooms/${roomId}/questions/${questionId}/likes`).push({
        authorId: user?.id,
      });
    }
  }

  return (
    <ContainerRoot>
      <Header isAdmin={false} />
      <ContainerMainRoom>
        <ContainerInfoRoom>
          <h2>Sala {title}</h2>

          {questions.length > 0 && (
            <span>
              {questions.length} pergunta(s)
            </span>
          )}
        </ContainerInfoRoom>
        <ContainerForm onSubmit={handleSendQuestion}>
          <textarea
            placeholder="O que você quer perguntar?"
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
          />
          <div className="container_send_question_login" >
            {user ? (
              <div className="content_info_user">
                <img className="img_user" src={user.avatar} alt={user.name} />
                <span className="user_name">{user.name}</span>
              </div>
            ) : (
              <span>
                Para enviar uma pergunta, <button type={'button'} onClick={handleSignIn}>Faça seu login.</button>
              </span>
            )}
            <Button style={{ width: "20%" }} disabled={!user} >Enviar pergunta</Button>
          </div>
        </ContainerForm>

        {questions.length <= 0 ? (
          <ContainerEmptyAsks>
            <img src={EmptyAsk} alt="empty asks" />
            <h2>Nenhuma pergunta por aqui...</h2>
            <p>Envie o código desta sala para seus amigos e comece a responder perguntas!</p>
          </ContainerEmptyAsks>
        ) : (
          <div className="scroll_questions">
            {questions.map((question) => (
              <Questions
                onClick={() => handleLikeQustions(question.id, question.likeId)}
                Liked={question.likeId}
                countLike={question.likeCount > 0 && question.likeCount}
                key={question.id}
                question={question.content}
                name={question.author.name}
                avatar={question.author.avatar}
              />
            ))}
          </div>
        )}

      </ContainerMainRoom>
    </ContainerRoot>
  )
}
