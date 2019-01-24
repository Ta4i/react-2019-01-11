import React, { Component } from 'react'
import Select from 'react-select'

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
        return this.props.options.map((item) => ({
            value: item.id,
            label: item.title
        }))
    }

    handleSelectChange = (selectedOptions) => {
        this.props.onChange(selectedOptions);
    }
}

export default SelectFilter
