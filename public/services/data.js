data.$inject = []

export default function data() {
    let data = {}

    return {
        get,
        set
    }

    function get(str) {
        if (data[str]) return data[str]
    }

    function set(str, value) {
        data[str] = value
    }
}
