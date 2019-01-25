import {INCREMENT, DELETE_ARTICLE, FILTER_ARTICLE, FILTER_BY_DATE} from '../constants';

export const increment = () => ({
    type: INCREMENT
})

export const deleteArticle = (id) => ({
    type: DELETE_ARTICLE,
    payload: {id}
})

export const filterArticle = (option) => ({
    type: FILTER_ARTICLE,
    payload: option
})

export const filterByDateRange = (range) => ({
    type: FILTER_BY_DATE,
    payload: {
        fromDate: range.from,
        toDate: range.to
    }
})
