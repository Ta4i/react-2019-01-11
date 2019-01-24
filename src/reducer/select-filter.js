import { UPDATE_SELECT_FILTER } from '../constants'

export default (articlesFilter = null, action) => {
    const {type, payload} = action
    switch (type) {
        case UPDATE_SELECT_FILTER:
            return [...payload.value]
            break;
        default:
            return articlesFilter
    }
}