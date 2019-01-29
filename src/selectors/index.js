import {createSelector} from 'reselect';

export const filtersSelector = (store) => store.filters
export const articlesIdsSelector = (store) => store.articles.ids
export const articlesDataSelector = (store) => store.articles.data
export const commentsSelector = (store) => store.comments
export const idSelector = (_, ownProps) => ownProps.id

export const filteredArticlesSelector = createSelector(
    filtersSelector,
    articlesIdsSelector,
    articlesDataSelector,
    (filters, ids, data) => {
        const {selected, dateRange: {from, to}} = filters

        console.log('filteredArticlesSelector');

        return ids.filter(id => {
            const publishedDate = Date.parse(data[id].date)
            return (
                    !selected.length ||
                    selected.find((selected) => selected.value === id)
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
        console.log('commentSelector', id);
        return comments[id]
    }
)

