import React, { Component } from 'react'


class Comment extends Component {
  render() {
    const {
      comment: {text, user}
    }=this.props
    return (
      <div>
        <p>{text}</p>
        ---- <small>{user}</small>
        <hr/>
      </div>
    )
  }
}

export default Comment
