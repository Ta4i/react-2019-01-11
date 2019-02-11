import React, {Component} from 'react'
import localize from '../locale'

class UserForm extends Component {
    render() {
        return (
            <div>
                {localize('username')}:
                <input value={this.props.value} onChange={this.handleChange}/>
            </div>
        )
    }

    handleChange = (event) => {
        event.preventDefault()
        this.props.onChange(event.target.value)
    }
}

export default UserForm
