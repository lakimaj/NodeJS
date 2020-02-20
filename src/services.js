const models = require('./models.js')

class Services {
    //private
    //protected
    //public mozat samo vo typescript file da se koristat
    getInitalRoute (req, res) {
        res.status(200).send('You have reached the server!')
    }

    async getAllBooks (req, res) {
       try {
            const books =  await models.Book.find({year: { $gt: '1900'}})
            console.log(books)
            res.status(200).json(books)
       }
            catch (error) {
            res.status(500).json({ message: 'Server error ' + error})
            }
    }
}

module.exports = new Services() // "new" kreira nov objekt 