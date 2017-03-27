const boulder = require('../models/boulder')

module.exports = boulderService

function boulderService() {
    return {
        getMany
    }

    function getMany(queryCondition = {}) {
        let populate = Object.keys(queryCondition).join(' ')
        return boulder.find(queryCondition).populate(populate)
    }
}
