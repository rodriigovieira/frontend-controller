import React, { Component } from "react"

import "./Modal.css"

const releaseReasonsArray = JSON.parse(
  process.env.REACT_APP_MOTIVOS_DE_LIBERACAO
)

export default class Modal extends Component {
  state = {
    name: "",
    reason: "",
    error: ""
  }

  handleChange = event => {
    const { name, value } = event.target

    this.setState({ [name]: value })
  }

  handleAuthorize = () => {
    const copyResponseJson = this.props.responseJson

    const dataJson = {
      liberadoPara: this.state.name,
      motivo: this.state.reason
    }

    copyResponseJson.sentidoAntiHorarioLiberado = true
    copyResponseJson.sentidosentidoHorarioLiberado = true
    copyResponseJson.texto = "Acesso Liberado"
    copyResponseJson.usuarioNome = dataJson.liberadoPara
    copyResponseJson.msgRecepcao = dataJson.motivo
    copyResponseJson.semComando = false
    copyResponseJson.liberacaoTempo = 10000
    copyResponseJson.nomeCatraca = this.props.config.nomeDoDispositivo
    copyResponseJson.motivoLiberacaoManual = dataJson

    const copyResponseJsonStringified = JSON.stringify(copyResponseJson)

    fetch(
      `${this.props.config.endpoint}?libCatraca=${copyResponseJsonStringified}`
    )
      .then(res => res.json())
      .then(res => {
        console.log(res)
      })
  }

  render() {
    return (
      <div className="parent-modal">
        <div className="modal" style={{ fontSize: 16, color: "black" }}>
          <h3
            style={{
              textAlign: "center"
            }}
          >
            Liberação Manual
          </h3>
          <hr />

          <form>
            <span style={{ fontSize: 15 }}>
              Motivo Liberação:&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <select
              name="reason"
              onChange={this.handleChange}
              defaultValue={""}
              required
              style={{ fontSize: 14 }}
            >
              <option disabled value="">
                Selecione Um Valor
              </option>
              {releaseReasonsArray.map(motivo => (
                <option value={motivo}>{motivo}</option>
              ))}
            </select>
            <hr />
            <span>Nome da Pessoa: &nbsp;</span>
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.name}
              name="name"
              style={{ fontSize: 15 }}
              required
            />
            <hr />
            <button
              style={{
                padding: ".5rem 1rem",
                backgroundColor: "green",
                border: "1px solid rgba(0,0,0, .7)",
                color: "white",
                fontSize: 15,
                borderRadius: 10,
                margin: "0 1%"
              }}
              type="submit"
              onClick={event => {
                event.preventDefault()
                if (!this.state.reason || !this.state.name) {
                  this.setState({ error: true })
                  return null
                } else {
                  this.setState({ error: false })
                }

                this.handleAuthorize()
                this.props.closeModal()
              }}
            >
              Liberar
            </button>

            <button
              style={{
                padding: ".5rem 1rem",
                backgroundColor: "red",
                border: "1px solid rgba(0,0,0, .7)",
                color: "white",
                fontSize: 15,
                borderRadius: 10,
                margin: "0 1%"
              }}
              onClick={event => {
                event.preventDefault()
                this.props.closeModal()
                this.setState({ error: false })
              }}
            >
              Cancelar
            </button>
          </form>
        </div>
      </div>
    )
  }
}
