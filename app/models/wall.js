const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Wall = new Schema({
    name: {
        type: String,
        require: true
    }
}, {
    timestamps: {
        createdAt: 'created_at'
    }
})

module.exports = mongoose.model('wall', Wall)