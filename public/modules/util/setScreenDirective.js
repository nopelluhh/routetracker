export default class setScreenDirective {
    constructor() {
        this.restrict = 'A'
        this.scope = {}
    }
    controller($rootScope, $window) {
        'ngInject'
        let breakpoints = [0, 768, 992, 1200, Infinity]
        let labels = ['xs', 'sm', 'md', 'lg']
        $window.onresize = debounce(listener, 250)

        function listener(e) {
            let i = 0
            let width = e.currentTarget.innerWidth
            while (i < 4) {
                if (between(width, breakpoints[i], breakpoints[i + 1])) {
                    $rootScope.windowSize = labels[i]
                    $rootScope.$apply()
                    break
                }
                i++
            }
        }

        function debounce(func, wait) {
            var timeout
            return function() {
                var context = this,
                    args = arguments
                var later = function() {
                    timeout = null
                    func.apply(context, args)
                }
                clearTimeout(timeout)
                timeout = setTimeout(later, wait)
            }
        }

        function between(a, b, c) {
            return a >= b && a < c
        }
    }
}
