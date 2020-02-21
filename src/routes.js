const services = require('./services.js')

function routes (server) {
    server.get('/', services.getInitalRoute)

    server.get('/get-all-books', services.getAllBooks)

    server.get('/get-all-books-by-author/:name', services.getBooksByAuthor)

    server.post('/add-book', services.createNewBook)

    server.delete('/remove-book/:isbn', services.removeBook)

}

module.exports = routes