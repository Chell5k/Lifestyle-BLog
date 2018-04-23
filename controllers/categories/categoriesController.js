console.log('categoriesController: linked');
//const articlesDb = require('../../models/articles');
const categoriesDb = require('../../models/categories');

//console.log(articlesDb);

function getAll(req, res, next) {
  console.log('About to query the DB');
  categoriesDb.getAllCategories()
    .then(data => {
      console.log('Queried DB and got' + data.length + 'results');
      res.locals.categories = data;
      console.log('categoriesController.getAllCategories res.locals', res.locals); //TODO remove
      next();
    })
    .catch(err=> {
    console.log(err.message);
      next(err);
    })
}


function getOne(req, res, next) {
  console.log('About to query the DB for one article');
  categoriesDb.getOneCategory(req.params.id)
    .then(data=> {
      res.locals.category = data;
      console.log('categoriesController.getOne res.locals', res.locals);
      next();
    })
    .catch(err=> {
      next(err);
    })
}

// // function getHouses(req, res, next) {
// //   housesDb.getAllHouses()
// //     .then(data => {
// //       res.locals.houses = data;
// //       next();
// //     })
// //     .catch(err=> {
// //       next(err);
// //     })
// // }

function create(req, res, next) {
  console.log('categoriesController:create: About to insert a new category'); //TODO - REMOVE
  categoriesDb.createCategory(req.body)
    .then(data => {
      res.locals.newCategory = data;
      console.log('categoriesController:successful creation: res.locals', res.locals); //TODO - REMOVE
      next();
    })
    .catch(err=> {
      next(err);
    })
}

// THe below is needed to retrieve seed information for the edit screen
// function edit(req, res) {
//   articlesDb.getOneArticle(req.params.id)
//     .then(data=> {
//       res.locals.article = data;
//       next();
//     })
//     .catch(err=> {
//       err:err.message
//     })
// }

function update(req, res, next) {
  req.body.id = req.params.id;
  categoriesDb.updateCategory(req.body)
    .then(data => {
      res.redirect(`/categories/${req.body.id}`)
    })
    .catch(err=> {
      err:err
    })
}

function destroy(req, res) {
  categoriesDb.deleteCategory(req.params.id)
    .then(() => {
      res.redirect('/categories');
    })
    .catch(err => {
      res.status(500).json({
        message:err.message
      })
    })
}

module.exports = {
  getAll,
  getOne,
  create,
  // edit,
  update,
  destroy
 // getHouses
}



//==
// categoriesRouter.route('/')
//   .get(categoriesController.getAll, categoriesViewController.sendcategories, sendError)
//   .post(categoriesController.create, categoriesViewController.sendCreateACategory)

// categoriesRouter.route('/new')
//   .get(categoriesController.getCategory, categoriesViewController.sendCategory)

// categoriesRouter.route('/:id')
//   .get(categoriesController.getOne, categoriesViewController.sendOneCategory)
//   .put(categoriesController.update)
//   .delete(categoriesController.destroy, categoriesViewController.deleteCategory)

// categoriesRouter.route('/:id/edit')
// .get(categoriesController.getOne, categoriesController.getCategories, categoriesViewController.editCategory)
