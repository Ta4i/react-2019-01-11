import React, { PureComponent } from 'react'
import Comment from './comment'

class CommentList extends PureComponent {
    render() {
        return <ul>{this.comments}</ul>
    }

    get comments() {
        const { comments } = this.props

        return comments.map(comment => (
            <li key={comment.id}>
                <Comment comment={comment}/>
            </li>
        ))
    }
}

export default CommentList