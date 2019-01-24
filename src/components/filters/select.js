import React, { Component } from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types'
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
        return this.props.articles.map((item) => ({
            value: item.id,
            label: item.title
        }))
    }

    handleSelectChange = (selectedOption) => {
        this.setState({ selectedOption })
        this.props.dispatchSelect(selectedOption)
    }
}

SelectFilter.propTypes = {
    articles : PropTypes.array
  }


const mapStateToProps = (store) => ({
    articles: store.articles,
    selectedOption: store.filter.selected
});
const mapDispatchToProps = {
    dispatchSelect: filterArticle
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectFilter)
