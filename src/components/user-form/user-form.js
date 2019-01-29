import React, {Component} from 'react'
import PropTypes from 'prop-types'

class UserForm extends Component {
    state = {
        user: '',
        text: '',
        touched: false,
        submited: false,
    }

    render() {
        const { user, text, touched, submited } = this.state;
        return (
            <div>
                <div>
                    Username:
                    <input value={this.state.user} onChange={this.handleFieldChange('user')}/>
                    {touched && !user && <div>Input username!</div>}
                </div>
                <div>
                    Text:
                    <textarea value={this.state.text} onChange={this.handleFieldChange('text')}/>
                    {touched && !text && <div>Input text!</div>}
                </div>
                <button onClick={this.handleBtnClick}>Add comment</button>
                {!touched && submited && <div>Comment added</div>}
            </div>
        )
    }

    handleBtnClick = () => {
        console.log('handleBtClick');
        const { user, text } = this.state
        if (user && text) {
            this.props.onSubmit({
                user,
                text,
            });
            return this.setState({
                user: '',
                text: '',
                touched: false,
                submited: true
            })
        }

        this.setState({
            touched: true,
        })

    }

    handleFieldChange = (fieldName) => (event) => {
        event.preventDefault()
        console.log('handleFieldChange', fieldName);
        this.setState({
            [fieldName]: event.target.value,
            submited: false,
        })
    }
}

UserForm.propTypes = {
    onSubmit: PropTypes.func,
}

export default UserForm
