import {normalizedArticles} from '../fixtures';
import {ADD_COMMENT, DELETE_ARTICLE} from '../constants';

const defaultArticles = normalizedArticles.reduce((acc, article) => {
    return {
        ...acc,
        [article.id]: article
    }
}, {})

export default (articles = defaultArticles, action) => {
    const {type, payload} = action
    switch (type) {
        case ADD_COMMENT:
            const {articleId, commentId} = payload.comment;

            let commentedArticles = Object.assign({}, articles);

            commentedArticles[articleId] = {
                ...commentedArticles[articleId]
            }

            commentedArticles[articleId].comments = [...commentedArticles[articleId].comments, commentId];

            return commentedArticles;
        case DELETE_ARTICLE:
            let newArticles = {...articles};
            delete newArticles[payload.id];

            return newArticles;
        default:
            return articles
    }
}