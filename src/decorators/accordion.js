// HOC - higher order component
import React, { Component } from 'react'

export default (OriginalComponent) =>
    class DecoratedComponent extends Component {
        state = {
            openItemId: null
        }

        toggleOpenItem = (id) => this.setState({ openItemId: id })

        render() {
            return <OriginalComponent
                {...this.props}
                {...this.state}
                toggleOpenItem={this.toggleOpenItem}
            />
        }

    }
