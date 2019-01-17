import React, { Component } from 'react'

export default (OriginalComponent) =>
    class DecoratedComponent extends Component {
        state = {
            isCommentsOpened: false
        }

        toggleOpenComments = () =>
            this.setState({ isCommentsOpened: !this.state.isCommentsOpened })

        get comments() {
            if (!this.state.isCommentsOpened) return null
            return <OriginalComponent {...this.props} {...this.state} />
        }

        render() {
            return (
                <div>
                    <button onClick={this.toggleOpenComments}>
                        {this.state.isCommentsOpened
                            ? 'close comments'
                            : 'open comments'}
                    </button>
                    {this.comments}
                </div>
            )
        }
    }
