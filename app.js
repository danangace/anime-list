if (process.env.NODE_ENV === 'development') {
  require('dotenv').config()
}

const express = require('express')
const cors = require('cors')
const routes = require('./routes/index')
const errorHandler = require('./middlewares/errorHandler')

const app = express()
require('./config/mongoose')

app.use(express.json())
app.use(express.urlencoded({ extended:true }))
app.use(cors())

app.use(routes)

app.use(errorHandler)

module.exports  = app