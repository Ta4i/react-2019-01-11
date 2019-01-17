import React, {Component} from 'react'
import Comment from './comment'

class CommentList extends Component {  

  render() {

    return (
      <ul>
        {this.comments}
      </ul>
    )    
  }

  get comments() {
    const {comments} = this.props
    if (!comments) return (
      <p>Нет комментариев к этой статье</p>
    )
    return (comments.map(comment => (
        <Comment comment={comment} key={comment.id}/>
    )))
  } 
}

export default CommentList