import React, {Component} from 'react';
import Comment from './comment';
import toggleVisibility from '../decorators/toggle-visible';

class CommentsList extends Component {

  render() {
    const {
      isVisible,
      toggleVisibility
    } = this.props

    return (
      <div>
        <button onClick={toggleVisibility}>
          {isVisible ? 'Hide Comments' : 'Show Comments'}
        </button>
        {this.comments}
      </div>
    )
  }

  get comments() {
    if (!this.props.isVisible) return null

    return (
      <ul style={{maxWidth: '50%'}}>
        {this.props.comments.map(comment => (
          <li key={comment.id}>
            <Comment
              comment={comment}
            />
          </li>
        ))}
      </ul>
    )
  }
}

export default toggleVisibility(CommentsList);