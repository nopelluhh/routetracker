const fs = require('fs')
const path = require('path')

const modelDir = fs.readdirSync(path.resolve(__dirname, '../models'))

const models = modelDir.reduce((acc, cur) => {
    cur = cur.slice(0, -3)
    acc[cur] = require('../models/' + cur)
    return acc
}, {})

module.exports = general

function general() {
    return {
        getMany,
        getOne,
        create
    }

    function getMany(model, queryCondition = {}) {
        model = models[model]
        return model.find(queryCondition)
    }

    function getOne(model, queryCondition = {}) {
        return model.findOne(queryCondition)
    }

    function create(model, req) {
        model = models[model]
        let temp = new model(req.body)
        return temp.save()
    }
}
