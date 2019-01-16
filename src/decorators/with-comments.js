import React, { Component } from 'react';

export default (OriginalComponent) =>
    class ComponentWithComments extends Component {
        state = {
            shouldDisplayComments: false
        }

        toggleComments = () => {
            this.setState(prevState => ({
                shouldDisplayComments: !prevState.shouldDisplayComments
            }))
        }
        
        render() {
            return <OriginalComponent
                {...this.props}
                {...this.state}
                toggleComments={this.toggleComments}
            />;
        }
    }
