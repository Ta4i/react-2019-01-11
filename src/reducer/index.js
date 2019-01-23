import {combineReducers} from 'redux';
import counterReducer from './counter';
import articlesReducer from './articles';
import articlesFilter from './filter';

export default combineReducers({
    count: counterReducer,
    articles: articlesReducer,
    articleList: articlesFilter
})
