import React, {Component} from 'react'
import dictionaries from '../../dictionaries/language-dictionary.js'
import {Provider} from './context'

class LangProvider extends Component {
  
  render() {
    return (
      <Provider value={dictionaries[this.props.language]}>
      {this.props.children}
      </Provider>
    )
  }
}

export default LangProvider