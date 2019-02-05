import { ADD_COMMENT, FAIL, LOAD_COMMENTS_BY_ARTICLE_ID, RESET_COMMENTS, START, SUCCESS } from '../constants'
import { arrToMap } from './utils'
import { Record } from 'immutable'

const CommentRecord = Record({
    id: null,
    text: null,
    user: null,
})

const ReducerState = Record({
    entities: {},
    loading: false,
    loaded: false,
    error: null
})

export default (state = new ReducerState(), action) => {
    const { type, payload, randomId, response, error } = action

    switch (type) {
        case ADD_COMMENT:
            return state.set(randomId, {...payload.comment, id: randomId})

        case LOAD_COMMENTS_BY_ARTICLE_ID + START:
            return state.set('loading', true)


        case LOAD_COMMENTS_BY_ARTICLE_ID + SUCCESS:
            return state
              .set('loading', false)
              .set('loaded', true)
              .setIn(
                ['entities', payload.articleId],
                arrToMap(response, CommentRecord)
              )

        case LOAD_COMMENTS_BY_ARTICLE_ID + FAIL:
            return state
              .set('loading', false)
              .set('loaded', false)
              .set('error', error)

        default:
            return state
    }
}
