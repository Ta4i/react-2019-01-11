import {INCREMENT, DELETE_ARTICLE, UPDATE_SELECT_FILTER, UPDATE_DATE_RANGE_FILTER} from '../constants';

export const increment = () => ({
    type: INCREMENT
})

export const deleteArticle = (id) => ({
    type: DELETE_ARTICLE,
    payload: {id}
})

export const updateSelectFilter = (value) => ({
    type: UPDATE_SELECT_FILTER,
    payload: {value}
})

export const updateDateRangeFilter = (value) => ({
    type: UPDATE_DATE_RANGE_FILTER,
    payload: {value}
})


