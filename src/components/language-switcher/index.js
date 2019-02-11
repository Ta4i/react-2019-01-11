import React, { Component } from 'react'
import localize from '../locale'

class LanguageSwitcher extends Component {
    
    handleOptionChange = (value) => {
        this.props.onChange(value)
    }

    render() {
        return (
            <div>
                <button onClick={() => this.handleOptionChange('eng')}>{localize('english')}</button>
                <button onClick={() => this.handleOptionChange('rus')}>{localize('russian')}</button>
            </div>
        )
    }
}

export default LanguageSwitcher
