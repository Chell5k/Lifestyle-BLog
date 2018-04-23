

INSERT INTO categories (category, description) VALUES
  ('home','Articles about home furnishing or decorating'),
  ('family','Articles about family life and relationships'),
  ('random thoughts', 'A catch-all category of musings'),
  ('events','Personal opinions and recommendations about upcoming events'),
  ('arts', 'Articles about performing, visual and other artistic endeavours');


INSERT INTO articles (category_id, article_date, article) VALUES
  (3,
  '2018-01-05',
  'Home is where the heart is, or so I am told. This refrain ran through my mind as I wandered across Broadway this morning, in a brand new year.'
  ),
 (3,
  '2018-02-14',
  'Is it okay to drink the water you left out overnight? Not sure what made me think of this...'
  ),
   (2,
  '2018-03-04',
  'England has one royal family. We have several? Check out this book for more on this topic.'
  ),
 (3,
  '2018-02-14',
  'Is sitting the new smoking? I interviewed Sanjay Gupta to find out.'
  ),
  (4,
  '2018-02-14',
  'Valentines Day is always fun, despite the desparate commercialism.'
  ),
   (5,
  '2018-04-10',
  'Hit me up if you are thinking about going to New Orleans this spring.'
  );



