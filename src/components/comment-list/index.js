import PropTypes from 'prop-types'
import React, { Component } from 'react'
import CSSTransition from 'react-addons-css-transition-group'
import toggleOpen from '../../decorators/toggleOpen'
import Comment from '../comment'
import './comment-list.css'

class CommentList extends Component {
  static propTypes = {
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        user: PropTypes.string,
        text: PropTypes.string
      }).isRequired
    ),

    // from decorator
    isOpen: PropTypes.bool,
    toggleOpenItem: PropTypes.func.isRequired
  }

  static defaultProps = {
    comments: []
  }

  render() {
    const { isOpen, toggleOpenItem } = this.props
    return (
      <div>
        <button onClick={toggleOpenItem} className="test--comments__btn">
          {isOpen ? 'hide comments' : 'show comments'}
        </button>
        <CSSTransition
          transitionName="comment-list"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {isOpen ? this.getBody() : null}
        </CSSTransition>
      </div>
    )
  }

  getBody() {
    const { comments } = this.props
    const body = comments.length ? (
      <ul>
        {comments.map((comment) => (
          <li key={comment.id} className="test--comment__container">
            <Comment comment={comment} />
          </li>
        ))}
      </ul>
    ) : (
      <h3>No comments yet</h3>
    )
    return <div>{body}</div>
  }
}

export default toggleOpen(CommentList)
