// HOC - higher order component
import React, {Component} from 'react';

export default (OriginalComponent) =>
    class DecoratedComponent extends Component {
        state = {
            openItemId: null
        }
        
        toggleOpenArticle = (openItemId) => {
                this.setState({openItemId: openItemId === this.state.openItemId ? null : openItemId
            })
        }        
        
        render() {
            return <OriginalComponent
                {...this.props}
                {...this.state}
                toggleOpenArticle={this.toggleOpenArticle}
            />;
        }

    }
