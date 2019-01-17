import React, {Component} from 'react'
import Comment from './comment'
import toggleOpen from '../decorators/toggle-open'

class CommentList extends Component {  
  
  render() {
    const {isOpenItems, toggleOpenItem} = this.props
    return (
      <div>
        <button onClick={toggleOpenItem}>
          {isOpenItems ? 'Скрыть комментарии' : 'Показать комментарии'}
        </button>
        <ul>
          {this.comments}
        </ul>
      </div>      
    )    
  }

  get comments() {
    const {isOpenItems, comments} = this.props

    if (!isOpenItems) return null

    if (!comments) return (
      <p>Нет комментариев к этой статье</p>
    )

    return (comments.map(comment => (
      <Comment comment={comment} key={comment.id}/>
    )))
  } 
}

export default toggleOpen(CommentList)