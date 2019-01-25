import { FILTER_ARTICLE, FILTER_BY_DATE} from '../constants';

const defaultFilterState = {
          selected: [],
          dateRange: {
            fromDate: null,
            toDate: null
          }
}

export default (state = defaultFilterState, action) => {
  const {type, payload} = action;
  switch (type) {
    case FILTER_ARTICLE: return {
      ...state,
      selected: payload
    };

    case FILTER_BY_DATE: return {
      ...state,
      dateRange: payload
    }

    default: return state;
  }
}