import { normalizedArticles } from '../fixtures'
import {DELETE_ARTICLE, ADD_COMMENT} from '../constants';

const defaultArticles = normalizedArticles.reduce((acc, article) => {
    return {
        ...acc,
        [article.id]: article
    }
}, {})

export default (articles = defaultArticles, action) => {
    const {type, payload} = action
    switch (type) {
        case DELETE_ARTICLE:
            return articles.filter(article => article.id !== payload.id)
        case ADD_COMMENT:
            return {
                ...articles,
                [payload.comment.articleId]: {
                    ...articles[payload.comment.articleId],
                    comments: [
                      ...articles[payload.comment.articleId].comments,
                      payload.comment.id
                    ]
                }
            }
        default:
            return articles
    }
}