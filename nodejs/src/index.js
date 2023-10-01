const path = require('path');
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const exphbs = require('express-handlebars'); // Note the change here

const app = express();
const port = 3000;

const route = require('./routes');
/* == const route = require('./routes/index.js'); */

//database
const db = require('./config/db');
db.connect();

//static
app.use(express.static(path.join(__dirname, 'public')));

//middleware
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.use(methodOverride('_method'));

// HTTP logger
app.use(morgan('combined'));

// Template engine setup
app.engine('hbs', exphbs.engine({
      extname: '.hbs',
      helpers: {
        sum: (a, b) => a + b,
      }
  })
); // Update the engine name here
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//Route
route(app);

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});
