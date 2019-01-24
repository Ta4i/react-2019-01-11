import React, { Component } from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { selectArticle } from '../../ac'

class SelectFilter extends Component {
    render() {
        return (
            <Select
                options={this.optionsForSelect}
                onChange={this.handleSelectChange}
                value={this.props.selectedOption}
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
        this.props.dispatchSelect(selectedOption)
    }
}

const mapDispatchToProps = {
    dispatchSelect: selectArticle
}

export default connect(
  (store) => ({
      articles: store.articles,
      selectedOption: store.filter.select
  }),
  mapDispatchToProps
)(SelectFilter)
