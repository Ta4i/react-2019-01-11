import React, {PureComponent} from 'react'
import CommentsList from '../comments/commets-list'

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
        this.props.toggleArticle(this.props.isOpen ? null : this.props.article.id)
    }

    get body() {
        if (!this.props.isOpen) return null
        return (
            <p>{this.props.article.text}</p>

        )
    }
    get comments(){
        if (!this.props.isOpen || !this.props.article.comments) return null
        return(
            <CommentsList
              commentList={this.props.article.comments}
            />
        )
    }
}

export default Article
