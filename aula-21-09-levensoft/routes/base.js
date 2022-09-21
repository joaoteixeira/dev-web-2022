const express = require('express');
const router = express.Router();

router.get('/', function (request, response) {
    let user = { 
        nome: 'Joao', 
        email: 'joao@ifro.edu.br'
    };

    response.render('index', {
        user
    });


});

router.get('/login', function (request, response) {
    response.render('auth/login');
})

router.get('/register', function (request, response) {
    response.render('auth/register');
});


module.exports = router;