import React, { Component } from 'react'
import PropTypes from 'prop-types';


import Comment from './comment'
import toggleOpen from '../../decorators/toggleOpen'

import CSSTransition from 'react-addons-css-transition-group'
import Article from '../article'


class CommentList extends Component {

  componentDidMount() {
    this.props.fetchData && this.props.fetchData()
  }


    render() {
        const { isOpen, toggleOpenItem } = this.props
        return (
            <div>
                <button className="test--comment__btn" onClick={toggleOpenItem}>
                    {isOpen ? 'hide comments' : 'show comments'}
                </button>
              <CSSTransition
                transitionName="article"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={1000}
              >
                {isOpen ? this.getBody() : null}
              </CSSTransition>
            </div>
        )
    }

    getBody() {
        const { comments } = this.props
        const body = comments.length ? (
            <ul className="test--art-comments__container">
                {comments.map((comment) => (
                    <li key={comment.id} className="test--article_body" >
                        <Comment comment={comment} />
                    </li>
                ))}
            </ul>
        ) : (
            <h3>No comments yet</h3>
        )
        return <div>{body}</div>
    }

  static propTypes = {
    comments: PropTypes.array,

    // from decorator
    isOpen: PropTypes.bool,
    toggleOpenItem: PropTypes.func.isRequired
  }
}

CommentList.defaultProps = {
  comments: [],
  isOpen: false,
  toggleOpenItem: (() =>({}))
}

CommentList.propTypes = {
  isOpen: PropTypes.bool,
  toggleArticle: PropTypes.func,
  comments: PropTypes.array,
}

export default toggleOpen(CommentList)
