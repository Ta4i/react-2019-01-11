import React, { Component } from 'react';
import { connect } from 'react-redux';
import ArticleList from './components/article-list/article-list';
// import UserForm from './components/user-form/user-form';
import Filters from './components/filters';
// import Counter from './components/counter';
import {
    changeDateRange,
    changeSelectedOptions,
    deleteArticle,
} from './ac';

class App extends Component {
    get filteredArticles() {
        const {
            filters: {
                selectedOptions,
            },
        } = this.props;

        return this.filteredByDateArticles.filter(this.filterBySelected(selectedOptions));
    }

    get filteredByDateArticles() {
        const {
            articles,
            filters: {
                dateRange: { from, to },
            },
        } = this.props;
        if (from && to) {
            return articles
                .filter(this.filterByDateRange(from, to))
        }

        return articles;
    }

    filterByDateRange = (from, to) => {
        const fromDate = new Date(from);
        const toDate = new Date(to);
        return (item) => {
            const itemDate = new Date(item.date);
            return itemDate >= fromDate && itemDate <= toDate;
        }
    }

    filterBySelected = (options) => (item) => {
        return options.some(option => option.value === item.id)
    }
    /*
        Не могу определиться, где должна находиться эта логика:
        Либо в контейнере (сейчас),
        опять же в контейнере, но сначала changeDateRange() -> новые props и 
        вызов changeSelectedOptions() (в разных rerender)
        либо нужен redux-thunk или аналоги, чтобы логику перенести в экшны
    */
    handleDateRangeChange = (dateRange) => {
        // const { articles, filters: { selectedOptions } } = this.props;
        // const { from, to } = dateRange;

        // if (from && to) {
        //     const filteredArticles = articles
        //         .filter(this.filterByDateRange(from, to));
        //     const newSelectedOptions = selectedOptions.filter(option =>
        //         filteredArticles.some(article => article.id === option.value)
        //     );
        //     this.props.changeSelectedOptions(newSelectedOptions);
        // }
        this.props.changeDateRange(dateRange);
    }

    render() {
        const {
            filters: {
                dateRange,
                selectedOptions,
            },
            changeSelectedOptions,
            deleteArticle,
        } = this.props;
        
        return (
            <div>
                {/* 
                    <Counter/>
                    <hr/>
                    <UserForm/>
                */}
                <Filters
                    dateRange={dateRange}
                    onDateRangeChange={this.handleDateRangeChange}
                    options={this.filteredByDateArticles}
                    selectedOptions={selectedOptions}
                    onSelectChange={changeSelectedOptions}
                />
                <ArticleList
                    articles={this.filteredArticles}
                    onArticleDelete={deleteArticle}  
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    articles: state.articles,
    filters: state.filter,
});

const mapDispatchToProps = {
    changeDateRange,
    changeSelectedOptions,
    deleteArticle,
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
