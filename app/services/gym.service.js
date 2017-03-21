const gym = require('../models/gym')

module.exports = gymService

function gymService() {
    return {
        getAll
    }

    function getAll(queryCondition) {
        return gym.find()
    }
}
