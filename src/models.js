const mongoose = require('mongoose');

//site modeli i schemi e najdobro da bidat vo eden fajl

const bookSchema = new mongoose.Schema({ //koga ima 'new' sekogas e klasa
    //Schema kako parametar prima objekt
    //Book model template
    isbn: Number,
    title: String,
    Author: String,
    year: String
})

//Kako izgleda modelot, se imenuva najcesto po toa sto pretstavuva
const Book = mongoose.model('Book', bookSchema) //modelot se vika Book i ja koristi ovaa 'bookSchema'

module.exports = {
    Book: Book
}