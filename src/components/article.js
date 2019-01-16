import React, {PureComponent} from 'react';
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
        this.props.toggleArticle(this.props.article.id)
    }

    get body() {
        if (!this.props.isOpen) return null
        const {article: {comments, text}} = this.props
        return (
            <div>
                <p>{text}</p>
                <Comments comments={comments}></Comments>
            </div>
        )
    }
}

export default Article
