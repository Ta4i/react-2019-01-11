import { Component } from 'react'
import React from 'react'

export default (OriginalComponent) =>
    class DecoratedComponent extends Component {
        state = {
            isItemOpen: false
        }

        toggleItem = () => this.setState({ isItemOpen: !this.state.isItemOpen })
        closeItem = () => this.setState({ isItemOpen: false })

        render() {
            return <OriginalComponent
                {...this.props}
                {...this.state}
                toggleItem={this.toggleItem}
                closeItem={this.closeItem}
            />
        }
    }