const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const logger = require('./logger_conf/logger')

const threatRoutes = require('./routes/threat')

const app = express()

// Connection to Railway MongoDB
const uriConnection = process.env.MONGO_URI
mongoose.connect(uriConnection,
    { useNewUrlParser: true, useUnifiedTopology: true }
)
    .then(() => logger.info('DB Connected'))
    .catch(e => logger.error('DB Error:', e))

app.use('/api/threat', threatRoutes)

module.exports = app