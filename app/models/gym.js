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
        rope: [{
            type: Schema.Types.ObjectId,
            ref: 'wall'
        }],
        boulder: [{
            type: Schema.Types.ObjectId,
            ref: 'wall'
        }]
    }
})

module.exports = mongoose.model('gym', Gym)
