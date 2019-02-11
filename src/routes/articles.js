import React, { Component } from 'react'
import ArticleList from '../components/article-list';
import { Route } from 'react-router-dom';
import Article from '../components/article';
import { Consumer as LangConsumer } from '../contexts/language'

class ArticlesPage extends Component {
    render() {
        return (
            <div>
                <ArticleList />
                <Route path={'/articles/:id'} children={this.getArticle} />
            </div>
        )
    }

    getArticle = ({ match }) => {
        if (match === null) {
            return <h2>
                <LangConsumer>
                    {(language) => language.selectArticle}
                </LangConsumer>
            </h2>
        }
        return <Article key={match.params.id} id={match.params.id} />
    }
}

export default ArticlesPage
