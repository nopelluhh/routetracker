export default function colorFactory() {
    return {
        textColor
    }

    function textColor(color) {
        if(!color) return
        let splitter = color.length > 4? /.{2}/g : /./g
        let middle = color.length > 4? 128 : 8
        color = color.replace('#', '').match(splitter)
        return color.reduce((a, b) => (parseInt(b, 16) / 3) + a, 0) > middle ? '#000' : '#fff'
    }
}
