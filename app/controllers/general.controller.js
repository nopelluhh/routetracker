const generalService = require('../services/general.service')()
const router = require('express').Router()

module.exports = generalController

function generalController() {
    return {
        getAll,
        create,
        middleware
    }

    function getAll(model) {
        return function(req, res) {
            generalService.getMany(model)
                .then(docs => res.json(docs))
                .catch(err => res.json(err))
        }
    }

    function create(model) {
        return function(req, res) {
            generalService.create(model, req)
                .then(docs => res.json(docs))
                .catch(err => res.json(err))
        }
    }

    function middleware(route) {
        router.get('/', getAll(route))
        router.post('/', create(route))
        return router
    }
}
