require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require('./routes')

/* EXPRESS SERVER */
const server = express()

/* BODY PARSER */
server.use(express.json())

/* CORS */
server.use(cors())
server.options('*', cors())

/* DATABASE CONNECTION */
mongoose.connect(process.env.MONGO_URI, {
    autoIndex: true,
  }).then(() => {
    logger.info('Connected to the database')
  })
   .catch((err) => {
    logger.error(`Error connecting to the database: ${err}`)
  })

/* ROUTES */
server.use('/api', routes)

/* SERVER LISTENING */
const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`)
})
