import React, {PureComponent} from 'react'
import CommentList from './comment-list'

class Article extends PureComponent {

    render() {
        const {article: {title}, isOpen} = this.props

        return (
            <div>
                <h3>
                    {title}
                    <button onClick={this.toggleOpen}>
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

    get body() {
        if (!this.props.isOpen) return null
        return (
            <p>{this.props.article.text}</p>
        )
    }

    get comments() {
        const {article: {comments}} = this.props
        
        
        return (
            <CommentList
                comments={comments} 
            />
        )
    }
}

export default Article
