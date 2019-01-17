import React, {PureComponent} from 'react'

class Article extends PureComponent {
    state= {
        isOpen: false,
        isOpenComments: false
    };
    render() {
        const {isOpen, isOpenComments } = this.state;
        const {article: {title}} = this.props;
        // const {comments: {text}} = this.props.article;
        console.log('render Articlee', this.props.article.comments);
        return (
            <div>
                <h3>
                    {title}
                    <button onClick={this.toggleOpen}>
                        {isOpen ? 'close' : 'open'}
                    </button>
                </h3>
                {this.body}
                <div>
                <h6>
                    {title}
                    <button onClick={this.commentsOpen}>
                        {isOpenComments ? 'close' : 'open'}
                    </button>
                </h6>
                {this.comments}
                </div>
            </div>

        )
    }

    toggleOpen = () => {
        this.setState({isOpen: !this.state.isOpen})
    };

    commentsOpen = () => {
        this.setState({isOpenComments: !this.state.isOpenComments})
    };


    get body() {
        if (!this.state.isOpen) return null;
        return (
            <p>{this.props.article.text}</p>
        );
    }

    get comments() {
        if (!this.state.isOpenComments) return null;
        return (
            <p>AAAA</p>
        );
    }
}

export default Article
