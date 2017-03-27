class rtHeader {
    constructor() {
        this.template = require('./rtHeader.html')
    }

    controller($element) {
        'ngInject'
        let vm = this
        let menu = $element.find('div')[1]

        
        $element.find('button').on('click', () => {
            menu.classList.toggle('collapse')
        })


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
