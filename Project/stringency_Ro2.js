Plotly.d3.csv("https://raw.githubusercontent.com/sumusa/Data-Visualization-Course/master/Project/covid-data.csv", function(err, rows) {

    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }
    var allCountryNames = unpack(rows, 'location'),
        allDate = unpack(rows, 'date'),
        allStringency = unpack(rows, 'stringency_index'),
        allRo = unpack(rows, 'reproduction_rate'),
        listofCountries = [],
        currentCountry,
        currentStringency = [],
        currentRo = [],
        currentDate = [];

    for (var i = 0; i < allCountryNames.length; i++) {
        if (listofCountries.indexOf(allCountryNames[i]) === -1) {
            listofCountries.push(allCountryNames[i]);
        }
    }

    function getCountryData(chosenCountry) {
        currentStringency = [];
        currentRo = [];
        currentDate = [];
        for (var i = 0; i < allCountryNames.length; i++) {
            if (allCountryNames[i] === chosenCountry) {
                currentStringency.push(allStringency[i]);
                currentRo.push(allRo[i]);
                currentDate.push(allDate[i]);
            }
        }
    };

    // Default Country Data
    setBubblePlot('Belgium');

    function setBubblePlot(chosenCountry) {
        getCountryData(chosenCountry);

        var trace1 = {
            x: currentDate,
            y: currentStringency,
            mode: 'lines+markers',
            connectgaps: true,
            marker: {
                size: 3,
                opacity: 0.5
            },
            name: 'Stringency Index',
        };

        var trace2 = {
            x: currentDate,
            y: currentRo,
            mode: 'lines+markers',
            connectgaps: true,
            marker: {
                size: 3,
                opacity: 0.5
            },
            name: 'Reproduction Rate',
            yaxis: 'y2',
        };
        var trace3 = {
            x: currentDate,
            y: [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0],
            mode: 'lines+markers',
            marker: {
                size: 0.5,
                opacity: 0
            },
            name: 'R Number at 1',
            yaxis: 'y2'
        };
        var data = [trace1, trace2, trace3];

        var layout = {
            autosize: false,
            title: 'Government Stringency Index & Reproduction rates by Country<br>' + chosenCountry + ' Stringency Index' + ' and Reproduction rates',
            yaxis: { title: 'Stringency Index' },
            yaxis2: {
                title: 'Reproduction Rate',
                titlefont: { color: 'rgb(148, 103, 189)' },
                tickfont: { color: 'rgb(148, 103, 189)' },
                overlaying: 'y',
                side: 'right',
            },
        };
        var config = {
            doubleClickDelay: 1000,
            scrollZoom: true,
            responsive: true
        };

        Plotly.newPlot('plotdiv2', data, layout, config);
    };

    var innerContainer = document.querySelector('[data-num="1"'),
        plotEl = innerContainer.querySelector('.plot'),
        countrySelector = innerContainer.querySelector('.countrydata2');

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