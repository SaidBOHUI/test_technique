const mongoose = require('mongoose');

const ClientSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName:  {
        type: String,
        required: true
    },
    age:  {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Client', ClientSchema);