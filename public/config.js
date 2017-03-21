export function states($stateProvider, $locationProvider) {
    const states = [{
        name: 'rt',
        abstract: true,
        component: 'main'
    }, {
        name: 'rt.bouldering',
        url: '/',
        component: 'dummy'
    }]

    states.forEach((state) => {
        console.log(state)
        $stateProvider.state(state)
    })

    $locationProvider.html5Mode(true)
}

states.$inject = ['$stateProvider', '$locationProvider']
