import React, {PureComponent} from 'react'
import comments from '../decorators/comments';

class CommentsList extends PureComponent {
    render() {
        const {isOpenComment, isGlobalOpenComment} = this.props
        console.log('render Comments');

        if (!isGlobalOpenComment) {
            return (            
                <div>
                    <h4>
                        * Comments *
                        <button onClick={this.toggleOpenComments}>
                            {isOpenComment ? 'close comments' : 'open comments'}
                        </button>
                    </h4>
                    {this.comments}
                </div>
            )
        }
        return null;
    }

    toggleOpenComments = () => {
        this.props.toggleOpenComments(this.props.article.id)
    }

    get comments() {
        const {
            isOpenComment,
            article,
            isGlobalOpenComment,
        } = this.props

        if (isGlobalOpenComment || !isOpenComment) return null

        if ('comments' in article) {
            return article.comments.map(comment => (            
                <li key={comment.id}>
                    <p>
                        {comment.text}
                    </p>
                </li>
            ))
        } else {
            return <p> *** No comments *** </p>
        }        
    }
}

export default comments(CommentsList);
