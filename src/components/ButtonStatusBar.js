import React, { Component, Fragment } from 'react'

import './ButtonStatusBar.css'

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
