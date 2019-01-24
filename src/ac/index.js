import {INCREMENT, DELETE_ARTICLE, FILTER_BY_DATE, FILTER_BY_SELECT} from '../constants';

export const increment = () => ({
    type: INCREMENT
})

export const deleteArticle = (id) => ({
    type: DELETE_ARTICLE,
    payload: {id}
})

export const filterByDate = (dateRange) => ({
    type: FILTER_BY_DATE,
    payload: {dateRange}
})

export const filterBySelect = (selected) => ({
    type: FILTER_BY_SELECT,
    payload: {selected}
})