
const db = require('../config/connection');

function getAllCategories() {
  const queryPromise = db.manyOrNone(`
    SELECT * from categories
    ORDER BY id ASC
    `);
  return queryPromise;
}

function getOneCategory(id) {
  const queryPromise = db.one(`
    SELECT * FROM categories
    WHERE id = $1`, id);
  return queryPromise;
}

function createCategory(category) {
  const query = db.one(`
    INSERT INTO categories (category, description)
    VALUES ($/category/, $/description/)
    RETURNING *`,
    category);
  return query;
}


function updateCategory(category) {
  const query = db.one(`
    UPDATE categories
    SET category = $/category/, description = $/description/
    WHERE id = $/id/
    RETURNING *`,
    category );
  return query;
}

function deleteCategory(id) {
  const query = db.none(`
    DELETE FROM categories
    WHERE id = $1`, id);
  return query;
}

module.exports = {
  getAllCategories,
  getOneCategory,
  createCategory,
  updateCategory,
  deleteCategory
}
