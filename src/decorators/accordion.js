// HOC - higher order component
import React, {Component} from 'react';

export default (OriginalComponent) =>
    class DecoratedComponent extends Component {
        state = {
            openItemId: null
        }
        toggleItem = (id) => this.setState({
            openItemId: id === this.state.openItemId ? null : id
        })

        render() {
            return <div><OriginalComponent
                {...this.props}
                {...this.state}
                toggleItem={this.toggleItem}
            /></div>;
        }

    }
