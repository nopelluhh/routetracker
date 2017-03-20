webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.app = undefined;

var _angular = __webpack_require__(0);

var _angular2 = _interopRequireDefault(_angular);

var _utils = __webpack_require__(5);

var _main = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = exports.app = _angular2.default.module('app', []).component('main', (0, _utils.makeComponent)(_main.main));

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */,
/* 4 */
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
/* 5 */
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
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _angular = __webpack_require__(0);

var _angular2 = _interopRequireDefault(_angular);

var _app = __webpack_require__(1);

var _app2 = _interopRequireDefault(_app);

__webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_angular2.default.element(document).ready(function () {
    _angular2.default.bootstrap(document, ['app']);
});

/***/ })
],[11]);