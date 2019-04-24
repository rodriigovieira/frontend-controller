import React, { Component, Fragment } from "react"

import "./ButtonStatusBar.css"

import Modal from "./Modal"

// Responsável por exibir os botões da Status Bar.
// Esse componente recebe a função de liberação através dos props,
// pois a função é definida no componente pai,
// sendo apenas executada nesse componente.

export default class ButtonStatusBar extends Component {
  render() {
    return (
      <Fragment>
        {this.props.showModal && (
          <Modal
            closeModal={this.props.closeModal}
            endpoint={this.props.config.endpoint}
            config={this.props.config}
          />
        )}
        
        <button onClick={this.props.openModal} className="btn">
          {this.props.config.titulo}
        </button>
      </Fragment>
    )
  }
}
