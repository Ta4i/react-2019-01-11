import React, {PureComponent} from 'react';

import comments from "../decorators/comments";

export class Comments extends PureComponent {
  render() {
    const { isHide, toggleHide } = this.props;

    if (!isHide) {
      return <button onClick={toggleHide}>view comments</button>
    }

    return (
      <React.Fragment>
        <button onClick={toggleHide}>hide comments</button>
        {this.comments}
      </React.Fragment>
    )
  }

  get comments() {
    return this.props.comments.map(({id, user, text}) => (
      <div key={id}>
        <h4>{user}</h4>
        <p>{text}</p>
      </div>
    ))
  }
}

export default comments(Comments);