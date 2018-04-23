console.log('categoriesViewController: linked');
// index
function sendCategories(req, res) {
  console.log('I send successful responses');
  res.render('categories/index', {
    categories: res.locals.categories
  })
}

// show
function sendOneCategory(req, res) {
  res.render('categories/show', {
    category: res.locals.category
  })
}

// After creating, redirect to show the newly created item
function sendCreateCategory(req, res) {
  category = res.locals.newCategory
  res.redirect(`categories/${category.id}`);
}

// function redirectTo_sendOneCategory(req, res) {
//   console.log('redirecting to /categories/' + res.locals.quote.quotes_id);
//   res.redirect(`/categories/${res.locals.category.id}`)
// }

// redirect after creating or editing...
function redirectTo_sendOneCategory(req, res) {
  console.log('redirecting to /categories/show');
  res.redirect(`/categories/show`)
}

// redirect after ????
function redirectTo_sendCategories(req, res) {
  console.log('redirecting to /categories/index');
  res.redirect('/categories/index')
}


function sendNewCategory(req, res) {
  res.render('categories/new', {
    categories: res.locals.newCategory,
  })
}


function editCategory(req, res) {
  category = res.locals.category;
  res.render(`categories/edit`, {
    category: res.locals.category
  })
}
// redirect after deleting
function deleteCategory(req, res) {
  res.redirect(`categories/index`);
}

module.exports = {
  sendCategories,
  sendOneCategory,
  sendNewCategory,
  sendCreateCategory,
  editCategory,
  deleteCategory
}
