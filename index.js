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

// server.post('/')
// server.delete('/')

server.listen(port, () => {
        console.log('Server started on port ' + port + ', hello world!') //isto so toa dole
        console.log(`Server started on port ${port}, hello world!`)
        // console.log(array, obj, 'test')
    }
)

