const mongoose = require('mongoose')

const threatSchema = mongoose.Schema({
    threat_id: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 255
    },
    threat_name: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 255
    },
    start_time: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 255
    },
    file_type_extension: {
        type: String,
        minlength: 2,
        maxlength: 255
    },
    counter: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Threat', threatSchema)