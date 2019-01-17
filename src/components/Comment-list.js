import React, {PureComponent} from 'react'
import Comment from './Comment'
import commentaries from '../decorators/commentaries'

class Comments extends PureComponent {

    render() {
        
        const{toggleComments} = this.props
        return ( 
            <div>
                <button onClick={toggleComments}>Comments</button>
                <ul>{this.commentList}</ul>
            </div> 
            )
    }
    
    get comments(){
        const {comments} = this.props
        if (comments){
            return comments.map(comment => (
                <li key={comment.id}>
                    <Comment 
                        user = {comment.user}
                        text = {comment.text}
                    />
                </li>
                
            ))
        }
        
    }
    get commentList(){
        const{commentOpen} = this.props
        return commentOpen && this.comments
    }

}

export default commentaries(Comments)
