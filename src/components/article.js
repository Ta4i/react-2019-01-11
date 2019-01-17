import React, { PureComponent } from 'react'
import CommentList from './comment-list'
import toggleComments from '../decorators/toggle-comments'

class Article extends PureComponent {
    render() {
        const { article: { title }, isOpen } = this.props
        console.log('render Article')
        return (
            <div>
                <h3>
                    {title}
                    <button onClick={this.toggleArticle}>
                        {isOpen ? 'close' : 'open'}
                    </button>
                </h3>
                {this.body}
            </div>
        )
    }

    toggleArticle = () => {
        let openArticleId = !this.props.isOpen ? this.props.article.id : null
        this.props.toggleArticle(openArticleId)
        this.props.closeComments()
    }

    toggleComments = () => {
        this.props.toggleComments()
    }

    get body() {
        if (!this.props.isOpen) return null
        return (
            <div>
                <p>{this.props.article.text}</p>
                <button onClick={this.toggleComments}>
                    {this.props.isCommentsOpen ? 'hide comments' : 'show comments'}
                </button>
                {this.comments}
            </div>
        )
    }

    get comments() {
        if (!this.props.isCommentsOpen) return null
        return (
            <CommentList comments={this.props.article.comments}/>
        )
    }
}

export default toggleComments(Article)
