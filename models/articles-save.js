const db = require('../config/connection');

function getAllArticles() {
  const queryPromise = db.manyOrNone(`
    SELECT * FROM articles
    `);
  return queryPromise;
}

function getOneArticle(id) {
  const queryPromise = db.one(`
    SELECT * FROM articles

    WHERE id = $1`, id);
  return queryPromise;
}

// function getStudentHouse(id) {
//   const query = db.any(`
//     SELECT * FROM students
//     JOIN articles
//      ON articles
//      .id = students.house_id
//     WHERE students.house_id = $1`, id);
//   return query
// }
module.exports = {
  getAllArticles,
  getOneArticle,
//  getStudentHouse
}
