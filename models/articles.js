
const db = require('../config/connection');

// R - index
function getAllArticles() {
  const queryPromise = db.manyOrNone(`
    SELECT c.category, a.* from articles a
    INNER JOIN categories c
    ON a.category_id = c.id
    ORDER BY a.id DESC
    `);
  return queryPromise;
}

// // R - show
function getOneArticle(id) {
  const queryPromise = db.one(`
    SELECT c.category, a.* FROM articles a
    INNER JOIN categories c
    ON a.category_id = c.id
    WHERE a.id = $1`, id);
  return queryPromise;
}

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
