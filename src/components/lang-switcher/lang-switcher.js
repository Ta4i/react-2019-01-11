import React, {Component} from 'react'
import Translate from '../translate'

class LangSwitcher extends Component {
    render() {
        return (
                <>
                    <div>
                        <input type="radio" value="en"
                               checked={this.props.value === 'en'}
                               onChange={this.handleOptionChange} />
                        <Translate>english</Translate>
                    </div>
                    <div>
                        <input type="radio" value="ru"
                               checked={this.props.value === 'ru'}
                               onChange={this.handleOptionChange} />
                        <Translate>russian</Translate>
                    </div>
                </>
        )
    }

    handleOptionChange = (changeEvent) => {
        this.props.onChange(changeEvent.target.value)
    }
}

export default LangSwitcher
