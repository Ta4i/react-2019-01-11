import React, { Component } from 'react';

class Comment extends Component {

  render() {
    const { user, text } = this.props.comment
    return ( 
      <div>
        {text} <em>by {user}</em>
      </div>
    )
  }
}

export default Comment;