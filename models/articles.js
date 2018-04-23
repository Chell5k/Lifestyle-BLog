
const db = require('../config/connection');

// R - index
function getAllArticles() {
  const queryPromise = db.manyOrNone(`
    SELECT * from articles
    `);
  return queryPromise;
}

// // R - show
function getOneArticle(id) {
  const queryPromise = db.one(`
    SELECT * FROM articles
    WHERE id = $1`, id);
  return queryPromise;
}


// let article = {
//  // id : 7,
//   category_id: 3,
//   olid :'5',
//   article_date :'2018-04-21',
//   article : 'Is it better to LOVE or to LOVE NOT?? A very provocate thought, indeed....'
// };

// // C - create
// //TODO: user will not be passing a category_id or an actual date when live
function createArticle(article) {
  console.log('articles.js:createArticle: article object', article );
  const query = db.one(`
    INSERT INTO articles (category_id, olid, article_date, article)
    VALUES ($/category_id/, $/olid/, $/article_date/, $/article/)
    RETURNING *`,
    article);
  return query;
}

// // U - update
// //TODO: user will not be passing a category_id or an actual date when live
function updateArticle(article) {
  console.log('updateArticle: =============================');
  console.log('updateArticle: article object: ', article);
  console.log('updateArticle: =============================');
  const query = db.one(`
    UPDATE articles
    SET olid = $/olid/,
    category_id = $/category_id/,
    article_date = $/article_date/,
    article = $/article/
    WHERE id = $/id/
    RETURNING *`,
    article );
  return query;
}

// let article = {
//   id : '4',
//   category_id: '3',
//   olid :'500',
//   article_date :'2011-02-15',
//   article : 'Hoping this works?'
// };

// updateArticle(article)
// .then(data =>{
//   console.log(data);
// }).catch(err => {
//   console.log(err.message);
// });

//D - delete
function deleteArticle(id) {
  const query = db.none(`
    DELETE FROM articles
    WHERE id = $1`, id);
  return query;
}

module.exports = {
  getAllArticles,
  getOneArticle,
  createArticle,
  updateArticle,
  deleteArticle
}