// React
import React, { FormEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Third party
import { toast } from 'react-toastify';

// Local
import {
  ContainerRoot,
  ContainerInfoRoom,
  ContainerMainRoom,
  ContainerForm,
} from './styled';
//import EmptyAsk from "../../static/images/empty-questions.svg";

// Components
import { Header } from "../../components/Header";
import { Button } from '../../components/Button';

// Services
import { useAuth } from '../../hooks/useAuth';
import { database } from '../../services/firebase';
import { Questions } from '../../components/Questions';

type RoomParams = {
  id: string
}

type FirebaseQuestions = Record<string, {
  author: {
    name: string,
    avatar: string
  },
  content: string,
  isHighlighted: boolean,
  isAnswered: boolean,
}>

type Question = {
  id: string;
  author: {
    name: string,
    avatar: string
  },
  content: string,
  isHighlighted: boolean,
  isAnswered: boolean,
}

export function Rooms() {
  const params = useParams<RoomParams>();
  const roomId = params.id
  const { user } = useAuth();

  const [newQuestion, setNewQuestion] = useState("");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`);

    roomRef.on("value", room => {
      const databaseRoom = room.val();
      const firebaseQuestions: FirebaseQuestions = databaseRoom.questions ?? {};

      const parsedQuestions = Object.entries(firebaseQuestions).map(([key, value]) => {
        return {
          id: key,
          content: value.content,
          author: value.author,
          isAnswered: value.isAnswered,
          isHighlighted: value.isHighlighted,
        }
      })

      setTitle(databaseRoom.title);
      setQuestions(parsedQuestions);
    })
  }, [roomId]);

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
                Para enviar uma pergunta, <button>Faça seu login.</button>
              </span>
            )}
            <Button style={{ width: "20%" }} disabled={!user} >Enviar pergunta</Button>
          </div>
        </ContainerForm>

        <div className="scroll_questions">
          {questions.map((question) => (
            <Questions
              key={question.id}
              question={question.content}
              name={question.author.name}
              avatar={question.author.avatar}
            />
          ))}
        </div>
      </ContainerMainRoom>
    </ContainerRoot>
  )
}
