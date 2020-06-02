import express from 'express';

const app = express()

const users = require('./users.json')

app.get('/users', (request, response) => {
    console.log('Listagem de usuários');
    response.json(users);
});

app.listen(3333)