console.log('categoriesRouter: linked');
const categoriesRouter = require('express').Router();
const categoriesController = require('../controllers/categories/categoriesController');
const categoriesViewController = require('../controllers/categories/categoriesViewController');

const categoriesDb = require('../models/categories');

function sendError(err, req, res, next) {
  console.log('categoriesRouter: I send errors');
  res.status(500).json({
    status: 'error',
    message: err.message
  })
}

categoriesRouter.route('/')
  .get(categoriesController.getAll, categoriesViewController.sendCategories, sendError)
  .post(categoriesController.create, categoriesViewController.sendCreateCategory)

categoriesRouter.route('/new')
  .get(categoriesViewController.sendNewCategory)

categoriesRouter.route('/:id')
  .get(categoriesController.getOne, categoriesViewController.sendOneCategory)
  .put(categoriesController.update)
  .delete(categoriesController.destroy)
//  .delete(categoriesController.destroy, categoriesViewController.deleteCategory)

// categoriesRouter.route('/:id/edit')
// .get(categoriesController.getOne, categoriesController.getCategories, categoriesViewController.editCategory)
categoriesRouter.route('/:id/edit')
.get(categoriesController.getOne, categoriesViewController.editCategory)


module.exports = categoriesRouter;
