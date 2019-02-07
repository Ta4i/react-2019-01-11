import React, {Component} from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import Comment from '../comment'
import Loader from '../common/loader'
import {loadCommentsPerPage} from '../../ac'
import {commentsPageIdsSelector, totalCommentsSelector, commentsPageLoadingSelector} from '../../selectors'

class CommentsPagination extends Component {
  componentDidMount() {
    const {loadCommentsPerPage, page} = this.props
    loadCommentsPerPage(page)
  }

  componentDidUpdate() {
    const {loadCommentsPerPage, page} = this.props
    loadCommentsPerPage(page)
  }

  render() {
    const {total} = this.props

    if(!total) return <Loader />

    return (
      <div>
        {this.commentElems}
        {this.paginators}
      </div>
    )
  }

  get commentElems() {
    const {comments, loading} = this.props
    
    if (loading || !comments) return <Loader />

    const commentElems = comments.map((id) => (
      <li key={id}>
        <Comment id={id} />
      </li>
    ))

    return <ul>{commentElems}</ul>
  }

  get paginators() {
    const {total} = this.props

    const items = new Array(Math.floor((total-1)/5)+1)
                              .fill()
                              .map((_, index) => (
                                <li key={index}>
                                  <NavLink to={`/comments/${index+1}`}>
                                  {index+1}
                                  </NavLink>
                                </li>
                              ))

    return <ul>{items}</ul>
  }
}

export default connect(
  (store,props) => ({
      total: totalCommentsSelector(store),
      loading: commentsPageLoadingSelector(store, props),
      comments: commentsPageIdsSelector(store, props)
    }),
  { loadCommentsPerPage }
)(CommentsPagination)
