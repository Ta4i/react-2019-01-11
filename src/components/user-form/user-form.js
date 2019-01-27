import React, {Component} from 'react'
import {connect} from 'react-redux';
import {addComment} from '../../ac';

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
        const { articleId } = this.props
        if (user && text) {
            this.props.addComment({
                user,
                text,
                articleId
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

export default connect(null, {addComment})(UserForm)
