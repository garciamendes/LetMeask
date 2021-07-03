// React
import React, { FormEvent, useState } from 'react';
import { useHistory } from "react-router-dom";

// Third party
import { toast } from 'react-toastify';

// Components
import { Button } from "../../components/Button";

// Local
import Illustration from "../../static/images/illustration.svg"
import Logo from "../../static/images/logo.svg";
import GoogleIcon from "../../static/images/google-icon.svg";
import Login from "../../static/images/log-in.svg";
import {
  ContainerRoot,
  ContainerLeftMain,
  ContainerRightMain,
  ButtonGoogle,
  Divider
} from "./styled";

// Hooks
import { useAuth } from '../../hooks/useAuth';

// Services
import { database } from "../../services/firebase";


export function Home() {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();

  const [roomCode, setRoomCode] = useState("");

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }

    history.push("/rooms/new");
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if (roomCode.trim() === "") {
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      alert("Room does not exists.")
      return;
    }

    if (roomRef.val().endedAt) {
      return toast.warning('Room already closed', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }

    history.push(`/rooms/${roomCode}`);
  }

  return (
    <ContainerRoot>
      <ContainerLeftMain>
        <img src={Illustration} alt="Illustration Home" />
        <strong className="title">Toda pergunta tem uma resposta.</strong>
        <p>Aprenda e compartilhe conhecimento
          com outras pessoas</p>
      </ContainerLeftMain>
      <ContainerRightMain>
        <div className="container_right_secondary">
          <img src={Logo} style={{ marginBottom: "5%" }} alt="Logo" />
          <ButtonGoogle onClick={handleCreateRoom} >
            <img src={GoogleIcon} style={{ marginRight: 15 }} alt="icon goolge" />
            Crie sua sala com o Google
          </ButtonGoogle>
          <div className="option_container">
            <Divider />
            <p className="text_option_container">ou entre em uma sala</p>
            <Divider />
          </div>
          <form style={{ width: "100%" }} onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              className="input_in_class"
              value={roomCode}
              onChange={event => setRoomCode(event.target.value)}
            />
            <Button>
              <img src={Login} style={{ marginRight: 10 }} alt="Log-in class" />
              Entrar na sala
            </Button>
          </form>
        </div>
      </ContainerRightMain>
    </ContainerRoot>
  );
}