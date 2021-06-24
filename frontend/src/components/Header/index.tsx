// React
import React from 'react';
import { useParams } from "react-router-dom";

// Local
import Logo from "../../static/images/logo.svg"
import { ContainerRoot } from './styled';

// Components
import { RoomCode } from '../RoomCode';

type RoomParams = {
  id: string
} 

export function Header({ isAdmin }: { isAdmin: boolean }) {
  const params = useParams<RoomParams>();
  const roomId = params.id

  return (
    <ContainerRoot>
      <div className="container_main">
        <div className="content_logo" >
          <img src={Logo} alt="Logo LetMeask" />
        </div>
        <div className="content_btns" style={{ justifyContent: `${isAdmin ? "space-between" : "flex-end"}` }} >
          <RoomCode code={roomId} />
          {isAdmin && (
            <button className="content_exit_room">Encerrar sala</button>
          )}
        </div>
      </div>
    </ContainerRoot>
  );
}