// HOC - higher order component
import React, {Component} from 'react';

export default (OriginalComponent) =>
    class DecoratedComponent extends Component {
        state = {
            isVisible: true
        }
        setVisible = () => this.setState({isVisible: !this.state.isVisible})

        render() {
            return <OriginalComponent
                {...this.props}
                {...this.state}
                setVisible={this.setVisible}
            />;
        }

    }