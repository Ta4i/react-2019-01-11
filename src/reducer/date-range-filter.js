import { UPDATE_DATE_RANGE_FILTER } from '../constants'

export default (dateRangeFilter = { from: undefined, to: undefined }, action) => {
    const {type, payload} = action
    switch (type) {
        case UPDATE_DATE_RANGE_FILTER:
            return {...payload.value}
            break;
        default:
            return dateRangeFilter
    }
}