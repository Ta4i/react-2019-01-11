import React, {PureComponent} from 'react'
import CommentList from './comment-list';

class Article extends PureComponent {
    render() {
        const {
            article: {title},
            isOpen
        } = this.props
        console.log('render Article');
        return (
            <div>
                <h3>
                    {title}
                    <button onClick={() => this.toggleOpen(isOpen)}>
                        {isOpen ? 'close' : 'open'}
                    </button>
                </h3>
                {this.body}
            </div>
        )
    }

    toggleOpen = (isOpen) => {
        this.props.toggleArticle(!isOpen ? this.props.article.id : null)
    }

    get body() {
        const {
            article: {comments},
            isOpen
        } = this.props

        return !isOpen ? null
            : (
                <div>
                    <div>{this.props.article.text}</div>
                    <CommentList comments={comments} />
                </div>
            )
    }
}

export default Article
