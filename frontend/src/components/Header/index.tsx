// React
import React from 'react';

// Local
import Logo from "../../static/images/logo.svg"
import Copy from "../../static/images/copy.svg"
import { ContainerRoot } from './styled';

export function Header() {
  return (
    <ContainerRoot>
      <div className="container_main">
        <div className="content_logo" >
          <img src={Logo} alt="Logo LetMeask" />
        </div>
        <div className="content_btns">
          <div className="content_copy_code">
            <button className="btn_copy">
              <img src={Copy} alt="Copy Code" />
            </button>
            <strong>Sala #323243</strong>
          </div>
          <button className="content_exit_room">Encerrar sala</button>
        </div>
      </div>
    </ContainerRoot>
  );
}