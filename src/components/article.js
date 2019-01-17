import React, {PureComponent} from 'react'

import CommentList from './comments-list'

class Article extends PureComponent {
    state={isOpenComments : false }
    render() {
        const {article: {title},
            isOpen} = this.props


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
    toggleOpenComments = () => {
        this.setState({
            isOpenComments: !this.state.isOpenComments
        })
    }
    get body() {
        const {isOpenComments} = this.state
        const {article: {comments}} = this.props
        if (!this.props.isOpen){
            return null
        }
        return (
          <div>
            <p>{this.props.article.text}</p>
              <button onClick={this.toggleOpenComments}>
              {this.props.isOpenComments ? 'closeComments' : 'openComments'}
                </button>

              <CommentList
                comments={comments}
                isOpenComments={isOpenComments}
              />
          </div>
        )
    }
}

export default Article
