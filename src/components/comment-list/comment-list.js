import React, { Component } from 'react'
import Comment from '../comment/comment'
import toggleOpen from '../../decorators/toggleOpen'
import PropTypes from 'prop-types';
import CSSTransition from 'react-addons-css-transition-group'
import './comment-list.css';
import CommentForm from '../comment-form';
import { connect } from 'react-redux'
import { loadComments } from '../../ac'
import Loader from '../common/loader';

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

    state = {
        error: null
    }

    componentDidCatch(error) {
        this.setState({error})
    }

    componentDidUpdate(oldProps) {
        const {isOpen, loadComments, article: { commentsLoaded, id }} = this.props

        if (!oldProps.isOpen && isOpen && !commentsLoaded) {
            loadComments(id)
        }
    }

    render() {
        const { isOpen, toggleOpenItem, article: { commentsLoading } } = this.props

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
                    {commentsLoading ? (isOpen ? <Loader key="loader" /> : null) : this.body}
                </CSSTransition>
            </div>
        )
    }

    get body() {
        const {
            article: {
                comments = [],
                id: articleId,
                commentsLoaded
            },
            isOpen
        } = this.props

        if (!isOpen || !commentsLoaded) return null;

        const body = comments.length ? (
            <ul key="body">
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
  null,
  (dispatch) => ({
      loadComments: (id) => dispatch(loadComments(id))
  })
)(toggleOpen(CommentList))
