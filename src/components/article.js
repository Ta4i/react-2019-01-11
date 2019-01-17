import React, { PureComponent } from 'react'
import CommentList from './comment-list'
import toggleComments from '../decorators/toggle-item'

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
        this.props.toggleArticle(!this.props.isOpen ? this.props.article.id : null)
        this.props.closeItem()
    }

    toggleComments = () => {
        this.props.toggleItem()
    }

    get body() {
        if (!this.props.isOpen) return null
        return (
            <div>
                <p>{this.props.article.text}</p>
                <button onClick={this.toggleComments}>
                    {this.props.isItemOpen ? 'hide comments' : 'show comments'}
                </button>
                {this.comments}
            </div>
        )
    }

    get comments() {
        if (!this.props.isItemOpen) return null
        return (
            <CommentList comments={this.props.article.comments}/>
        )
    }
}

export default toggleComments(Article)
