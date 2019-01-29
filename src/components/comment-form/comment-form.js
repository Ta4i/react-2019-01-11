import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './comment-form.css';

class CommentForm extends Component {
  state = {
    user: '',
    text: ''
  }

  render() {
    const { user, text } = this.state;

    return (
      <div className="comment-form">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input id="username"
                 type="text" value={user}
                 onChange={(event) => this.onChangeField('user', event.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="text">Text comment:</label>
          <textarea id="text" rows="5" cols="63" value={text}
                 onChange={(event) => this.onChangeField('text', event.target.value)}/>
        </div>
        <button onClick={this.addComment}>submit</button>
      </div>
    )
  }

  onChangeField = (fieldName, value) => {
    this.setState({
      [fieldName]: value
    });
  }

  addComment = () => {
    const { user, text } = this.state;
    if (user && text) {
      this.props.addComment({user, text});
      this.setState({
        user: '',
        text: ''
      })
    }
  }

}

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired
}

export default CommentForm;
