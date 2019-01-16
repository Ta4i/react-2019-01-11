import React, { PureComponent } from 'react';

function Comment({ comment }) {
    return (
        <li>
            <h5>{comment.user}</h5>
            <span>{comment.text}</span>
        </li>
    )
}

class Article extends PureComponent {
    render() {
        const { article: { title }, isOpen } = this.props
        console.log('render Article');
        return (
            <div>
                <h3>
                    {title}
                    <button
                        onClick={isOpen ? this.toggleClose : this.toggleOpen}>
                        {isOpen ? 'close' : 'open'}
                    </button>
                </h3>
                {this.body}
                {this.comments}
            </div>
        )
    }

    toggleOpen = () => {
        this.props.toggleArticle(this.props.article.id)
    }

    toggleClose = () => {
        this.props.toggleArticle(null)
    }

    get body() {
        if (!this.props.isOpen) return null
        return (
            <p>{this.props.article.text}</p>
        )
    }

    get comments() {
        const { article: { comments } } = this.props
        if (!comments) return null
        return comments.map(comment =>
            <Comment key={comment.id} comment={comment} />
        )
    }
}

export default Article
