import {createStore, applyMiddleware, compose} from 'redux';
import reducer from '../reducer';
import logger from '../middleware/logger';
import addCommentLogic from '../middleware/addCommentLogic';

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(logger,addCommentLogic)
);

const store = createStore(reducer, enhancer)

//DEV ONLY
window.store = store

export default store
