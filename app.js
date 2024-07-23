// //Installing express framework
// const express = require('express')

// //Initialising the server allowing us to receive server
// const app = express()

// //Thr protocol which the request will be carried on must be over 1024
// const port = 1025

// //app.METHOD('PATH', (request, response) =>{
//     // logic    
//     // Send a response
//     // res.send(<data>)
// //  }

// app.get('/dogs', (req, res) => {
//   res.send('Hello')
// })

// app.get('/dogs/:name', (req, res) => {
//     res.status(200).send(req.params.name)

//     //This will sned back a status code
//     //res.sendStatus()

//     //This will translate anything in to json
//     res.json()

//     //This will end the response process without sending any data 
//     res.end()

//   })

// // Part that binds the server to the port
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

const express = require('express')
const cors = require('cors')
const app = express()
const fruitRouter = require('./routes/fruitRouter')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//CORS
app.use(cors())
app.use(express.json())
app.use('/fruits', fruitRouter)
module.exports = app





//RESTful API
//client server architecture made up of clinet , server and resources with requests managed though HTTP







// HTTP METHODS:
// GET -retrieve data from specificed resource
// POST - submit data to be processed to a specified resource
// PUT - update a specified resource
// PATCH - update partial resource
// DELETE - delete a specified resource

// CRUD - create retrieve update delete.
// C - POST
// R - GET
// U - PATCH
// D - DELETE

// RESTFUL ENDPOINTS - METHOD BASE_URL/RESOURCE/ID