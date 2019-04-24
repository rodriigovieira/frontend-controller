import React, { Component, Fragment } from 'react'

import Header from '../components/Header'
import Logs from '../components/Logs'
import StatusBar from '../components/StatusBar'

import './Dashboard.css'

const screensConfig = JSON.parse(process.env.REACT_APP_CONFIGURACAO_TELA)

export default class Dashboard extends Component {
  render() {
    return (
      <div style={{
        columnCount: screensConfig.length,
        columnGap: 0
      }}>
        {screensConfig.map(() => (
          <Fragment key={Math.random()}>
            <Header key={Math.random()} />
            <Logs key={Math.random()} />
            <StatusBar key={Math.random()} />
          </Fragment>
        ))}
      </div>
    )
  }
}
