var currentCity = document.querySelector('.currentCity')
var currentTemp = document.querySelector('.Temperature')
var currentWind = document.querySelector('.Wind')
var currentHumidity = document.querySelector('.Humidity')

var cityName = 'San Diego'

var Weather_API_Key = "7cf47c1dd3cac3c59e200954bea4d663";
var url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${Weather_API_Key}`


fetch(url).then(function (response) {
    return response.json()
}).then(function (data) {
    console.log(data)
    currentCity.textContent = data.city.name + ' ' + data.list[0].dt_txt
    currentTemp.textContent = 'Temperature: ' + Math.round(((((data.list[0].main.temp - 273)*9)/5)+32)) + ' °F'
    currentWind.textContent = 'Wind: ' + data.list[0].wind.speed + ' meters/sec'
    currentHumidity.textContent= 'Humidity: ' + data.list[0].main.humidity + '%'
    return
})
