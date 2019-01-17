import React, {Component} from 'react'
import Comment from './comment'

class CommentList extends Component {  

  state = {
    openComments: null
  }
  render() {

    return (
      <div>
        <button onClick={this.toggleOpenComments}>
          {this.state.openComments ? 'Скрыть комментарии' : 'Показать комментарии'}
        </button>
        <ul>
          {this.comments}
        </ul>
      </div>      
    )    
  }

  toggleOpenComments = () => {
    this.setState({
      openComments: !this.state.openComments
    })
  }

  get comments() {
    const {comments} = this.props

    if (!this.state.openComments) return null

    if (!comments) return (
      <p>Нет комментариев к этой статье</p>
    )

    return (comments.map(comment => (
      <Comment comment={comment} key={comment.id}/>
    )))
  } 
}

export default CommentList