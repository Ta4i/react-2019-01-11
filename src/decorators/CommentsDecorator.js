// HOC - higher order component
import React, {Component} from 'react';

export default (OriginalComponent) =>
    class DecoratedComponent extends Component {
        state = {
            isCommentsOpened: false
        };

        toggleOpenComments = () =>  this.setState({isCommentsOpened: !this.state.isCommentsOpened});

        get content (){
            if(!this.state.isCommentsOpened) return null;
            return<OriginalComponent
                {...this.props}
                {...this.state}
            />
        }

        render() {
            return <div>
                <button onClick={this.toggleOpenComments}>
                    {this.state.isCommentsOpened ? 'close comments' : 'open comments'}
                </button>
                {this.content}
            </div>;
        }

    }
