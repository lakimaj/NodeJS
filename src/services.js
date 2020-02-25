const models = require('./models.js')

class Services {
    //private
    //protected
    //public mozat samo vo typescript file da se koristat
    getInitalRoute (req, res) {
        res.status(200).send('You have reached the server!')
    }

    async getAllDocs (req, res) {
       try {
            /* const books =  await models.Book.find({year: { $gt: '1900'}}) */ //models (Book) e imeto na kolekcijata vo MongoDB//se brise vo cas 9 po primena na middleware
            console.log(res.docs)
            res.status(200).json(res.docs)
       }
            catch (error) {
            res.status(500).json({ message: 'Server error ' + error})
            }
    }
// \
    async getBooksByAuthor (req, res) {
        try {
            const books =  await models.Book.find({author: req.params.name })
            console.log(books)
            res.status(200).json(books)
       }
            catch (error) {
            res.status(500).json({ message: 'Server error ' + error})
            }
    }

    async createNewBook (req,res) {
        
        try{
            
            const data = req.body          //samo se stava se u data
            const found = await models.Book.findOne({ isbn: data.isbn })  //se srcha u datata seite isbn
            
            if(found){
                res.status(400).json({massage:'book alrady exists', book:found})           
                return
            }
            
            const newBook = models.Book(data)    // moze i posle ova .save
            const saved = await newBook.save()
            
            if(saved) {
                res.status(201).json('Succesffully added a new book')
            }
            else {
                res.status(400).json('error in the data object')
            }
        }
        catch(err){
            res.status(500).json({massage: 'Server error'+ err})
        }
    }

        async createNewAuthor (req,res) {
        
            try{
                
                const data = req.body          //samo se stava se u data
                const found = await models.Author.findOne(
                    { 
                    firstName: data.firstName, 
                    lastName: data.lastName
                })  //se srcha u datata seite isbn
                
                if(found){
                    res.status(400).json({massage:'Author alrady exists', data:found})           
                    return
                }
                
                const newAuthor = models.Author(data)    // moze i posle ova .save
                const saved = await newAuthor.save()
                
                if(saved) {
                    res.status(201).json('Succesffully added a new AUTHOR')
                }
                else {
                    res.status(400).json('error in the data object')
                }
            }

        catch(err){
            res.status(500).json({massage: 'Server error'+ err})
        }
    }

    async removeBook (req, res) {

        try {
                const deleted = await models.Book.deleteOne({isbn: req.params.isbn }) 
                
                if (deleted.deletedCount > 0) {
                    res.status(200).json({ 
                        message: 'Book deleted'
                    })
                }          
                else {
                    res.status(400).json('General error')
                }
            }
        catch (error) {
            res.status(500).json({ message: 'Server error ' + error})
        }
    }
    
}

module.exports = new Services() // "new" kreira nov objekt