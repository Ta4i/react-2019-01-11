import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import {commentsArraySelector} from '../selectors'
import {connect} from 'react-redux'
import Comment from '../components/comment'
import {loadAllComments} from '../ac'

class CommentsPage extends Component {
    componentDidMount() {
        const {comments, loadAllComments} = this.props
        if (!comments.length) loadAllComments()
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route path={'/comments/:page?'} 
                        render={this.getComments.bind(this)} />
                </Switch>
            </div>
        )
    }

    getComments({match}) {
        const {comments} = this.props
        return comments.map(comment => {
            return <Comment key={comment.id} id={comment.id} />
        })
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
