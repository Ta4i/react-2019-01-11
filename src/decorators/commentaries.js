
import React, {Component} from 'react';

export default (OriginalComponent) =>
    class DecoratedComments extends Component {
        state = {
            commentOpen: false
        }
        toggleOpenArticle = (id) => this.setState({openItemId: id})
        
        render() {
            return <OriginalComponent
                {...this.props}
                {...this.state}
                toggleOpenArticle={this.toggleOpenArticle}
                
            />;
        }

    }
