import * as d3 from 'd3'

export class rtBarChart {
    constructor() {
        this.template = ``
        this.scope = {
            data: '<?',
            width: '@',
            height: '@',
            scale: '<?'
        }
    }

    controller() {
        
    }

    link(scope, elem) {
        var data = scope.data || [0],
            chart
        if (scope.data && scope.data.then) {
            scope.data.then(data => draw(data))
        } else {
            data ? draw(data) : null
        }


        function draw(data) {
            // var width = parseInt(d3.select('#chart').style('width'), 10)
            var width = Number(scope.width) || 500
            var height = Number(scope.height) || 200
            var barWidth = width / data.length

            var y = d3.scaleLinear()
                .domain([0, d3.max(data)])
                .range([0, height])


            var rainbow = d3.scaleSequential(d3.interpolateRainbow)
                .domain([0, scope.scale ? scope.scale.length : data.length])

            chart = d3.select(elem[0])
                .append('svg')
                .attr('width', width)
                .attr('height', height)



            var bar = chart.selectAll('g')
                .data(data)
                .enter().append('g')
                .attr('transform', function(d, i) { return 'translate(' + i * barWidth + ', 0)' })

            bar.append('rect')
                .classed('rt-bar', true)
                .attr('width', barWidth - 1)
                .attr('height', 0)
                .attr('y', (d) => { return height - y(d) })
                .attr('fill', function(d, i) { return rainbow(i) })
                .transition()
                .duration(500)
                .attr('height', y)
        }
    }
}
