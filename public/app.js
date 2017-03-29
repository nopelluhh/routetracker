// dependencies
import angular from 'angular'
import 'angular-ui-router'
import 'angular-touch'

// submodules
import './modules/util/util'
import './modules/rtChart/rtChart'
import './modules/rtWizard/rtWizard'
import './modules/gymList/gymList'
import './modules/main/main'

// config 
import states from './config/states'

// services
import fetcher from './services/fetcher'

const app = angular.module('rt', [
    'ui.router',
    'util',
    'rtChart',
    'rtWizard',
    'ngTouch',
    'rtGymList',
    'main'
])
    // services
    .factory('fetcher', fetcher)
    
    // config
    .config(states)

export default app
