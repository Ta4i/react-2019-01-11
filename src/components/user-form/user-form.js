import React, {Component} from 'react'
import T from '../translate';

class UserForm extends Component {
    render() {
        return (
            <div>
                <T>form-username</T>:
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
