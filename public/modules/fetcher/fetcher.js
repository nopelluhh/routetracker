import 'angular'
import { fetcherService } from './fetcherService'

export const fetcher = angular.module('fetcher', [])
    .factory('fetcherService', fetcherService)
