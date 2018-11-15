const express = require('express')
const bodyParser = require('body-parser')
const ctrl = require('./controller')
const app = express()
// ==== MIDDLEWARE ====//
app.use(bodyParser.json())


// ==== ENDPOINTS ==== // 
app.get('/api/todo',ctrl.read)

const serverPort = 5647
app.listen(serverPort,()=>{ console.log(`Server is listening on port:${serverPort}`)})