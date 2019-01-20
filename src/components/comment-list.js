import React, { Component } from 'react'
import Comment from './comment'
import toggleOpen from '../decorators/toggleOpen'
import PropTypes from 'prop-types';
import CSSTransition from 'react-addons-css-transition-group'
import './comment.css';
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
                <button onClick={toggleOpenItem}>
                    {isOpen ? 'hide comments' : 'show comments'}
                </button>
                
                    <CSSTransition
                    transitionName="comment"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                >{this.body}</CSSTransition>
                    
                
            </div>
        )
    }

    get body() {
        const { comments, isOpen } = this.props
        if(!isOpen) return null;
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

export default toggleOpen(CommentList)
