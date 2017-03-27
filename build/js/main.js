webpackJsonp([0],{

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function makeComponent(ClassName) {
    var comp = new ClassName();
    comp.controller.$inject;
    return comp;
}

function makeDirective(ClassName) {
    var ddo = new ClassName();

    directive.$inject = ddo.$inject;

    function directive() {
        return ddo;
    }

    return directive;
}

var π = function () {
    return {
        countBy: countBy
    };

    function countBy(arr, comp) {
        if (!comp) comp = function comp(a) {
            return a;
        };
        var grouped = {};
        for (var i = 0, l = arr.length; i < l; i++) {
            var a = arr[i];
            if (comp(a) in grouped) {
                grouped[comp(a)]++;
            } else {
                grouped[comp(a)] = 1;
            }
        }
        return grouped;
    }
}();

exports.makeComponent = makeComponent;
exports.makeDirective = makeDirective;
exports.π = π;

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.app = undefined;

var _angular = __webpack_require__(6);

var _angular2 = _interopRequireDefault(_angular);

__webpack_require__(106);

var _utils = __webpack_require__(22);

var _states = __webpack_require__(74);

__webpack_require__(52);

__webpack_require__(68);

__webpack_require__(73);

__webpack_require__(71);

var _main = __webpack_require__(63);

var _rtHeader = __webpack_require__(65);

var _rtSidebar = __webpack_require__(66);

var _rtContent = __webpack_require__(64);

var _gymList = __webpack_require__(62);

var _gymItem = __webpack_require__(61);

var _rtWizard = __webpack_require__(67);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// submodules

var app = exports.app = _angular2.default.module('app', ['ui.router', 'fetcher', 'util', 'rtChart', 'ngTouch']).component('main', (0, _utils.makeComponent)(_main.main)).component('rtHeader', (0, _utils.makeComponent)(_rtHeader.rtHeader)).component('rtSidebar', (0, _utils.makeComponent)(_rtSidebar.rtSidebar)).component('rtContent', (0, _utils.makeComponent)(_rtContent.rtContent)).component('dummy', { template: '<rt-bar-chart></rt-bar-chart>' }).component('gymList', (0, _utils.makeComponent)(_gymList.gymList)).component('gymItem', (0, _utils.makeComponent)(_gymItem.gymItem)).component('rtWizard', (0, _utils.makeComponent)(_rtWizard.rtWizard))

// services 


// config

.config(_states.states);

// config 

// main components


// dependencies

/***/ }),

/***/ 49:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.gymItem = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(22);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var gymItem = function () {
    function gymItem() {
        _classCallCheck(this, gymItem);

        this.template = __webpack_require__(80);
        this.bindings = {
            gym: '<'
        };
    }

    _createClass(gymItem, [{
        key: 'controller',
        value: function controller(fetcherService, $scope) {
            'ngInject';

            var vm = this;

            vm.$onChanges = function (changes) {
                if (changes.gym) {
                    vm.data = fetcherService.get('boulders/gym', { gym: vm.gym._id }).then(function (boulders) {
                        return _utils.π.countBy(boulders.map(function (boulder) {
                            return boulder.grade;
                        }));
                    }).then(function (obj) {
                        return Object.keys(obj).map(function (key) {
                            return obj[key];
                        });
                    });
                }
            };
        }
    }]);

    return gymItem;
}();

exports.gymItem = gymItem;

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var gymList = function () {
    function gymList() {
        _classCallCheck(this, gymList);

        this.templateUrl = '/templates/gymList';
        this.bindings = {
            gyms: '<'
        };
    }

    _createClass(gymList, [{
        key: 'controller',
        value: function controller() {
            var vm = this;
        }
    }]);

    return gymList;
}();

exports.gymList = gymList;

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var main = function () {
    function main() {
        _classCallCheck(this, main);

        this.templateUrl = '/templates/main'; //`<app-header></app-header><span><h1>{{$ctrl.tagline}}</h1></span>`
    }

    _createClass(main, [{
        key: 'controller',
        value: function controller() {
            this.tagline = 'hello world!';
        }
    }]);

    return main;
}();

exports.main = main;

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var rtContent = function () {
    function rtContent() {
        _classCallCheck(this, rtContent);

        this.templateUrl = '/templates/rtContent';
    }

    _createClass(rtContent, [{
        key: 'controller',
        value: function controller() {
            var vm = this;
            vm.tagline = 'Hey! You\'ve made it!';
        }
    }]);

    return rtContent;
}();

exports.rtContent = rtContent;

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var rtHeader = function () {
    function rtHeader() {
        _classCallCheck(this, rtHeader);

        this.template = __webpack_require__(81);
    }

    _createClass(rtHeader, [{
        key: 'controller',
        value: function controller($element) {
            'ngInject';

            var vm = this;
            var menu = $element.find('div')[1];

            $element.find('button').on('click', function () {
                menu.classList.toggle('collapse');
            });

            vm.menu = [{ name: 'Gyms' }, { name: 'Overview' }, { name: 'Today' }];
        }
    }]);

    return rtHeader;
}();

exports.rtHeader = rtHeader;

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var rtSidebar = function () {
    function rtSidebar() {
        _classCallCheck(this, rtSidebar);

        this.templateUrl = '/templates/rtSidebar';
    }

    _createClass(rtSidebar, [{
        key: 'controller',
        value: function controller($scope, $rootScope, $window) {
            'ngInject';

            var vm = this;

            $scope.$watch(function () {
                return $rootScope.windowSize;
            }, onResize);

            activate();

            vm.menu = [{ name: 'Bouldering', sref: 'rt.gyms', icon: 'glyphicon-sunglasses' }, { name: 'Sport', sref: 'rt.bouldering', icon: 'glyphicon-fire' }, { name: 'Toprope', sref: 'rt.bouldering', icon: 'glyphicon-baby-formula' }];

            function activate() {
                if ($window.innerWidth < 1000) vm.hideMenu = true;
            }

            function onResize(val) {
                if (val == 'sm' || val == 'xs') {
                    vm.hideMenu = true;
                }
            }
        }
    }]);

    return rtSidebar;
}();

exports.rtSidebar = rtSidebar;

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var rtWizard = function () {
    function rtWizard() {
        _classCallCheck(this, rtWizard);

        this.template = __webpack_require__(82);
    }

    _createClass(rtWizard, [{
        key: 'controller',
        value: function controller($element) {
            'ngInject';

            var vm = this;

            vm.addProp = _addProp;

            vm.swipeContainer = swipeContainer;

            var route = vm.route = {};
            var container = void 0;
            var step = 0;
            var steps = ['color', 'grade', 'location', 'tags'];
            activate();

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
            };

            vm.grades = ['V0', 'V1', 'V2', 'V3', 'V4', 'V5', 'V6', 'V7', 'V8', 'V9', 'V10', 'V11', 'V12'];

            vm.locations = ['Wavy Gravy', 'Barrel', 'Horseshoe Left', 'Horseshoe Right', 'Prow', 'Wave Left', 'Wave Right', 'Cap\s Corner', 'Alcove'];

            function activate() {
                container = document.querySelector('.wz-inner');
            }

            function _addProp(obj) {
                route.color = Object.assign(route, obj);
                if (steps[step] === Object.keys(obj)[0]) moveContainer(1);
            }

            function moveContainer(count) {
                step = step + count;
                container.style.transform = 'translateX(' + step * -27 + '%)';
            }

            function swipeContainer(count) {

                step = step + count;
                container.style.transform = 'translateX(' + step * -27 + '%)';
            }
        }
    }]);

    return rtWizard;
}();

exports.rtWizard = rtWizard;

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fetcher = undefined;

__webpack_require__(6);

var _fetcherService = __webpack_require__(69);

var fetcher = exports.fetcher = angular.module('fetcher', []).factory('fetcherService', _fetcherService.fetcherService);

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fetcherService = fetcherService;


fetcherService.$inject = ['$http'];

function fetcherService($http) {
    var prefix = '/api/';
    return {
        get: get,
        create: create
    };

    /**
     * @param  {} resource path to the resource not including a leading slash
     * @param  {} params object to be mapped to query parameters
     */

    function get(resource, params) {
        return $http.get(prefix + resource + paramToQuery(params)).then(function (res) {
            return res.data;
        });
    }

    function create(resource, data) {
        return $http.post(prefix + resource, data);
    }

    // utilities

    function paramToQuery(obj) {
        if (!obj) return '';

        return '?' + Object.keys(obj).map(function (key) {
            return encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]);
        }).join('&');
    }
}

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.rtBarChart = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _d = __webpack_require__(77);

var d3 = _interopRequireWildcard(_d);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var rtBarChart = exports.rtBarChart = function () {
    function rtBarChart() {
        _classCallCheck(this, rtBarChart);

        this.template = '<svg></svg>';
        this.scope = {
            data: '<?',
            width: '@',
            height: '@'
        };
    }

    _createClass(rtBarChart, [{
        key: 'link',
        value: function link(scope, elem) {
            var data = scope.data || [0];
            if (scope.data.then) {
                scope.data.then(function (data) {
                    return draw(data);
                });
            } else {
                draw(data);
            }

            function draw(data) {
                // var width = parseInt(d3.select('#chart').style('width'), 10)
                var width = scope.width || 500;
                var height = scope.height || 200;
                var barWidth = width / data.length;

                var y = d3.scaleLinear().domain([0, d3.max(data)]).range([0, height]);

                var rainbow = d3.scaleSequential(d3.interpolateRainbow).domain([0, data.length]);

                var chart = d3.select('svg').attr('width', width).attr('height', height);

                var bar = chart.selectAll('g').data(data).enter().append('g').attr('transform', function (d, i) {
                    return 'translate(' + i * barWidth + ', 0)';
                });

                bar.append('rect').classed('rt-bar', true).attr('width', barWidth - 1).attr('height', 0).attr('y', function (d) {
                    return height - y(d);
                }).attr('fill', function (d, i) {
                    return rainbow(i);
                }).transition().duration(500).attr('height', y);
            }
        }
    }]);

    return rtBarChart;
}();

/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});
exports.rtChart = undefined;

var _angular = __webpack_require__(6);

var _angular2 = _interopRequireDefault(_angular);

var _utils = __webpack_require__(22);

var _rtBarChart = __webpack_require__(70);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rtChart = exports.rtChart = _angular2.default.module('rtChart', []).directive('rtBarChart', (0, _utils.makeDirective)(_rtBarChart.rtBarChart));

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setScreen = setScreen;
function setScreen() {
    return {
        restrict: 'A',
        scope: {},
        controller: ['$rootScope', '$window', function ($rootScope, $window) {
            var breakpoints = [0, 768, 992, 1200, Infinity];
            var labels = ['xs', 'sm', 'md', 'lg'];
            $window.onresize = debounce(listener, 250);

            function listener(e) {
                var i = 0;
                var width = e.currentTarget.innerWidth;
                while (i < 4) {
                    if (between(width, breakpoints[i], breakpoints[i + 1])) {
                        $rootScope.windowSize = labels[i];
                        $rootScope.$apply();
                        break;
                    }
                    i++;
                }
            }

            function debounce(func, wait) {
                var timeout;
                return function () {
                    var context = this,
                        args = arguments;
                    var later = function later() {
                        timeout = null;
                        func.apply(context, args);
                    };
                    clearTimeout(timeout);
                    timeout = setTimeout(later, wait);
                };
            }

            function between(a, b, c) {
                return a >= b && a < c;
            }
        }]
    };
}

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.util = undefined;

var _setScreenDirective = __webpack_require__(72);

var _angular = __webpack_require__(6);

var _angular2 = _interopRequireDefault(_angular);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var util = exports.util = _angular2.default.module('util', []).directive('setScreen', _setScreenDirective.setScreen);

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.states = states;
function states($stateProvider, $locationProvider) {
    var states = [{
        name: 'rt',
        abstract: true,
        component: 'main'
    }, {
        name: 'rt.bouldering',
        url: '/',
        component: 'dummy'
    }, {
        name: 'rt.gyms',
        url: '/gyms',
        resolve: {
            gyms: ['fetcherService', function (fetcherService) {
                return fetcherService.get('gyms');
            }]
        },
        component: 'gymList'
    }, {
        name: 'rt.wizard',
        url: '/add',
        component: 'rtWizard'
    }];

    states.forEach(function (state) {
        $stateProvider.state(state);
    });

    $locationProvider.html5Mode(true);
}

states.$inject = ['$stateProvider', '$locationProvider'];

/***/ }),

/***/ 80:
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n    <div class=\"gym-title text-brand text-uppercase text-thin\">\n        {{$ctrl.gym.name}}\n    </div>\n    <div class=\"gym-preview\">\n        <rt-bar-chart data=\"$ctrl.data\" width=\"200\" height=\"200\"></rt-bar-chart>\n    </div>\n</div>"

/***/ }),

/***/ 81:
/***/ (function(module, exports) {

module.exports = "<nav class=\"nav navbar\">\n    <div class=\"nav navbar-header\">\n        <a href=\"#\" class=\"navbar-brand\">ROUTETRACKER</a>\n        <button type=\"button\" class=\"navbar-toggle collapsed\" id=\"hamburger\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n        </button>\n    </div>\n\n    <div class=\"collapse navbar-collapse\" id=\"menu\">\n        <ul class=\"nav navbar-nav navbar-left\">\n            <li ng-repeat=\"item in $ctrl.menu\"><a href=\"#\">{{item.name}}</a></li>\n        </ul>\n    </div>\n\n</nav>\n"

/***/ }),

/***/ 82:
/***/ (function(module, exports) {

module.exports = "<div class=\"wz-big-container\">\n    <div class=\"left-wing\"></div>\n    <div class=\"wz-container\">\n        <div class=\"wz-inner\" ng-swipe-left=\"$ctrl.swipeContainer(1)\" ng-swipe-right=\"$ctrl.swipeContainer(-1)\">\n            <div class=\"wz-item\">\n                <div class=\"text-center h3\">Route Color:</div>\n                <div class=\"wz-grid\">\n                    <div class=\"wz-dot\" ng-repeat=\"(key, value) in $ctrl.colors\" ng-style=\"{'background-color': value}\" ng-click=\"$ctrl.addProp({color: key})\">\n                    </div>\n                </div>\n            </div>\n            <div class=\"wz-item\">\n                <div class=\"text-center h3\">Route Grade:</div>\n                <div class=\"wz-grid\">\n                    <div class=\"wz-dot\" ng-repeat=\"grade in $ctrl.grades\" ng-click=\"$ctrl.addProp({grade: grade})\">\n                        <div class=\"wz-label grid-label text-muted\">{{grade}}</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"wz-item\">\n                <div class=\"text-center h3\">Route Location:</div>\n                <div class=\"wz-grid\">\n                    <div class=\"wz-list-item\" ng-repeat=\"location in $ctrl.locations\" ng-click=\"$ctrl.addProp({location: location})\">\n                        <div class=\"wz-label list-label\">{{location}}</div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"right-wing\"></div>\n</div>\n"

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _angular = __webpack_require__(6);

var _angular2 = _interopRequireDefault(_angular);

var _app = __webpack_require__(48);

var _app2 = _interopRequireDefault(_app);

__webpack_require__(49);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//app code
_angular2.default.element(document).ready(function () {
    _angular2.default.bootstrap(document, ['app']);
});

/***/ })

},[98]);