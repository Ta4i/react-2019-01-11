import React, {Component} from 'react';
import Comment from './comment'
import toggler from '../decorators/toggler'

class CommentList extends Component{
    render() {
        const {
            isHidden,
            toggleVisibility
        } = this.props

        return (
            <React.Fragment>
                <b>Comments:</b>
                <button
                    onClick={toggleVisibility}
                >
                    {isHidden ? 'Show' : 'Hide'}
                </button>
                { !isHidden && this.renderComments(this.comments) }
            </React.Fragment>
        )
    }

    renderComments(comments){
        return (
            comments && comments.length > 0
            ? <ul>{this.comments}</ul>
            : <div>No comments</div>
        )
    }

    get comments() {
        const {
            comments
        } = this.props

        return comments && comments.map(comment => (
            <li key={comment.id}>
                <Comment comment={comment}/>
            </li>
        ))
    }
}

export default toggler(CommentList, true)
