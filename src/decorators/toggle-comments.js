import { Component } from 'react'
import React from 'react'

export default (OriginalComponent) =>
    class DecoratedComponent extends Component {
        state = {
            isCommentsOpen: false
        }

        toggleComments = () => this.setState({ isCommentsOpen: !this.state.isCommentsOpen })
        closeComments = () => this.setState({ isCommentsOpen: false })

        render() {
            return <OriginalComponent
                {...this.props}
                {...this.state}
                toggleComments={this.toggleComments}
                closeComments={this.closeComments}
            />
        }
    }