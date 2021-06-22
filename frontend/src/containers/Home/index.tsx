// React
import React from 'react';
import { useHistory } from "react-router-dom";

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


export function Home() {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }

    history.push("/rooms/new");
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
          <form style={{ width: "100%" }}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              className="input_in_class"
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