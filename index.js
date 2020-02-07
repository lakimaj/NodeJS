const express = require('express');

const cors = require('cors'); // npm install --save cors vo powershell vo NodeJS proektot

const router = require('./src/routes');
//za edna funkcija exportirana router se menuva so routes

const server = express();

const localStorage = {};

localStorage['1'] = 'Petko' //imeto localStorage e proizvolno
localStorage['2'] = 'STanko'
localStorage['3'] = 'Lakiii'

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

