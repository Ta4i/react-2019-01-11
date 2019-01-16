// HOC - higher order component
import React, {Component} from 'react';

export default (OriginalComponent) =>
    class DecoratedComponent extends Component {
        state = {
            isOpenComment: null
        }
        toggleOpenComments = (id) => {
            id === this.state.isOpenComment ? 
                this.setState({isOpenComment: null}) :
                this.setState({isOpenComment: id})
        }

        render() {
            return <OriginalComponent
                {...this.props}
                {...this.state}
                toggleOpenComments={this.toggleOpenComments}
            />;
        }

    }
