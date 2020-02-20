const services = require('./services.js')

function routes (server) {
    server.get('/', services.getInitalRoute)

    server.get('/get-all-books', services.getAllBooks)
}

module.exports = routes