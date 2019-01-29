import React, { Component } from 'react'
import Select from 'react-select'
import {connect} from 'react-redux'
import {changeSelection} from '../../ac';
import {articlesListSelector, selectedSelector} from '../../selectors'

class SelectFilter extends Component {
    
    render() {

        return (
            <Select
                options={this.optionsForSelect}
                onChange={this.handleSelectChange}
                value={this.props.selectedOptions}
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
        this.props.changeSelection(selectedOption)
    }
}

// const mapDispatchToProps = {
//     changeSelectionProp: changeSelection
// }

const mapDispatchToPropsFunc = (dispatch) => {
    return {
        changeSelectionProp: (selectedOption) => {
            dispatch(changeSelection(selectedOption))
        }
    }
}

export default connect(
    state => {
        return ({
            articles: articlesListSelector(state),
            selectedOptions: selectedSelector(state),
        })
    },
    {changeSelection}
)(SelectFilter)
