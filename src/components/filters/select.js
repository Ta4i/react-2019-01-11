import React, { Component } from 'react'
import Select from 'react-select'
import {connect} from 'react-redux'

import {changeSelection} from '../../ac';
import {articlesSelector} from  '../../selectors';

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
        return Object.entries(this.props.articles).map(([key, value]) => ({
            value: key,
            label: value.title
        }))
    }

    handleSelectChange = (selectedOption) => {
        this.props.changeSelectionProp(selectedOption)
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
    state => ({
        articles: articlesSelector(state),
        selectedOptions: state.filters.selected
    }),
    mapDispatchToPropsFunc
)(SelectFilter)
