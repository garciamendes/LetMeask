// React
import React from "react";

// Third party
import { toast } from 'react-toastify';

// Local
import Copy from "../../static/images/copy.svg"

type RoomCodeProps = {
  code: string;
}

export function RoomCode(props: RoomCodeProps) {

  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props.code).then(function () {
      toast.success('Código copiado!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }).catch(function () {
      toast.error('Ouve um erro ao copiar o código', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    });
  }

  return (
    <div className="content_copy_code">
      <button className="btn_copy" onClick={copyRoomCodeToClipboard}>
        <img src={Copy} alt="Copy Code" />
      </button>
      <strong>Sala <span>{props.code}</span></strong>
    </div>
  );
}