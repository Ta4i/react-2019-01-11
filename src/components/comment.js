import React, {PureComponent} from 'react'

class Comment extends PureComponent {
    render() {
        const {comment: {user}} = this.props
        console.log('render Comment');
        return (
            <div>
                <h3>
                    {user}
                </h3>
                {this.body}
            </div>
        )
    }

    toggleOpen = () => {
        this.props.toggleComment()
    }

    get body() {
        return (
            <p>{this.props.comment.text}</p>
        )
    }
}

export default Comment
