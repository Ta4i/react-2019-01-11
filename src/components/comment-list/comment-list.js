import React, { Component } from 'react'
import Comment from '../comment/comment'
import toggleOpen from '../../decorators/toggleOpen'
import PropTypes from 'prop-types';
import CSSTransition from 'react-addons-css-transition-group'
import './comment-list.css';
import CommentForm from '../comment-form';
import { loadCommentsByArticle } from '../../ac'
import { connect } from 'react-redux'
import { commentsLoadingSelector } from '../../selectors'
import Loader from '../common/loader'

export const TypeComments = PropTypes.arrayOf(PropTypes.string)

class CommentList extends Component {
    static propTypes = {
        article: PropTypes.object,

        // from decorator
        isOpen: PropTypes.bool,
        toggleOpenItem: PropTypes.func.isRequired
    }

    static defaultProps = {
        comments: []
    }

    componentDidUpdate(prevProps) {
        const { article, loadComments, isOpen } = this.props
        if (!prevProps.isOpen && isOpen) {
            loadComments(article.id)
        }
    }

    render() {
        const { isOpen, toggleOpenItem, loading } = this.props
        if (loading) return <Loader />
        return (
            <div>
                <button onClick={toggleOpenItem} className="test--comment-list__btn">
                    {isOpen ? 'hide comments' : 'show comments'}
                </button>
                <CSSTransition
                    transitionName="comment-list"
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={300}

                >
                    {this.body}
                </CSSTransition>
            </div>
        )
    }

    get body() {
        const {
            article: {
                comments = [],
                id: articleId
            },
            isOpen
        } = this.props

        if (!isOpen) return null;

        const body = comments.length ? (
            <ul>
                {comments.map((id) => (
                    <li key={id} className="test--comment-list__item">
                        <Comment id={id} />
                    </li>
                ))}
            </ul>
        ) : (
                <h3 className="test--comment-list__empty">No comments yet</h3>
            )
        return <div>
            <CommentForm articleId={articleId} />
            {body}
        </div>
    }
}

export default connect(
    (store) => ({
        loading: commentsLoadingSelector(store)
    }),
    (dispatch) => ({
        loadComments: (id) => dispatch(loadCommentsByArticle(id))
    })
)(toggleOpen(CommentList))
