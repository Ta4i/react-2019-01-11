import React, { Component } from 'react'

class Comment extends Component {
  render() {
    const {
      comment: {text, user}
    }=this.props
    return (
      <React.Fragment>
        <p>{text}</p>
        ---- <small>{user}</small>
        <hr/>
      </React.Fragment>
    )
  }
}

export default Comment
