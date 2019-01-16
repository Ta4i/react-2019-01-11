import React, { Component } from 'react';
import ArticleList from './components/article-list';
import UserForm from './components/user-form';
import Select from 'react-select';
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
import { th } from 'date-fns/esm/locale';

class App extends Component {
    state = {
        selected: null,
        startDate: new Date(),
        endDate: new Date(),
        isGlobalOpenComment: false,
    }    
    
  render() {
    return (
      <div>
        <DatePicker
            selected={this.state.startDate}
            selectsStart
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onChange={this.handleChangeStart}
        />

        <DatePicker
            selected={this.state.endDate}
            selectsEnd
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onChange={this.handleChangeEnd}
        />

        <br/>
        <br/>

        <UserForm/>

        <br/>

        <Select
            isMulti
            name="options"
            options={this.options}
            className="basic-multi-select"
            classNamePrefix="select"
            value={this.state.selected}
            onChange={this.handleSelectChange}
        />

        <br/>
        <br/>

        <button onClick={this.toggleGlobalOpenComments}>
            {this.state.isGlobalOpenComment ? 'close all comments' : 'open all comments'}
        </button>

        <ArticleList
            articles={this.props.articles}
            isGlobalOpenComment={this.state.isGlobalOpenComment}
        />
      </div>
    );
  }
   
  handleSelectChange = (selected) => this.setState({selected})
  toggleGlobalOpenComments = () => this.setState({isGlobalOpenComment: !this.state.isGlobalOpenComment})

  handleChangeStart = (date) => {
    if (this.state.endDate < date) {
        this.setState({
            startDate: date,
            endDate: date,
          });
    } else {
        this.setState({
            startDate: date,
          });
    }        
  }

  handleChangeEnd = (date) => this.setState({
      endDate: this.state.startDate > date ? this.state.startDate : date,})

  
  get options() {
      return this.props.articles.map(article => ({
          value: article.id,
          label: article.title,
          comments: article.comments,
      }))
  }
}

export default App;
