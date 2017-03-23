const mongoose = require('mongoose')
const Schema = mongoose.Schema

const team = new Schema({
    name: {
        members: [{
            type: Schema.Types.ObjectId,
            ref: 'user'
        }],
        scale: {
            type: [String]
        }
    }
})