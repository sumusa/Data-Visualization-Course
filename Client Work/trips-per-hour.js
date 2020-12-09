Plotly.d3.csv("https://raw.githubusercontent.com/sumusa/Data-Visualization-Course/master/Project/covid-data.csv", function(err, rows) {
            function unpack(rows, key) {
                return rows.map(function(row) { return row[key]; });
            }