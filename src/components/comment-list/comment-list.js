import React, { Component } from 'react'
import Comment from '../comment/comment'
import toggleOpen from '../../decorators/toggleOpen'
import PropTypes from 'prop-types';
import CSSTransition from 'react-addons-css-transition-group'
import './comment-list.css';
import CommentForm from '../comment-form';
import {connect} from 'react-redux';
import {loadComments} from '../../ac';
import Loader from '../common/loader';

export const TypeComments = PropTypes.arrayOf(PropTypes.string)

class CommentList extends Component {
    static propTypes = {
        article: PropTypes.object,

        // from decorator
        isOpen: PropTypes.bool,
        toggleOpenItem: PropTypes.func.isRequired
    }

    componentDidUpdate(oldProps) {
        const {isOpen, loadComments, article} = this.props

        if (!oldProps.isOpen && isOpen && !article.commentsLoading && !article.commentsLoaded) {
            loadComments(article.id)
        }
    }

    render() {
        const { isOpen, toggleOpenItem } = this.props
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
                comments,
                id,
                commentsLoading,
                commentsLoaded
            },
            isOpen
        } = this.props
        if (!isOpen) return null;
        if (commentsLoading) return <Loader/>
        if (!commentsLoaded) return null
        const body = comments.length ? (
            <ul>
                {this.props.article.comments.map((id) => {
                    console.log(this.props.article.comments)
                    console.log(id)
                    return (
                    <li key={id} className="test--comment-list__item">
                        <Comment id={id} />
                    </li>
                )
                    })
                    
            }
            </ul>
        ) : (
            <h3 className="test--comment-list__empty">No comments yet</h3>
        )
        return <div>
            <CommentForm articleId={id} />
            {body}
        </div>
    }
}

export default connect(null,
    {loadComments})(toggleOpen(CommentList))
