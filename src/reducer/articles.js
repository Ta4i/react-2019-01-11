import articlesMock from '../fixtures'
import {DELETE_ARTICLE} from '../constants'

export default (articles = articlesMock, action) => {
   const {type, payload} = action
   switch (type) {
      case DELETE_ARTICLE:
         console.log('222222222222',payload)
         return articles.filter(article => article.id !== payload.id)
      default:
         return articles
   }
}
