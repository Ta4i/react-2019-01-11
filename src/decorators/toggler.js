import React, { Component } from 'react';

export default (OriginalComponent, initialHiddenState) => 
    class DecoratedComponent extends Component {
        state = {
            isHidden: initialHiddenState
        }

        toggleVisibility = () => {
            this.setState({isHidden : !this.state.isHidden})
        }

        render(){
            return <OriginalComponent
                {...this.props}
                {...this.state}
                toggleVisibility={this.toggleVisibility}
            />
        }
    }