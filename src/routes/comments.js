import React, { Component } from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import CommentsPage from '../components/comments-page'

class CommentsRoute extends Component {
  render() {
    return (
      <div>
        {this.getMenuComments()}
        <Switch>
          <Route path={'/comments/:page'} render={this.getComments}/>
          <Route path={'/comments'} render={() => <h2>Please select comments page</h2>}/>
        </Switch>
      </div>
    )
  }

  getMenuComments = () => {
      return (
        <ul>
          {
            Array(4).fill(0).map((_, index) => (
              <li key={index}>
                <NavLink to={`/comments/${++index}`} activeStyle={{color: 'red'}}>
                  Page {index}
                </NavLink>
              </li>
            ))
          }
        </ul>
      )
  }

  getComments = ({match}) => (
    <div>
      <CommentsPage page={match.params.page} />
    </div>
  )
}

export default CommentsRoute;
