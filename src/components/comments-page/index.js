import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCommentsPage } from '../../selectors';
import { loadCommentsByPage } from '../../ac';

class CommentsPage extends Component {
  componentDidUpdate() {
   this.loadData();
  }

  componentDidMount() {
    this.loadData();
  }


  render() {
    const { comments } = this.props;
    if (!comments) {
      return (<div>Loading</div>)
    }

    return (
      <div>
        {
          comments.map((comment) => (
            <div key={comment.id}>
              <h4>{comment.user}</h4>
              <p>{comment.text}</p>
            </div>
          ))
        }
      </div>
    )
  }

  loadData = () => {
    const { comments, fetchData, page } = this.props;
    !comments && fetchData(page);
  }
}

const mapStateToProps = (store, props) => ({
  comments: getCommentsPage(store, props)
})

const mapDispatchToProps = {
  fetchData: loadCommentsByPage
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsPage)
