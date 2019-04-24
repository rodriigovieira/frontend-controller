import React, { Component, Fragment } from "react"

import ButtonStatusBar from "./ButtonStatusBar"
import Modal from "./Modal"

import "./StatusBar.css"

// Renderiza a status bar. Todavia, o botão é exibido
// em seu próprio componente, o ButtonStatusBar,
// recebendo os valores desse componente.
export default class StatusBar extends Component {
  render() {
    return (
      <Fragment>
        <div className="status-bar">
          {this.props.statusBarButtonsConfig.map(button => {
            return (
              <ButtonStatusBar
                key={button.titulo}
                openModal={this.props.openModal}
                closeModal={this.props.closeModal}
                showModal={this.props.showModal}
                config={button}
                responseJson={this.props.responseJson}
              />
            )
          })}
        </div>
      </Fragment>
    )
  }
}
