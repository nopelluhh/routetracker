import angular from 'angular'
import 'angular-touch'
import { makeComponent} from './utils.js'
import { states } from './states'

// dependencies
import 'angular-ui-router'

// submodules

import './modules/fetcher/fetcher'
import './modules/util/util'
import './modules/rtChart/rtChart'

// config 

// main components
import { main } from './components/main/main'
import { rtHeader } from './components/rtHeader/rtHeader'
import { rtSidebar } from './components/rtSidebar/rtSidebar'
import { rtContent } from './components/rtContent/rtContent'
import { rtRoute } from './components/rtRoute/rtRoute'
import { gymList } from './components/gymList/gymList'
import { gymItem } from './components/gymItem/gymItem'
import { rtWizard } from './components/rtWizard/rtWizard'


export const app = angular.module('app', ['ui.router', 'fetcher', 'util', 'rtChart', 'ngTouch'])
    .component('main', makeComponent(main))
    .component('rtHeader', makeComponent(rtHeader))
    .component('rtSidebar', makeComponent(rtSidebar))
    .component('rtContent', makeComponent(rtContent))
    .component('rtRoute', makeComponent(rtRoute))
    .component('dummy', { template: '<rt-bar-chart></rt-bar-chart>' })
    .component('gymList', makeComponent(gymList))
    .component('gymItem', makeComponent(gymItem))
    .component('rtWizard', makeComponent(rtWizard))

    // services 


    // config

    .config(states)
