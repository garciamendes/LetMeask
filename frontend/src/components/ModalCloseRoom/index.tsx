// React
import React from "react";

// Local
import {
  ContainerRoot,
  ContainerContentModal,
} from "./styled";
import CloseRoomImg from "../../static/images/close.svg";

export function ModalCloseRoom(props: any) {
  return (
    <ContainerRoot>
      <ContainerContentModal>
        <img src={CloseRoomImg} alt="Close room" />
        <h1>Encerrar sala</h1>
        <p>Tem certeza que você deseja encerrar esta sala?</p>
        <div className="container_btns">
          <button
            className="cancel"
            type="button"
            onClick={props.onCancel}
          >
            Cancelar
          </button>
          <button
            className="close_room"
            type="button"
            onClick={props.onCloseRoom}
          >
            Sim, encerrar
          </button>
        </div>
      </ContainerContentModal>
    </ContainerRoot>
  );
}