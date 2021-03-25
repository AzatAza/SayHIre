const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const createCsvWriter = require('csv-writer').createObjectCsvWriter
 
fs.createReadStream('input.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
        console.log(results);
    });

let arr = [];
function postman(input.csv) {
    for (var i = 0; i < results.length; i++) {
        if(results[i].Активный == 'да') {
             arr = arr.concat(results[i]);
        }
    }
  arr.sort(function(a, b){
    return a.Дом-b.Дом
})
  
return arr.sort(function(a, b){
    var УлицаA=a.Улица.toLowerCase(), 
        УлицаB=b.Улица.toLowerCase();
    if (УлицаA < УлицаB)
        return -1
    if (УлицаA > УлицаB)
        return 1
    return 0
})
    
};

const csvWriter = createCsvWriter({ 
    path: 'output.csv', 
    header: [ 
        {id: 'Улица', title: 'улица'}, 
        {id: 'Дом', title: 'дом'}, 
        {id: 'Активный', title: 'активный'}
        ] 
});

csvWriter .writeRecords(inpup.csv) 
    .then(() => console.log('The CSV file was written successfully')); 



