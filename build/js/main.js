webpackJsonp([0],{

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.app = undefined;

var _angular = __webpack_require__(14);

var _angular2 = _interopRequireDefault(_angular);

var _utils = __webpack_require__(65);

var _config = __webpack_require__(64);

__webpack_require__(51);

var _main = __webpack_require__(60);

var _rtHeader = __webpack_require__(62);

var _rtSidebar = __webpack_require__(63);

var _rtContent = __webpack_require__(61);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// submodules

// config 

// main components
var app = exports.app = _angular2.default.module('app', ['ui.router']).component('main', (0, _utils.makeComponent)(_main.main)).component('rtHeader', (0, _utils.makeComponent)(_rtHeader.rtHeader)).component('rtSidebar', (0, _utils.makeComponent)(_rtSidebar.rtSidebar)).component('rtContent', (0, _utils.makeComponent)(_rtContent.rtContent)).component('dummy', { template: '<h1>hey!</h1>' })

// config

.config(_config.states);

// dependencies

/***/ }),

/***/ 48:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 60:
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

/***/ 61:
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
        key: "controller",
        value: function controller() {
            var vm = this;

            vm.tagline = "Hey! You've made it!";
        }
    }]);

    return rtContent;
}();

exports.rtContent = rtContent;

/***/ }),

/***/ 62:
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

        this.templateUrl = '/templates/rtHeader';
    }

    _createClass(rtHeader, [{
        key: 'controller',
        value: function controller() {
            var vm = this;

            vm.menu = [{ name: 'Gyms' }, { name: 'Overview' }, { name: 'Today' }];
        }
    }]);

    return rtHeader;
}();

exports.rtHeader = rtHeader;

/***/ }),

/***/ 63:
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

        this.templateUrl = '/templates/rtSidebar'; //`<app-header></app-header><span><h1>{{$ctrl.tagline}}</h1></span>`
    }

    _createClass(rtSidebar, [{
        key: 'controller',
        value: function controller() {
            this.menu = [{ name: 'Bouldering', sref: 'rt.bouldering', icon: 'glyphicon-sunglasses' }, { name: 'Sport', sref: 'rt.bouldering', icon: 'glyphicon-fire' }, { name: 'Toprope', sref: 'rt.bouldering', icon: 'glyphicon-baby-formula' }];
        }
    }]);

    return rtSidebar;
}();

exports.rtSidebar = rtSidebar;

/***/ }),

/***/ 64:
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
    }];

    states.forEach(function (state) {
        console.log(state);
        $stateProvider.state(state);
    });

    $locationProvider.html5Mode(true);
}

states.$inject = ['$stateProvider', '$locationProvider'];

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.makeComponent = makeComponent;
exports.makeDirective = makeDirective;


function makeComponent(ClassName) {
    return new ClassName();
}

function makeDirective(ClassName) {
    var ddo = new ClassName();

    directive.$inject = ddo.$inject;

    function directive() {
        return ddo;
    }
}

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _angular = __webpack_require__(14);

var _angular2 = _interopRequireDefault(_angular);

var _app = __webpack_require__(47);

var _app2 = _interopRequireDefault(_app);

__webpack_require__(48);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//app code
_angular2.default.element(document).ready(function () {
    _angular2.default.bootstrap(document, ['app']);
});

/***/ })

},[85]);