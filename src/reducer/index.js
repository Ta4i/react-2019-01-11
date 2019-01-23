import { combineReducers } from 'redux'
import articlesReducer from './articles'
import counterReducer from './counter'
import dateRangeReducer from './dateRange'
import selectReducer from './selectedOptions'

export default combineReducers({
  count: counterReducer,
  articles: articlesReducer,
  selectedOptions: selectReducer,
  dateRange: dateRangeReducer
})
