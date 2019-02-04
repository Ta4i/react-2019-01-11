import { LOAD_ALL_COMMENTS, START, SUCCESS, FAIL, LOAD_COMMENTS_BY_ARTICLE } from '../constants'
import { arrToMap } from './utils'
import { Record, Map } from 'immutable';

const CommentRecord = Record({
    id: null,
    user: null,
    text: null,
    loading: false,
})

const ReducerState = Record({
    entities: arrToMap([], CommentRecord),
    loading: false,
    loaded: new Map(),
    error: null
})

export default (comments = new ReducerState(), action) => {
    const { type, response, error, payload } = action
    switch (type) {

        case LOAD_COMMENTS_BY_ARTICLE + START:
            return comments.set('loading', true)

        case LOAD_COMMENTS_BY_ARTICLE + SUCCESS:
            return comments
                .set('loading', false)
                .set('loaded', comments.loaded.set(payload.articleId, true))
                .set('entities', comments.entities.merge(arrToMap(response, CommentRecord)))

        case LOAD_COMMENTS_BY_ARTICLE + FAIL:
            return comments
                .set('loading', false)
                .set('loaded', comments.loaded.set(payload.articleId, false))
                .set('error', error)

        case LOAD_ALL_COMMENTS + START:
            return comments.set('loading', true)

        case LOAD_ALL_COMMENTS + SUCCESS:
            return comments
                .set('loading', false)
                .set('entities', arrToMap(response, CommentRecord))

        case LOAD_ALL_COMMENTS + FAIL:
            return comments
                .set('loading', false)
                .set('error', error)

        default:
            return comments;
    }
}
