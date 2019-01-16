import React, { Component } from 'react';
import Select from 'react-select';
import ArticleList from './components/article-list';
import DateRange from './components/date-range';
import UserForm from './components/user-form';


class App extends Component {
    state = {
        selected: null
    }
    render() {
        return (
            <div>
                <UserForm />
                <Select
                    isMulti
                    options={this.options}
                    value={this.state.selected}
                    onChange={this.handleSelectChange}
                />
                <ArticleList
                    articles={this.props.articles}
                />
                <DateRange />
            </div>
        );
    }
    handleSelectChange = (selected) => this.setState({ selected })
    get options() {
        return this.props.articles.map(article => ({
            value: article.id,
            label: article.title
        }))
    }
}

export default App;
