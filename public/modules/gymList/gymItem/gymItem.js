import { π } from 'rt/util'

export default class gymItem {
    constructor() {
        this.template = require('./gymItem.html')
        this.bindings = {
            gym: '<'
        }
    }

    controller(fetcher) {
        'ngInject'
        let vm = this

        vm.$onChanges = function(changes) {
            if (changes.gym) {
                vm.data = fetcher.get('boulders/gym', { gym: vm.gym._id })
                    .then(boulders => π.buckets(boulders.map(boulder => boulder.grade), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]))
                    .then(obj => Object.keys(obj).map(key => obj[key]))
            }
        }

    }
}
