const boulderService = require('../services/boulder.service')()

module.exports = boulderController

function boulderController() {
    return {
        getAll,
        byGym
    }

    function getAll(req, res) {
        boulderService.getMany()
            .then(boulders => res.json(boulders))
            .catch(err => res.json(err))
    }

    function byGym(req, res) {
        let gym = req.query.gym
        boulderService.getMany({gym: gym})
            .then(boulders => res.json(boulders))
            .catch(err => res.json(err))
    }
}
