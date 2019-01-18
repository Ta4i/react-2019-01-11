// HOC - higher order component
import React, {Component} from 'react';

export default (OriginalComponent) =>
    class DecoratedComponent extends Component {
        state = {
            isOpenComments: false
        }
      toggleOpenComments = () => {
        this.setState({
          isOpenComments: !this.state.isOpenComments
        })
      }


        render() {
            return <OriginalComponent
                {...this.props}
                {...this.state}
                toggleOpenComments={this.toggleOpenComments}
            />;
        }

    }
