var China = {
    x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    y: [69.91, 81.02, 81.94, 73.61, 81.94, 81.94, 78.24, 78.24, 81.94, 81.94, 72.69, null],
    z: [9714.0, 79355.0, 82241.0, 83944.0, 84128.0, 84780.0, 87489.0, 89895.0, 90528.0, 91299.0, 91720.0, 27.0],
    mode: 'lines',
    orientation: 'v',
    showlegend: true,
    type: 'scatter',
    name: 'China',
};
var France = {
    x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    y: [8.33, 31.94, 87.96, 87.96, 87.96, 75.0, 51.85, 48.15, 49.54, 78.7, 78.7, null],
    z: [6.0, 57.0, 44550.0, 128442.0, 151496.0, 164260.0, 186573.0, 277943.0, 550690.0, 1331984.0, 2127051.0, null],
    mode: 'lines',
    orientation: 'v',
    showlegend: true,
    type: 'scatter',
    name: 'France',
};
var Italy = {
    x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    y: [19.44, 69.91, 91.67, 93.52, 93.52, 63.89, 58.33, 54.63, 54.63, 66.67, 66.67, null],
    z: [3.0, 888.0, 101739.0, 203591.0, 232664.0, 240436.0, 247158.0, 268218.0, 313011.0, 647674.0, 1380531.0, null],
    mode: 'lines',
    orientation: 'v',
    showlegend: true,
    type: 'scatter',
    name: 'Italy',
};
var South_Korea = {
    x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    y: [2.78, 55.56, 75.93, 82.41, 56.94, 56.94, 56.94, 54.17, 57.41, 59.26, 44.44, null],
    z: [7.0, 2931.0, 9786.0, 10765.0, 11468.0, 12800.0, 14305.0, 19947.0, 23812.0, 26511.0, 30733.0, null],
    mode: 'lines',
    orientation: 'v',
    showlegend: true,
    type: 'scatter',
    name: 'South Korea',
};
var United_Kingdom = {
    x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    y: [8.33, 11.11, 79.63, 79.63, 79.63, 73.15, 71.3, 69.91, 67.59, 75.0, 75.0, null],
    z: [null, 30.0, 29681.0, 167150.0, 254390.0, 283541.0, 302301.0, 334467.0, 446156.0, 989745.0, 1493383.0, null],
    mode: 'lines',
    orientation: 'v',
    showlegend: true,
    type: 'scatter',
    name: 'United Kingdom',
};
var United_States = {
    x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    y: [0.0, 5.56, 72.69, 72.69, 72.69, 72.69, 68.98, 67.13, 67.13, 66.2, 62.5, null],
    z: [6.0, 66.0, 164620.0, 1039909.0, 1770384.0, 2590552.0, 4495014.0, 5997163.0, 7191061.0, 9047427.0, 12089438.0, null],
    mode: 'lines',
    orientation: 'v',
    showlegend: true,
    type: 'scatter',
    name: 'United States',
};

var layout = {
    title: 'Stringency Index of each countries from January till December 2020',
    xaxis: {
        title: {
            text: 'Month'
        }
    },
    yaxis: {
        title: {
            text: 'Stringency Index'
        }
    },
    zaxis: {
        title: {
            text: 'Total Confirmed Cases'
        }
    },
};


var data = [China, France, Italy, South_Korea, United_Kingdom, United_States];

Plotly.newPlot('myDiv', data, layout);

var China2 = {
    x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    y: [9714.0, 79355.0, 82241.0, 83944.0, 84128.0, 84780.0, 87489.0, 89895.0, 90528.0, 91299.0, 91720.0, 27.0],
    mode: 'lines',
    orientation: 'v',
    showlegend: true,
    type: 'scatter',
    name: 'China',
};
var France2 = {
    x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    y: [6.0, 57.0, 44550.0, 128442.0, 151496.0, 164260.0, 186573.0, 277943.0, 550690.0, 1331984.0, 2127051.0, null],
    mode: 'lines',
    orientation: 'v',
    showlegend: true,
    type: 'scatter',
    name: 'France',
};
var Italy2 = {
    x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    y: [3.0, 888.0, 101739.0, 203591.0, 232664.0, 240436.0, 247158.0, 268218.0, 313011.0, 647674.0, 1380531.0, null],
    mode: 'lines',
    orientation: 'v',
    showlegend: true,
    type: 'scatter',
    name: 'Italy',
};
var South_Korea2 = {
    x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    y: [7.0, 2931.0, 9786.0, 10765.0, 11468.0, 12800.0, 14305.0, 19947.0, 23812.0, 26511.0, 30733.0, null],
    mode: 'lines',
    orientation: 'v',
    showlegend: true,
    type: 'scatter',
    name: 'South Korea',
};
var United_Kingdom2 = {
    x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    y: [null, 30.0, 29681.0, 167150.0, 254390.0, 283541.0, 302301.0, 334467.0, 446156.0, 989745.0, 1493383.0, null],
    mode: 'lines',
    orientation: 'v',
    showlegend: true,
    type: 'scatter',
    name: 'United Kingdom',
};
var United_States2 = {
    x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    y: [6.0, 66.0, 164620.0, 1039909.0, 1770384.0, 2590552.0, 4495014.0, 5997163.0, 7191061.0, 9047427.0, 12089438.0, null],
    mode: 'lines+scatter',
    orientation: 'v',
    showlegend: true,
    type: 'scatter',
    name: 'United States',
};

var layout = {
    title: 'Total Confirmed Cases of each countries from January till December 2020',
    xaxis: {
        title: {
            text: 'Month'
        }
    },
    yaxis: {
        title: {
            text: 'Total Confirmed Cases'
        }
    },
};


var data = [China2, France2, Italy2, South_Korea2, United_Kingdom2, United_States2];

Plotly.newPlot('myDiv2', data, layout);

Plotly.d3.csv('https://raw.githubusercontent.com/sumusa/Data-Visualization-Course/master/Project/covid-data.csv', function(err, rows) {

    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }

    var allCountryNames = unpack(rows, 'location'),
        allDate = unpack(rows, 'date'),
        allCases = unpack(rows, 'total_cases_per_million'),
        listofCountries = [],
        currentCountry,
        currentCase = [],
        currentDate = [];

    for (var i = 0; i < allCountryNames.length; i++) {
        if (listofCountries.indexOf(allCountryNames[i]) === -1) {
            listofCountries.push(allCountryNames[i]);
        }
    }

    function getCountryData(chosenCountry) {
        currentCase = [];
        currentDate = [];
        for (var i = 0; i < allCountryNames.length; i++) {
            if (allCountryNames[i] === chosenCountry) {
                currentCase.push(allCases[i]);
                currentDate.push(allDate[i]);
            }
        }
    };

    // Default Country Data
    setBubblePlot('United States');

    function setBubblePlot(chosenCountry) {
        getCountryData(chosenCountry);

        var trace1 = {
            x: currentDate,
            y: currentCase,
            mode: 'lines+markers',
            marker: {
                size: 5,
                opacity: 0.5,
            },
        }

        var data = [trace1];

        var layout = {
            title: 'Total Confirmed Cases of each countries from January till December 2020',
            xaxis: {
                title: {
                    text: 'Date'
                }
            },
            yaxis: {
                title: {
                    text: 'Total Confirmed Cases per million'
                }
            }
        }

        Plotly.newPlot('myDiv3', data, layout);

    };
    var innerContainer = document.querySelector('[data-num="0"'),
        plotEl = innerContainer.querySelector('.plot'),
        countrySelector = innerContainer.querySelector('.countrydata');


    function assignOptions(textArray, selector) {
        for (var i = 0; i < textArray.length; i++) {
            var currentOption = document.createElement('option');
            currentOption.text = textArray[i];
            selector.appendChild(currentOption);
        }
    }

    assignOptions(listofCountries, countrySelector);

    function updateCountry() {
        setBubblePlot(countrySelector.value);
    }

    countrySelector.addEventListener('change', updateCountry, false);
});