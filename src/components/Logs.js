import React, { Component, Fragment } from "react"

import "./Logs.css"

// Aqui estão todos os registros do sistema.
// A cada novo acesso criado, um log é recebido aqui.

// Todas as informações que são renderizadas, são recebidas
// através dos "props", que são acessados com "this.props".

export default class Logs extends Component {
  render() {
    return (
      <div className="logs">
        {this.props.messageList &&
          this.props.messageList.map(message => (
            <Fragment key={message.usuarioId}>
              <p style={{ color: message.color }} key={message.usuarioNome}>
                {message.time} -{" "}
                <a
                  href={process.env.REACT_APP_ENDERECO_DO_CLIENTE}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "inherit" }}
                >
                  {message.userId}
                </a>{" "}
                - {message.userName}
              </p>
            </Fragment>
          ))}
      </div>
    )
  }
}
