import React, {PureComponent} from 'react'

import CommentsList from './comments-list'

class Article extends PureComponent {
    render() {
        const {article: {title}, isOpen} = this.props
        console.log('render Article');

        return (
            <div>
                <h3>
                    {title}
                    <button onClick={this.toggleOpen}>
                        {isOpen ? 'close' : 'open'}
                    </button>
                </h3>
                {this.body}
                <p> ------------------------ </p>
            </div>
        )
    }

    toggleOpen = () => {
        this.props.toggleArticle(this.props.article.id)
    }

    get body() {
        const {article, isGlobalOpenComment} = this.props;

        if (!this.props.isOpen) return null
        return (
            <div>
                <p>{this.props.article.text}</p>
                <CommentsList 
                    article={article}
                    isGlobalOpenComment={isGlobalOpenComment}/>
            </div>            
        )
    }
}

export default Article
