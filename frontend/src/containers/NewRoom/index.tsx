// React
import React from 'react';
import { Link } from "react-router-dom";

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
//import { useAuth } from "../../hooks/useAuth";

export function NewRoom() {
  //const { user } = useAuth();

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
          <form style={{ width: "100%" }}>
            <input
              type="text"
              placeholder="Nome da sala"
              className="input_in_class"
            />
            <Button>
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