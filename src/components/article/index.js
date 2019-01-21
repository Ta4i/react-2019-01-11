import React, {PureComponent} from 'react'
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group'

import CommentList from '../comment-list/comment-list';

import './article.css';

class Article extends PureComponent {
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
                  in={isOpen}
                  exit={true}
                  timeout={500}
                  unmountOnExit
                  mountOnEnter
                  classNames="article">
                    {this.body}
                </CSSTransition>
            </div>
        )
    }

    toggleOpen = () => {
        this.props.toggleArticle(this.props.article.id)
    }

    get body() {
        const { article } = this.props;

        return (
          <section className="test--article_body article">
              <p> {article.text}</p>
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
    toggleArticle: PropTypes.func,
    article: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        text: PropTypes.string,
        comments: PropTypes.array
    })
}

export default Article
