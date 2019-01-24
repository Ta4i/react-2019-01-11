import {combineReducers} from 'redux';
import counterReducer from './counter';
import articlesReducer from './articles';
import articlesList from './articleList';
import articlesFilter from './filter'

export default combineReducers({
    count: counterReducer,
    articles: articlesReducer,
    articleFilter: articlesFilter,
    articleList: articlesList
})
