import React, { Component } from 'react'
import toggle from '../decorators/toggle'

class CommentList extends Component {
  render() {
    const { isOpen } = this.props

    return (
      <div>
        <h4>
          Comments
          <button onClick={this.toggleOpen}>
            {isOpen ? 'close' : 'open'}
          </button>
        </h4>
        <ul>{this.comments}</ul>
      </div>
    )
  }

  get comments() {
    const {
      isOpen,
      comments
    } = this.props

    if (!isOpen) return null

    return comments.map(comment => (
      <li key={comment.id}>
        <span>{comment.user}</span>
        <p>{comment.text}</p>
      </li>
    ))
  }

  toggleOpen = () => this.props.toggleOpen()
}

export default toggle(CommentList)