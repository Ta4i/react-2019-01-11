import React, {PureComponent} from 'react'


class Reviews extends PureComponent {
  state= {
    isOpenComments: false
  };
  render() {
    console.log('render Article', this.props);
    const { isOpenComments } = this.state;
    const { comments } = this.props;
    return !!comments && (
      <div>
        <div>
          <h5>
            Reviews
            <button onClick={this.commentsOpen}>
              {isOpenComments ? 'close' : 'open'}
            </button>
          </h5>
        </div>
        {this.body}
      </div>
    )
  }

  commentsOpen = () => {
    this.setState({isOpenComments: !this.state.isOpenComments})
  };

  get body() {
    if (this.props.comments === undefined) return null
    if (!this.state.isOpenComments) return null;
    const review = this.props.comments.map( comment => (
      <div key={comment.id}>
        <p>{comment.user}</p>
        <p>{comment.text}</p>
      </div>
    ))
    return review
  }


}

export default Reviews;