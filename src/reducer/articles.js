import { normalizedArticles } from '../fixtures'
import {DELETE_ARTICLE} from '../constants';

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
        default:
            return articles
    }
}