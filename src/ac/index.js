import {
    INCREMENT,
    DELETE_ARTICLE,
    CHANGE_SELECTION,
    CHANGE_DATE_RANGE,
    RESET_DATE_RANGE,
    ADD_COMMENT,
    LOAD_ALL_ARTICLES, LOAD_ARTICLE, START, SUCCESS, FAIL, LOAD_ALL_COMMENTS, LOAD_COMMENTS_BY_ARTICLE
} from '../constants';

export const increment = () => ({
    type: INCREMENT
})

export const deleteArticle = (id) => ({
    type: DELETE_ARTICLE,
    payload: { id }
})

export const changeSelection = (selected) => ({
    type: CHANGE_SELECTION,
    payload: { selected }
})

export const changeDateRange = (dateRange) => ({
    type: CHANGE_DATE_RANGE,
    payload: { dateRange }
})

export const resetDateRange = () => ({
    type: RESET_DATE_RANGE
})

export function addComment(comment, articleId) {
    return {
        type: ADD_COMMENT,
        payload: { comment, articleId },
        generateId: true
    }
}

export function loadAllComments() {
    return {
        type: LOAD_ALL_COMMENTS,
        callAPI: '/api/comment'
    }
}

export function loadCommentsByArticle(articleId) {
    return {
        type: LOAD_COMMENTS_BY_ARTICLE,
        callAPI: `/api/comment?article=${articleId}`
    }
}

export function loadAllArticles() {
    return {
        type: LOAD_ALL_ARTICLES,
        callAPI: '/api/article'
    }
}

export function loadArticle(id) {
    return (dispatch) => {
        dispatch({
            type: LOAD_ARTICLE + START,
            payload: { id }
        })
        fetch(`/api/article/${id}`)
            .then(res => res.json())
            .then(response => dispatch({
                type: LOAD_ARTICLE + SUCCESS,
                payload: { id },
                response
            }))
            .catch(error => dispatch({
                type: LOAD_ARTICLE + FAIL,
                payload: { id },
                error
            }))

    }
}
