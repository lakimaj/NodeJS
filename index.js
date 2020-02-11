const express = require('express');

const cors = require('cors'); // npm install --save cors vo powershell vo NodeJS proektot

const router = require('./src/routes');
//za edna funkcija exportirana router se menuva so routes

const bodyParser = require('body-parser') //used to handle POST requests

const server = express();

const localStorage = [];

localStorage.push({
    isbn: '1',
    name: 'Crime & Punishment'
})
localStorage.push({
    isbn: '2',
    name: 'Witcher'
})
localStorage.push({
    isbn: '3',
    name: 'The lord of the rings'
})

server.use(bodyParser.urlencoded({ extended: false}))
server.use(bodyParser.json())

//Isto sto i ...
/* const localStorage = {
    1: Petko,
    2: STanko,
    3: Lakiio
}; */

server.use(
    cors()
    );

const port = 3001;

router.routes(server, localStorage);
//za edna exportirana funkcija vo routes.js fajl (vidi) tuka se brise router. ostanuva samo routes(server)

const array = ['Petko', 'Stanko', 'Laki']

/* localStorage.setItem('1', 'Petko')
localStorage.setItem('2', 'Stanko')
localStorage.setItem('3', 'Laki') */

server.listen(port, () => {
        console.log('Server started on port ' + port + ', hello world!') //isto so toa dole
        console.log(`Server started on port ${port}, hello world!`)
        // console.log(array, obj, 'test')
    }
)

