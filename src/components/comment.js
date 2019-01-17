import React, { PureComponent } from 'react'

class Comment extends PureComponent {
    render() {
        const { user, text } = this.props.comment
        console.log('render Comment')
        return (
            <div>
                <h4>{user}</h4>
                <p>{text}</p>
            </div>
        )
    }
}

export default Comment
