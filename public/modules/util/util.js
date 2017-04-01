import { makeDirective } from 'rt/util'
import colorFactory from './colorService'
import setScreen from './setScreenDirective'
import angular from 'angular'

export const util = angular.module('util', [])
    .directive('setScreen', makeDirective(setScreen))
    .factory('color', colorFactory)
