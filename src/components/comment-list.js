import React, { Component } from 'react'
import Comment from './comment/comment'
import toggleOpen from '../decorators/toggleOpen'
import PropTypes from 'prop-types';
import CSSTransition from 'react-addons-css-transition-group'
import './comment/comment.css';

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array.isRequired,

        // from decorator
        isOpen: PropTypes.bool,
        toggleOpenItem: PropTypes.func.isRequired
    }

    render() {
        const { isOpen, toggleOpenItem } = this.props
        return (
            <div>
                <button onClick={toggleOpenItem} className="test--comment-btn">
                    {isOpen ? 'hide comments' : 'show comments'}
                </button>
                
                <CSSTransition
                    transitionName="comment"
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={300}
                >
                    {isOpen ? this.getBody() : null}
                </CSSTransition>
                    
            </div>
        )
    }

    getBody() {
        const { comments } = this.props
        const body = comments.length ? (
            <ul className="test--comments-container">
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
    isOpen: PropTypes.bool,
    toggleOpenItem: PropTypes.func,
    comments: PropTypes.array
}

export default toggleOpen(CommentList)
