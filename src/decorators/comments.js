import React, {Component} from 'react';

export default (OriginalComponent) =>
   class DecoratedComponent extends Component {
      state = {
         openComment: null
      }
      toggleOpenComments = () => {
         this.setState({openComment: (!this.state.openComment)})
      }

      render() {
         return <OriginalComponent
            {...this.state}
            {...this.props}
            toggleOpenComments={this.toggleOpenComments}
         />;
      }
   }
