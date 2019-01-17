import React, { PureComponent } from 'react'
import Comment from './comment'

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
        {this.comments}
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
      <div key={comment.id}>
        <Comment
          comment={comment}
        />
      </div>
    ))
  }
}

export default CommentsList
