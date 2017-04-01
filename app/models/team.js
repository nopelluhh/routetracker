const mongoose = require('mongoose')
const Schema = mongoose.Schema

const team = new Schema({
    members: [{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }],
    grades: {
        type: [String]
    },
    colors: [{
        name: String,
        color: String,
        _id: false
    }],
    tags: [String]

})

module.exports = mongoose.model('team', team)
