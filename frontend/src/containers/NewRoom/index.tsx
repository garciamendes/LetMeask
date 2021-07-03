// React
import React, { FormEvent, useState } from 'react';
import { Link, useHistory } from "react-router-dom";

// Third party
import { toast } from 'react-toastify';

// Components
import { Button } from "../../components/Button";

// Local
import Illustration from "../../static/images/illustration.svg"
import Logo from "../../static/images/logo.svg";
import {
  ContainerRoot,
  ContainerLeftMain,
  ContainerRightMain,
} from "./styled";

// Hooks
import { useAuth } from "../../hooks/useAuth";

// Services
import { database } from "../../services/firebase";

export function NewRoom() {
  const history = useHistory();
  const { user } = useAuth();

  const [newRoom, setNewRoom] = useState("");

  async function handleNavigationToRoom(event: FormEvent) {
    event.preventDefault();

    if (newRoom.trim() === "") {
      return toast.warning('Digite um nome para a sala', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }

    const roomRef = database.ref("rooms")

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    });

    history.push(`/rooms/admin/${firebaseRoom.key}`);
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
          <h3>Crie uma nova sala</h3>
          <form style={{ width: "100%" }} onSubmit={handleNavigationToRoom}>
            <input
              type="text"
              placeholder="Nome da sala"
              value={newRoom}
              onChange={event => setNewRoom(event.target.value) }
              className="input_in_class"
            />
            <Button type="submit">
              Criar sala
            </Button>
          </form>
          <p className="content_exist_room">
            Quer entrar em uma sala já existente?
            <Link to="/" >Clique aqui</Link>
          </p>
        </div>
      </ContainerRightMain>
    </ContainerRoot>
  );
}