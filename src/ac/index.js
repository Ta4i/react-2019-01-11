import {
    INCREMENT,
    DELETE_ARTICLE,
    CHANGE_SELECTION,
    CHANGE_DATE_RANGE,
    RESET_DATE_RANGE,
    ADD_COMMENT,
    LINK_COMMENT_TO_ARTICLE
} from '../constants';

export const increment = () => ({
    type: INCREMENT
})

export const deleteArticle = (id) => ({
    type: DELETE_ARTICLE,
    payload: {id}
})

export const changeSelection = (selected) => ({
    type: CHANGE_SELECTION,
    payload: {selected}
})

export const changeDateRange = (dateRange) => ({
    type: CHANGE_DATE_RANGE,
    payload: {dateRange}
})

export const resetDateRange = () => ({
    type: RESET_DATE_RANGE
})

export const addComment = (commentData) => ({
    type : ADD_COMMENT,
    payload : {...commentData}
})


export const linkCommentToArticle = (commentId, parentId) => ({
    type: LINK_COMMENT_TO_ARTICLE,
    payload: {
        commentId,
        parentId
    }
})