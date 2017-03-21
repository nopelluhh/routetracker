import './fetcher'

fetcher.factory('fetcher', fetchServiceFactory)

fetchServiceFactory.$inject = ['$http']

function fetchServiceFactory($http) {
    const prefix = '/api/'
    return {
        get
    }

    function get(resource, params) {
        return $http.get(prefix + resource + paramToQuery(params))
    }

    function create(resource, data) {
        return $http.post(prefix + resource, data)
    }

    // utilities

    function paramToQuery(obj) {
        return '?' +
            Object.keys(obj).map(function(key) {
                return encodeURIComponent(key) + '=' +
                    encodeURIComponent(obj[key]);
            }).join('&');
    }
}
