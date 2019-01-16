import React, { PureComponent } from 'react';
import withComments from "../decorators/with-comments";

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
        const {
            article: { title, comments },
            isOpen,
            toggleComments,
            shouldDisplayComments
        } = this.props
        const hasComments = (comments && comments.length) ? true : false
        console.log('render Article');
        return (
            <div>
                <h3>
                    {title}
                    <button
                        onClick={isOpen ? this.toggleClose : this.toggleOpen}>
                        {isOpen ? 'close' : 'open'}
                    </button>
                    <button
                        onClick={toggleComments}
                        disabled={!hasComments}>
                        {shouldDisplayComments ? 'Hide comments' : 'Show comments'}
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
        const { article: { comments }, shouldDisplayComments } = this.props
        if (!comments || !comments.length || !shouldDisplayComments) {
            return null
        }
        const commentElements = comments.map(comment =>
            <Comment key={comment.id} comment={comment} />
        )
        return <ul>{commentElements}</ul>
    }
}

export default withComments(Article)
