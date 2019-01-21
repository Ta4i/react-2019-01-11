import React, {PureComponent} from 'react'

class Article extends PureComponent {
    state= {
        isOpen: false
    };
    render() {
        const {isOpen} = this.state;
        const {article: {title}} = this.props;
        console.log('render Article', this.props);
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
