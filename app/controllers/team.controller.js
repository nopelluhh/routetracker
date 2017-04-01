const generalService = require('../services/general.service')()
const team = require('../models/team')

module.exports = boulderController

function boulderController() {
    return {
        current
    }

    function current(req, res) {
        let id = req.query._id
        generalService.getOne(team, {_id: id})
            .then(team => res.json(team))
            .catch(err => res.json(err))
    }
}
