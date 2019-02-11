import React, {Component as ReactComponent} from 'react'
import {Consumer} from './context'

export default (OriginalComponent) => 
  class Translate extends ReactComponent {
    render() {
      return (
        <Consumer>
          {
            (dictionary) => (
              <OriginalComponent {...this.props} t={this.createTranslate(dictionary)}/>
            )
          }
        </Consumer>
      )
    }
    createTranslate = (dictionary) => (text) => dictionary[text] || text
  } 
