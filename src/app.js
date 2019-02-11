import React, { Component } from 'react';
import ArticlesPage from './routes/articles';
import CommentsPage from './routes/comments-page';
import ErrorPage from './routes/error';
import UserForm from './components/user-form/user-form';
import Filters from './components/filters';
import Counter from './components/counter';
import { Route, Switch, Redirect } from 'react-router-dom';
import Menu from './components/menu';
import MenuItem from './components/menu-item';
import { Provider as AuthProvider } from './contexts/auth';
import LanguageSwitch from './components/language-switch'
import { Provider as LangProvider, Consumer as LangConsumer } from './contexts/language'
import texts from './texts'

class App extends Component {
    state = {
        userName: '',
        language: 'en'
    }

    handleUserNameChange = (userName) => {
        this.setState({ userName })
    }

    handleLangChange = (language) => {
        this.setState({ language })
    }

    render() {
        const style = {
            display: 'flex',
            justifyContent: 'space-between',
            maxWidth: '600px'
        }
        return (
            <LangProvider value={this.state.language}>
                <AuthProvider value={{ contextUserName: this.state.userName }}>
                    <div>
                        <div style={style}>
                            <UserForm value={this.state.userName} onChange={this.handleUserNameChange} />
                            <LanguageSwitch value={this.state.language} onChange={this.handleLangChange} />
                        </div>
                        <LangConsumer>
                            {language => <React.Fragment>
                                <Menu>
                                    <MenuItem to={'/counter'}>{texts[language].counter}</MenuItem>
                                    <MenuItem to={'/filters'}>{texts[language].filters}</MenuItem>
                                    <MenuItem to={'/articles'}>{texts[language].articles}</MenuItem>
                                    <MenuItem to={'/comments/1'}>{texts[language].comments}</MenuItem>
                                </Menu>
                                <Switch>
                                    <Route path={"/counter"} component={Counter} exact strict />
                                    <Route path={"/filters"} component={Filters} />
                                    <Route path={"/articles/new"} render={() => <h1>
                                        {texts[language].newArticle}
                                    </h1>} />
                                    <Route path={"/articles"} component={ArticlesPage} />
                                    <Route path={"/comments"} component={CommentsPage} />
                                    <Route path={"/error"} component={ErrorPage} />
                                    <Redirect from={'/'} to={'/articles'} />
                                </Switch>
                            </React.Fragment>}
                        </LangConsumer>
                    </div>
                </AuthProvider>
            </LangProvider>
        );
    }
}

export default App;
