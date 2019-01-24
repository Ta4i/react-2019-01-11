import { SELECT_ARTICLE, SET_DATE_RANGE } from '../constants';

const defaultState = {
  select: [],
  date: {
    from: null,
    to: null
  }
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case SELECT_ARTICLE: return {
      ...state,
      select: action.payload
    };

    case SET_DATE_RANGE: return {
      ...state,
      date: action.payload
    }

    default: return state;
  }
}
