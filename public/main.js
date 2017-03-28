import angular from 'angular'

//app code
import './app'
import './styles/main.scss'

angular.element(document).ready(function() {
    angular.bootstrap(document, ['app'])
})
