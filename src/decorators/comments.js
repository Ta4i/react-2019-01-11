import React, {Component} from 'react';

export default (WrapComponent) =>
  class DecoratedComponent extends Component {
      state = {
        isHide: false
      }

      toggleHide = () => {
        this.setState({
          isHide: !this.state.isHide
        })
      }

      render() {
        return <WrapComponent
          {...this.props}
          {...this.state}
          toggleHide={this.toggleHide}
        />
      }
  }