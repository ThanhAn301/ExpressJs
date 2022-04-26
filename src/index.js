const express = require('express')
const morgan = require('morgan')
const path = require('path')
const app = express()
const port = 3000
const route = require('./routes')
const db = require('./config/db')
const methodOverride = require('method-override')

db.connect()
  
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.use(methodOverride('_method'))

//------------------------------------
const exphbs = require('express-handlebars');
const hbs = exphbs.create({extname: '.hbs',
    helpers: {
      sum: (a,b) => a+b
    }
});

//template engine
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource','views'));



// HTTP logger
app.use(morgan('combined'));

route(app);



app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});


