import React, {Component} from 'react'
import CommentsPagination from '../components/comments-pagination'
import {Route} from 'react-router-dom'

class CommentsPage extends Component {

  render() {
    return <Route path='/comments/:page' 
                render={this.commentsPaginator} />
  }
  commentsPaginator = ({match}) => {
    return <CommentsPagination page={match.params.page} />
  }
  
}



export default CommentsPage