import React, {PureComponent} from 'react'
import toggler from '../decorators/toggler'

class Comment extends PureComponent {
    render() {
        const {
            comment,
            isHidden,
            toggleVisibility
        } = this.props
       
        return (
            <React.Fragment>    
                <span>
                    {comment.user} says: 
                </span>
                <button
                    onClick={toggleVisibility}
                >
                    {isHidden ? 'Show' : 'Hide'}
                </button>
                { !isHidden && <div>{comment.text}</div>}
            </React.Fragment>
        )
    }
}

export default toggler(Comment, false)
