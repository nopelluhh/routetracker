function makeComponent(ClassName) {
    let comp = new ClassName()
    comp.controller.$inject
    return comp
}

function makeDirective(ClassName) {
    let ddo = new ClassName()

    function directive() {
        return ddo
    }

    return directive
}

const π = (function() {
    return {
        countBy
    }

    function countBy(arr, comp) {
        if (!comp) comp = (a) => a
        let grouped = {}
        for (let i = 0, l = arr.length; i < l; i++) {
            let a = arr[i]
            if (comp(a) in grouped) {
                grouped[comp(a)]++
            } else {
                grouped[comp(a)] = 1
            }
        }
        return grouped
    }
})()

export {
    makeComponent,
    makeDirective,
    π
}
