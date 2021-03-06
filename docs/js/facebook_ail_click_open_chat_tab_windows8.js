var facebook_ail_click_open_chat_tab_windows8 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'facebook_ail_click_open_chat_tab_windows8'
    },
    // subtitle: {
    //     text: 'Irregular time data in Highcharts JS'
    // },
    xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: { // don't display the dummy year
            month: '%e. %b',
            year: '%b'
        },
        title: {
            text: 'Date'
        }
    },
    yAxis: {
        title: {
            text: 'Asynchronize Input latency (ms)'
        },
        min: 0
    },
    tooltip: {
        headerFormat: '<b>{series.name}</b><br>',
        pointFormat: '{point.x:%e. %b}: {point.y:.2f} ms'
    },

    plotOptions: {
        spline: {
            marker: {
                enabled: true
            }
        }
    },

    // Define the data points. All series have a dummy year
    // of 1970/7/1 in order to be compared on the same x axis. Note
    // that in JavaScript, months start at 0 for January, 1 for February etc.
    series: [{
		name: 'firefox',
		data: [
			[Date.UTC(2017, 6, 15), 233.330000],
			[Date.UTC(2017, 6, 15), 233.330000],
			[Date.UTC(2017, 6, 15), 233.330000],
			[Date.UTC(2017, 6, 15), 355.560000],
			[Date.UTC(2017, 6, 16), 211.110000],
			[Date.UTC(2017, 6, 16), 233.330000],
			[Date.UTC(2017, 6, 16), 233.330000],
			[Date.UTC(2017, 6, 16), 266.670000],
			[Date.UTC(2017, 6, 16), 266.670000],
			[Date.UTC(2017, 6, 16), 288.890000],
			[Date.UTC(2017, 6, 17), 188.890000],
			[Date.UTC(2017, 6, 17), 233.330000],
			[Date.UTC(2017, 6, 17), 244.440000],
			[Date.UTC(2017, 6, 17), 288.890000],
			[Date.UTC(2017, 6, 18), 188.890000],
			[Date.UTC(2017, 6, 18), 200.000000],
			[Date.UTC(2017, 6, 18), 200.000000],
			[Date.UTC(2017, 6, 19), 233.330000],
			[Date.UTC(2017, 6, 19), 277.780000],
			[Date.UTC(2017, 6, 19), 288.890000],
			[Date.UTC(2017, 6, 19), 288.890000],
			[Date.UTC(2017, 6, 19), 311.110000],
			[Date.UTC(2017, 6, 19), 311.110000],
			[Date.UTC(2017, 6, 19), 222.220000],
			[Date.UTC(2017, 6, 19), 233.330000],
			[Date.UTC(2017, 6, 19), 255.560000],
			[Date.UTC(2017, 6, 19), 277.780000],
			[Date.UTC(2017, 6, 20), 200.000000],
			[Date.UTC(2017, 6, 20), 200.000000],
			[Date.UTC(2017, 6, 20), 222.220000],
			[Date.UTC(2017, 6, 20), 222.220000],
			[Date.UTC(2017, 6, 20), 233.330000],
			[Date.UTC(2017, 6, 20), 266.670000],
			[Date.UTC(2017, 6, 21), 211.110000],
			[Date.UTC(2017, 6, 21), 211.110000],
			[Date.UTC(2017, 6, 21), 288.890000],
			[Date.UTC(2017, 6, 21), 44.440000],
			[Date.UTC(2017, 6, 21), 66.670000],
			[Date.UTC(2017, 6, 22), 211.110000],
			[Date.UTC(2017, 6, 22), 222.220000],
			[Date.UTC(2017, 6, 22), 255.560000],
			[Date.UTC(2017, 6, 22), 44.440000],
			[Date.UTC(2017, 6, 22), 44.440000],
			[Date.UTC(2017, 6, 22), 233.330000],
			[Date.UTC(2017, 6, 22), 233.330000],
			[Date.UTC(2017, 6, 22), 244.440000],
			[Date.UTC(2017, 6, 22), 277.780000],
			[Date.UTC(2017, 6, 23), 266.670000],
			[Date.UTC(2017, 6, 23), 266.670000],
			[Date.UTC(2017, 6, 23), 266.670000],
			[Date.UTC(2017, 6, 23), 266.670000],
			[Date.UTC(2017, 6, 23), 322.220000],
			[Date.UTC(2017, 6, 23), 44.440000],
			[Date.UTC(2017, 6, 23), 44.440000],
			[Date.UTC(2017, 6, 23), 44.440000],
			[Date.UTC(2017, 6, 23), 66.670000],
			[Date.UTC(2017, 6, 24), 188.890000],
			[Date.UTC(2017, 6, 24), 188.890000],
			[Date.UTC(2017, 6, 24), 255.560000],
			[Date.UTC(2017, 6, 24), 266.670000],
			[Date.UTC(2017, 6, 24), 266.670000],
			[Date.UTC(2017, 6, 24), 277.780000],
			[Date.UTC(2017, 6, 24), 288.890000],
			[Date.UTC(2017, 6, 24), 288.890000],
			[Date.UTC(2017, 6, 24), 300.000000],
			[Date.UTC(2017, 6, 24), 55.560000],
			[Date.UTC(2017, 6, 25), 233.330000],
			[Date.UTC(2017, 6, 25), 277.780000],
			[Date.UTC(2017, 6, 25), 300.000000],
			[Date.UTC(2017, 6, 26), 288.890000],
			[Date.UTC(2017, 6, 26), 388.890000],
			[Date.UTC(2017, 6, 26), 211.110000],
			[Date.UTC(2017, 6, 26), 255.560000],
			[Date.UTC(2017, 6, 26), 322.220000],
			[Date.UTC(2017, 6, 26), 333.330000],
			[Date.UTC(2017, 6, 26), 333.330000],
			[Date.UTC(2017, 6, 26), 400.000000],
			[Date.UTC(2017, 6, 28), 277.780000],
			[Date.UTC(2017, 6, 28), 300.000000],
			[Date.UTC(2017, 6, 28), 344.440000],
			[Date.UTC(2017, 6, 28), 366.670000],
			[Date.UTC(2017, 6, 28), 366.670000],
			[Date.UTC(2017, 6, 28), 200.000000],
			[Date.UTC(2017, 6, 28), 255.560000],
			[Date.UTC(2017, 6, 28), 322.220000],
			[Date.UTC(2017, 6, 28), 377.780000],
			[Date.UTC(2017, 6, 28), 388.890000],
			[Date.UTC(2017, 6, 28), 77.780000],
			[Date.UTC(2017, 6, 29), 44.440000],
			[Date.UTC(2017, 6, 29), 44.440000],
			[Date.UTC(2017, 6, 29), 44.440000],
			[Date.UTC(2017, 6, 29), 44.440000],
			[Date.UTC(2017, 6, 30), 44.440000],
			[Date.UTC(2017, 6, 30), 44.440000],
			[Date.UTC(2017, 6, 30), 55.560000],
			[Date.UTC(2017, 6, 30), 55.560000],
			[Date.UTC(2017, 7, 1), 233.330000],
			[Date.UTC(2017, 7, 1), 366.670000],
			[Date.UTC(2017, 7, 1), 44.440000],
			[Date.UTC(2017, 7, 1), 44.440000],
			[Date.UTC(2017, 7, 1), 44.440000],
			[Date.UTC(2017, 7, 1), 466.670000],
			[Date.UTC(2017, 7, 1), 55.560000],
			[Date.UTC(2017, 7, 1), 200.000000],
			[Date.UTC(2017, 7, 1), 211.110000],
			[Date.UTC(2017, 7, 1), 233.330000],
			[Date.UTC(2017, 7, 1), 233.330000],
			[Date.UTC(2017, 7, 1), 244.440000],
			[Date.UTC(2017, 7, 1), 255.560000],
			[Date.UTC(2017, 7, 1), 277.780000],
			[Date.UTC(2017, 7, 1), 355.560000],
			[Date.UTC(2017, 7, 1), 366.670000],
			[Date.UTC(2017, 7, 1), 400.000000],
			[Date.UTC(2017, 7, 2), 200.000000],
			[Date.UTC(2017, 7, 2), 255.560000],
			[Date.UTC(2017, 7, 2), 255.560000],
			[Date.UTC(2017, 7, 2), 266.670000],
			[Date.UTC(2017, 7, 2), 300.000000],
			[Date.UTC(2017, 7, 2), 311.110000],
			[Date.UTC(2017, 7, 2), 344.440000],
			[Date.UTC(2017, 7, 2), 377.780000],
			[Date.UTC(2017, 7, 2), 388.890000],
			[Date.UTC(2017, 7, 3), 344.440000],
			[Date.UTC(2017, 7, 3), 44.440000],
			[Date.UTC(2017, 7, 3), 233.330000],
			[Date.UTC(2017, 7, 3), 233.330000],
			[Date.UTC(2017, 7, 3), 277.780000],
			[Date.UTC(2017, 7, 3), 44.440000],
			[Date.UTC(2017, 7, 4), 222.220000],
			[Date.UTC(2017, 7, 4), 222.220000],
			[Date.UTC(2017, 7, 4), 266.670000],
			[Date.UTC(2017, 7, 4), 44.440000],
			[Date.UTC(2017, 7, 5), 244.440000],
			[Date.UTC(2017, 7, 5), 266.670000],
			[Date.UTC(2017, 7, 5), 44.440000],
			[Date.UTC(2017, 7, 6), 311.110000],
			[Date.UTC(2017, 7, 6), 322.220000],
			[Date.UTC(2017, 7, 6), 322.220000],
			[Date.UTC(2017, 7, 6), 333.330000],
			[Date.UTC(2017, 7, 6), 366.670000],
			[Date.UTC(2017, 7, 6), 377.780000],
			[Date.UTC(2017, 7, 6), 44.440000],
			[Date.UTC(2017, 7, 6), 55.560000],
			[Date.UTC(2017, 7, 7), 277.780000],
			[Date.UTC(2017, 7, 7), 288.890000],
			[Date.UTC(2017, 7, 7), 44.440000],
			[Date.UTC(2017, 7, 7), 44.440000],
			[Date.UTC(2017, 7, 7), 44.440000],
			[Date.UTC(2017, 7, 7), 44.440000],
			[Date.UTC(2017, 7, 7), 44.440000],
			[Date.UTC(2017, 7, 7), 44.440000],
			[Date.UTC(2017, 7, 7), 44.440000],
			[Date.UTC(2017, 7, 7), 55.560000],
			[Date.UTC(2017, 7, 8), 44.440000],
			[Date.UTC(2017, 7, 8), 44.440000],
			[Date.UTC(2017, 7, 8), 55.560000],
			[Date.UTC(2017, 7, 8), 55.560000],
			[Date.UTC(2017, 7, 9), 44.440000],
			[Date.UTC(2017, 7, 9), 44.440000],
			[Date.UTC(2017, 7, 9), 55.560000],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 6, 15), 100.000000],
			[Date.UTC(2017, 6, 15), 55.560000],
			[Date.UTC(2017, 6, 15), 66.670000],
			[Date.UTC(2017, 6, 16), 100.000000],
			[Date.UTC(2017, 6, 16), 100.000000],
			[Date.UTC(2017, 6, 16), 122.220000],
			[Date.UTC(2017, 6, 16), 77.780000],
			[Date.UTC(2017, 6, 16), 77.780000],
			[Date.UTC(2017, 6, 16), 77.780000],
			[Date.UTC(2017, 6, 17), 100.000000],
			[Date.UTC(2017, 6, 17), 66.670000],
			[Date.UTC(2017, 6, 17), 66.670000],
			[Date.UTC(2017, 6, 17), 88.890000],
			[Date.UTC(2017, 6, 18), 55.560000],
			[Date.UTC(2017, 6, 18), 55.560000],
			[Date.UTC(2017, 6, 18), 66.670000],
			[Date.UTC(2017, 6, 19), 100.000000],
			[Date.UTC(2017, 6, 19), 111.110000],
			[Date.UTC(2017, 6, 19), 66.670000],
			[Date.UTC(2017, 6, 19), 66.670000],
			[Date.UTC(2017, 6, 19), 66.670000],
			[Date.UTC(2017, 6, 19), 77.780000],
			[Date.UTC(2017, 6, 19), 22.220000],
			[Date.UTC(2017, 6, 19), 266.670000],
			[Date.UTC(2017, 6, 19), 44.440000],
			[Date.UTC(2017, 6, 19), 55.560000],
			[Date.UTC(2017, 6, 19), 66.670000],
			[Date.UTC(2017, 6, 19), 88.890000],
			[Date.UTC(2017, 6, 20), 66.670000],
			[Date.UTC(2017, 6, 20), 66.670000],
			[Date.UTC(2017, 6, 21), 122.220000],
			[Date.UTC(2017, 6, 21), 211.110000],
			[Date.UTC(2017, 6, 21), 211.110000],
			[Date.UTC(2017, 6, 21), 33.330000],
			[Date.UTC(2017, 6, 21), 33.330000],
			[Date.UTC(2017, 6, 21), 44.440000],
			[Date.UTC(2017, 6, 22), 122.220000],
			[Date.UTC(2017, 6, 22), 244.440000],
			[Date.UTC(2017, 6, 22), 266.670000],
			[Date.UTC(2017, 6, 22), 33.330000],
			[Date.UTC(2017, 6, 22), 55.560000],
			[Date.UTC(2017, 6, 22), 277.780000],
			[Date.UTC(2017, 6, 22), 55.560000],
			[Date.UTC(2017, 6, 22), 55.560000],
			[Date.UTC(2017, 6, 22), 66.670000],
			[Date.UTC(2017, 6, 23), 111.110000],
			[Date.UTC(2017, 6, 23), 111.110000],
			[Date.UTC(2017, 6, 23), 144.440000],
			[Date.UTC(2017, 6, 23), 44.440000],
			[Date.UTC(2017, 6, 23), 55.560000],
			[Date.UTC(2017, 6, 23), 77.780000],
			[Date.UTC(2017, 6, 24), 100.000000],
			[Date.UTC(2017, 6, 24), 255.560000],
			[Date.UTC(2017, 6, 24), 277.780000],
			[Date.UTC(2017, 6, 24), 33.330000],
			[Date.UTC(2017, 6, 24), 33.330000],
			[Date.UTC(2017, 6, 24), 433.330000],
			[Date.UTC(2017, 6, 24), 55.560000],
			[Date.UTC(2017, 6, 24), 55.560000],
			[Date.UTC(2017, 6, 24), 66.670000],
			[Date.UTC(2017, 6, 24), 77.780000],
			[Date.UTC(2017, 6, 25), 122.220000],
			[Date.UTC(2017, 6, 25), 55.560000],
			[Date.UTC(2017, 6, 25), 66.670000],
			[Date.UTC(2017, 6, 26), 111.110000],
			[Date.UTC(2017, 6, 26), 55.560000],
			[Date.UTC(2017, 6, 26), 66.670000],
			[Date.UTC(2017, 6, 26), 100.000000],
			[Date.UTC(2017, 6, 26), 55.560000],
			[Date.UTC(2017, 6, 26), 55.560000],
			[Date.UTC(2017, 6, 26), 66.670000],
			[Date.UTC(2017, 6, 26), 66.670000],
			[Date.UTC(2017, 6, 28), 111.110000],
			[Date.UTC(2017, 6, 28), 55.560000],
			[Date.UTC(2017, 6, 28), 55.560000],
			[Date.UTC(2017, 6, 28), 66.670000],
			[Date.UTC(2017, 6, 28), 111.110000],
			[Date.UTC(2017, 6, 28), 77.780000],
			[Date.UTC(2017, 6, 29), 22.220000],
			[Date.UTC(2017, 6, 29), 33.330000],
			[Date.UTC(2017, 6, 29), 44.440000],
			[Date.UTC(2017, 6, 29), 55.560000],
			[Date.UTC(2017, 6, 30), 22.220000],
			[Date.UTC(2017, 6, 30), 44.440000],
			[Date.UTC(2017, 7, 1), 100.000000],
			[Date.UTC(2017, 7, 1), 33.330000],
			[Date.UTC(2017, 7, 1), 44.440000],
			[Date.UTC(2017, 7, 1), 44.440000],
			[Date.UTC(2017, 7, 1), 55.560000],
			[Date.UTC(2017, 7, 1), 77.780000],
			[Date.UTC(2017, 7, 1), 122.220000],
			[Date.UTC(2017, 7, 1), 122.220000],
			[Date.UTC(2017, 7, 1), 66.670000],
			[Date.UTC(2017, 7, 1), 66.670000],
			[Date.UTC(2017, 7, 1), 77.780000],
			[Date.UTC(2017, 7, 1), 77.780000],
			[Date.UTC(2017, 7, 1), 77.780000],
			[Date.UTC(2017, 7, 1), 88.890000],
			[Date.UTC(2017, 7, 2), 111.110000],
			[Date.UTC(2017, 7, 2), 111.110000],
			[Date.UTC(2017, 7, 2), 44.440000],
			[Date.UTC(2017, 7, 2), 44.440000],
			[Date.UTC(2017, 7, 2), 55.560000],
			[Date.UTC(2017, 7, 2), 66.670000],
			[Date.UTC(2017, 7, 2), 66.670000],
			[Date.UTC(2017, 7, 3), 55.560000],
			[Date.UTC(2017, 7, 3), 66.670000],
			[Date.UTC(2017, 7, 3), 111.110000],
			[Date.UTC(2017, 7, 3), 244.440000],
			[Date.UTC(2017, 7, 3), 277.780000],
			[Date.UTC(2017, 7, 3), 55.560000],
			[Date.UTC(2017, 7, 3), 66.670000],
			[Date.UTC(2017, 7, 3), 66.670000],
			[Date.UTC(2017, 7, 3), 77.780000],
			[Date.UTC(2017, 7, 4), 111.110000],
			[Date.UTC(2017, 7, 4), 55.560000],
			[Date.UTC(2017, 7, 4), 66.670000],
			[Date.UTC(2017, 7, 4), 88.890000],
			[Date.UTC(2017, 7, 5), 55.560000],
			[Date.UTC(2017, 7, 5), 66.670000],
			[Date.UTC(2017, 7, 5), 111.110000],
			[Date.UTC(2017, 7, 5), 44.440000],
			[Date.UTC(2017, 7, 5), 44.440000],
			[Date.UTC(2017, 7, 5), 55.560000],
			[Date.UTC(2017, 7, 5), 55.560000],
			[Date.UTC(2017, 7, 5), 66.670000],
			[Date.UTC(2017, 7, 5), 66.670000],
			[Date.UTC(2017, 7, 5), 77.780000],
			[Date.UTC(2017, 7, 6), 100.000000],
			[Date.UTC(2017, 7, 6), 111.110000],
			[Date.UTC(2017, 7, 6), 122.220000],
			[Date.UTC(2017, 7, 6), 122.220000],
			[Date.UTC(2017, 7, 6), 33.330000],
			[Date.UTC(2017, 7, 6), 44.440000],
			[Date.UTC(2017, 7, 6), 44.440000],
			[Date.UTC(2017, 7, 6), 55.560000],
			[Date.UTC(2017, 7, 6), 77.780000],
			[Date.UTC(2017, 7, 7), 33.330000],
			[Date.UTC(2017, 7, 7), 33.330000],
			[Date.UTC(2017, 7, 7), 44.440000],
			[Date.UTC(2017, 7, 7), 44.440000],
			[Date.UTC(2017, 7, 7), 44.440000],
			[Date.UTC(2017, 7, 7), 55.560000],
			[Date.UTC(2017, 7, 7), 55.560000],
			[Date.UTC(2017, 7, 7), 66.670000],
			[Date.UTC(2017, 7, 8), 44.440000],
			[Date.UTC(2017, 7, 8), 100.000000],
			[Date.UTC(2017, 7, 8), 44.440000],
			[Date.UTC(2017, 7, 8), 44.440000],
			[Date.UTC(2017, 7, 8), 44.440000],
			[Date.UTC(2017, 7, 8), 44.440000],
			[Date.UTC(2017, 7, 8), 44.440000],
			[Date.UTC(2017, 7, 8), 55.560000],
			[Date.UTC(2017, 7, 8), 66.670000],
			[Date.UTC(2017, 7, 8), 77.780000],
			[Date.UTC(2017, 7, 8), 77.780000],
			[Date.UTC(2017, 7, 8), 88.890000],
			[Date.UTC(2017, 7, 8), 88.890000],
			[Date.UTC(2017, 7, 9), 44.440000],
			[Date.UTC(2017, 7, 9), 66.670000],
			[Date.UTC(2017, 7, 9), 66.670000],
			[Date.UTC(2017, 7, 9), 77.780000],
			[Date.UTC(2017, 7, 9), 77.780000],
			[Date.UTC(2017, 7, 9), 77.780000],
			[Date.UTC(2017, 7, 9), 77.780000],
			[Date.UTC(2017, 7, 9), 88.890000],
			[Date.UTC(2017, 7, 9), 88.890000],
			[Date.UTC(2017, 7, 10), 44.440000],
			[Date.UTC(2017, 7, 10), 44.440000],
			[Date.UTC(2017, 7, 10), 55.560000],
			[Date.UTC(2017, 7, 10), 66.670000],
			[Date.UTC(2017, 7, 10), 66.670000],
			[Date.UTC(2017, 7, 10), 77.780000],
		]    }]
}