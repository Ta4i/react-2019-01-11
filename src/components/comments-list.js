import React, {Component} from 'react';
import Comment from './comment';
import Article from './article-list'
//import accordion from '../decorators/accordion';

class CommentList extends Component{
        render() {
        return <ul>{this.comments}</ul>;
    }

    get comments() {
        const {
            comments, isOpenComments
        } = this.props

        if (!isOpenComments){
            return null
        }
        return comments && comments.map(comment => (
          <li key={comment.id}>
              <Comment comment={comment}/>
          </li>
        ))
    }

}

export default CommentList;
