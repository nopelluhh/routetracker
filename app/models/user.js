const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({
    username: {
        type: String,
        require: true
    },
    gym: {
        type: Schema.Types.ObjectId,
        ref: 'gym'
    }
}, {
    timestamps: {
        createdAt: 'created_at'
    }
})

module.exports = mongoose.model('user', User)
