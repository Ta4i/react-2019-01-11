import articlesMock from '../fixtures'

export default (articles = articlesMock, action) => {
   const {type, payload} = action
   switch (type) {

      default:
         return articles
   }
}
