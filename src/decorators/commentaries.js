
import React, {Component} from 'react';

export default (OriginalComponent) =>
    class DecoratedComments extends Component {
        state = {
            commentOpen: false
        }
        toggleComments =() => this.setState({commentOpen: !this.state.commentOpen})

        render() {
            return <OriginalComponent
                {...this.props}
                {...this.state}
                toggleComments={this.toggleComments}
            />;
        }

    }
