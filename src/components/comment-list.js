import React, { Component } from 'react'
import Comment from './comment'
import togglerComment from '../decorators/toggler-comment'

export class CommentList extends Component {
    render() {
        return this.comments ? (
            <ul>{this.comments}</ul>
        ) : (
            <p>This article has no comments yet :(</p>
        )
    }

    get comments() {
        const { comments } = this.props

        return comments
            ? comments.map((comment) => (
                  <li key={comment.id}>
                      <Comment user={comment.user} text={comment.text} />
                  </li>
              ))
            : null
    }
}

export default togglerComment(CommentList)
