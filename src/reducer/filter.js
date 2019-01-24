import {FILTER_BY_DATE, FILTER_BY_SELECT} from '../constants'

const defaultFilter = {
  selectedOption: null,
  dateRange: {
    from: null,
    to: null
  }
}

export default (filterInStore = defaultFilter, action) => {
  const {type, payload} = action
  switch (type) {
    case FILTER_BY_DATE:
      return {...filterInStore, dateRange: payload.dateRange}

    case FILTER_BY_SELECT:
      return {...filterInStore, selectedOption: payload.selected}

    default:
      return filterInStore
  }
}