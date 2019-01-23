import React, { Component } from 'react'
import { connect } from 'react-redux'
import Select from 'react-select'
import { selectArticle } from '../../ac'

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

  handleSelectChange = (selectedOption) => {
    this.props.dispatchSelectArticle(selectedOption)
  }
}

export default connect(
  (store) => ({
    selectedOptionFromStore: store.selectedOption
  }),
  (dispatch) => ({
    dispatchSelectArticle: (option) => dispatch(selectArticle(option))
  })
)(SelectFilter)
