import React, { Component } from 'react'

import './Header.css'

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <p className="header__title">
          Catraca Principal
        </p>

        <div className="header-container">
          <div className="header__photo">
            <img src="./sem_foto.png" alt="Foto" />
          </div>

          <div className="header-info">
            <p className="header-info__name">
              oi
            </p>

            <div className="header-info__text">
              <p>oi</p>
            </div>
            <button
              className="header-info__button"
            >
              LIBERAR
          </button>
          </div>
        </div>
      </div>
    )
  }
}
