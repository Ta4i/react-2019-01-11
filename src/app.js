import React, { Component } from 'react'
import ArticleList from './components/article-list/article-list'
import Counter from './components/counter'
import Filters from './components/filters'
import UserForm from './components/user-form/user-form'

class App extends Component {
  render() {
    return (
      <div>
        <Counter />
        <hr />
        <UserForm />
        <hr />
        <Filters articles={[]} />
        <ArticleList />
      </div>
    )
  }
}

export default App
