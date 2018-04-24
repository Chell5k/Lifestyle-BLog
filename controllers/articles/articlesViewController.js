console.log('articlesViewController: linked');

function sendArticles(req, res) {
  console.log('I send successful responses');
  res.render('articles/index', {
    articles: res.locals.articles
  })
}

function sendOneArticle(req, res) {
  console.log('I send one successful response');
  console.log('articlesViewController - sendOneArticle - res.locals', res.locals);
  res.render('articles/show', {
    article: res.locals.article
  })
}

function sendCreateArticle(req, res) {
  console.log('articlesViewController - sendCreateArticle - about to send data after creating a new article');
  article = res.locals.newArticle;
  console.log('articlesViewController - sendCreateArticle res.locals.NewArticle', res.locals);
  res.redirect(`articles/${article.id}`);
}

function sendCategories(req, res) {
  res.render('articles/new', {
    article: res.locals.categories,
  })
}

function editArticle(req, res) {
  article = res.locals.article;
  res.render(`articles/edit`, {
    article: res.locals.article,
    categories: res.locals.categories
  })
}

function deleteArticle(req, res) {
  console.log('articlesViewController:deteArticle - about to render the all-articles page.');
  res.redirect('articles/');
}

module.exports = {
  sendArticles,
  sendOneArticle,
  sendCreateArticle,
  editArticle,
  sendCategories,
  deleteArticle
}
