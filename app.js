if (process.env.NODE_ENV === 'dev') {
  require('dotenv')
}

const express = require('express')
const cors = require('cors')
const routes = require('./routes/index')

const app = express()
require('./config/mongoose')

app.use(express.json())
app.use(express.urlencoded({ extended:true }))
app.use(cors())

app.use(routes)

module.exports  = app