import { UPDATE_FILTERS } from '../constants'

const initialStateFilters = {
    selectedOptions: [],
    dates: {
        from: undefined,
        to: undefined
    }
}

export default (filters = initialStateFilters, action) => {
    const { type, payload } = action

    switch (type) {
        case UPDATE_FILTERS:
            return {
                ...filters,
                ...payload
            }
        default:
            return filters
    }
}