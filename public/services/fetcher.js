fetcher.$inject = ['$http']

export default function fetcher($http) {
    const prefix = '/api/'
    
    return {
        get,
        create
    }
    
    function get(resource, params) {
        return $http.get(prefix + resource + paramToQuery(params))
            .then(res => res.data)
    }

    function create(resource, data) {
        return $http.post(prefix + resource, data)
    }

    // utilities

    function paramToQuery(obj) {
        if(!obj) return ''

        return '?' +
            Object.keys(obj).map(function(key) {
                return encodeURIComponent(key) + '=' +
                    encodeURIComponent(obj[key])
            }).join('&')
    }
}