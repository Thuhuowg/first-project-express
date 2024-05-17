const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');
const { create } = require('express-handlebars');


const app = express();
const port = 3009;

const hbs = create({ /* config */ });
const route= require('./routes');
const dbcon = require('./config/db');

app.use(express.static(path.join(__dirname,'public')));
app.engine('.hbs', engine({ extname: '.hbs', layoutsDir: path.join(__dirname, 'resources/views/layouts') }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));
app.use(express.urlencoded({
  extended:true
}));
app.use(express.json());


route(app);//route init

dbcon();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});