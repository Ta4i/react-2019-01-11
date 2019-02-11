import React, {Component} from 'react'
import Translate from '../translate'

class UserForm extends Component {
    render() {
        return (
            <div>
                <Translate>username</Translate>:
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
