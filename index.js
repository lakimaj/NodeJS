const express = require('express')

const server = express()

const port = 3001

// const array = []
// const obj = {}

/* request i response se dvata parametri na callbackot na rutata */
server.get('/', function (request, response) {
    /* tuka se obrabotuva requestot sto stiga na inicijalnata ruta */
    response.status(200).send('You have reached server!')
})

// So query parametar
server.get('/users', (request, response) => {

    try {

        const array = ['Petko', 'Stanko', 'Laki']

        // The route param value is in the request object
        
        const name = request.query.name
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

    const array = ['Petko', 'Stanko', 'Laki']

    // The route param value is in the request object
    
    const id = request.params.id
    //Faulty value (ako ne e tocno)
    if (array[id]) {
        response.status(200).send(array[id])
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

server.listen(port, () => {
        console.log('Server started on port ' + port + ', hello world!') //isto so toa dole
        console.log(`Server started on port ${port}, hello world!`)
        // console.log(array, obj, 'test')
    }
)

