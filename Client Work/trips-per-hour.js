Plotly.d3.csv("https://raw.githubusercontent.com/sumusa/Data-Visualization-Course/master/Client%20Work/trips_per_hour.csv", function(err, rows) {
    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }
    var Route1 = {
        x: unpack(rows, 'time_window'),
        y: [1, 3, 3, 2, 2, 1, 2, 2, 3, 4, 4, 2, 2, 1, 1, 1, 1, 1],
        mode: 'lines',
        type: 'bar',
        orientation: 'v',
        showlegend: true,
        name: 'Route 1'
    };
    var Route2 = {
        x: unpack(rows, 'time_window'),
        y: [1, 2, 4, 2, 2, 2, 2, 2, 2, 3, 3, 2, 2, 1, 1, 1, 1, 1],
        mode: 'lines',
        type: 'bar',
        orientation: 'v',
        showlegend: true,
        name: 'Route 2'
    };
    var Route3 = {
        x: unpack(rows, 'time_window'),
        y: [1, 2, 3, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 1, 1, 2, 1],
        mode: 'lines',
        type: 'bar',
        orientation: 'v',
        showlegend: true,
        name: 'Route 3'
    };
    var Route5 = {
        x: ['19:00', '20:00', '21:00', '22:00'],
        y: [1, 1, 1, 1],
        mode: 'lines',
        type: 'bar',
        orientation: 'v',
        showlegend: true,
        name: 'Route 5'
    };
    var Route6 = {
        x: ['6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'],
        y: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        mode: 'lines',
        type: 'bar',
        orientation: 'v',
        showlegend: true,
        name: 'Route 6'
    };
    var Route9 = {
        x: ['7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
        y: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        mode: 'lines',
        type: 'bar',
        orientation: 'v',
        showlegend: true,
        name: 'Route 9'
    };
    var Route10 = {
        x: unpack(rows, 'time_window'),
        y: [3, 2, 2, 2, 2, 2, 2, 2, 2, 3, 4, 3, 2, 1, 2, 1, 1, 1],
        mode: 'lines',
        type: 'bar',
        orientation: 'v',
        showlegend: true,
        name: 'Route 10'
    };
    var Route11 = {
        x: ['7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
        y: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        mode: 'lines',
        type: 'bar',
        orientation: 'v',
        showlegend: true,
        name: 'Route 11'
    };
    var Route12 = {
        x: ['7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
        y: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 1, 1, 1, 1],
        mode: 'lines',
        type: 'bar',
        orientation: 'v',
        showlegend: true,
        name: 'Route 12'
    };

    var Route14 = {
        x: ['7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'],
        y: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        mode: 'lines',
        type: 'bar',
        orientation: 'v',
        showlegend: true,
        name: 'Route 14'
    };
    var Route15 = {
        x: ['6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'],
        y: [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1],
        mode: 'lines',
        type: 'bar',
        orientation: 'v',
        showlegend: true,
        name: 'Route 15'
    };
    var Route16 = {
        x: ['7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'],
        y: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        mode: 'lines',
        type: 'bar',
        orientation: 'v',
        showlegend: true,
        name: 'Route 16'
    };
    var Route18 = {
        x: unpack(rows, 'time_window'),
        y: [1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 1, 1, 1, 1, 1],
        mode: 'lines',
        type: 'bar',
        orientation: 'v',
        showlegend: true,
        name: 'Route 18'
    };
    var Route19 = {
        x: ['7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
        y: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 1, 1, 1, 1],
        mode: 'lines',
        type: 'bar',
        orientation: 'v',
        showlegend: true,
        name: 'Route 19'
    };
    var Route20 = {
        x: ['7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '18:00', '19:00', '20:00', '21:00'],
        y: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2],
        mode: 'lines',
        type: 'bar',
        orientation: 'v',
        showlegend: true,
        name: 'Route 20'
    };
    var Route21 = {
        x: ['6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '18:00', '19:00', '20:00', '21:00', '22:00'],
        y: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1],
        mode: 'lines',
        type: 'bar',
        orientation: 'v',
        showlegend: true,
        name: 'Route 21'
    };
    var Route22 = {
        x: ['6:00', '7:00', '8:00', '15:00', '16:00', '17:00'],
        y: [1, 1, 1, 1, 1, 1],
        mode: 'lines',
        type: 'bar',
        orientation: 'v',
        showlegend: true,
        name: 'Route 22'
    };
    var Route23 = {
        x: ['18:00', '19:00', '20:00', '21:00', '22:00'],
        y: [1, 1, 1, 1, 1],
        mode: 'lines',
        type: 'bar',
        orientation: 'v',
        showlegend: true,
        name: 'Route 23'
    };
    var Route30 = {
        x: ['15:00', '16:00', 'NA:00'],
        y: [1, 1, 2],
        mode: 'lines',
        type: 'bar',
        orientation: 'v',
        showlegend: true,
        name: 'Route 30'
    };

    var layout = {
        title: 'Trip frequency of each route by hour',
        xaxis: {
            title: {
                text: 'Time Window (hr)'
            }
        },
        yaxis: {
            title: {
                text: 'Number of Trips'
            }
        },
    };

    var data = [Route1, Route2, Route3, Route5, Route6, Route9, Route10, Route11, Route12, Route14, Route16, Route18, Route19, Route20, Route21, Route22, Route23, Route30];

    var config = {
        displayModeBar: true,
        doubleClickDelay: 1000,
        scrollZoom: true,
        responsive: true
    };
    Plotly.newPlot('myDiv', data, layout, config)
})