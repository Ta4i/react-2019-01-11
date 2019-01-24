import React, { Component } from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { updateSelectFilter } from '../../ac'

class SelectFilter extends Component {

    render() {
        return (
            <Select
                options={this.optionsForSelect}
                onChange={this.handleSelectChange}
                value={this.props.articlesFilterFromStore}
                isMulti
            />
        )
    }

    get optionsForSelect() {
        return this.props.articlesFromStore.map((item) => ({
            value: item.id,
            label: item.title
        }))
    }

    handleSelectChange = (selectedOption) => {
        this.props.dispatchUpdateSelectFilter(selectedOption)
    }
}

export default connect(
  (store) => ({
      articlesFilterFromStore: store.articlesFilter,
      articlesFromStore: store.articles
  }),
  (dispatch) => ({
      dispatchUpdateSelectFilter: (value) => dispatch(updateSelectFilter(value))
  })
)(SelectFilter)

