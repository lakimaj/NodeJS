const express = require('express');

const cors = require('cors'); // npm install --save cors vo powershell vo NodeJS proektot

//const router = require('./src/routes-old');
//za edna funkcija exportirana router se menuva so routes

const routes = require('./src/routes');

const bodyParser = require('body-parser'); //used to handle POST requests

const mongoose = require('mongoose'); //mongodb framework

const models = require('./src/models');

require('dotenv').config();

const server = express();

/* const localStorage = [];

localStorage.push({
    isbn: '1',
    name: 'Crime & Punishment',
    creationDate: new Date(),
    author: 'Laki'
})
localStorage.push({
    isbn: '2',
    name: 'Witcher',
    creationDate: new Date(),
    author: 'Iki'
})
localStorage.push({
    isbn: '3',
    name: 'The lord of the rings',
    creationDate: new Date(),
    author: 'TEst'
}) */


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

routes(server);
//za edna exportirana funkcija vo routes.js fajl (vidi) tuka se brise router. ostanuva samo routes(server)

const array = ['Petko', 'Stanko', 'Laki']

/* localStorage.setItem('1', 'Petko')
localStorage.setItem('2', 'Stanko')
localStorage.setItem('3', 'Laki') */

/* console.log(process.env.DB_USER
    ,process.env.DB_PASS) */

//za konektiranje so mongoDB
mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-cf2wu.mongodb.net/test?retryWrites=true&w=majority`, //backiks navodnici za da se skrie USER i PASS
    {useNewUrlParser: true, useUnifiedTopology: true}
    );

const db = mongoose.connection;

db.on('error', (error) => {console.log('Error connecting '+ error)})

db.once('open', () => {
    console.log('Succefully connected to the Mongo Database');
    server.listen(port, () => {
        console.log('Server started on port ' + port + ', hello world!'); //isto so toa dole
        console.log(`Server started on port ${port}, hello world!`);
        // console.log(array, obj, 'test')
        //create a document from the book model
           /*  const firstBook = new models.Book({
                isbn: 111,
                title: 'Crime & Punishment',
                Author: 'Dostyevsky',
                year: '1866'
            }) */
            //funkcijata moze da se izvrsuva samo vrz dokumenti od modeli
            // try to save the newly created book in the database
           /*  firstBook.save((err, book) => {
                if (err) {
                    console.log('Data was NOT SAVED: '+ err)
                }
                else {
                    console.log(book)
                }
            }) */
    }
)
})



