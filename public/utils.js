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
        countBy,
        buckets
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

    function buckets(arr, list) {
        if (typeof list === 'string') list = list.split(' ')
        if (list instanceof Array) list = makeHash(list, 0)
        for (let i = 0, l = arr.length; i < l; i++) {
            list[arr[i]]++
        }
        return list
    }

    function makeHash(arr, val) {
        let hash = {}
        for (let i = 0, l = arr.length; i < l; i++) {
            hash[arr[i]] = arguments[1] || val
        }
        return hash
    }
})()

export {
    makeComponent,
    makeDirective,
    π
}
