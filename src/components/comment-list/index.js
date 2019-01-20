import React, { Component } from 'react'
import Index from '../comment/index'
import toggleOpen from '../../decorators/toggleOpen'
import CSSTransitionGroup from 'react-addons-css-transition-group'
import './comment-list.css'
import PropTypes from "prop-types"

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
                <button onClick={toggleOpenItem} className="test--comments__button">
                    {isOpen ? 'hide comments' : 'show comments'}
                </button>
                <CSSTransitionGroup
                   transitionName="comment-list"
                   transitionEnterTimeout={500}
                   transitionLeaveTimeout={500}
                >
                    {isOpen ? this.getBody() : null}
                </CSSTransitionGroup>

            </div>
        )
    }

    getBody() {
        const { comments } = this.props
        const body = comments.length ? (
            <ul className="test--comments__container">
                {comments.map((comment) => (
                    <li key={comment.id} className="test--comment__item">
                        <Index comment={comment} />
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
