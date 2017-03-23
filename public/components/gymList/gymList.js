class gymList {
    constructor() {
        this.templateUrl = '/templates/gymList'
        this.bindings =  {
            gyms: '<'
        }
    }

    controller(fetcherService) {
        let vm = this
    }
}

export {
    gymList
}
