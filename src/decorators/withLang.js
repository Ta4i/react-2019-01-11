// HOC - higher order component
import React, {Component} from 'react';
import { DEFAULT_LANGUAGE } from '../constants';
import texts from '../texts';
import { Provider as LangProvider } from '../contexts/lang';

export default (OriginalComponent) =>
    class DecoratedComponent extends Component {
        state = {
            lang: DEFAULT_LANGUAGE,
        }
        handleLangChange = (lang) => this.setState({lang});

        render() {
            return (
                <LangProvider value={{...texts[this.state.lang]}}>
                    <OriginalComponent
                        {...this.props}
                        {...this.state}
                        onLangChange={this.handleLangChange}
                    />
                </LangProvider>
            );
        }

    }
