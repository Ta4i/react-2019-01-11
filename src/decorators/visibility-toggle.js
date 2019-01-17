import React, {Component} from 'react';

export default (OriginalComponent) =>
    class DecoratedComponent extends Component {
        state = {
            isOpen: false
        }
        toggleOpen = () => {
          this.setState({isOpen: !this.state.isOpen})
          console.log('toggleOpen')
        }

        render() {
            return <OriginalComponent
                {...this.props}
                {...this.state}
                toggleOpen={this.toggleOpen}
            />;
        }

    }
