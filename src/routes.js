const services = require('./services.js')

const middleWares = require('./middleWares')

function routes (server) {
    server.get('/', services.getInitalRoute)

    server.get(
        '/get-all-books', 
        middleWares.getAllBooks,
        services.getAllDocs
        )

    server.get('/get-all-books-by-author/:name', services.getBooksByAuthor)

    server.post('/add-book', services.createNewBook)

    server.post('/add-author', services.createNewAuthor)

    server.delete('/remove-book/:isbn', services.removeBook)

    server.get(
        '/get-all-authors', 
        middleWares.getAllAuthors,
        services.getAllDocs
        )
    
        //vidi pdf uploadiraj pdf ili drug file - read file FS and return it as response
    server.get('/download-manual', services.getFile)

    server.get('/upload-file', services.writeFile)

    server.get('/list-dead-authors', services.listDeadAuthors)

    server.post('/upload-file', services.writeFile)



}

module.exports = routes