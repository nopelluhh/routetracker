import angular from 'angular'
import 'angular-touch'
import { makeComponent } from './utils.js'
import { states } from './states'

// dependencies
import 'angular-ui-router'

// submodules

import './modules/fetcher/fetcher'
import './modules/util/util'
import './modules/rtChart/rtChart'
import './modules/rtWizard/rtWizard'
import './modules/gymList/gymList'
import './modules/main/main'

// config 

// main components

// dependencies

const deps = [
    'ui.router',
    'fetcher',
    'util',
    'rtChart',
    'rtWizard',
    'ngTouch',
    'rtGymList',
    'main'
]

const app = angular.module('app', deps)

//components
    .component('dummy', { template: '' })


    // services 


    // config

    .config(states)

export default app
