const path = require('path')
const express = require('express')
const methodOverride = require('method-override')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()
const port = 3000

const route = require('./routes')
const db = require('./config/db')

db.connect()

var hbs = handlebars.create({
  extname: '.hbs'
});

app.use(morgan('combined'));
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname , '/uploads')));
app.use(methodOverride('_method'))


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

route(app)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})