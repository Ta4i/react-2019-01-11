import { applyMiddleware, compose, createStore } from 'redux'
import idGenerator from '../middleware/idGenerator'
import logger from '../middleware/logger'
import reducer from '../reducer'

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose

const enhancer = composeEnhancers(applyMiddleware(logger, idGenerator))

const store = createStore(reducer, enhancer)

//DEV ONLY
window.store = store

export default store
