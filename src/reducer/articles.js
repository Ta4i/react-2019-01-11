import { normalizedArticles } from '../fixtures';
import { DELETE_ARTICLE, APPEND_COMMENT } from '../constants';

const defaultArticles = normalizedArticles.reduce((acc, article) => ({
    ...acc,
    [article.id]: article
}), {})

export default (articles = defaultArticles, action) => {
    const { type, payload } = action
    let updatedArticles = null
    switch (type) {
        case DELETE_ARTICLE:
            updatedArticles = { ...articles }
            delete updatedArticles[payload.id]
            return updatedArticles
        case APPEND_COMMENT:
            const { articleId, commentId } = payload
            updatedArticles = { ...articles }
            const article = updatedArticles[articleId]
            let comments = null
            if (article.comments) {
                comments = [...article.comments, commentId]
            } else {
                comments = [commentId]
            }
            const updatedArticle = { ...article, comments: comments }
            updatedArticles[articleId] = updatedArticle
            return updatedArticles
        default:
            return articles
    }
}