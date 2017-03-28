export default class rtSidebar {
    constructor() {
        this.template = require('./rtSidebar.html')
    }

    controller($scope, $rootScope, $window) {
        'ngInject'
        let vm = this

        $scope.$watch(() => $rootScope.windowSize, onResize)

        activate()

        vm.menu = [
            { name: 'Bouldering', sref: 'rt.gyms', icon: 'glyphicon-sunglasses' },
            { name: 'Sport', sref: 'rt.bouldering', icon: 'glyphicon-fire' },
            { name: 'Toprope', sref: 'rt.bouldering', icon: 'glyphicon-baby-formula' }
        ]

        function activate() {
            if($window.innerWidth < 1000) vm.hideMenu = true
        }

        function onResize(val) {
            if(val == 'sm' || val == 'xs') {
                vm.hideMenu = true
            } 
        }
    }
}
