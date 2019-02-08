import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CommentsPageList from '../components/comments-page-list';

class CommentsPage extends Component {
    render() {
        return (
          <Route
            path={'/comments/:page'}
            render={this.commentsPageList}
          />
        )
    }

    commentsPageList = ({match}) =>
      <CommentsPageList page={match.params.page} />
}

export default CommentsPage
