     <img class="home-page-img" src="/img/bluebells-1338396-1278x847.jpg" alt="picture of bluebells">

  res.render('home/index');
})


       <link rel="stylesheet" text="text/css" href="/css/style.css">

  <input type="text" name="article" value="<%=article.article%>" /><br>






  <select name="category_id">
    <% categories.forEach((category) => { %>
      <option value="<%=category.id %>"><%= category.description%> </option>
    <% }) %>
  </select> <br>

EDIT


categoriesRouter.route('/:id/edit')
.get(categoriesController.getOne, categoriesViewController.editCategory)




function editCategory(req, res) {
  categories = res.locals.categories;
  res.render(`categories/edit`, {
    category: res.locals.category
  })
}



categoriesController.getOne
    res.locals.category = data;

categoriesViewController:
  sendUpdateCategory






categoriesController.getCategories

categoriesViewController.editCategory




GET ONE:

categoriesController.getOne
    res.locals.category = data;

categoriesViewController.sendOneCategory
  res.render('categories/show', {
    categories: res.locals.category

   <form action="/articles/<%= article.id%>/edit" class='put' method="GET">
  <input type="submit" class="editlink" value="Edit">
  </form>

    article_date = $/article_date/,

FAILED:

updateArticle: =============================
updateArticle: article object:
{ category_id: '3',
  olid: '500',
  article_date: 'Tue Feb 15 2011 00:00:00 GMT-0500 (EST)',
  article: 'Hoping this REALLY works',
  id: '4' }
updateArticle: =============================

SUCCEEDED

updateArticle: =============================
updateArticle: article object:
{ id: 4,
  category_id: 3,
  olid: '500',
  article_date: '2011-02-15',
  article: 'Hoping this works' }
updateArticle: =============================
anonymous {
  id: 4,
  category_id: 3,
  olid: '500',
  article_date: 2011-02-15T05:00:00.000Z,
  article: 'Hoping this works' }



<ul>
  <l>
    <a href="/articles/<%=article.id%>">Delete</a>
  </l>
</ul>

//sample block for testing model files.
deleteArticle(7)
.then(data =>{
  console.log(data);
}).catch(err => {
  console.log(err.message);
});


let article = {
  id : 7,
  category_id: 3,
  olid :'5',
  article_date :'2018-04-19',
  article : 'Is it better to LOVE or to LOVE NOT?? A very provocate thought, indeed....'
};

let article = {
  id : 7,
  category_id: 3,
  olid :'5',
  article_date :'2018-04-19',
  article : 'Is it better to LOVE or to LOVE NOT?? A very provocate thought, indeed....'
};


-- add create tables here
CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  category VARCHAR(50),
  description TEXT
  );

let category = {
  category: 'world music',
  description: 'music from other countries'
}
