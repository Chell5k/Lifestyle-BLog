console.log('articlesController: linked');
const articlesDb = require('../../models/articles');
const categoriesDb = require('../../models/categories');

//console.log(articlesDb);

function getAll(req, res, next) {
  console.log('About to query the DB');
  articlesDb.getAllArticles()
    .then(data => {
      console.log('Queried DB and got' + data.length + 'results');
      res.locals.articles = data;
      console.log('articlesController.getAllArticles res.locals', res.locals);
      next();
    })
    .catch(err=> {
    console.log(err.message);
      next(err);
    })
}

function getOne(req, res, next) {
  console.log('About to query the DB for one article');
  articlesDb.getOneArticle(req.params.id)
    .then(data=> {
      res.locals.article = data;
      console.log('articlesController.getOne res.locals', res.locals);
      next();
    })
    .catch(err=> {
      next(err);
    })
}

function getCategories(req, res, next) {
  categoriesDb.getAllCategories()
    .then(data => {
      res.locals.categories = data;
      next();
    })
    .catch(err=> {
      next(err);
    })
}

function create(req, res, next) {
  console.log('articlesController:create: About to insert a new article'); //TODO - REMOVE
  articlesDb.createArticle(req.body)
    .then(data => {
      res.locals.newArticle = data;
      console.log('articlesController:create:', res.locals); //TODO - REMOVE
      next();
    })
    .catch(err=> {
      next(err);
    })
}

//THe below is needed to retrieve seed information for the edit screen
function edit(req, res) {
  articlesDb.getOneArticle(req.params.id)
    .then(data=> {
      res.locals.article = data;
      next();
    })
    .catch(err=> {
      err:err.message
    })
}

function update(req, res, next) {
  console.log('articlesController:update - req.body before appending id', req.body);
  console.log('articlesController:update - req.params ', req.params);
  req.body.id = req.params.id;
  console.log('articlesController:update: About to update an article.'); //TODO - REMOVE
  console.log('articlesController:update - req.body ', req.body);
  articlesDb.updateArticle(req.body)
    .then(data => {
      res.redirect(`/articles/${req.body.id}`)
    })
    .catch(err=> {
      err:err
    })
}

function destroy(req, res) {
  console.log('articlesController:delete about to delete. req.params ', req.params);
  articlesDb.deleteArticle(req.params.id)
    .then(() => {
    console.log('articlesController:successful deletion.');
      res.redirect('/articles');
 //   next();
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
  edit,
  update,
  destroy,
  getCategories
}
