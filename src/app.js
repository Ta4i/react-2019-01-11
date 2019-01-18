import React, { Component } from 'react';
import ArticleList from './components/article-list';
import UserForm from './components/user-form';
import DatePicker from './components/datepicker';
import Multiselect from './components/select';

class App extends Component {
    state = {
        selected: null
    }
  render() {
    return (
      <div>
          <UserForm/>
          <Multiselect articles={this.props.articles}/>
          <DatePicker/>
          <ArticleList
              articles={this.props.articles}
          />
      </div>
    );
  }
    handleSelectChange = (selected) => this.setState({selected})
  get options() {
      return this.props.articles.map(article => ({
          value: article.id,
          label: article.title
      }))
  }
}

export default App;
