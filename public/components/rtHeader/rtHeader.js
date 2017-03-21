class rtHeader {
    constructor() {
        this.templateUrl = '/templates/rtHeader'
    }

    controller() {
        let vm = this

        vm.menu = [
            { name: 'Gyms' },
            { name: 'Overview' },
            { name: 'Today' }
        ]
    }
}

export {
    rtHeader
}
