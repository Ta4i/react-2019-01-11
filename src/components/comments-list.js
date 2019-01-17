import React, {PureComponent} from 'react'
import toggleOpenComment from '../decorators/toggle-open-comments'

class Comment extends PureComponent {
    render () {
        const {isOpenText, toggleHide} = this.props
        return (
            <section>
                <button onClick = {toggleHide}>
                    {isOpenText ? 'Hide comments' : 'Show comments'}
                </button>
                <ul>{this.body}</ul>
            </section>
        )
    
    }

    get body() {
        if (!this.props.isOpenText) return null

        return this.props.comments.map((it) => (
            <li key={it.id}>
                <h4>{it.user}</h4>
                <p>{it.text}</p>
            </li>
        ))
    }
}

export default toggleOpenComment(Comment)
