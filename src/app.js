import React, { Component } from 'react';
import ArticleList from './components/article-list';
import UserForm from './components/user-form';
import Select from 'react-select';
import Picker from './components/Date-Picker/DataPicker';

class App extends Component {
    state = {
        selected: null
    };
  render() {
      console.log('[QWE]', this.options);
    return (
      <div>
          <Picker/>
          <UserForm/>
          <Select
              options={this.options}
              value={this.state.selected}
              onChange={this.handleSelectChange}
              isMulti
          />
          <ArticleList
              // articles={()=> (console.log('[QWE]', this.props.articles))}
              articles={this.props.articles}
          />
      </div>
    );
  }
    handleSelectChange = (selected) => this.setState({selected});

  get options() {
      return this.props.articles.map(article => ({
          value: article.id,
          label: article.title
      }));
  }
}

export default App;
