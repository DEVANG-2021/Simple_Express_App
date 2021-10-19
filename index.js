const express = require('express');
const app = express();
const path = require('path');
const port = 8000;
const handlebars = require('express-handlebars');



app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');



app.use('/',require(path.join(__dirname,'routes/blog.js')));

app.listen(port,() => {
    console.log(`Express App listening at http://localhost:${port}`);
 })