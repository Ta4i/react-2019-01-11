import React, {Component} from 'react';
import ArticleList from './components/article-list';
import UserForm from './components/user-form';
import MySelect from './components/select';

class App extends Component {
   state = {
      selected: null
   }

   render() {
      return (
         <div>
            <UserForm/>
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
