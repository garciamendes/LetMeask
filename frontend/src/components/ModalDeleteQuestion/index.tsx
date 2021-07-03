// React
import React from "react";

// Local
import {
  ContainerRoot,
  ContainerContentModal,
} from "./styled";
import DeleteImg from "../../static/images/delete.svg";

export function ModalDeleteQuestion(props: any) {
  return (
    <ContainerRoot>
      <ContainerContentModal>
        <img src={DeleteImg} alt="delete question" />
        <h1>Excluir pergunta</h1>
        <p>Tem certeza que você deseja excluir esta pergunta?</p>
        <div className="container_btns">
          <button
            className="cancel"
            type="button"
            onClick={props.onCancel}
          >
            Cancelar
          </button>
          <button
            className="delete"
            type="button"
            onClick={props.onDelete}
          >
            Sim, excluir
          </button>
        </div>
      </ContainerContentModal>
    </ContainerRoot>
  );
}