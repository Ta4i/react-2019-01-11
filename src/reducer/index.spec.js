import filterReducer from './filter';
import { selectArticle, setDateRange } from '../ac';

describe('Filter Reducer', () => {
  const defaultState = {
    select: [],
    date: {
      from: null,
      to: null
    }
  };

  it ('it should not to be change state, non famous action', () => {
    const newState = filterReducer(defaultState, {});
    expect(newState).toEqual(defaultState);
  })

  it('SELECT_ARTICLE: should be change select filed at state', () => {
    const action = selectArticle([
      'item1',
      'item2'
    ])

    const newState = filterReducer(defaultState, action);
    expect(newState.select.length === 2 && defaultState.select.length === 0)
      .toBe(true);
  })

  it('SET_DATE_RANGE: should be change date filed in state', () => {
    const action = setDateRange({
      from: 'from',
      to: 'to'
    })

    const newState = filterReducer(defaultState, action);
    expect(newState.date.from).not.toEqual(defaultState.date);
  })
})
