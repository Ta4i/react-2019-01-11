import React, { PureComponent } from 'react'
import Comment from './comment'
// import comments from '../decorators/comments';

class CommentsList extends PureComponent {
  state = {
    isOpen: null
  }
  render() {
    return (
      <div>
        <h4>Comments:
          <button
            onClick={this.toggleOpen}>
            {this.state.isOpen ? 'close' : 'open'}
          </button>
        </h4>
        <ul>
          {this.comments}
        </ul>
      </div>
    )
  }

  toggleOpen = () => {
    this.setState({isOpen: (!this.state.isOpen)})
  }

  get comments() {
    if(!this.state.isOpen) return null
    const comments = this.props.comments
    return comments.map(comment => (
      <li key={comment.id}>
        <Comment
          comment={comment}
        />
      </li>
    ))
  }
}

export default CommentsList
