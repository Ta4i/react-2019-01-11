import React, {PureComponent} from 'react'
import Comment from './comment'
import comments from '../../decorators/comments';

class CommentsList extends PureComponent {
   // state = {
   //    openComment: null
   // }

   render() {
      const {
         openComment,
         toggleOpenComments
      } = this.props
      return (
         <div>
            <h4>Comments:
               <button
                  onClick={toggleOpenComments}>
                  {openComment ? 'close' : 'open'}
               </button>
            </h4>
            <ul>
               {this.getComments}
            </ul>
         </div>
      )
   }

   get getComments() {
      const comments = this.props.commentList
      return comments.map(comment => (
        <li key={comment.id}>
          <Comment
            comment={comment}
          />
        </li>
      ))
   }
}

export default comments(CommentsList)
