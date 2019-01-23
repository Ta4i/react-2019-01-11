import { combineReducers } from 'redux'
import articlesReducer from './articles'
import counterReducer from './counter'
import selectReducer from './selectedOption'

export default combineReducers({
  count: counterReducer,
  articles: articlesReducer,
  selectedOption: selectReducer
})
