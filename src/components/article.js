import React, {PureComponent} from 'react'
import CommentList from './comment-list'

class Article extends PureComponent {
    state = {
        openComments: null
    }
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
                <button onClick={this.toggleOpenComments}>
                    {this.state.openComments ? 'Скрыть комментарии' : 'Показать комментарии'}
                </button>         
                {this.comments}               
            </div>
        )
    }

    toggleOpen = () => {
        this.props.toggleArticle(this.props.article.id)
    }

    toggleOpenComments = () => {
        this.setState({
            openComments: !this.state.openComments
        })
    }

    get body() {
        if (!this.props.isOpen) return null
        return (
            <p>{this.props.article.text}</p>
        )
    }

    get comments() {
        const {article: {comments}} = this.props
        
        if (!this.state.openComments) return null
        return (
            <CommentList
                openComments={this.state.openComments}
                comments={comments} 
            />
        )
    }
}

export default Article
