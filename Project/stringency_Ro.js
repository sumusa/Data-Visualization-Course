Plotly.d3.csv("https://raw.githubusercontent.com/sumusa/Data-Visualization-Course/master/Project/covid-data.csv", function(err, rows) {

    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }
    var allCountryNames = unpack(rows, 'location'),
        allDate = unpack(rows, 'date'),
        allStringency = unpack(rows, 'stringency_index'),
        allCase = unpack(rows, 'total_cases_per_million'),
        listofCountries = [],
        currentCountry,
        currentStringency = [],
        currentCase = [],
        currentDate = [];

    for (var i = 0; i < allCountryNames.length; i++) {
        if (listofCountries.indexOf(allCountryNames[i]) === -1) {
            listofCountries.push(allCountryNames[i]);
        }
    }

    function getCountryData(chosenCountry) {
        currentStringency = [];
        currentCase = [];
        currentDate = [];
        for (var i = 0; i < allCountryNames.length; i++) {
            if (allCountryNames[i] === chosenCountry) {
                currentStringency.push(allStringency[i]);
                currentCase.push(allCase[i]);
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
            y: currentCase,
            mode: 'lines+markers',
            connectgaps: true,
            marker: {
                size: 3,
                opacity: 0.5
            },
            name: 'Confirmed Cases',
            yaxis: 'y2',
        };
        // var trace3 = {
        //     x: currentDate,
        //     y: [0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98],
        //     mode: 'lines+markers',
        //     marker: {
        //         size: 0.5,
        //         opacity: 0
        //     },
        //     name: 'Ro line at 0.98',
        //     yaxis: 'y2'
        // };
        var data = [trace1, trace2];

        var layout = {
            autosize: false,
            width: 1200,
            height: 550,
            title: 'Government Stringency Index & Confirmed cases according to Country<br>' + chosenCountry + ' Stringency Index' + ' and Confirmed cases',
            yaxis: { title: 'Stringency Index' },
            yaxis2: {
                title: 'Confirmed Cases (per Million)',
                titlefont: { color: 'rgb(148, 103, 189)' },
                tickfont: { color: 'rgb(148, 103, 189)' },
                overlaying: 'y',
                side: 'right',
            },
        };
        var config = {
            displayModeBar: true,
            doubleClickDelay: 1000,
            scrollZoom: true,
            responsive: true
        };

        Plotly.newPlot('plotdiv', data, layout, config);
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