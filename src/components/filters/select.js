import React, { Component } from 'react'
import { connect } from 'react-redux'
import Select from 'react-select'
import { selectArticles } from '../../ac'

class SelectFilter extends Component {
  render() {
    return (
      <Select
        options={this.optionsForSelect}
        onChange={this.handleSelectChange}
        value={this.props.selectedOptionFromStore}
        isMulti
      />
    )
  }

  get optionsForSelect() {
    return this.props.articles.map((item) => ({
      value: item.id,
      label: item.title
    }))
  }

  handleSelectChange = (selectedOptions) => {
    this.props.dispatchSelectArticles(selectedOptions)
  }
}

export default connect(
  (store) => ({
    selectedOptionFromStore: store.selectedOption
  }),
  (dispatch) => ({
    dispatchSelectArticles: (options) => dispatch(selectArticles(options))
  })
)(SelectFilter)
