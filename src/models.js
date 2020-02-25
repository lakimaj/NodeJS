const mongoose = require('mongoose');

//site modeli i schemi e najdobro da bidat vo eden fajl

const bookSchema = new mongoose.Schema({ //koga ima 'new' sekogas e klasa
    //Schema kako parametar prima objekt
    //Book model template
    isbn: { type: Number, required: true }, //za da bide mandatory treba da se konvertira vo objekt
    title: { type: String, required: true },
    author: { type: String, required: true },
    year: String
})

const authorSchema = new mongoose.Schema({ //koga ima 'new' sekogas e klasa
    //Schema kako parametar prima objekt
    //Book model template
    firstName: { type: String, required: true }, //za da bide mandatory treba da se konvertira vo objekt
    lastName: { type: String, required: true },
    dateOfBirth: { type: Date, required: false },
    dateOfPassing: { type: Date, required: false }
})

//Kako izgleda modelot, se imenuva najcesto po toa sto pretstavuva
const Book = mongoose.model('Book', bookSchema) //modelot se vika Book i ja koristi ovaa 'bookSchema'

const Author = mongoose.model('Author', authorSchema) 

module.exports = {
    Book: Book,
    Author: Author
}