class rtWizard {
    constructor() {
        this.template = require('./rtWizard.html')
    }

    controller(color) {
        'ngInject'
        let vm = this

        vm.addProp = _addProp
        vm.addTag = _addTag
        vm.textColor = color.textColor
        vm.moveContainer = _moveContainer

        let route = vm.route = {}
        let container
        let step = 0
        let steps = ['color', 'grade', 'location', 'tags']
        activate()

        vm.colors = [
            { name: 'red', color: '#e22' },
            { name: 'orange', color: '#f80' },
            { name: 'yellow', color: '#ee0' },
            { name: 'green', color: '#0b0' },
            { name: 'blue', color: '#00e' },
            { name: 'purple', color: '#808' },
            { name: 'black', color: '#000' },
            { name: 'white', color: '#fff' },
            { name: 'pink', color: '#e5d' }
        ]

        vm.colors.forEach(c => c.text = color.textColor(c.color))

        vm.grades = ['V0', 'V1', 'V2', 'V3', 'V4', 'V5', 'V6', 'V7', 'V8', 'V9', 'V10', 'V11', 'V12', ]

        vm.locations = ['Wavy Gravy', 'Barrel', 'Horseshoe Left', 'Horseshoe Right', 'Prow', 'Wave Left', 'Wave Right', 'Cap\s Corner', 'Alcove']

        vm.tags = ['Techy', 'Burly', 'Compy', 'Commercial', 'Funky']

        function activate() {
            container = document.querySelector('.wz-inner')
        }

        function _addProp(obj) {
            route = Object.assign(route, obj)
            if (steps[step] === Object.keys(obj)[0]) _moveContainer(1)
        }

        function _addTag(event, tag) {
            vm.route.tags = vm.route.tags || []
            let targ = event.currentTarget
            targ.classList.toggle('tag-selected')
            if(vm.route.tags.includes(tag)) {
                vm.route.tags.filter(t => t != tag)
            } else {
                vm.route.tags.push(tag)
            }
        }

        function _moveContainer(count) {
            if (count > 0 && cantMove()) return
            step = step + count
            container.style.transform = `translateX(${(step) * -20}%)`
        }

        function cantMove() {
            return !(steps[step] in route)
        }
    }
}
export {
    rtWizard
}
