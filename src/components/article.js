import React, {PureComponent} from 'react'

class Article extends PureComponent {
    render() {
        const {article: {title}, isOpen} = this.props
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
        if (!this.props.isOpen) return null
        return (
            <p>{this.props.article.text}</p>
        )
    }
}

export default Article
