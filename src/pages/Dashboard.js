import React, { Component, Fragment } from "react"

import Header from "../components/Header"
import Logs from "../components/Logs"
import StatusBar from "../components/StatusBar"

import "./Dashboard.css"

// Utiliza as informações informadas no arquivo .env
// e transforma-as em uma array, a ser usada pelo app.
const screensConfig = JSON.parse(process.env.REACT_APP_CONFIGURACAO_TELA)

// Define o endpoint a ser utilizado pelo fetch,
// utilizando as variáveis de ambiente.
const endpoint = `http://${process.env.REACT_APP_HOSTNAME_DO_SERVIDOR}:${
  process.env.REACT_APP_PORTA_DO_SERVIDOR
}`

// Componente "pai". Responsável por renderizar
// todos os outros componentes. Também é o responsável
// pela maioria da lógica.

export default class Dashboard extends Component {
  state = {
    lastId: 0,
    response: {},
    screensConfigToRender: screensConfig
  }

  componentWillMount() {
    // setInterval para a função rodar a cada 400ms,
    // verificando se houve alguma mudança no ultimoId.
    setInterval(() => {
      fetch(`${endpoint}/servidorCatracaIF/logCatraca/ultimoId`)
        .then(res => res.json()) // o fetch retorna uma Promise, e é preciso convertê-la.
        .then(({ result }) => {
          // o { result } nada mais é do que o res.result.
          if (result === this.state.lastId) return null

          fetch(`${endpoint}/servidorCatracaIF/logCatraca/${result}`)
            .then(res => res.json())
            .then(res => {
              this.setState(
                {
                  response: res,
                  responseJson: res.liberaCatracaComando
                    ? JSON.parse(res.liberaCatracaComando)
                    : "",
                  lastId: result
                },
                () => {
                  const { screensConfigToRender, responseJson } = this.state

                  if (!responseJson) return null

                  screensConfigToRender.forEach((config, index) => {
                    if (
                      config.filtro.includes(
                        responseJson.nomeCatraca.toLowerCase()
                      )
                    ) {
                      this.renderHeader(index)
                      this.renderLogs(index)
                    }
                  })
                }
              )
            })
            .catch(e => console.log(e))
        })
        .catch(e => console.log(e))
    }, 400)
  }

  renderHeader = index => {
    const { responseJson, screensConfigToRender } = this.state
    const arrayCopy = [...screensConfigToRender]

    arrayCopy[index].name = responseJson.usuarioNome
    arrayCopy[index].text = responseJson.texto

    this.setState({
      screensConfigToRender: arrayCopy
    })

    return null
  }

  renderLogs = index => {
    const { responseJson, screensConfigToRender } = this.state
    const arrayCopy = [...screensConfigToRender]

    if (!arrayCopy[index].messageList) arrayCopy[index].messageList = []

    const date = new Date()
    const time = date.toLocaleTimeString(navigator.language, {
      hour: "2-digit",
      minute: "2-digit"
    })

    const messageElements = {
      time,
      userId: responseJson.usuarioId,
      userName: responseJson.usuarioNome.toUpperCase()
    }

    arrayCopy[index].messageList.unshift(messageElements)

    this.setState({ screensConfigToRender: arrayCopy })

    return null
  }

  render() {
    const { response, responseJson, screensConfigToRender } = this.state

    return (
      // Inline styling. No React, passam-se as informações
      // do CSS em forma de um objeto. Foi utilizado o inline styling
      // devido à natureza dinâmica do número de colunas na página.
      <div
        style={{
          columnCount: screensConfig.length,
          columnGap: 0
        }}
      >
        {screensConfigToRender.map(config => (
          // Na array que veio do arquivo .env, será rodado um .map,
          // e cada item da Array retornará os seguintes componentes.
          // Em resumo, para cada objeto na array, uma coluna é retornadda.

          // A propriedade "key" serve para agilizar a renderização
          // do React, no caso de chamar o "this.setState".
          <Fragment key={Math.random()}>
            <Header
              key={Math.random()}
              title={config.titulo}
              name={config.name}
              text={config.text}
            />
            <Logs key={Math.random()} messageList={config.messageList} />
            <StatusBar key={Math.random()} />
          </Fragment>
        ))}
      </div>
    )
  }
}
