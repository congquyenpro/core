const path = require('path');
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars'); // Note the change here

const app = express();
const port = 3000;

const route = require('./routes');
/* == const route = require('./routes/index.js'); */

//static
app.use(express.static(path.join(__dirname,'public')));

//middleware
app.use(express.urlencoded ({
  extended: true
}));
app.use(express.json());

// HTTP logger
app.use(morgan('combined'));

// Template engine setup
app.engine('hbs', exphbs.engine({
  extname: '.hbs'
})); // Update the engine name here
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname, 'resources','views'));

//Route
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
