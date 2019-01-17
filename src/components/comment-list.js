import React, { Component } from 'react'
import Comment from './comment'
import toggleOpen from '../decorators/toggle-open'

class CommentList extends Component {
  
  render() {
    const { isOpen, toggleOpen } = this.props 
    return (
      <div>
        <button onClick={toggleOpen}>{isOpen ? 'Hide comments' : 'Show comments'}</button>
        {this.body}
      </div>
    )
  }
  
  get body() {
    const { comments, isOpen } = this.props
    
    if (!isOpen) return null
    
    const body = (comments) ? (
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <Comment comment={comment} />
          </li>
        ))}
      </ul>
    ) : (
      <p>No comments yet</p>
    )
    
    return <div>{body}</div>
  }
}

export default toggleOpen(CommentList)