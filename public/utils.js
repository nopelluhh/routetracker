export {
    makeComponent,
    makeDirective
}

function makeComponent(ClassName) {
    let comp = new ClassName()
    return comp
}

function makeDirective(ClassName) {
    let ddo = new ClassName()

    directive.$inject = ddo.$inject

    function directive() {
        return ddo
    }
}