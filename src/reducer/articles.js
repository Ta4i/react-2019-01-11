import {normalizedArticles} from '../fixtures';
import { ADD_COMMENT_ARTICLE, DELETE_ARTICLE } from '../constants'

const defaultArticles = normalizedArticles.reduce((acc, article) => ({
    ...acc,
    [article.id]: article
}), {})

export default (articles = defaultArticles, action) => {
    const {type, payload} = action
    switch (type) {
        case DELETE_ARTICLE: {
                const newArticles = { ...articles };
                delete newArticles[payload.id];
                return newArticles;
        }

        case ADD_COMMENT_ARTICLE: {
          let article = articles[payload.id];
          article = {
            ...article,
            comments: [...article.comments, payload.commentId]
          }

          return {
            ...articles,
            [article.id]: article
          };
        }
        default:
            return articles
    }
}
