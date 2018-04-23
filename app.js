//built-ins
const path = require('path');

//3rd party modules
const bodyParser = require('body-parser');
const express = require('express');
const logger = require('morgan');
const methodOverride = require('method-override');
const app = express();

const port = process.env.port || 3000;

//Include our router(s)
const articlesRouter = require('./routes/articlesRouter');
const categoriesRouter = require('./routes/categoriesRouter');

//Why not set the view engine to ejs here....
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Use all of the awesome modules..
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

//Set the path to the public resource location
app.use(express.static(path.join(__dirname, 'public')));
console.log('app: path - ', path.join(__dirname, 'public'));

//Finally! OK, let's set the route to the home page.
app.get('/', (req, res)=> {
 // res.send('Hello there');
 res.render('home/index');
});

//Let's use the custom routes we've set up
app.use('/articles', articlesRouter);
app.use('/categories', categoriesRouter);

//We're a server -- do the server thing!
app.listen(port, ()=> console.log ('lifestyle blog server running...'));
