var svgWidth = 600; 
var svgHeight = 300
var barPadding = 5;
var barChat;


var svg = d3.select('svg')
    .attr("width", svgWidth)
    .attr("height", svgHeight)
    .attr("class", "bar-chart");

function updateit(jsonString) {
    var dataValues = JSON.parse(jsonString);
    console.log(dataValues)
    var maximum = Math.max(...dataValues)
    var svg = d3.select('svg')
    .attr("width", svgWidth)
    .attr("height", maximum)
    .attr("class", "bar-chart");
        var barWidth = (svgWidth / dataValues.length);
         barChat = svg.selectAll("rect")
        .data(dataValues)
        .enter()
        .append("rect")
        .merge(barChat)
        .attr("y", function(d) {
             return maximum - d 
        })    
        .attr("height", function(d) { 
            return d
        })
        .attr("width", barWidth - barPadding)
        .attr("transform", function (d, i) {
            var translate = [barWidth * i, 0]; 
            return "translate("+ translate +")";
        });
        }

function drawit(jsonString) {
    var dataValues = JSON.parse(jsonString);
    console.log(dataValues)
    var barWidth = (svgWidth / dataValues.length);
     barChat = svg.selectAll("rect")
    .data(dataValues)
    .enter()
    .append("rect")
    .attr("y", function(d) {
         return svgHeight - d 
    })    
    .attr("height", function(d) { 
        return d; 
    })
    .attr("width", barWidth - barPadding)
    .attr("transform", function (d, i) {
        var translate = [barWidth * i, 0]; 
        return "translate("+ translate +")";
    });
    }


