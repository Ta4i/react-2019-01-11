import React, { Component } from 'react'
import Select from 'react-select'
import {connect} from 'react-redux'
import {changeSelectionFilter} from '../../ac'

class SelectFilter extends Component {
  render() {
    return (
      <Select
        options={this.optionsForSelect}
        value={this.props.selected}
        onChange={this.handleSelectChange}
        isMulti
      />
    )
  }
  
  
  get optionsForSelect() {
    return this.props.articles.map((article) => ({
      label: article.title,
      value: article.id
    }))
  }
                          
  handleSelectChange = (selected) => {
    this.props.changeSelectionFilter(selected)
  }

}

export default connect(
  (state) => ({
    selected: state.filters.selected,
    articles: state.articles
  }),
  {changeSelectionFilter}
)(SelectFilter)