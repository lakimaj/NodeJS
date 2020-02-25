const models = require('./models.js')

class Middlewares  {
    async getAllBooks (req, res, next) {
        const books =  await models.Book.find()
        res.docs = books
        next()
    }

    async getAllAuthors (req, res, next) {
        const authors =  await models.Author.find()
        res.docs = authors
        next()
    }
}



module.exports = new Middlewares //koristime "new" za da ne kreirame novi instanci, odnosno kreira nov objekt