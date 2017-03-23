export function states($stateProvider, $locationProvider) {
    const states = [{
        name: 'rt',
        abstract: true,
        component: 'main'
    }, {
        name: 'rt.bouldering',
        url: '/',
        component: 'dummy'
    }, {
        name: 'rt.gyms',
        url: '/gyms',
        resolve: {
            gyms: (fetcherService) => {
                return fetcherService.get('gyms')
            }
        },
        component: 'gymList'

    }]

    states.forEach((state) => {
        $stateProvider.state(state)
    })

    $locationProvider.html5Mode(true)
}

states.$inject = ['$stateProvider', '$locationProvider']
