import React, {PureComponent} from 'react';

class Comment extends PureComponent {
  render() {
    const {user, text} = this.props.comment;
    console.log('render Comment');

    return (
      <div>
        <h3>
          Comment via: {user}
        </h3>
        <p>
          {text}
        </p>
      </div>
    )
  }

}

export default Comment;