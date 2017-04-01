export default class rtWizardContainer {
    constructor() {
        this.template = require('./rtWizard.html')
    }

    controller(color, fetcher, $rootScope) {
        'ngInject'
        let vm = this,
            clicks = 0,
            clicked = '',
            clickedTag = ''


        vm.addProp = _addProp
        vm.addTag = _addTag
        vm.moveContainer = _moveContainer
        vm.submit = _submit
        vm.filterGyms = _filterGyms
        vm.route = { tags: []}
        vm.textColor = color.textColor


        let container,
            step = 0,
            steps = ['gym', 'color', 'grade', 'location', 'tags']
        
        // temp data 

        vm.locations = ['Wavy Gravy', 'Barrel', 'Horseshoe Left', 'Horseshoe Right', 'Prow', 'Wave Left', 'Wave Right', 'Cap\s Corner', 'Alcove']

        this.$onInit = activate()

        function activate() {
            container = document.querySelector('.wz-inner')
            vm.gymList = vm.gyms = $rootScope.gyms //vm.gyms
            vm.tags = $rootScope.team.tags
            vm.colors = $rootScope.team.colors
            vm.grades = $rootScope.team.grades
            vm.colors.forEach(c => c.text = color.textColor(c.color))
        }

        // component actions

        function _addProp(obj) {
            let prop = Object.keys(obj)[0]

            //handle double click
            if (clicks > 0 && clicked === obj[prop]) return _moveContainer(1)
            let targ = event.currentTarget
            targ.classList.toggle('item-selected')
            vm.route = Object.assign(vm.route, obj)
            if (steps[step] === prop && !vm.route[steps[step + 1]]) _moveContainer(1)
            clicks++
            clicked = obj[prop]
            setTimeout(() => clicks--, 500)
        }

        function _addTag(event, tag) {
            // handle double click
            if (clicks > 0 && clickedTag === tag) return _moveContainer(1) 

            //handle highlightin
            let targ = event.currentTarget
            targ.classList.toggle('item-selected')
            if (vm.route.tags.includes(tag)) {
                vm.route.tags = vm.route.tags.filter(t => t != tag)
            } else {
                vm.route.tags.push(tag)
            }
            clicks++
            clickedTag = tag
            setTimeout(() => clicks--, 1000)
        }

        function _moveContainer(count) {
            if ((count > 0 && cantMove()) || (count < 0 && step === 0)) return false
            step = step + count
            container.style.transform = `translateX(${(step) * -16.6}%)`
        }

        function _submit() {
            let route = Object.assign({}, vm.route)
            route.color = route.color.name
            fetcher.create('boulders', route)
                .then(() => {
                    reset()
                })
                .catch(alert)
        }

        function _filterGyms(field) {
            if (field === vm.gymFilter) {
                vm.gymList = vm.gyms
                vm.gymFilter = undefined
                return
            }
            vm.gymList = vm.gyms.filter(gym => gym.walls[field].length > 0)
            vm.gymFilter = field
        }

        // internal functions

        function reset() {
            vm.route = {}
        }

        function cantMove() {
            return !(steps[step] in vm.route)
        }
    }
}
