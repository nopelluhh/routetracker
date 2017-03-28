export default class rtContent {
    constructor() {
        this.template = require('./rtContent.html')
    }

    controller() {
        let vm = this
        vm.tagline = 'Hey! You\'ve made it!'
    }
}
