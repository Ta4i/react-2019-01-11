import React, {PureComponent} from 'react'
import CommentList from '../comment-list';
import PropTypes from 'prop-types';
import CSSTransition from 'react-addons-css-transition-group'

import config from '../config'

import '../data.css';

class Article extends PureComponent {
    static propTypes = {
        article: PropTypes.array.isRequired,
        isOpen: PropTypes.bool,
        title: PropTypes.string,
    }

    state = {
        error: null
    }

    componentDidCatch(error) {
        this.setState({error})
    }

    render() {
        const {article: {title}, isOpen} = this.props

        return (
            <div>
                <h3>
                    {title}
                    <button className="test--article__btn" onClick={this.toggleOpen}>
                        {isOpen ? 'close' : 'open'}
                    </button>
                </h3>
                <CSSTransition
                    transitionName="data"
                    transitionEnterTimeout={config.TRANSITION_ENTER}
                    transitionLeaveTimeout={config.TRANSITION_LEAVE}
                >
                    {this.body}
                </CSSTransition>
            </div>
        )
    }

    toggleOpen = () => {
        this.props.toggleArticle(this.props.article.id)
    }

    get body() {
        const {article, isOpen} = this.props

        if (!isOpen) return null

        return (
            <section className="test--article_body">
                <p>{article.text}</p>
                {
                    this.state.error ?
                        null :
                        <CommentList comments={article.comments} />
                }
            </section>
        )
    }
}

Article.propTypes = {
    isOpen: PropTypes.bool,
    toggleArticle: PropTypes.func.isRequired,
    article: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        text: PropTypes.string,
        comments: PropTypes.array
    })
}

export default Article
