import React, { Component } from 'react'
import Comment from '../comment/comment'
import toggleOpen from '../../decorators/toggleOpen'
import PropTypes from 'prop-types';
import CSSTransition from 'react-addons-css-transition-group'
import './comment-list.css';
import CommentForm from '../comment-form';
import { connect } from 'react-redux'
import { commentsSelector, loadedSelector, loadingSelector } from '../../selectors'
import { loadCommentsByArticleId } from '../../ac';
import Loader from '../article-list/article-list'

export const TypeComments = PropTypes.arrayOf(PropTypes.string)

class CommentList extends Component {
    static propTypes = {
        article: PropTypes.object,

        // from decorator
        isOpen: PropTypes.bool,
        toggleOpenItem: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        const { loadCommentsByArticleId, article, isOpen, comments } = this.props;
        isOpen && !comments && loadCommentsByArticleId(article.id);
    }

    render() {
        const {isOpen, toggleOpenItem, loading} = this.props;
        return (
            (
              <div>
                  <button onClick={toggleOpenItem} className="test--comment-list__btn">
                      {isOpen ? 'hide comments' : 'show comments'}
                  </button>
                  {loading ?
                    <Loader /> :
                    <CSSTransition
                      transitionName="comment-list"
                      transitionEnterTimeout={300}
                      transitionLeaveTimeout={300}

                    >
                        {this.body}
                    </CSSTransition>
                  }
              </div>
            )
        );
    }

    get body() {
        const {
            article: {
                id: articleId
            },
            isOpen,
            comments
        } = this.props;

        if (!isOpen || !comments) return null;

        const body = comments.length ? (
            <ul>
                {comments.map((comment) => (
                    <li key={comment.id} className="test--comment-list__item">
                        <Comment comment={comment} />
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

const mapStateToProps = (store, props) => ({
    comments: commentsSelector(store, props),
    loaded: loadedSelector(store, 'comments'),
    loading: loadingSelector(store, 'comments')
})

export default connect(
  mapStateToProps,
  {
      loadCommentsByArticleId
  }
)(toggleOpen(CommentList))
