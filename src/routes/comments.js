import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'
import {commentsArraySelector} from '../selectors'
import {connect} from 'react-redux'
import Comment from '../components/comment'
import {loadAllComments} from '../ac'

class CommentsPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            startPage: 1,
            perPage: 3
        }
    }

    componentDidMount() {
        const {comments, loadAllComments} = this.props
        if (!comments.length) loadAllComments()
    }

    render() {
        return (
            <div>
                <Route path={'/comments/:page?'} 
                    render={this.getComments.bind(this)} />
            </div>
        )
    }

    getComments({match}) {
        const {comments} = this.props
        if (!comments.length) return null

        const {startPage, perPage} = this.state
        const totalPages = Math.ceil(comments.length / perPage)
        const pageParam = parseInt(match.params.page)
        
        const page = pageParam && pageParam >= startPage && pageParam <= totalPages
            ? parseInt(pageParam) 
            : startPage
        const start = (page - 1) * perPage
        const end = start + perPage

        const commentElements = comments.slice(start, end).map(comment => {
            return <Comment key={comment.id} id={comment.id} />
        })

        const prevPage = page - 1 >= startPage ? page - 1 : startPage
        const nextPage = page + 1 <= totalPages ? page + 1 : totalPages

        return (
            <div>
                <h5>Page: {page} Total pages: {totalPages}</h5>
                <Link to={`/comments/${prevPage}`}>Prev</Link>
                <Link to={`/comments/${nextPage}`}>Next</Link>
                {commentElements}
            </div>
        )
    }
}

export default connect(
    store => ({
        comments: commentsArraySelector(store)
    }),
    {
        loadAllComments: loadAllComments
    }
)(CommentsPage)
