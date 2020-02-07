// const array = []
// const obj = {}

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



//Search Users by Name
/* server.get('/users/:name', (request, response) => {
    const array = ['Petko', 'Stanko', 'Laki']

    const name = request.params.name.toLowerCase()

    const found = array.find((element) => element.toLowerCase() === name)

    if (found) {
        response.status(200).send(found)
    }
    else {
        response.status(200).send('No data found')
    }
}) */

// server.post('/')
// server.delete('/')
}

module.exports = {
    routes: routes
    //test: druga 
}
//Povekje funkci se exportiraat so , zapirka kako objekt

//Za edna funkcija samo 
// module.exports = routes