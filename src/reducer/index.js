import {combineReducers} from 'redux';
import counterReducer from './counter';
import articlesReducer from './articles';
import articlesFilterReducer from './select-filter'
import dateRangeFilterReducer from './date-range-filter'

export default combineReducers({
    count: counterReducer,
    articles: articlesReducer,
    articlesFilter: articlesFilterReducer,
    dateRangeFilter: dateRangeFilterReducer
})
