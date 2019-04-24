import React, { Component } from 'react'

import ButtonStatusBar from './ButtonStatusBar'

import './StatusBar.css'

// Array com as configurações do arquivo .env
// referentes aos botões da status bar.
const statusBarButtonsConfig = JSON.parse(process.env.REACT_APP_CONFIGURACAO_BOTOES_STATUS_BAR)

// Renderiza a status bar. Todavia, o botão é exibido
// em seu próprio componente, o ButtonStatusBar,
// recebendo os valores desse componente.

export default class StatusBar extends Component {
  render() {
    return (
      <div className="status-bar">
        {statusBarButtonsConfig.map((button) => {
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
