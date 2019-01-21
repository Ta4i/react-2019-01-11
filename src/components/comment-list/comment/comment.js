import React, { Component } from 'react';
import { TweenLite } from 'gsap';

import { CSSTransition } from 'react-transition-group';

import './comment.css';
import PropTypes from 'prop-types'

class Comment extends Component {
  static propTypes = {
    comment: PropTypes.object.shape({
      id: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired,

    // from decorator
    isOpen: PropTypes.bool.isRequired,
    index: PropTypes.number.isRequired
  }

  render() {
    const { comment: { user, text }, isOpen, index } = this.props
    return (
      <CSSTransition
        in={isOpen}
        exit={true}
        timeout={{ enter: 500 + 100 * index, exit: 450 + 150 * index }}
        classNames="comment-fade"
        unmountOnExit
        mountOnEnter
        onEntered={this.open}
        onExit={this.close}>
        <div className="comment" ref={div => this.comment = div}>
          <h4>{user}</h4>
          <p>{text}</p>
        </div>
      </CSSTransition>
    )
  }

  open = () => {
    TweenLite.to(
      this.comment,
      1 + .5 * this.props.index,
      { x: -100, css: { marginLeft: 0, opacity: 1 } }
    )
  }

  close = () => {
    TweenLite.to(
      this.comment,
      1 + .5 * this.props.index,
      { x: 100, css: { opacity: 0, marginLeft: 100 } }
    )
  }

}

export default Comment
