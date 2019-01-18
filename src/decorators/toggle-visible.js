import React, {Component} from 'react';

export default (OriginalComponent) =>
  class DecoratedComponent extends Component {
    state = {
      isVisible: false
    }

    toggleVisibility = () => this.setState({isVisible: !this.state.isVisible})

    render() {
        return <OriginalComponent
          {...this.props}
          {...this.state}
          toggleVisibility={this.toggleVisibility}
        />
    }
  } 