import React, {PureComponent} from 'react'
import Reviews from './Reviews/reviews'

class Article extends PureComponent {
    state= {
        isOpen: false,
        isOpenComments: false
    };
    render() {
        const {isOpen, isOpenComments } = this.state;
        const {article: {title}, article: {comments} } = this.props;
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
                  <Reviews
                    comments={comments}
                  />
                </div>
            </div>

        )
    }

    toggleOpen = () => {
        this.setState({isOpen: !this.state.isOpen})
    };


    get body() {
        if (!this.state.isOpen) return null;
        return (
            <p>{this.props.article.text}</p>
        );
    }

}

export default Article
