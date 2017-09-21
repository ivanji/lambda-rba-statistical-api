const express = require('express');
const getCSV = require('get-csv');
const fs = require('fs');
app = express();



function csvData(req, res, next) {
    getCSV('https://www.rba.gov.au/statistics/tables/csv/a1-data-summary.csv?v=2017-09-20-20-03-52', {
        headers: false,
        objectMode: true,
        ignoreEmpty: true,
        discardUnmappedColumns: false,
        quoteHeaders: {a: true},
        strictColumnHandling: true})
        .then(function(rows) {
            res.json(rows);
        });

   next();
}

const request=require('request');
const csv=require('csvtojson');



/*

function csvParser(req, res, next) {
    const csvFilePath = 'http://www.rba.gov.au/statistics/tables/csv/f11.1-data.csv';
    csv()
        .fromFile(csvFilePath)
        .on('data', function(data){
            //data is a buffer object
            const jsonStr = data.toString('utf8');
            res.send(jsonStr);
            console.log(jsonStr);
        });
        next();

}
*/

//app.use(csv);jswi
app.get('/', csvData, function(req, res) {
   //res.send("Jola");
  /// console.log(parsedCSV);
});

app.listen(3000, function (err) {
    if (err) throw err;
    else {
        console.log("App started on port 3000");
    }
});