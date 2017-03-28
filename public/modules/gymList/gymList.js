import angular from 'angular'
import { makeComponent } from 'Pub/utils.js'

import gymList from './container/gymList'
import gymItem from './gymItem/gymItem'


angular.module('rtGymList', [])
    .component('gymList', makeComponent(gymList))
    .component('gymItem', makeComponent(gymItem))
