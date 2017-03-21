const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Gym = new Schema({
    name: {
        type: String,
        require: true
    },
    routes: {
        type: [Schema.Types.ObjectId],
        ref: 'routes'
    },
    boulders: {
        type: [Schema.Types.ObjectId],
        ref: 'boulder'
    },
    walls: {
        rope: [String],
        boulder: [String]
    }
})

module.exports = mongoose.model('gym', Gym)
