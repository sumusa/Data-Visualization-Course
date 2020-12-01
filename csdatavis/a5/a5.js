var width = 960
var height = 700
var svg1 = d3.select("div").append("svg")
    .attr("style", "solid 1px black")
    .attr("width", width)
    .attr("height", height);



 


var projection = d3.geoMercator().center([-70, 70]);
var path = d3.geoPath().projection(projection);

var g = svg1.append("g");

d3.json("canada.json")
    .then(function (jsonData) {
    g.selectAll("path")
    .data(jsonData.features)
    .enter()
    .append("path")
    .attr("d", path)
    .style("fill", "#6181BF");
    });

  
    var margin = {top: 20, right: 20, bottom: 30, left: 80},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// set the ranges
var x = d3.scaleBand()
          .range([0, width])
          .padding(0.1);
var y = d3.scaleLinear()
          .range([height, 0]);
          
// append the svg object to the body of the map
// append a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var svg = d3.select("svg").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");

// get the data
d3.json("provs2.json").then(function(data) {


  // Scale the range of the data in the domains
  x.domain(data.map(function(d) { return d.short; }));
  y.domain([0, d3.max(data, function(d) { return d.population; })]);

  // append the rectangles for the bar chart
  svg.selectAll(".bar")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.short); })
      .attr("width", x.bandwidth())
      .attr("y", function(d) { return y(d.population); })
      .attr("height", function(d) { return height - y(d.population); });

  // add the x Axis
  svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

svg.append("text")             
      .attr("transform",
            "translate(" + (width/2) + " ," + 
                           (height + margin.top + 10) + ")")
      .style("text-anchor", "end")
      .text("State");

  // add the y Axis
  svg.append("g")
      .call(d3.axisLeft(y))
      .attr("text", "Population");

      svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left)
      .attr("x",0 - (height / 2))
      .attr("dy", "1em")
      .style("text-anchor", "end")
      .text("Population"); 

       



let zoom = d3.zoom().scaleExtent([1, 2])
    .on('zoom', () => {
    g.attr('transform', d3.event.transform)
    if(d3.event.transform.k > 1){
    svg.selectAll(".bar").attr('transform', d3.event.transform)
    }
    
    
  });
g.call(zoom)

});






