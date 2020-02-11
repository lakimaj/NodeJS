function routes (server, localStorage) {

/* request i response se dvata parametri na callbackot na rutata */
        server.get('/', function (request, response) {
            /* tuka se obrabotuva requestot sto stiga na inicijalnata ruta */
            response.status(200).send('You have reached server!')
        })

// So query parametar
        server.get('/users', (request, response) => {

            try {
                //const array = ['Petko', 'Stanko', 'Laki'] - se brise poradi vo Index.js Objektot localStorage
                
                //za doma da se sredi ova prebaruvanje da raboti so objektot ?????????????????????????????????????????
                // The route param value is in the request object
                const name = request.query.name //za so Prasalnik sto barame vo URL
                //includes vrakja samo true ili false ( dali postoi vo objektot )
                if (name && array.includes(name)) {
                    response.status(200).send(name)
                }
                    else {
                    response.status(200).send(array)
                    }
            }
            catch (error) {
                console.error(error)
                response.status(500).send('An error occured')
            }
        })

//Search users by id
        server.get('/users/:id', (request, response) => {

            //const array = ['Petko', 'Stanko', 'Laki']

            // The route param value is in the request object
            const id = request.params.id
            //Faulty value (ako ne e tocno)
            if (localStorage[id]) { // se brise array[id]
                response.status(200).json(localStorage[id]) // se brise array[id]
            }
            else {
                response.status(200).send('No data found')
            }
        })

        server.post('/books/new', (req, res) => {
            //treba da primi objekt (nova kniga)
            const data = req.body //ocekuvamne objekt so podatoci

                console.log(data)

                if (!data) {
                    res.status(400).json('Bad request NO DATA Found !!!')
                }
                else {
                    localStorage.push(data)
                    console.log(localStorage)
                    res.status(201).json('Succesfully created the entry.')
                }
        })

        server.delete('/books/remove/:isbn', (req, res) => {
                const found = localStorage.findIndex((element) => {
                    element.isbn === req.params.isbn
                })

                console.log(data)

                if (found) {
                   localStorage.splice(found, 1) //briseme 1 samo
                   console.log(localStorage)
                   res.status(200).json('Succesfully deleted the entry.')
                }
                else {
                    if (req.params.isbn) {
                        res.status(400).json('Bad request NO DATA Found !!!')
                    }
                    else {
                        res.status(400).json('No such ENTRY !!!')
                    }
                }
        })

}

module.exports = {
    routes: routes
    //test: druga 
}
//Povekje funkci se exportiraat so , zapirka kako objekt

//Za edna funkcija samo 
// module.exports = routes