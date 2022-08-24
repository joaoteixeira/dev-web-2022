const express = require('express');
const app = express();
const nunjucks = require('nunjucks')

// configs template engine
nunjucks.configure('views', {
    autoescape: true,
    noCache: true,
    express: app
});
app.set('view engine', 'html');
app.use(express.static('public'));

// configs routes
app.get('/', function (request, response) {
    response.render('index');
});

app.get('/sobre', function (request, response) {
    response.render('sobre');
});


app.listen('8000', function () {
    console.log('Server online:8000');
});
