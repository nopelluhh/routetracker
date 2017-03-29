import angular from 'angular'
import { makeDirective } from 'rt/util'

import { rtBarChart } from './rtBarChart'
import { rtTooltip } from './rtTooltip'

export const rtChart = angular.module('rtChart', [])
   .directive('rtBarChart', makeDirective(rtBarChart))
   .directive('rtTooltip', makeDirective(rtTooltip))
