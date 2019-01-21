import React, { Component } from 'react'
import PropTypes from 'prop-types';

import './comment-list.css';

import Comment from './comment/comment'
import toggleOpen from '../../decorators/toggleOpen'

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
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const { comments, isOpen } = this.props;

        if (!comments || !comments.length) {
            return <h3>No comments yet</h3>;
        }

        return (
          <ul className="comment-list">
              {comments.map((comment, index) => (
                <li className="item" key={comment.id}>
                    <Comment comment={comment} index={index} isOpen={isOpen}/>
                </li>
              ))}
          </ul>
        )
    }
}

export default toggleOpen(CommentList)
