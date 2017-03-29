states.$inject = ['$stateProvider', '$locationProvider']

export default function states($stateProvider, $locationProvider) {
    const states = [{
        name: 'rt',
        abstract: true,
        component: 'main'
    }, {
        name: 'rt.bouldering',
        url: '/',
        template: ''
    }, {
        name: 'rt.gyms',
        url: '/gyms',
        resolve: {
            gyms: ['fetcher', (fetcher) => {
                return fetcher.get('gyms')
            }]
        },
        component: 'gymList'
    }, {
        name: 'rt.wizard',
        url: '/add',
        component: 'rtWizard'
    }]

    states.forEach((state) => {
        $stateProvider.state(state)
    })

    $locationProvider.html5Mode(true)
}

