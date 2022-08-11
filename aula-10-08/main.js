const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function(request, response) {
    response.render('index');
});

app.get('/sobre', function(request, response) {
    response.render('sobre');
});

app.listen('80', function() {
    console.log('Server online:80');
});
