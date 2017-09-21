const express = require('express');
const getCSV = require('get-csv');
app = express();


function downloadCSV(req,res, next) {

        getCSV('http://www.rba.gov.au/statistics/tables/csv/'+ req.params.table +'.csv',
            {delimiter: ',', ignoreEmpty: true, headers: false })
            .then(function(rows) {
                //beautifying JSON
                //const parsedData = JSON.stringify(rows, null, 4);
                const reducedData = rows.splice(0,9);
                //console.log(reducedData);
                res.json(rows);
            });

    next();
}

app.get('/', function (req, res) {
    res.json({
        "Liabilities and Assets – Summary – A1": "http://localhost:3000/statistical/a1-data-summary",
        "Liabilities and Assets – Detailed – A1": "http://localhost:3000/statistical/a1-data-detailed",
        "Monetary Policy Changes – A2": "http://localhost:3000/statistical/a2-data",
        "A3 – ES Balances and Repo Agreements": "http://localhost:3000/statistical/a3-es-balances-and-repo-agreements",
        "A3 – Daily Open Market Operations": "http://localhost:3000/statistical/a3-daily-open-market-operations",
        "A3 – Long-dated Open Market Operations": "http://localhost:3000/statistical/a3-long-dated-open-mkt-operations",
        "A3 – Open Market Operations Outright Transaction Details": "http://localhost:3000/statistical/a3-omo-outright-transaction-detail",
        "A3 – Open Market Operations Repo Transaction Details": "http://localhost:3000/statistical/a3-omo-repo-transaction-details",
        "A3 – Open Market Operations Repo Unwinds": "http://localhost:3000/statistical/a3-omo-repo-unwinds",
        "Data": "http://localhost:3000/statistical/f3-data",
        "Detected Australian Counterfeits by Denomination – A7": "http://localhost:3000/statistical/a7-data",
        "B2 – Data": "http://localhost:3000/statistical/b2-data",
        "B2 – Series breaks": "http://localhost:3000/statistical/b2-series-breaks",
        "B9 – Data": "http://localhost:3000/statistical/b9-data",
        "B9 – Series breaks": "http://localhost:3000/statistical/b9-series-breaks",
        "B10 – Data": "http://localhost:3000/statistical/b10-data",
        "B10 – Series breaks": "http://localhost:3000/statistical/b10-series-breaks",
        "B11.1 – Assets": "http://localhost:3000/statistical/b11.1-assets",
        "B11.1 – Liabilities": "http://localhost:3000/statistical/b11.1-liabilities",
        "B11.1 – Series breaks": "http://localhost:3000/statistical/b11.1-series-breaks",
        "B11.2 – Exposures in AUD Terms": "http://localhost:3000/statistical/b11.2-exposures-in-aud-terms",
        "B11.2 – Exposures in USD Terms": "http://localhost:3000/statistical/b11.2-exposures-in-usd-terms",
        "B11.2 – Series breaks": "http://localhost:3000/statistical/b11.2-series-breaks",
        "B12.1 – Data": "http://localhost:3000/statistical/b12.1-data",
        "B12.1 – Series breaks": "http://localhost:3000/statistical/b12.1-series-breaks",
        "B12.1.1 – Africa and Middle East": "http://localhost:3000/statistical/b12.1.1-africa-and-middle-east",
        "B12.1.1 – Asia and Pacific": "http://localhost:3000/statistical/b12.1.1-asia-and-pacific",
        "B12.1.1 – Developed Countries": "http://localhost:3000/statistical/b12.1.1-developed-countries",
        "B12.1.1 – Developing Europe": "http://localhost:3000/statistical/b12.1.1-developing-europe",
        "B12.1.1 – Latin America and Caribbean": "http://localhost:3000/statistical/b12.1.1-latin-america-and-caribbean",
        "B12.1.1 – Offshore Centres": "http://localhost:3000/statistical/b12.1.1-offshore-centres",
        "B12.1.1 – Series breaks": "http://localhost:3000/statistical/b12.1.1-series-breaks",
        "B12.1.1 – Summary": "http://localhost:3000/statistical/b12.1.1-summary",
        "B12.2 – Data": "http://localhost:3000/statistical/b12.2-data",
        "B12.2 – Series breaks": "http://localhost:3000/statistical/b12.2-series-breaks",
        "B12.2.1 – Africa and Middle East": "http://localhost:3000/statistical/b12.2.1-africa-and-middle-east",
        "B12.2.1 – Asia and Pacific": "http://localhost:3000/statistical/b12.2.1-asia-and-pacific",
        "B12.2.1 – Developed Countries": "http://localhost:3000/statistical/b12.2.1-developed-countries",
        "B12.2.1 – Developing Europe": "http://localhost:3000/statistical/b12.2.1-developing-europe",
        "B12.2.1 – Latin America and Caribbean": "http://localhost:3000/statistical/b12.2.1-latin-america-and-caribbean",
        "B12.2.1 – Offshore Centres": "http://localhost:3000/statistical/b12.2.1-offshore-centres",
        "B12.2.1 – Series breaks": "http://localhost:3000/statistical/b12.2.1-series-breaks",
        "B12.2.1 – Summary": "http://localhost:3000/statistical/b12.2.1-summary",
        "B13.1 – Data": "http://localhost:3000/statistical/b13.1-data",
        "B13.1 – Series breaks": "http://localhost:3000/statistical/b13.1-series-breaks",
        "B13.1.1 – Africa and Middle East": "http://localhost:3000/statistical/b13.1.1-africa-and-middle-east",
        "B13.1.1 – Asia and Pacific": "http://localhost:3000/statistical/b13.1.1-asia-and-pacific",
        "B13.1.1 – Developed Countries": "http://localhost:3000/statistical/b13.1.1-developed-countries",
        "B13.1.1 – Developing Europe": "http://localhost:3000/statistical/b13.1.1-developing-europe",
        "B13.1.1 – Latin America and Caribbean": "http://localhost:3000/statistical/b13.1.1-latin-america-and-caribbean",
        "B13.1.1 – Offshore Centres": "http://localhost:3000/statistical/b13.1.1-offshore-centres",
        "B13.1.1 – Series breaks": "http://localhost:3000/statistical/b13.1.1-series-breaks",
        "B13.1.1 – Summary": "http://localhost:3000/statistical/b13.1.1-summary",
        "B13.1.2 – Africa and Middle East": "http://localhost:3000/statistical/b13.1.2-africa-and-middle-east",
        "B13.1.2 – Asia and Pacific": "http://localhost:3000/statistical/b13.1.2-asia-and-pacific",
        "B13.1.2 – Developed Countries": "http://localhost:3000/statistical/b13.1.2-developed-countries",
        "B13.1.2 – Developing Europe": "http://localhost:3000/statistical/b13.1.2-developing-europe",
        "B13.1.2 – Latin America and Caribbean": "http://localhost:3000/statistical/b13.1.2-latin-america-and-caribbean",
        "B13.1.2 – Offshore Centres": "http://localhost:3000/statistical/b13.1.2-offshore-centres",
        "B13.1.2 – Series breaks": "http://localhost:3000/statistical/b13.1.2-series-breaks",
        "B13.1.2 – Summary": "http://localhost:3000/statistical/b13.1.2-summary",
        "B13.2 – Data": "http://localhost:3000/statistical/b13.2-data",
        "B13.2 – Series breaks": "http://localhost:3000/statistical/b13.2-series-breaks",
        "B13.2.1 – Africa and Middle East": "http://localhost:3000/statistical/b13.2.1-africa-and-middle-east",
        "B13.2.1 – Asia and Pacific": "http://localhost:3000/statistical/b13.2.1-asia-and-pacific",
        "B13.2.1 – Developed Countries": "http://localhost:3000/statistical/b13.2.1-developed-countries",
        "B13.2.1 – Developing Europe": "http://localhost:3000/statistical/b13.2.1-developing-europe",
        "B13.2.1 – Latin America and Caribbean": "http://localhost:3000/statistical/b13.2.1-latin-america-and-caribbean",
        "B13.2.1 – Offshore Centres": "http://localhost:3000/statistical/b13.2.1-offshore-centres",
        "B13.2.1 – Series breaks": "http://localhost:3000/statistical/b13.2.1-series-breaks",
        "B13.2.1 – Summary": "http://localhost:3000/statistical/b13.2.1-summary",
        "Life Insurance Offices – Statutory Funds – B14": "http://localhost:3000/statistical/b14-data",
        "Superannuation Funds – Outside Life Offices – B15": "http://localhost:3000/statistical/b15-data",
        "Public Unit Trusts – B16": "http://localhost:3000/statistical/b16-data",
        "Cash Management Trusts – B17": "http://localhost:3000/statistical/b17-data",
        "Managed Funds – B18": "http://localhost:3000/statistical/b18-data",
        "Securitisation Vehicles – B19": "http://localhost:3000/statistical/b19-data",
        "C1 – Data": "http://localhost:3000/statistical/c1.1-data",
        "C1 – Series breaks": "http://localhost:3000/statistical/c1.1-series-breaks",
        "C2 – Data": "http://localhost:3000/statistical/c2-data",
        "C2 – Series breaks": "http://localhost:3000/statistical/c2-series-breaks",
        "C3 – Data": "http://localhost:3000/statistical/c3-data",
        "C3 – Series breaks": "http://localhost:3000/statistical/c3-series-breaks",
        "C4 – Data": "http://localhost:3000/statistical/c4-data",
        "C4 – Series breaks": "http://localhost:3000/statistical/c4-series-breaks",
        "C5 – Data": "http://localhost:3000/statistical/c5-data",
        "C5 – Series breaks": "http://localhost:3000/statistical/c5-series-breaks",
        "C6 – Data": "http://localhost:3000/statistical/c6-data",
        "C6 – Series breaks": "http://localhost:3000/statistical/c6-series-breaks",
        "Real-time Gross Settlement Statistics – C7": "http://localhost:3000/statistical/c7-data",
        "Points of Access to the Australian Payments System – C8": "http://localhost:3000/statistical/c8-data",
        "C9 – Data": "http://localhost:3000/statistical/c9-data",
        "C9 – Series breaks": "http://localhost:3000/statistical/c9-series-breaks",
        "Growth in Selected Financial Aggregates – D1": "http://localhost:3000/statistical/d1-data",
        "D2 – Data": "http://localhost:3000/statistical/d2-data",
        "D2 – Series breaks": "http://localhost:3000/statistical/d2-series-breaks",
        "D3 – Data": "http://localhost:3000/statistical/d3-data",
        "D3 – Series breaks": "http://localhost:3000/statistical/d3-series-breaks",
        "Debt Securities Outstanding – D4": "http://localhost:3000/statistical/d4-data",
        "D5 – Data": "http://localhost:3000/statistical/d5-data",
        "D5 – Series breaks": "http://localhost:3000/statistical/d5-series-breaks",
        "Lending Commitments – All Lenders – D6": "http://localhost:3000/statistical/d6-data",
        "Bank Lending to Business – Variable-rate Loans Outstanding by Size and by Interest Rate – D7": "http://localhost:3000/statistical/d7-data",
        "Bank Lending to Business – Fixed-rate Loans Outstanding by Size and by Interest Rate – D7.1": "http://localhost:3000/statistical/d7.1-data",
        "Bank Lending to Business – Bills Outstanding by Size and by Interest Rate – D7.2": "http://localhost:3000/statistical/d7.2-data",
        "Bank Lending to Business – Total Credit Outstanding by Size and by Sector – D7.3": "http://localhost:3000/statistical/d7.3-data",
        "Bank Lending to Business – New Credit Approvals by Size and by Purpose – D7.4": "http://localhost:3000/statistical/d7.4-data",
        "Bank Lending to Business – Selected Statistics – D8": "http://localhost:3000/statistical/d8-data",
        "Rural Debt by Lender – D9": "http://localhost:3000/statistical/d9-data",
        "D10 – Data": "http://localhost:3000/statistical/d10-data",
        "D10 – Series breaks": "http://localhost:3000/statistical/d10-series-breaks",
        "Monetary Statistics (IMF Framework) – Central Bank Survey – D11": "http://localhost:3000/statistical/d11-data",
        "Monetary Statistics (IMF Framework) – Authorised Deposit-taking Institutions Survey – D12": "http://localhost:3000/statistical/d12-data",
        "Monetary Statistics (IMF Framework) – Consolidated Survey – D13": "http://localhost:3000/statistical/d13-data",
        "Household and Business Balance Sheets – E1": "http://localhost:3000/statistical/e1-data",
        "Household Finances – Selected Ratios – E2": "http://localhost:3000/statistical/e2-data",
        "E3 –2014": "http://localhost:3000/statistical/e3-2014",
        "E3 –2010": "http://localhost:3000/statistical/e3-2010",
        "E3 –2006": "http://localhost:3000/statistical/e3-2006",
        "E3 –2002": "http://localhost:3000/statistical/e3-2002",
        "E4 –2014": "http://localhost:3000/statistical/e4-2014",
        "E4 –2010": "http://localhost:3000/statistical/e4-2010",
        "E4 –2006": "http://localhost:3000/statistical/e4-2006",
        "E4 –2002": "http://localhost:3000/statistical/e4-2002",
        "E5 –2014": "http://localhost:3000/statistical/e5-2014",
        "E5 –2010": "http://localhost:3000/statistical/e5-2010",
        "E5 –2006": "http://localhost:3000/statistical/e5-2006",
        "E5 –2002": "http://localhost:3000/statistical/e5-2002",
        "E6 –2014": "http://localhost:3000/statistical/e6-2014",
        "E6 –2010": "http://localhost:3000/statistical/e6-2010",
        "E6 –2006": "http://localhost:3000/statistical/e6-2006",
        "E6 –2002": "http://localhost:3000/statistical/e6-2002",
        "E7 –2014": "http://localhost:3000/statistical/e7-2014",
        "E7 –2010": "http://localhost:3000/statistical/e7-2010",
        "E7 –2006": "http://localhost:3000/statistical/e7-2006",
        "E7 –2002": "http://localhost:3000/statistical/e7-2002",
        "Interest Rates and Yields – Money Market – Daily – F1": "http://localhost:3000/statistical/f1-data",
        "Interest Rates and Yields – Money Market – Monthly – F1.1": "http://localhost:3000/statistical/f1.1-data",
        "Capital Market Yields – Government Bonds – Daily – F2": "http://localhost:3000/statistical/f2-data",
        "Capital Market Yields – Government Bonds – Monthly – F2.1": "http://localhost:3000/statistical/f2.1-data",
        "F4 – Data": "http://localhost:3000/statistical/f4-data",
        "F4 – Series breaks": "http://localhost:3000/statistical/f4-series-breaks",
        "F5 – Data": "http://localhost:3000/statistical/f5-data",
        "F5 – Series breaks": "http://localhost:3000/statistical/f5-series-breaks",
        "International Official Interest Rates – F13": "http://localhost:3000/statistical/f13-data",
        "Indicative Mid Rates of Australian Government Securities – F16": "http://localhost:3000/statistical/f16-data",
        "F17 – Discount Factors": "http://localhost:3000/statistical/f17-discount-factors",
        "F17 – Forward Rates": "http://localhost:3000/statistical/f17-forward-rates",
        "F17 – Yields": "http://localhost:3000/statistical/f17-yields",
        "Exchange Rates – Daily - 2014 to Current – F11.1": "http://localhost:3000/statistical/f11.1-data",
        "Foreign Exchange Turnover Against Australian Dollars – F9": "http://localhost:3000/statistical/f9-data",
        "Foreign Exchange Turnover Against All Currencies – F10": "http://localhost:3000/statistical/f10-data",
        "Real Exchange Rate Measures – F15": "http://localhost:3000/statistical/f15-data",
        "US Dollar Exchange Rates and Gold Price – F12": "http://localhost:3000/statistical/f12-data",
        "Consumer Price Inflation – G1": "http://localhost:3000/statistical/g1-data",
        "Consumer Price Inflation – Expenditure Groups – G2": "http://localhost:3000/statistical/g2-data",
        "Inflation Expectations – G3": "http://localhost:3000/statistical/g3-data",
        "Gross Domestic Product and Income – H1": "http://localhost:3000/statistical/h1-data",
        "Demand and Income – H2": "http://localhost:3000/statistical/h2-data",
        "Monthly Activity Indicators – H3": "http://localhost:3000/statistical/h3-data",
        "Labour Costs and Productivity – H4": "http://localhost:3000/statistical/h4-data",
        "Labour Force – H5": "http://localhost:3000/statistical/h5-data",
        "International Trade and Balance of Payments – I1": "http://localhost:3000/statistical/i1-data",
        "Commodity Prices – I2": "http://localhost:3000/statistical/i2-data",
        "Balance of Payments – Financial Account – I3": "http://localhost:3000/statistical/i3-data",
        "Australia's Gross Foreign Assets and Liabilities – I4": "http://localhost:3000/statistical/i4-data",
        "Australia's Net Foreign Liabilities – I5": "http://localhost:3000/statistical/i5-data"
    });
});

app.get('/statistical/:table/', downloadCSV, function (req, res) {
    console.log("Downloading Table: " + req.params.table);
});

/*function downloadA1Det(req, res, next) {
    //Downloading a2 from RBA Website and returning its content as an object
    getCSV('http://www.rba.gov.au/statistics/tables/csv/a1-data-detailed.csv', {delimiter: ',', ignoreEmpty: true, headers: false })
        .then(function(rows) {
            //beautifying JSON
            const parsedData = JSON.stringify(rows, null, 4);
            const reducedData = rows.splice(0,9);
            console.log(reducedData);
            res.json(rows);
        });
    next();
}

function downloadA2(req, res, next) {
    //Downloading a2 from RBA Website and returning its content as an object
    getCSV('https://www.rba.gov.au/statistics/tables/csv/a2-data.csv', {delimiter: ',', ignoreEmpty: true, headers: false })
        .then(function(rows) {
            //beautifying JSON
            const parsedData = JSON.stringify(rows, null, 4);
            const reducedData = rows.splice(0,9);
            console.log(reducedData);
            res.json(rows);
        });
    next();
}

function downloadaTwi(req, res, next) {
    //Downloading a2 from RBA Website and returning its content as an object
    getCSV('http://www.rba.gov.au/statistics/tables/csv/f11.1-data.csv', {delimiter: ',', ignoreEmpty: true, headers: false})
        .then(function(rows) {
            //beautifying JSON
            const parsedData = JSON.stringify(rows, null, 4);
            const reducedData = rows.splice(0,9);
            console.log(reducedData);
            res.json(rows);
        });
    next();
}

function downloadaFX(req, res, next) {
    //Downloading a2 from RBA Website and returning its content as an object
    getCSV('https://www.rba.gov.au/statistics/tables/csv/f11-data.csv', {delimiter: ',', ignoreEmpty: true, headers: false})
        .then(function(rows) {
            //beautifying JSON
            const parsedData = JSON.stringify(rows, null, 4);
            const reducedData = rows.splice(0,9);
            console.log(reducedData);
            res.json(rows);
        });
    next();
}

app.get('/statistical/a1/', downloadA1Det, function(req, res) {
    console.log('page visited: ' + req.url);
});

app.get('/statistical/a2/', downloadA2, function(req, res) {
    console.log('page visited: ' + req.url);
});

app.get('/statistical/twi/', downloadaTwi, function(req, res) {
    console.log('page visited: ' + req.url);
});

app.get('/statistical/f11/', downloadaFX, function(req, res) {
    console.log('page visited: ' + req.url);
});*/

app.listen(3000);