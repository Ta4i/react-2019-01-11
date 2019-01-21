import React, { Component } from 'react'
import Comment from '../comment'
import toggleOpen from '../../decorators/toggleOpen'
import PropTypes from 'prop-types';
import CSSTransition from 'react-addons-css-transition-group'
import './comment-list.css';

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array.isRequired,

        // from decorator
        isOpen: PropTypes.bool,
        toggleOpenItem: PropTypes.func.isRequired
    }

    static defaultProps = {
        comments: [],

        // from decorator
        isOpen: false,
        toggleOpenItem: null
    };

    render() {
        const { isOpen, toggleOpenItem } = this.props
        return (
            <div>
                <button className="test--comment__btn" onClick={toggleOpenItem}>
                    {isOpen ? 'hide comments' : 'show comments'}
                </button>
                    <CSSTransition
                            transitionName="commentlist"
                            transitionEnterTimeout={5000}
                            transitionLeaveTimeout={3000}
                        >
                        {isOpen ? this.getBody() : null}
                    
                            
                    </CSSTransition>
            </div>
        )
    }

    getBody() {
        const { comments } = this.props
        const body = comments.length ? (
            <ul >
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
