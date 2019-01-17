import React, { Component } from 'react';
import ArticleList from './components/article-list';
import UserForm from './components/user-form';
import DateRangePicker from './components/date-range-picker';
import Select from 'react-select';

class App extends Component {
    state = {
        selected: null,
    }

    render() {
        return (
        <div>
            <UserForm/>
            <Select
                isMulti
                options={this.options}
                value={this.state.selected}
                onChange={this.handleSelectChange}
            />
            <DateRangePicker />
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
