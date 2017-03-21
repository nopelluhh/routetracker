class rtSidebar {
    constructor() {
        this.templateUrl = '/templates/rtSidebar' //`<app-header></app-header><span><h1>{{$ctrl.tagline}}</h1></span>`
    }

    controller() {
        this.menu = [
            { name: 'Bouldering', sref: 'rt.bouldering', icon: 'glyphicon-sunglasses' },
            { name: 'Sport', sref: 'rt.bouldering', icon: 'glyphicon-fire' },
            { name: 'Toprope', sref: 'rt.bouldering', icon: 'glyphicon-baby-formula' }
        ]
    }
}
export {
    rtSidebar
}
