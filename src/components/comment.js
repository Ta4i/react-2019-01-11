import React, {PureComponent} from 'react'

class Comment extends PureComponent {
    render() {
        const {comment: {user, text}} = this.props

        return (
            <div>
                <h5>
                    {user}
                </h5>
                {text}
            </div>
        )
    }
}

export default Comment
