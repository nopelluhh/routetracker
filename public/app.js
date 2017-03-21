import angular from 'angular'
import { makeComponent, makeDirective } from './utils.js'
import { states } from './config.js'

// dependencies
import 'angular-ui-router'

// submodules

// config 

// main components
import { main } from './components/main/main'
import { rtHeader } from './components/rtHeader/rtHeader'
import { rtSidebar } from './components/rtSidebar/rtSidebar'
import { rtContent } from './components/rtContent/rtContent'

export const app = angular.module('app', ['ui.router'])
    .component('main', makeComponent(main))
    .component('rtHeader', makeComponent(rtHeader))
    .component('rtSidebar', makeComponent(rtSidebar))
    .component('rtContent', makeComponent(rtContent))
    .component('dummy', { template: '<h1>hey!</h1>' })

    // config

    .config(states)
