import angular from 'angular'
import {
    makeComponent,
    makeDirective
} from './utils.js'

import { main } from './components/main/main'

export const app = angular.module('app', [])
    .component('main', makeComponent(main))
