import React, { Component } from 'react'
import Comment from './comment'
import toggleOpen from '../decorators/toggleOpen'
import PropTypes from 'prop-types';
import CSSTransition from 'react-addons-css-transition-group';
import './comment-list.css';
class CommentList extends Component {

    render() {
        const { isOpen, toggleOpenItem } = this.props
        return (
            <div>
                <button onClick={toggleOpenItem}>
                    {isOpen ? 'hide comments' : 'show comments'}
                </button>

                <CSSTransition
                    transitionName="comment-list"
                    transitionEnterTimeout={750}
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
                    <li key={comment.id}>
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
    comments: PropTypes.array.isRequired,

    // from decorator
    isOpen: PropTypes.bool,
    toggleOpenItem: PropTypes.func.isRequired
}
export default toggleOpen(CommentList)
