import React, {PureComponent} from 'react'

class Comment extends PureComponent { 

  render() {
    const {comment: {user, text}} = this.props
    return(
      <li>
        <h4>{user}</h4>
        <p>{text}</p>
      </li>
    )
  }
}

export default Comment