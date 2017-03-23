const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Boulder = new Schema({
    name: {
        type: String
    },
    grade: {
        type: Number
    },
    color: {
        type: String
    },
    gym: {
        type: String
        // type: Schema.Types.ObjectId,
        // ref: 'gym'
    },
    wall: {
        type: String
        // type: Schema.Types.ObjectId,
        // ref: 'wall'
    }, 
    setter: {
        type: String
        // type: Schema.Types.ObjectId,
        // ref: 'user'
    }
}, {
    timestamps: {
        createdAt: 'created_at'
    }
})

module.exports = mongoose.model('boulder', Boulder)
