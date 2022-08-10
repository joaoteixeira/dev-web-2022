const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function(request, response) {
    response.render('index', {
        nome: 'João',
        sobrenome: 'Teixeira'
    });
});

app.get('/autor', function(request, response) {
    response.render('autor');
});

app.listen('8000');
console.log('Webapp - On - Porta: 8000');