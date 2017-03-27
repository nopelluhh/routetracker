class rtWizard {
    constructor() {
        this.template = require('./rtWizard.html')
    }

    controller() {
        'ngInject'
        let vm = this

        vm.addProp = _addProp

        vm.swipeContainer = swipeContainer

        let route = vm.route = {}
        let container
        let step = 0
        let steps = ['color', 'grade', 'location', 'tags']
        activate()

        vm.colors = {
            red: '#e22',
            orange: '#f80',
            yellow: '#ee0',
            green: '#0b0',
            blue: '#00e',
            purple: '#808',
            black: '#000',
            white: '#fff',
            pink: '#e5d'
        }

        vm.grades = ['V0', 'V1', 'V2', 'V3', 'V4', 'V5', 'V6', 'V7', 'V8', 'V9', 'V10', 'V11', 'V12', ]

        vm.locations = ['Wavy Gravy', 'Barrel', 'Horseshoe Left', 'Horseshoe Right', 'Prow', 'Wave Left', 'Wave Right', 'Cap\s Corner', 'Alcove']

        function activate() {
            container = document.querySelector('.wz-inner')
        }

        function _addProp(obj) {
            route.color = Object.assign(route, obj)
            if (steps[step] === Object.keys(obj)[0]) moveContainer(1)
        }

        function moveContainer(count) {
            step = step + count
            container.style.transform = `translateX(${(step) * -27}%)`
        }

        function swipeContainer(count) {

            step = step + count
            container.style.transform = `translateX(${(step) * -27}%)`
        }
    }
}
export {
    rtWizard
}
