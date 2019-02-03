import React, { Component } from 'react'
import Comment from '../comment/comment'
import toggleOpen from '../../decorators/toggleOpen'
import PropTypes from 'prop-types';
import CSSTransition from 'react-addons-css-transition-group'
import './comment-list.css';
import CommentForm from '../comment-form';
import Loader from '../common/loader';
import { connect } from 'react-redux';
import { loadAllComments } from '../../ac';
import {
    commentsLoadingSelector,
    commentsLoadedSelector
 } from '../../selectors';


export const TypeComments = PropTypes.arrayOf(PropTypes.string)

class CommentList extends Component {
    static propTypes = {
        article: PropTypes.object,
        fetchData: PropTypes.func,

        // from decorator
        isOpen: PropTypes.bool,
        toggleOpenItem: PropTypes.func.isRequired,

        // from connect
        loading: PropTypes.bool,
        loaded: PropTypes.bool,
    }

    static defaultProps = {
        comments: []
    }

    componentDidUpdate(prevProps) {
        const { isOpen, loaded, fetchData } = this.props; 
        !prevProps.isOpen && isOpen && !loaded && fetchData && fetchData()
    }

    render() {
        const { isOpen, toggleOpenItem, loading } = this.props
        return (
            <div>
                <button onClick={toggleOpenItem} className="test--comment-list__btn">
                    {isOpen ? 'hide comments' : 'show comments'}
                </button>
                {loading
                    ? <Loader />
                    : (
                        <CSSTransition
                            transitionName="comment-list"
                            transitionEnterTimeout={300}
                            transitionLeaveTimeout={300}
                            transitionAppear
                            transitionAppearTimeout={600}
                        >
                            {this.body}
                        </CSSTransition>
                    )
                }
            </div>
        )
    }

    get body() {
        const {
            article: {
                comments = [],
                id: articleId
            },
            isOpen,
            loaded,
        } = this.props

        if (!isOpen) return null;

        const body = comments.length && loaded ? (
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

const mapStateToProps = (state) => ({
    loading: commentsLoadingSelector(state),
    loaded: commentsLoadedSelector(state)
})

export default connect(mapStateToProps, {fetchData: loadAllComments})(toggleOpen(CommentList))
