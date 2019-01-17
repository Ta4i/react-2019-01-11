import React, { Component } from 'react'
import ArticleList from './components/article-list'
import UserForm from './components/user-form'
import RangeDatePicker from './components/range-date-picker'
import Select from 'react-select'

class App extends Component {
    state = {
        value: null
    }

    render() {
        return (
            <div>
                <UserForm/>
                <RangeDatePicker/>
                <Select
                    isMulti
                    options={this.options}
                    value={this.state.value}
                    onChange={this.handleSelectChange}
                />
                <ArticleList
                    articles={this.props.articles}
                />
            </div>
        )
    }

    handleSelectChange = (value) => this.setState({ value })

    get options() {
        return this.props.articles.map(article => ({
            value: article.id,
            label: article.title
        }))
    }
}

export default App
