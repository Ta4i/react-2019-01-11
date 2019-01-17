import React, { Component } from 'react';
import ArticleList from './components/article-list';
import UserForm from './components/user-form';
import Select from 'react-select';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class App extends Component {
    state = {
      selected: null,
      startDate : new Date('2019/01/01'),
      endDate: new Date('2019/03/31')
    }

  handleChange = ({startDate, endDate}) => {
    startDate = startDate || this.state.startDate;
    endDate = endDate || this.state.endDate;
    this.setState({startDate, endDate});
    console.log("date range : " + startDate + " - " + endDate);
  };

  handleChangeStart = startDate =>{
    this.handleChange({startDate});
    //console.log(startDate);
  }

  handleChangeEnd = endDate =>{
    this.handleChange({endDate});
    //console.log(endDate);
  }
  render() {
    return (
      <div>
          <UserForm/>
          <Select
              options={this.options}
              value={this.state.selected}
              onChange={this.handleSelectChange}
              isMulti={true}
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
    handleSelectChange = (selected) => this.setState({selected})
  get options() {
      return this.props.articles.map(article => ({
          value: article.id,
          label: article.title
      }))
  }
}

export default App;
