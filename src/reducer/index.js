import {combineReducers} from 'redux';
import counterReducer from './counter';
import articlesReducer from './articles';
import filtersReducer from './filters';
import commentsReducer from './comments';
import paginationReducer from './pagination';

export default combineReducers({
    count: counterReducer,
    articles: articlesReducer,
    comments: commentsReducer,
    filters: filtersReducer,
    pagination: paginationReducer,
})
