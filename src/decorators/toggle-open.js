import React, {Component} from 'react';

export default (OriginalComponent) => 
    class DecoratedComponent extends Component {
        state = {
            isOpenItems: null
        }

        toggleOpenItem = () => this.setState({
            isOpenItems: !this.state.isOpenItems
        })

        render() {
            return (
                <OriginalComponent
                    {...this.props}
                    {...this.state}
                    toggleOpenItem={this.toggleOpenItem}
                />
            )
        }
    }