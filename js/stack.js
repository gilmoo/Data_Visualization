

var n = 3, // number of layers
    m = 18, // number of samples per layer
    data = d3.layout.stack()(stream_layers(n, m, .1)),
    color = d3.interpolateRgb("#aad", "#556"),
    label = ['B München', 'B Dortmund', 'B Leverkusen', 'B Mönchengladbach', 'Schalke 04', 'Mainz', 'Hertha BSC',
        'Wolfsburg', 'Köln', 'Hamburg', 'Ingolstadt', 'Augsburg', 'Werder Bremen', 'Darmstadt', 'Hoffenheim', 'E Frankfurt', 'Stuttgart', 'Hannover 96'];

var legendRectSize = 18;
var legendSpacing = 4;

var p = 20,
    w = 960,
    h = 500 - .5 - p,
    mx = m,
    my = d3.max(data, function (d) {
        return d3.max(d, function (d) {
            return d.y0 + d.y;
        });
    }),
    mz = d3.max(data, function (d) {
        return d3.max(d, function (d) {
            return d.y;
        });
    }),
    x = function (d) { return d.x * w / mx; },
    y0 = function (d) { return h - d.y0 * h / my; },
    y1 = function (d) { return h - (d.y + d.y0) * h / my; },
    y2 = function (d) { return d.y * h / mz; }; // or `my` to not rescale

var vis = d3.select("#chart")
    .append("svg:svg")
    .attr("width", w)
    .attr("height", h + p);

var layers = vis.selectAll("g.layer")
    .data(data)
    .enter().append("svg:g")
    .style("fill", function (d, i) { return color(i / (n - 1)); })
    .attr("class", "layer");
    
var color = d3.scale.linear()
    .domain([-1, 0, 1])
    .range(["#aaaadd", "#8080a2", "#555566"]);


var bars = layers.selectAll("g.bar")
    .data(function (d) { return d; })
    .enter().append("svg:g")
    .attr("class", "bar")
    .attr("transform", function (d) { return "translate(" + x(d) + ",0)"; });

bars.append("svg:rect")
    .attr("width", x({ x: .9 }))
    .attr("x", 0)
    .attr("y", h)
    .attr("height", 0)
    .transition()
    .delay(function (d, i) { return i * 10; })
    .attr("y", y1)
    .attr("height", function (d) { return y0(d) - y1(d); });

var labels = vis.selectAll("text.label")
    .data(data[0])
    .enter().append("svg:text")
    .attr("class", "label")
    .attr("x", x)
    .attr("y", h + 6)
    .attr("dx", x({ x: .45 }))
    .attr("dy", ".71em")
    .attr("text-anchor", "middle")
    .text(function (d, i) { return label[i]; });

vis.append("svg:line")
    .attr("x1", 0)
    .attr("x2", w - x({ x: .1 }))
    .attr("y1", h)
    .attr("y2", h);

var legend = vis.selectAll('#chart')
    .data(color.domain())
    .enter()
    .append('g')
    .attr('class', 'legend')
    .attr('transform', function (d, i) {
        var height = legendRectSize + legendSpacing;
        var offset = height * color.domain().length / 2;
        var horz = -2 * legendRectSize;
        var vert = i * height - offset;
        return 'translate(' + horz + ',' + vert + ')';
    });

legend.append('rect')
    .attr('width', legendRectSize)
    .attr('height', legendRectSize)
    .style('fill', color)
    .style('stroke', color);

legend.append('text')
    .attr('x', legendRectSize + legendSpacing)
    .attr('y', legendRectSize - legendSpacing)
    .text(function (d) { return d; });

function transitionGroup() {
    var group = d3.selectAll("#chart");

    group.select("#group")
        .attr("class", "first active");

    group.select("#stack")
        .attr("class", "last");

    group.selectAll("g.layer rect")
        .transition()
        .duration(500)
        .delay(function (d, i) { return (i % m) * 10; })
        .attr("x", function (d, i) { return x({ x: .9 * ~~(i / m) / n }); })
        .attr("width", x({ x: .9 / n }))
        .each("end", transitionEnd);

    function transitionEnd() {
        d3.select(this)
            .transition()
            .duration(500)
            .attr("y", function (d) { return h - y2(d); })
            .attr("height", y2);
    }
}

function transitionStack() {
    var stack = d3.select("#chart");

    stack.select("#group")
        .attr("class", "first");

    stack.select("#stack")
        .attr("class", "last active");

    stack.selectAll("g.layer rect")
        .transition()
        .duration(500)
        .delay(function (d, i) { return (i % m) * 10; })
        .attr("y", y1)
        .attr("height", function (d) { return y0(d) - y1(d); })
        .each("end", transitionEnd);

    function transitionEnd() {
        d3.select(this)
            .transition()
            .duration(500)
            .attr("x", 0)
            .attr("width", x({ x: .9 }));
    }
}

