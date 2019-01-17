import React, { Component } from 'react';
import ArticleList from './components/article-list';
import UserForm from './components/user-form';
import Select from 'react-select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class App extends Component {
  state = {
      selected: null,
      startDate: new Date(2019, 0, 11),
      endDate: new Date(2019, 0, 16)
  }
   
  render() {
    return (
      <div>
          <UserForm/>
          <Select
              options={this.options}
              value={this.state.selected}
              onChange={this.handleSelectChange}
              isMulti
          />
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
          <ArticleList
              articles={this.props.articles}
          />
      </div>
    );
  }
  
  handleChangeStart = (startDate) => {
    if (startDate >= this.state.endDate) return;
    console.log((startDate))
    this.setState({startDate})
  }
  
  handleChangeEnd = (endDate) => {
    if (this.state.startDate >= endDate) return;
    console.log(endDate)
    this.setState({endDate})
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
