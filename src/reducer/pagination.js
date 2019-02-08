import {SET_CURRENT_PAGE, SUCCESS, FAIL, START, LOAD_COMMENTS} from '../constants'
import { OrderedMap, Record } from 'immutable'

const PageRecord = Record({
  ids: [],
  loading: false,
  loaded: false,
  error: null,
})

const PaginationRecord = Record({
    entities: new OrderedMap({}),
    total: null,
})


export default (pagination = new PaginationRecord(), action) => {
    const { type, payload, response, error } = action

    switch (type) {
        case SET_CURRENT_PAGE:
            return pagination
        case LOAD_COMMENTS + START:
            return pagination
                .setIn(
                    ['entities', payload.page],
                    new PageRecord({
                        loading: true,
                    })
                );
        case LOAD_COMMENTS + SUCCESS:
            return pagination
                .setIn(
                  ['entities', payload.page],
                  new PageRecord({
                    ids: response.records.map(record => record.id),
                    loading: false,
                    loaded: true
                  })
                )
                .set('total', response.total);
        case LOAD_COMMENTS + FAIL:
            return pagination
                .setIn(
                    ['entities', payload.page], {
                        loading: false,
                        loaded: false,
                        error: error
                    }
                )
        default:
            return pagination
    }
}
