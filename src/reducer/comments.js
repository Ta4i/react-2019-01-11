import {ADD_COMMENT, LOAD_ARTICLE_COMMENTS, LOAD_COMMENTS_BY_PAGE, SUCCESS} from '../constants'
import { arrToMap } from './utils'
import {OrderedMap, Record} from 'immutable'

const CommentRecord = Record({
    id: null,
    text: null,
    user: null
})

const ReducerRecord = Record({
    entities: new OrderedMap({}),
    pageComments: new OrderedMap({})
})

export default (state = new ReducerRecord(), action) => {
    const { type, payload, randomId, response } = action

    switch (type) {
        case ADD_COMMENT:
            return state.setIn(
                ['entities', randomId],
                new CommentRecord({...payload.comment, id: randomId})
            )
        case LOAD_ARTICLE_COMMENTS + SUCCESS:
            return state.mergeIn(['entities'], arrToMap(response, CommentRecord))

        case LOAD_COMMENTS_BY_PAGE + SUCCESS:
            return state.setIn(
              ['pageComments', payload.pageNumber],
              response.records
            )

        default:
            return state
    }
}
