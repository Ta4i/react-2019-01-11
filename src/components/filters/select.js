import React, { Component } from 'react'
import Select from 'react-select'
import {connect} from 'react-redux'
import { selectArticle } from '../../ac'

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
        return this.props.articlesFromStore.map((item) => ({
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
    articlesFromStore: store.articles
})

export default connect(
  mapStateToProps,
  (dispatch) => ({
      dispatchSelectArticle: (selectedOption) => dispatch(selectArticle(selectedOption))
  })
)(SelectFilter)
