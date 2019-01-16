import React, { Component } from 'react';
import ArticleList from './components/article-list';
import UserForm from './components/user-form';
import Select from 'react-select';
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

class App extends Component {
    state = {
        selected: null,
        startDate: new Date(this.props.articles[1].date),
        endDate: new Date(this.props.articles[0].date)
    }

    render() {
        console.log(this.props)
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
                
            />

            <DatePicker
                selected={this.state.endDate}
                selectsEnd
                startDate={this.state.startDate}
                endDate={this.state.endDate}
                
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
