import { setScreen } from './setScreenDirective'
import colorFactory from './colorService'
import angular from 'angular'

export const util = angular.module('util', [])
    .directive('setScreen', setScreen)
    .factory('color', colorFactory)
