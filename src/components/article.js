import React, {PureComponent} from 'react'

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
            </div>
        )
    }

    toggleOpen = () => this.props.isOpen ? this.props.toggleArticle(null) : this.props.toggleArticle(this.props.article.id)

    get body() {
        if (!this.props.isOpen) return null
        return (
            <p>{this.props.article.text}</p>
        )
    }
}

export default Article
