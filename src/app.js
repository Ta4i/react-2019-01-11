import React, { Component } from 'react';
import ArticleList from './components/article-list/article-list';
import Filters from './components/filters';
import Counter from './components/counter';

class App extends Component {
    render() {
        return (
            <div>
                <Counter/>
                <hr/>
                <Filters articles={[]} />
                <ArticleList/>
            </div>
        );
    }
}

export default App;
