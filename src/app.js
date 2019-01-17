import React, {Component} from 'react'
import ArticleList from './components/article/article-list'
import UserForm from './components/user-form'
import MySelect from './components/select'
import MyDatePicker from './components/datepicker'

import './app.css'

class App extends Component {
   render() {
      return (
         <div>
            <UserForm/>
            <MyDatePicker/>
            <MySelect
               articles={this.props.articles}
            />
            <ArticleList
               articles={this.props.articles}
            />
         </div>
      );
   }

}

export default App;
