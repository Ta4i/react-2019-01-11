import {createStore, applyMiddleware, compose} from 'redux';
import logger from '../middleware/logger';
import generateId from '../middleware/generate-id';

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(
        generateId,
        logger
    )
);

const store = createStore(reducer, enhancer)

//DEV ONLY
window.store = store

export default store
