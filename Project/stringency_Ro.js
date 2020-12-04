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
            marker: {
                size: 5,
                opacity: 0.5
            },
            name: 'Stringency Index',
            line: {
                shape: 'spline'
            }
        };

        var trace2 = {
            x: currentDate,
            y: currentRo,
            mode: 'lines+markers',
            marker: {
                size: 5,
                opacity: 0.5
            },
            name: 'Reproduction Rate',
            yaxis: 'y2',
        };

        var data = [trace1, trace2];

        var layout = {
            autosize: false,
            width: 1200,
            height: 550,
            title: 'Government Stringency Index & Reproduction Rate of Covid according to Country<br>' + chosenCountry + ' Stringency Index' + ' and Reproduction Rate',
            yaxis: { title: 'Stringency Index' },
            yaxis2: {
                title: 'Reproduction Rate',
                titlefont: { color: 'rgb(148, 103, 189)' },
                tickfont: { color: 'rgb(148, 103, 189)' },
                overlaying: 'y',
                side: 'right',
            },
            plot_bgcolor: '#c7c7c7'
        };

        Plotly.newPlot('plotdiv', data, layout);
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