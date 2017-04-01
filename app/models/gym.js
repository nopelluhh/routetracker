const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Gym = new Schema({
    name: {
        type: String,
        require: true
    },
    walls: {
        rope: [String],
        boulder: [String]
    }
})

module.exports = mongoose.model('gym', Gym)
