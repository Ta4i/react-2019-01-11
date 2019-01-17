import React, {Component} from 'react';
import Comment from './comment';
import visibilityToggle from '../decorators/visibility-toggle';

class CommentList extends Component{
    render() {
        const { isOpen, toggleOpen, comments } = this.props;
        if (!comments || !comments.length) return <div><h4>No comments</h4></div>
        return (
            <div>
                <h4>
                    Comments
                    <button onClick={toggleOpen}>
                        {isOpen ? 'close' : 'open'}
                    </button>
                </h4>
                <ul style={{ display: isOpen ? 'block' : 'none' }}>{this.comments}</ul>
            </div>
        );
    }

    get comments() {
        const { comments } = this.props

        return comments.map(comment => (
            <li key={comment.id}>
                <Comment comment={comment} />
            </li>
        ))
    }
}

export default visibilityToggle(CommentList);
