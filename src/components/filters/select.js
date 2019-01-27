import React, { Component } from 'react'
import Select from 'react-select'
import {connect} from 'react-redux'
import {changeSelection} from '../../ac';

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
        const { articlesData, articlesIds } = this.props;
        return articlesIds.map((id) => ({
            value: id,
            label: articlesData[id].title
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
        articlesData: state.articles.data,
        articlesIds: state.articles.ids,
        selectedOptions: state.filters.selected
    }),
    mapDispatchToPropsFunc
)(SelectFilter)
