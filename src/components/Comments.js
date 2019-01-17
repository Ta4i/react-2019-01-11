import React, {PureComponent} from 'react'
import Comment from './Comment'

class Comments extends PureComponent {
    state = {
        commentOpen: false
    }

    render() {
        return ( <div>
            
            <button onClick={this.toggleComments}>Comments</button>
                

                <ul>{this.commentList}</ul>
                </div> )
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
    toggleComments =() => this.setState({commentOpen: !this.state.commentOpen})
    
    get commentList(){
        return this.state.commentOpen && this.comments
    }

}

export default Comments
