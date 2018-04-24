
\c blog_db;

-- remove any records and start the id sequence back to 1
DROP TABLE IF EXISTS articles CASCADE;
DROP TABLE IF EXISTS categories;

-- add create tables here
CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  category VARCHAR(50),
  description TEXT
  );

CREATE TABLE articles (
  id SERIAL PRIMARY KEY,
  category_id INT REFERENCES categories (id) ON DELETE CASCADE,
  olid VARCHAR(20),
  article_date date,
  article TEXT
  );
