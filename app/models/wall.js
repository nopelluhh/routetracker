const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Route = new Schema({
    name: {
        type: String,
        require: true
    }
}, {
    timestamps: {
        createdAt: 'created_at'
    }
})