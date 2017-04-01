import angular from 'angular'
import { makeDirective } from 'rt/util'

import { rtBarChart } from './directives/rtBarChart'
import { rtTooltip } from './directives/rtTooltip'

export const rtChart = angular.module('rtChart', [])
   .directive('rtBarChart', makeDirective(rtBarChart))
   .directive('rtTooltip', makeDirective(rtTooltip))
