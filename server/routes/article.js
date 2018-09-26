

const articlecontroller = require('./../controllers/article_controller');
const multipart = require('connect-multiparty');
const multipartWare = multipart();


module.exports = (router) => {
  /* get all articles */
  router
    .route('/articles')
    .get(articlecontroller.getAll)
  /* add an article */
  router
    .route('/article')
    .post(multipartWare, articlecontroller.addArticle)
  /* clap an article */
  router
    .route('/article/clap')
    .post(articlecontroller.clapArticle)
  /* comment on article */
  router
    .route('/article/comment')
    .post(articlecontroller.commentArticle)
  /* find a particular article */
  router
    .route('/article/:id')
    .get(articlecontroller.getArticle)
};