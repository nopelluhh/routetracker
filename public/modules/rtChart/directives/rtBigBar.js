import * as d3 from 'd3'

export default class rtBigBar {
    constructor() {
        this.restrict = 'E'
        this.scope = {
            data: '<?',
            width: '@',
            height: '@',
            scale: '<?'
        }
    }
}
