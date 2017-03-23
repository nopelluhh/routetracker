class rtSidebar {
    constructor() {
        this.templateUrl = '/templates/rtSidebar' //`<app-header></app-header><span><h1>{{$ctrl.tagline}}</h1></span>`
    }

    controller($scope, $rootScope, $window) {
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
export {
    rtSidebar
}
