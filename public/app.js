import angular from 'angular'
import { makeComponent} from './utils.js'
import { states } from './states'

// dependencies
import 'angular-ui-router'

// submodules

import './modules/fetcher/fetcher'
import './modules/util/util'

// config 

// main components
import { main } from './components/main/main'
import { rtHeader } from './components/rtHeader/rtHeader'
import { rtSidebar } from './components/rtSidebar/rtSidebar'
import { rtContent } from './components/rtContent/rtContent'
import { gymList } from './components/gymList/gymList'
import { gymItem } from './components/gymItem/gymItem'


export const app = angular.module('app', ['ui.router', 'fetcher', 'util'])
    .component('main', makeComponent(main))
    .component('rtHeader', makeComponent(rtHeader))
    .component('rtSidebar', makeComponent(rtSidebar))
    .component('rtContent', makeComponent(rtContent))
    .component('dummy', { template: '<h1>hey!</h1>' })
    .component('gymList', makeComponent(gymList))
    .component('gymItem', makeComponent(gymItem))

    // services 


    // config

    .config(states)
