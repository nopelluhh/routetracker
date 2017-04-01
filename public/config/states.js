states.$inject = ['$stateProvider', '$locationProvider']

export default function states($stateProvider, $locationProvider) {
    const states = [{
        name: 'rt',
        abstract: true,
        component: 'main',
        resolve: {
            gyms: ['fetcher', '$rootScope', (fetcher, $rootScope) =>
                fetcher.get('gyms').then(res => {
                    $rootScope.gyms = res
                })
            ],
            team: ['fetcher', '$rootScope', (fetcher, $rootScope) => 
                fetcher.get('teams/current', {_id: '58de9650cc711738fe322fc1'})
                .then(res => {
                    $rootScope.team = res
                })
            ]
        },
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
