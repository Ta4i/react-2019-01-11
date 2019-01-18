import React, {PureComponent} from 'react';
import CommentsList from './comments-list';

class Article extends PureComponent {
    render() {
        const {article: {title}, isOpen} = this.props
        console.log('render Article');
        return (
            <div>
                <h3>
                    {title}
                    <button onClick={this.toggleClick}>
                        {isOpen ? 'close' : 'open'}
                    </button>
                </h3>
                {this.body}
                {this.comments}
            </div>
        )
    }

    toggleClick = () => this.props.isOpen ? this.props.toggleArticle(null) : this.props.toggleArticle(this.props.article.id)

    get body() {
        if (!this.props.isOpen) return null
        return (
            <p>{this.props.article.text}</p>
        )
    }

    get comments() {
        if (!this.props.isOpen) return null;

        return <CommentsList
          comments={this.props.article.comments}
        />;
    }
}

export default Article
