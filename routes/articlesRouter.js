console.log('articlesRouter: linked');
const articlesRouter = require('express').Router();
const articlesController = require('../controllers/articles/articlesController');
const articlesViewController  = require('../controllers/articles/articlesViewController');

const articlesDb = require('../models/articles');

function sendError(err, req, res, next) {
  console.log('I send errors');
  res.status(500).json({
    status: 'error',
    message: err.message
  })
}

console.log();

articlesRouter.route('/')
 .get(articlesController.getAll, articlesViewController.sendArticles, sendError)
 .post(articlesController.create, articlesViewController.sendCreateArticle)

articlesRouter.route('/new')
  .get(articlesController.getCategories, articlesViewController.sendCategories)

articlesRouter.route('/:id')
  .get(articlesController.getOne, articlesViewController.sendOneArticle)
  .put(articlesController.update)
  .delete(articlesController.destroy, articlesViewController.deleteArticle)

articlesRouter.route('/:id/edit')
.get(articlesController.getOne, articlesController.getCategories, articlesViewController.editArticle)

module.exports = articlesRouter;
