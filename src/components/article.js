import React, {PureComponent} from 'react'
import Comments from './Comments'
class Article extends PureComponent {
    state = {
     commentOpen: false       
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
            <div>

                
            </div>
            </div>
            
        )
    }

    toggleOpen = () => this.props.isOpen ? this.props.toggleArticle(null) : this.props.toggleArticle(this.props.article.id)

    toggleComments =() => this.setState({commentOpen: !this.state.commentOpen})

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
