import {
  DELETE_ARTICLE,
  CHANGE_SELECTION_FILTER,
  CHANGE_DATE_FILTER
} from '../constants'

const initFiltersInStore = {
  selected: [],
  dateSpan: {
    from: null,
    to: null
  }
}

export default (filters = initFiltersInStore, action) => {
  const {type, payload} = action

  switch (type) {
    case CHANGE_DATE_FILTER:
      return { ...filters, dateSpan: payload.dateSpan}

    case CHANGE_SELECTION_FILTER:
      return { ...filters, selected: payload.selected }

    case DELETE_ARTICLE:
      return {
        ...filters,
        selected: filters.selected.filter(
          (selected) => selected.value !== payload.id
        )
      }

    default:
      return filters
  }
}