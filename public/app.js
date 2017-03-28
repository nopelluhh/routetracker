import angular from 'angular'
import 'angular-touch'

// dependencies
import 'angular-ui-router'

// submodules
import './modules/util/util'
import './modules/rtChart/rtChart'
import './modules/rtWizard/rtWizard'
import './modules/gymList/gymList'
import './modules/main/main'

// config 
import { states } from './states'

// services

import fetcher from './services/fetcher'

// dependencies

const deps = [
    'ui.router',
    'util',
    'rtChart',
    'rtWizard',
    'ngTouch',
    'rtGymList',
    'main'
]

const app = angular.module('rt', deps)
    // services
    .factory('fetcher', fetcher) 
    // config

    .config(states)

export default app
