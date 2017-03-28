export default class rtRoute {
    constructor() {
        this.template = require('./rtRoute.html')
        this.bindings = {
            route: '<'
        }
    }

    controller(color) {
        'ngInject'
        let vm = this
        vm.textColor = color.textColor
        vm.loading = false
        if(vm.route && vm.route.then) {
            vm.loading = true
            vm.route.then(route => {
                vm.loading = false
                vm.route = route
            })
        }
    }
}


