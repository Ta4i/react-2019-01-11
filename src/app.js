import React, { Component } from 'react';
import ArticleList from './components/article-list';
import UserForm from './components/user-form';

import Daterange from './components/Daterange'
import "react-datepicker/dist/react-datepicker.css";
import Multiselect from './components/Multiselect'
class App extends Component {

  render() {
    return (
      <div>
        <UserForm/>

        <Multiselect articles={this.props.articles}/>
            
        <Daterange />
          
        <ArticleList
            articles={this.props.articles}
        />
      </div>
    );
  }




}

export default App;
