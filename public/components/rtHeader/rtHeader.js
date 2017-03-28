class rtHeader {
    constructor() {
        this.template = require('./rtHeader.html')
    }

    /*ngInject*/ controller($element) {
        'ngInject'
        let vm = this
        let menu = $element.find('div')[1]

        
        $element.find('button').on('click', () => {
            menu.classList.toggle('collapse')
        })


        vm.menu = [
            { name: 'Gyms', sref: 'rt.gyms' },
            { name: 'Overview', sref: 'rt' },
            { name: 'Today', sref: 'rt.wizard' }
        ]
    }
}

export {
    rtHeader
}
