import { ADD_COMMENT, LOAD_COMMENTS, SUCCESS } from '../constants'
//import { normalizedComments } from '../fixtures'
import { arrToMap } from './utils'
import {Record, OrderedMap} from 'immutable'

const CommentRecord = Record ({
    id: null,
    text: null,
    user: null
})

const ReducerState = Record({
    entities: new OrderedMap({})
})

export default (comments = new ReducerState(), action) => {
    const { type, payload, randomId, response } = action

    switch (type) {
        case ADD_COMMENT:
            return comments.setIn(
                ['entities', randomId],
                new CommentRecord ({
                    ...payload.comment,
                    id: randomId
                })
            )
        case LOAD_COMMENTS + SUCCESS:
            return comments.mergeIn(
                ['entities', arrToMap(response,CommentRecord)]
            )

        default:
            return comments
    }
}
