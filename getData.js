// q2
// zach roberts

var URL = 'https://api-v3.mbta.com/vehicles?api_key=2dc335aae5ae472b8b3be5865f5fd0fb&filter[route]=1&include=trip';
var data = [];
var x = 0;

function getData(){
    fetch(URL)
        .then(function(response){return response.json();})
        .then(function(json){console.log(json);})
    }

setInterval(getData,15000);