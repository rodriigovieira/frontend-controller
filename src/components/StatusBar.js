import React, { Component } from 'react'

import ButtonStatusBar from './ButtonStatusBar'

import './StatusBar.css'

const statusBarButtonsConfig = JSON.parse(process.env.REACT_APP_CONFIGURACAO_BOTOES_STATUS_BAR)

export default class StatusBar extends Component {
  render() {
    return (
      <div className="status-bar">
        {statusBarButtonsConfig.map((button) => {
          console.log(button)
          return (
            <ButtonStatusBar
              key={button.titulo}
              title={button.titulo}
              endpoint={button.endpoint}
            />
          )
        }
        )}
      </div>
    )
  }
}
