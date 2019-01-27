import {normalizedArticles} from '../fixtures';
import {DELETE_ARTICLE, ADD_COMMENT} from '../constants';

const articlesMap = normalizedArticles.reduce((acc, article) => {
    return {
        ...acc,
        [article.id]: article
    }
}, {});

const articlesIds = normalizedArticles.map(article => article.id);

const initialState = {
    data: articlesMap,
    ids: articlesIds
}

export default (articles = initialState, {type, payload}) => {
    switch (type) {
        case DELETE_ARTICLE:

            const newData = {...articles.data};
            delete newData[payload.id];
            return {
                ...articles,
                ids: articles.ids.filter(id => id !== payload.id),
                data: newData,
            }
        case ADD_COMMENT:
            const { articleId, id } = payload
            const targetArticle = articles.data[articleId]
            // Выглядит монструозно, как можно упростить создание нового объекта?
            return {
                ...articles,
                data: {
                    ...articles.data,
                    [articleId]: {
                        ...targetArticle,
                        comments: [...targetArticle.comments, id]
                    }
                }
            }
        default:
            return articles
    }
}