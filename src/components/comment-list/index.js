import React, { Component } from 'react'
import Comment from '../comment'
import toggleOpen from '../../decorators/toggleOpen'
import PropTypes from 'prop-types';
import CSSTransition from 'react-addons-css-transition-group'

import './comment-list.css';

class CommentList extends Component {
    render() {
        const { isOpen, toggleOpenItem } = this.props
        return (
            <div className="test--comment-list__container">
                <button onClick={toggleOpenItem} className="test--comment-list__btn">
                    {isOpen ? 'hide comments' : 'show comments'}
                </button>
                <CSSTransition
                    transitionName="comment-list"
                    transitionEnterTimeout={1000}
                    transitionLeaveTimeout={1000}
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

CommentList.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleOpenItem: PropTypes.func.isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired
  }))
}

export default toggleOpen(CommentList)
