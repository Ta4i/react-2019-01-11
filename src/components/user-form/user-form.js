import React, { Component } from 'react'
import { Consumer as LangConsumer } from '../../contexts/language'
import texts from '../../texts'

class UserForm extends Component {
    render() {
        return (
            <div>
                <LangConsumer>
                    {(language) => `${texts[language].username}: `}
                </LangConsumer>
                <input value={this.props.value} onChange={this.handleChange} />
            </div>
        )
    }

    handleChange = (event) => {
        event.preventDefault()
        this.props.onChange(event.target.value)
    }
}

export default UserForm
