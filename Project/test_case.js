// set the dimensions and margins of the graph
var margin = { top: 30, right: 30, bottom: 70, left: 60 },
    width = 800 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#my_dataviz")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

// Initialize the X axis
var x = d3.scaleBand()
    .range([0, width])
    .padding(0.2);
var xAxis = svg.append("g")
    .attr("transform", "translate(0," + height + ")")

// Initialize the Y axis
var y = d3.scaleLinear()
    .range([height, 0]);
var yAxis = svg.append("g")
    .attr("class", "myYaxis")


// A function that create / update the plot for a given variable:
function update(total_cases_per_million) {

    // Parse the Data
    d3.csv("https://raw.githubusercontent.com/sumusa/Data-Visualization-Course/master/Project/covid-data.csv", function(data) {

        // sort data
        data.sort(function(b, a) {
            return a.total_cases_per_million - b.total_cases_per_million;
        });

        // X axis
        x.domain(data.map(function(d) { return d.location; }))
        xAxis.transition().duration(1000).call(d3.axisBottom(x))

        // Add Y axis
        y.domain([0, d3.max(data, function(d) { return +d[total_cases_per_million] })]);
        yAxis.transition().duration(1000).call(d3.axisLeft(y));

        // variable u: map data to existing bars
        var u = svg.selectAll("rect")
            .data(data)

        // update bars
        u
            .enter()
            .append("rect")
            .merge(u)
            .transition()
            .duration(1000)
            .attr("x", function(d) { return x(d.location); })
            .attr("y", function(d) { return y(d[total_cases_per_million]); })
            .attr("width", x.bandwidth())
            .attr("height", function(d) { return height - y(d[total_cases_per_million]); })
            .attr("fill", "#69b3a2")

    })

}

// Initialize plot
update('total_cases_per_million')