import {INCREMENT, 
        DELETE_ARTICLE,
        CHANGE_SELECTION_FILTER,
        CHANGE_DATE_FILTER 
} from '../constants';

export const increment = () => ({
    type: INCREMENT
})

export const deleteArticle = (id) => ({
    type: DELETE_ARTICLE,
    payload: {id}
})

export const changeSelectionFilter = (selected) => ({
    type: CHANGE_SELECTION_FILTER,
    payload: {selected}
})

export const changeDateFilter = (dateSpan) => ({
    type: CHANGE_DATE_FILTER,
    payload: {dateSpan}
})