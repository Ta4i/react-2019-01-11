import {normalizedArticles} from '../fixtures';
import {DELETE_ARTICLE, ADD_COMMENT, DELETE_COMMENT} from '../constants';

const articlesMap = normalizedArticles.reduce((acc, article) => {
    return {
        ...acc,
        [article.id]: {
            ...article,
            comments: article.comments || []
        }
    }
}, {});
// Тут тоже озадачился: для комментов у нас предопределенный массив comments 
// c ключами нашего свёрнутого normalizedComments есть, создал по аналогии
// или объект в for .. in крутить?)
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
        // Нормально ли реагировать на события других модулей?
        // Или же нужно ADD_COMMENT разбить на два - CREATE_COMMENT + ADD_COMMENT_TO_ARTICLE и через
        // обвязки такие ситуации разруливать?
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
        case DELETE_COMMENT: {
            const { articleId, id } = payload
            const targetArticle = articles.data[articleId]
            // Выглядит монструозно, как можно упростить создание нового объекта?
            return {
                ...articles,
                data: {
                    ...articles.data,
                    [articleId]: {
                        ...targetArticle,
                        comments: targetArticle.comments.filter(comment => comment !== id)
                    }
                }
            }
        }
        default:
            return articles
    }
}