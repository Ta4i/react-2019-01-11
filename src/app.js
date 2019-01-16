import React, { Component } from 'react';
import ArticleList from './components/article-list';
import UserForm from './components/user-form';
import Select from 'react-select';
import DatePicker from 'react-datepicker'

import "react-datepicker/dist/react-datepicker.css";

class App extends Component {
    state = {
        selected: null,
        startDate: null,
        endDate: null,
    }

    render() {
        return (
            <div>
                <UserForm/>
                <div style={{ margin: `20px 0px`}}>
                    Date Range:  
                    <DatePicker
                        dateFormat="dd.MM.YYYY"
                        selected={this.state.startDate}
                        selectsStart
                        startDate={this.state.startDate}
                        endDate={this.state.endDate}
                        onChange={this.handleChangeStart}
                    />
                    <DatePicker
                        dateFormat="dd.MM.YYYY"
                        selected={this.state.endDate}
                        selectsEnd
                        startDate={this.state.startDate}
                        endDate={this.state.endDate}
                        onChange={this.handleChangeEnd}
                    />
                </div>
                <Select
                    options={this.options}
                    value={this.state.selected}
                    isMulti={true}
                    onChange={this.handleSelectChange}
                />
                <ArticleList
                    articles={this.props.articles}
                />
            </div>
        );
    }

    handleSelectChange = (selected) => this.setState({selected})

    handleChangeStart = (startDate) => this.setState({startDate})

    handleChangeEnd = (endDate) => this.setState({endDate})

    get options() {
        return this.props.articles.map(article => ({
            value: article.id,
            label: article.title
        }))
    }
}

export default App;
