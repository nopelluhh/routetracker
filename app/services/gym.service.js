const gym = require('../models/gym')

module.exports = gymService

function gymService() {
    return {
        getMany,
        create
    }

    function getMany(queryCondition = {}) {
        return gym.find(queryCondition)
    }

    function create(req) {
        let temp = new gym(req.body)
        return temp.save()
    }
}
