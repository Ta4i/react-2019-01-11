import {createStore, applyMiddleware, compose} from 'redux';
import reducer from '../reducer';
import logger from '../middleware/logger';
import effects from '../middleware/effects';

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(logger, effects)
);

const store = createStore(reducer, enhancer)

//DEV ONLY
window.store = store

export default store
