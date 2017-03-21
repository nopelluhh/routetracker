const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Route = new Schema({
    name: {
        type: String,
        require: true
    },
    grade: {
        type: Number
    },
    color: {
        type: String
    },
    location: {
        type: String
    }
}, {
    timestamps: {
        createdAt: 'created_at'
    }
})

module.exports = mongoose.model('route', Route)
