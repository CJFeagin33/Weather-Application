// Current Day Forcast Variables:

var currentCity = document.querySelector('.currentCity')
var currentTemp = document.querySelector('.Temp')
var currentWind = document.querySelector('.Wind')
var currentHumidity = document.querySelector('.Humidity')

// 5 Day Forcast Variables:

var Date1 = document.querySelector('.Date1')
var Temp1 = document.querySelector('.Temp1')
var Wind1 = document.querySelector('.Wind1')
var Humidity1 = document.querySelector('.Humidity1')

var Date2 = document.querySelector('.Date2')
var Temp2 = document.querySelector('.Temp2')
var Wind2 = document.querySelector('.Wind2')
var Humidity2 = document.querySelector('.Humidity2')

var Date3 = document.querySelector('.Date3')
var Temp3 = document.querySelector('.Temp3')
var Wind3 = document.querySelector('.Wind3')
var Humidity3 = document.querySelector('.Humidity3')

var Date4 = document.querySelector('.Date4')
var Temp4 = document.querySelector('.Temp4')
var Wind4 = document.querySelector('.Wind4')
var Humidity4 = document.querySelector('.Humidity4')

var Date5 = document.querySelector('.Date5')
var Temp5 = document.querySelector('.Temp5')
var Wind5 = document.querySelector('.Wind5')
var Humidity5 = document.querySelector('.Humidity5')

var cityName = 'San Diego'

var Weather_API_Key = "7cf47c1dd3cac3c59e200954bea4d663";
var url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${Weather_API_Key}`


fetch(url).then(function (response) {
    return response.json()
}).then(function (data) {
    console.log(data)

    // Current Day Weather Forcast:

    currentCity.textContent = data.city.name + ' ' + data.list[0].dt_txt
    currentTemp.textContent = 'Temp: ' + Math.round(((((data.list[0].main.temp - 273)*9)/5)+32)) + ' °F'
    currentWind.textContent = 'Wind: ' + Math.round((data.list[0].wind.speed)*2.237) + ' MPH'
    currentHumidity.textContent= 'Humidity: ' + data.list[0].main.humidity + ' %'

    // 5 Day Weather Forcast:

    Date1.textContent = data.list[5].dt_txt
    Temp1.textContent = 'Temp: ' + Math.round(((((data.list[5].main.temp - 273)*9)/5)+32)) + ' °F'
    Wind1.textContent = 'Wind: ' + Math.round((data.list[5].wind.speed)*2.237) + ' MPH'
    Humidity1.textContent = 'Humidity: ' + data.list[5].main.humidity + ' %'

    Date2.textContent = data.list[13].dt_txt
    Temp2.textContent = 'Temp: ' + Math.round(((((data.list[13].main.temp - 273)*9)/5)+32)) + ' °F'
    Wind2.textContent = 'Wind: ' + Math.round((data.list[13].wind.speed)*2.237) + ' MPH'
    Humidity2.textContent = 'Humidity: ' + data.list[13].main.humidity + ' %'

    Date3.textContent = data.list[21].dt_txt
    Temp3.textContent = 'Temp: ' + Math.round(((((data.list[21].main.temp - 273)*9)/5)+32)) + ' °F'
    Wind3.textContent = 'Wind: ' + Math.round((data.list[21].wind.speed)*2.237) + ' MPH'
    Humidity3.textContent = 'Humidity: ' + data.list[21].main.humidity + ' %'

    Date4.textContent = data.list[29].dt_txt
    Temp4.textContent = 'Temp: ' + Math.round(((((data.list[29].main.temp - 273)*9)/5)+32)) + ' °F'
    Wind4.textContent = 'Wind: ' + Math.round((data.list[29].wind.speed)*2.237) + ' MPH'
    Humidity4.textContent = 'Humidity: ' + data.list[29].main.humidity + ' %'

    Date5.textContent = data.list[37].dt_txt
    Temp5.textContent = 'Temp: ' + Math.round(((((data.list[37].main.temp - 273)*9)/5)+32)) + ' °F'
    Wind5.textContent = 'Wind: ' + Math.round((data.list[37].wind.speed)*2.237) + ' MPH'
    Humidity5.textContent = 'Humidity: ' + data.list[37].main.humidity + ' %'
    
    return
})
