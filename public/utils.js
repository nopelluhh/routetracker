export {
    makeComponent,
    makeDirective
}

function makeComponent(ClassName) {
    return new ClassName()
}

function makeDirective(ClassName) {
    let ddo = new ClassName()

    directive.$inject = ddo.$inject

    function directive() {
        return ddo
    }
}