import React, { Component } from 'react'
import Comment, { commentPropTypes } from '../comment'
import toggleOpen from '../../decorators/toggleOpen'
import PropTypes from 'prop-types';
import CSSTransition from 'react-addons-css-transition-group';
import './comment-list.css';

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.arrayOf(commentPropTypes).isRequired,
        // from decorator
        isOpen: PropTypes.bool,
        toggleOpenItem: PropTypes.func.isRequired
    }

    static defaultProps = {
      comments: [],
    }

    render() {
        const { isOpen, toggleOpenItem } = this.props
        return (
            <div className="test--comment-list__container">
                <button
                  onClick={toggleOpenItem}
                  className="test--comment-list__toggle-btn"
                >
                    {isOpen ? 'hide comments' : 'show comments'}
                </button>
                <CSSTransition
                    transitionName="comment-list"
                    transitionEnterTimeout={300}
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
            <ul className="test--comment-list__list">
                {comments.map((comment) => (
                    <li key={comment.id}>
                        <Comment comment={comment} />
                    </li>
                ))}
            </ul>
        ) : (
            <h3 className="test--comment-list__stub">No comments yet</h3>
        )
        return <div className="test--comment-list__body">{body}</div>
    }
}

export default toggleOpen(CommentList)
