import React, { Component, Fragment } from 'react'

import './ButtonStatusBar.css'

// Responsável por exibir os botões da Status Bar.
// Esse componente recebe a função de liberação através dos props,
// pois a função é definida no componente pai,
// sendo apenas executada nesse componente.

export default class ButtonStatusBar extends Component {
  render() {
    return (
      <Fragment>
        <button className="btn">
          {this.props.title}
        </button>
      </Fragment>
    )
  }
}
