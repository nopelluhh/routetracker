import angular from 'angular'
import { makeDirective } from 'Pub/utils.js'

import { rtBarChart } from './rtBarChart'

export const rtChart = angular.module('rtChart', [])
   .directive('rtBarChart', makeDirective(rtBarChart))
