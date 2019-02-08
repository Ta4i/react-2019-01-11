import {createSelector} from 'reselect';

export const filtersSelector = (store) => store.filters
export const loadingSelector = (store) => store.articles.loading
export const loadedSelector = (store) => store.articles.loaded
export const articlesMapSelector = (state) => state.articles.entities
export const articlesSelector = createSelector(
    articlesMapSelector,
    (articlesMap) => articlesMap.valueSeq().toArray()
)
export const commentsSelector = (store) => store.comments.entities
export const idSelector = (_, ownProps) => ownProps.id
export const articleSelector = createSelector(articlesMapSelector, idSelector, (articles, id) => articles.get(id))

export const filteredArticlesSelector = createSelector(
    filtersSelector,
    articlesSelector,
    (filters, articles) => {
        const {selected, dateRange: {from, to}} = filters

        console.log('filteredArticlesSelector');

        return articles.filter(article => {
            const publishedDate = Date.parse(article.date)
            return (
                    !selected.length ||
                    selected.find((selected) => selected.value === article.id)
                ) &&
                (
                    (!from || !to || (publishedDate > from && publishedDate < to))
                )
        })
    }
)

export const createCommentSelector = () => createSelector(
    commentsSelector,
    idSelector,
    (comments, id) => {
        return comments.get(id)
    }
)

/* =========== Comments ============ */

export const pageSelector = (_, ownProps) => ownProps.page;
export const commentsPaginationSelector = (state) => state.pagination.entities;

export const commentsByPageSelector = createSelector(
    commentsPaginationSelector,
    pageSelector,
    // Не совсем понял, как в селекторе обрабатывать кейс с отсутствием элемента
    // Если .get(page) undefined
    // Или я на уровне reducer что-то упустил?
    (pagination, page) => pagination.get(page) ? pagination.get(page).ids : []
)

export const getTotalComments = (state) => state.pagination.total

export const commentsByPageLoadingSelector = createSelector(
    commentsPaginationSelector,
    pageSelector,
    (pagination, page) => pagination.get(page) ? pagination.get(page).loading : false
)

export const commentsByPageLoadedSelector = createSelector(
    commentsPaginationSelector,
    pageSelector,
    (pagination, page) => pagination.get(page) ? pagination.get(page).loaded : false
)




