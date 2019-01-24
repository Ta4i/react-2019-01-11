import React, { Component } from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { TypeArticles } from '../article-list/article-list'
import { updateFilters } from '../../ac'

class SelectFilter extends Component {
    static propTypes = {
        articles: TypeArticles
    }

    render() {
        const { selectedOptions } = this.props

        return (
            <Select
                options={this.optionsForSelect}
                onChange={this.handleSelectChange}
                value={selectedOptions}
                isMulti
            />
        )
    }

    get optionsForSelect() {
        const { articles } = this.props

        return articles.map((item) => ({
            value: item.id,
            label: item.title
        }))
    }

    handleSelectChange = (selectedOptions) => {
        this.props.dispatchSelectOption(selectedOptions)
    }
}

export default connect(
    (store) => ({ articles: store.articles, selectedOptions: store.selectedOptions }),
    (dispatch) => ({
        dispatchSelectOption: (selectedOptions) => dispatch(updateFilters({ selectedOptions }))
    })
)(SelectFilter)
