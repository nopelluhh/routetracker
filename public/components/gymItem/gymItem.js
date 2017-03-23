class gymItem {
    constructor() {
        this.template = require('./gymItem.html')
        this.bindings = {
            gym: '<'
        }
    }

    controller() {
        let vm = this
    }
}

export {
    gymItem
}