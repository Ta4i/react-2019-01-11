import React, { Component } from 'react'
import ArticleList from './components/article-list'
import UserForm from './components/user-form'
import Select from 'react-select'
import DatePicker from 'react-datepicker'

import "react-datepicker/dist/react-datepicker.css";

class App extends Component {
  state = {
    selected: null,
    startDate: null,
    endDate: null
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
        Date range: {this.state.startDate ? this.state.startDate.toDateString() : ''} - {this.state.endDate ? this.state.endDate.toDateString(): ''}
        <br/>
        <br/>
        <UserForm/>
        <br/>
        <br/>
        <Select
          isMulti
          options={this.options}
          value={this.state.selected}
          onChange={this.handleSelectChange}
        />
        <br/>
        <ArticleList
          articles={this.props.articles}
        />
      </div>
    )
  }

  handleSelectChange = (selected) => this.setState({ selected })

  handleChangeStart = (startDate) => this.setState({ startDate })

  handleChangeEnd = (endDate) => this.setState({ endDate })

  get options() {
    return this.props.articles.map(article => ({
      value: article.id,
      label: article.title
    }))
  }
}

export default App
