import React, {PureComponent} from 'react'
import CommentList from './comment-list'

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
            </div>
        )
    }

    toggleOpen = () => {
        this.props.toggleArticle(this.props.article.id)
    }

    get body() {
        const { article, isOpen } = this.props
        if (!isOpen) return null
      
        return (
            <div>
              <p>{article.text}</p>
              <CommentList comments={article.comments} />
            </div>
        )
    }
}

export default Article
