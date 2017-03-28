import angular from 'angular'
import { makeComponent } from 'Pub/utils.js'

import main from './main/main'
import rtHeader from './rtHeader/rtHeader'
import rtSidebar from './rtSidebar/rtSidebar'
import rtContent from './rtContent/rtContent'
import rtRoute from './rtRoute/rtRoute'


angular.module('main', [])
    .component('main', makeComponent(main))
    .component('rtHeader', makeComponent(rtHeader))
    .component('rtSidebar', makeComponent(rtSidebar))
    .component('rtContent', makeComponent(rtContent))
    .component('rtRoute', makeComponent(rtRoute))
