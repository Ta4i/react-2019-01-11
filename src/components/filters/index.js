import React, { Component } from 'react'
import Select from './select'
import DateRange from './date-range-picker'
import PropTypes from 'prop-types';

class Filters extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    }
    //если в DateRange не передаются никакие пропсы, то и PropTypes прописывать не надо?
    render() {
        return (
            <div>
                <Select articles={this.props.articles} />
                <DateRange />                
            </div>
        )
    }
}

export default Filters
