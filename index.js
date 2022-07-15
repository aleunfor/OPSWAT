const app = require('./app')
const logger = require('./logger_conf/logger')

// iniciar server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`)
})