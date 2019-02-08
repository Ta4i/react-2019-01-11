import React, { Component } from 'react'
import Comment from '../comment/comment'
// import toggleOpen from '../../decorators/toggleOpen'
import PropTypes from 'prop-types';
// import CSSTransition from 'react-addons-css-transition-group'
// import './comment-list.css';
// import CommentForm from '../comment-form';
import {connect} from 'react-redux'
import Loader from '../common/loader';
import { loadComments } from '../../ac';
import { Link, NavLink } from 'react-router-dom';
import { 
  commentsByPageSelector,
  commentsByPageLoadingSelector,
  commentsByPageLoadedSelector,
  getTotalComments,
} from '../../selectors';

export const TypeComments = PropTypes.arrayOf(PropTypes.string)

class CommentsPageList extends Component {
    static propTypes = {
      page: PropTypes.string,
      comments: TypeComments,
    }

    static defaultProps = {
        comments: []
    }

    componentDidMount() {
      if (!this.props.loaded) {
        this.props.loadComments();
      }
    }

    componentDidUpdate() {
      // Эту логику можно описать а action, проверив флаг
      // или наличие комментариев в state
      // где это лучше делать?
      if (!this.props.loading && !this.props.loaded) {
        this.props.loadComments();
      }
    }

    get pagination() {
      const { total, page } = this.props;
      if (!total) return null;
      const limit = 5;
      const pageCount = Math.ceil(total / limit);
      const links = [...Array(pageCount)].map((_, index) => {
        return (
          <NavLink
            key={index}
            to={`/comments/${index + 1}`}
            activeStyle={{color: 'red'}}
          >
            {index + 1}
          </NavLink>
        );
      });
      if (page && page > 1) {
        links.unshift(<Link key='prev' to={`/comments/${page - 1}`} >Prev</Link>);
      }

      if (page && page < pageCount ) {
        links.push(<Link key='next' to={`/comments/${+page + 1}`}>Next</Link>);
      }

      return links;
    }

    get commentsList() {
      const {
        loading,
        loaded,
        comments,
      } = this.props
      if (loading || !loaded) return <Loader />

      return (
        <ul>
            {comments.map((id) => (
                <li key={id}>
                    <Comment id={id} />
                </li>
            ))}
        </ul>
      );
    }

    render() {
        return (
            <div>
                {this.pagination}
                {this.commentsList}
            </div>
        )
    }
}

export default connect(
    (state, ownProps) => ({
      comments: commentsByPageSelector(state, ownProps),
      loading: commentsByPageLoadingSelector(state, ownProps),
      loaded: commentsByPageLoadedSelector(state, ownProps),
      total: getTotalComments(state),
    }),
    (dispatch, ownProps) => ({
      loadComments: () => {
        return dispatch(loadComments(ownProps.page))
      }
    })
)(CommentsPageList)
