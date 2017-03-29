import angular from 'angular'
import { makeComponent } from 'rt/util'

import rtWizardContainer from './container/rtWizardContainer'
import wzPage from './wzPage/wzPage'


export const rtChart = angular.module('rtWizard', [])
    .component('rtWizard', makeComponent(rtWizardContainer))
    .component('wzPage', makeComponent(wzPage))
