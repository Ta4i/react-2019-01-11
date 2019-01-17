import React, { Component } from 'react'
import ArticleList from './components/article-list'
import UserForm from './components/user-form'
import Select from 'react-select'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

class App extends Component {
    state = {
        selected: null,
        startDate: new Date(new Date().getTime() - 24 * 60 * 60 * 1000),
        endDate: new Date()
    }
    render() {
        return (
            <div>
                <UserForm />

                <DatePicker
                    dateFormat="dd.MM.YYYY"
                    selected={this.state.startDate}
                    selectsStart
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    onChange={this.handleChangeStartDate}
                />
                <DatePicker
                    dateFormat="dd.MM.YYYY"
                    selected={this.state.endDate}
                    selectsEnd
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    onChange={this.handleChangeEndDate}
                />

                <Select
                    options={this.options}
                    value={this.state.selected}
                    onChange={this.handleSelectChange}
                    isMulti
                />

                <ArticleList articles={this.props.articles} />
            </div>
        )
    }

    handleSelectChange = (selected) => this.setState({ selected })

    handleChangeStartDate = (startDate) => {
        if (startDate.getTime() > this.state.endDate.getTime()) {
            alert('Неверный диапазон дат')
            console.error('Неверный диапазон дат')
            return
        }

        this.setState({ startDate })
    }
    handleChangeEndDate = (endDate) => {
        if (endDate.getTime() < this.state.startDate.getTime()) {
            alert('Неверный диапазон дат')
            console.error('Неверный диапазон дат')
            return
        }

        this.setState({ endDate })
    }

    get options() {
        return this.props.articles.map((article) => ({
            value: article.id,
            label: article.title
        }))
    }
}

export default App
