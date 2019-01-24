import React, { Component } from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { filterArticle } from '../../ac'

class SelectFilter extends Component {
  state = {
    selectedOption: null
  }

  render() {
    return (
      <Select
        options={this.optionsForSelect}
        onChange={this.handleSelectChange}
        value={this.state.selectedOption}
        isMulti
      />
    )
  }

  get optionsForSelect() {
    return this.props.articleList.map((item) => ({
      value: item.id,
      label: item.title
    }))
  }

  handleSelectChange = (selectedOption) => {
    this.setState({ selectedOption })
    this.props.dispatchSelectArticle(selectedOption)
  }
}

const mapStateToProps = (store) => ({
  articleList: store.articleList
})

export default connect(
  mapStateToProps,
  (dispatch) => ({
    dispatchSelectArticle: (selectedOption) => dispatch(filterArticle(selectedOption))
  })
)(SelectFilter)
