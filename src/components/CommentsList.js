import React, {Component} from 'react';
import Comment from './Comment';
import CommentsDecorator from '../decorators/CommentsDecorator';

class CommentsList extends Component {

    get comments() {
        const {
            comments,
        } = this.props;

        if (comments) {
            return comments.map(comment => (
            <li key={comment.id}>
                <Comment
                    user={comment.user}
                    text={comment.text}
                />
            </li>
        ))}
        else{
            return null;
        }

    }

    render() {
        return (this.comments) ?  <ul>{this.comments}</ul> : <p> No comments yet</p>;
    }
}

export default CommentsDecorator(CommentsList)
