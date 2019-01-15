import React, {PureComponent} from 'react'

import Comments from './comments';

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
        this.props.toggleArticle(
          this.props.isOpen ? null : this.props.article.id
        )
    }

    get body() {
        if (!this.props.isOpen) return null
        return (
            <div>
                <p>{this.props.article.text}</p>
                <Comments comments={this.props.article.comments}/>
            </div>
        )
    }
}

export default Article
