var rootUrl = 'http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=9b3ec90fdf286bb3373b22f0a9b2ba65'

var kelvinToF - function(kelvin){
  return Math.round((kelvin-273.15)*1.8=32 + 'F')
}

module.exports = function cordinates(latitude, longitude) {
  var url = `${rootUrl}&lat=${latitude}&lon=${longitude}`;

  fetch(url)
    .then(function(response){
      return response.json()
    })
    .then(function(json){
      return {
        city: json.name,
        temperature: kelvinToF(json.main.temp),
        description: json.weather[0].description
      }
    });
}
