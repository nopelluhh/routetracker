const gymService = require('../services/gym.service')()

module.exports = gymController

function gymController() {
    return {
        getAll,
        create
    }

    function getAll(req, res) {
        gymService.getMany()
            .then(gyms => res.json(gyms))
            .catch(err => res.json(err))
    }

    function create(req, res) {
        gymService.create(req)
            .then(gym => res.json(gym))
            .catch(err => res.json(err))
    }
}
