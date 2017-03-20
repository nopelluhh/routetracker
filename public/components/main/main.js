class main {
    constructor() {
        this.templateUrl = '/templates/main' //`<app-header></app-header><span><h1>{{$ctrl.tagline}}</h1></span>`
    }

    controller() {
        this.tagline = 'hello world!'
    }
}

export {
    main
}
