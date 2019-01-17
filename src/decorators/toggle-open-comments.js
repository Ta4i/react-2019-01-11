import React, {Component} from 'react'

export default (OriginalComponent) =>
  class DecoratedComponent extends Component {
        state = {
            isOpenText: false
        }

        toggleHide = () => {
            this.setState({
                isOpenText: !this.state.isOpenText
            })
        }

        render() {
            return <OriginalComponent
                {...this.props}
                {...this.state}
                toggleHide={this.toggleHide}
            />
        }
  } 
