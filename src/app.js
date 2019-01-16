import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select';
import ArticleList from './components/article-list';
import UserForm from './components/user-form';


class App extends Component {
    state = {
        selected: null,
        startDate: null,
        endDate: null
    }
    render() {
        return (
            <div>
                <UserForm />
                <Select
                    options={this.options}
                    value={this.state.selected}
                    onChange={this.handleSelectChange}
                />
                <ArticleList
                    articles={this.props.articles}
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
                <span>{this.dateRange}</span>
            </div>
        );
    }
    handleSelectChange = (selected) => this.setState({ selected })
    handleChangeStart = (date) => this.setState({ startDate: date })
    handleChangeEnd = (date) => this.setState({ endDate: date })
    get dateRange() {
        if (!this.state.startDate || !this.state.endDate) {
            return null
        }
        const dateDiffMillis = this.state.endDate - this.state.startDate
        const millisInSecond = 1000
        const secondsInMinute = 60
        const minutesInHour = 60
        const hoursInDay = 24
        const dateDiffDays = dateDiffMillis / (
            millisInSecond * secondsInMinute * minutesInHour * hoursInDay
        )
        return `${dateDiffDays} ${dateDiffDays === 1 ? 'day' : 'days'}`
    }
    get options() {
        return this.props.articles.map(article => ({
            value: article.id,
            label: article.title
        }))
    }
}

export default App;
