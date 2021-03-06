import React, { Component } from "react"

import "./Header.css"

// Esse componente contém as informações na parte superior.
// A foto, o nome, o status de acesso e o botão de liberação,
// além do título. O design do Header está no arquivo de mesmo nome.

export default class Header extends Component {
  render() {
    const { titulo, name, text, showButton, fontColor } = this.props.config

    return (
      <div className="header" style={{ color: fontColor }}>
        <p className="header__title">{titulo}</p>

        <div className="header-container">
          <div className="header__photo">
            <img src="./sem_foto.png" alt="Foto" />
          </div>

          <div className="header-info">
            <p className="header-info__name">{name}</p>

            <div className="header-info__text">
              <p>{text}</p>
            </div>

            {showButton && (
              <button
                className="header-info__button"
                onClick={this.props.handleAuthorize}
              >
                LIBERAR
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }
}
