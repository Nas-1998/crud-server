//Initialisation of the server
require('dotenv').config()
const app = require('./app')
const port = process.env.PORT|| 7075



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })