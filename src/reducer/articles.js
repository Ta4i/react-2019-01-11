import {ADD_COMMENT, DELETE_ARTICLE, LOAD_COMMENTS, LOAD_ALL_ARTICLES, START, SUCCESS, FAIL, LOAD_ARTICLE} from '../constants';
import {arrToMap} from './utils'
import {Record} from 'immutable';

const ArticleRecord = Record({
    id: null,
    text: null,
    title: null,
    date: null,
    loading: false,
    commentsLoading: false,
    commentsLoaded: false,
    comments: []
})

const ReducerState = Record({
    entities: arrToMap([], ArticleRecord),
    loading: false,
    loaded: false,
    error: null
})

export default (articles = new ReducerState(), action) => {
    const { type, payload, randomId, response, error } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articles.deleteIn(['entities', payload.id])

        case ADD_COMMENT:
            return articles.updateIn(
                ['entities', payload.articleId, 'comments'],
                (comments) => {
                    return comments.concat(randomId)
                }
            )

        case LOAD_ALL_ARTICLES + START:
            return articles.set('loading', true)

        case LOAD_ALL_ARTICLES + SUCCESS:
            return articles
                .set('loading', false)
                .set('loaded', true)
                .set('entities', arrToMap(response, ArticleRecord))

        case LOAD_ALL_ARTICLES + FAIL:
            return articles
                .set('loading', false)
                .set('loaded', false)
                .set('error', error)

        case LOAD_ARTICLE + START:
            return articles.setIn(['entities', payload.id, 'loading'], true)

        case LOAD_ARTICLE + SUCCESS:
            return articles
                .setIn(['entities', payload.id], new ArticleRecord(response))

        case LOAD_COMMENTS + START:
            return articles.setIn(['entities', payload.articleId, 'commentsLoading'], true)
    
        case LOAD_COMMENTS + SUCCESS:
            return articles
                .setIn(['entities', payload.articleId, 'commentsLoading'], false)
                .setIn(['entities', payload.articleId, 'commentsLoaded'], true)

        case LOAD_ARTICLE + FAIL:
            return articles
                .set('loading', false)
                .set('loaded', false)
                .set('error', error)

        default:
            return articles
    }
}
