const gymService = require('../services/gym.service')()

module.exports = gymController

function gymController() {
    return {
        getAll
    }

    function getAll(req, res) {
        gymService.getAll()
            .then(gyms => res.json(gyms))
            .catch(err => res.json(err))
    }
}
