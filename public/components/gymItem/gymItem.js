import { π } from 'Pub/utils'

class gymItem {
    constructor() {
        this.template = require('./gymItem.html')
        this.bindings = {
            gym: '<'
        }
    }

    controller(fetcherService, $scope) {
        'ngInject'
        let vm = this

        vm.$onChanges = function(changes) {
            if (changes.gym) {
                vm.data = fetcherService.get('boulders/gym', { gym: vm.gym._id })
                    .then(boulders => π.countBy(boulders.map(boulder => boulder.grade)))
                    .then(obj => Object.keys(obj).map(key => obj[key]))
            }
        }

    }
}

export {
    gymItem
}
