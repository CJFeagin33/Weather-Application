// Local storage container variable:

var pastCitiesSearched = localStorage.getItem('Cities')
if(pastCitiesSearched) {
    pastCitiesSearched = JSON.parse(pastCitiesSearched)
} else {
    pastCitiesSearched = []
}

// Input and Search BTN Variables:

var searchBar = document.querySelector('.citySearch')
var searchBtn = document.querySelector('.searchBtn')

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

// API Information
function getWeather (cityName, isNotPullingFromLocalStorage) {
    console.log(cityName)
    
    var Weather_API_Key = "7cf47c1dd3cac3c59e200954bea4d663"
    var url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${Weather_API_Key}`

    if (!cityName) {
        alert('Error! Make sure to insert a City in the Search Bar.')
        return
    }

    fetch(url).then(function (response) {
        return response.json()
    }).then(function (data) {
        console.log(data)

        // I only want to add the City Name to Local Storage if the fetch was successful
        if (isNotPullingFromLocalStorage) {
            if (data.cod == 404) {
                alert('Error! Make sure the City Name inserted is correctly spelled.')
            } else {
                pastCitiesSearched.push(cityName)
                localStorage.setItem("Cities",JSON.stringify(pastCitiesSearched))
            }
        }

        // Current Day Weather Forcast:

        currentCity.innerHTML = data.city.name + ' ' + dayjs(data.list[0].dt_txt).format('M/D/YYYY') + `<img src = "https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png">`
        currentTemp.innerHTML = 'Temp: ' + Math.round(((((data.list[0].main.temp - 273)*9)/5)+32)) + ' °F'
        currentWind.innerHTML = 'Wind: ' + Math.round((data.list[0].wind.speed)*2.237) + ' MPH'
        currentHumidity.innerHTML= 'Humidity: ' + data.list[0].main.humidity + ' %'

        // 5 Day Weather Forcast:

        Date1.innerHTML = dayjs(data.list[5].dt_txt).format('M/D/YYYY') + `<img src = "https://openweathermap.org/img/w/${data.list[5].weather[0].icon}.png">`
        Temp1.innerHTML = 'Temp: ' + Math.round(((((data.list[5].main.temp - 273)*9)/5)+32)) + ' °F'
        Wind1.innerHTML = 'Wind: ' + Math.round((data.list[5].wind.speed)*2.237) + ' MPH'
        Humidity1.innerHTML = 'Humidity: ' + data.list[5].main.humidity + ' %'

        Date2.innerHTML = dayjs(data.list[13].dt_txt).format('M/D/YYYY') + `<img src = "https://openweathermap.org/img/w/${data.list[13].weather[0].icon}.png">`
        Temp2.innerHTML = 'Temp: ' + Math.round(((((data.list[13].main.temp - 273)*9)/5)+32)) + ' °F'
        Wind2.innerHTML = 'Wind: ' + Math.round((data.list[13].wind.speed)*2.237) + ' MPH'
        Humidity2.innerHTML = 'Humidity: ' + data.list[13].main.humidity + ' %'

        Date3.innerHTML = dayjs(data.list[21].dt_txt).format('M/D/YYYY') + `<img src = "https://openweathermap.org/img/w/${data.list[21].weather[0].icon}.png">`
        Temp3.innerHTML = 'Temp: ' + Math.round(((((data.list[21].main.temp - 273)*9)/5)+32)) + ' °F'
        Wind3.innerHTML = 'Wind: ' + Math.round((data.list[21].wind.speed)*2.237) + ' MPH'
        Humidity3.innerHTML = 'Humidity: ' + data.list[21].main.humidity + ' %'

        Date4.innerHTML = dayjs(data.list[29].dt_txt).format('M/D/YYYY') + `<img src = "https://openweathermap.org/img/w/${data.list[29].weather[0].icon}.png">`
        Temp4.innerHTML = 'Temp: ' + Math.round(((((data.list[29].main.temp - 273)*9)/5)+32)) + ' °F'
        Wind4.innerHTML = 'Wind: ' + Math.round((data.list[29].wind.speed)*2.237) + ' MPH'
        Humidity4.innerHTML = 'Humidity: ' + data.list[29].main.humidity + ' %'

        Date5.innerHTML = dayjs(data.list[37].dt_txt).format('M/D/YYYY') + `<img src = "https://openweathermap.org/img/w/${data.list[37].weather[0].icon}.png">`
        Temp5.innerHTML = 'Temp: ' + Math.round(((((data.list[37].main.temp - 273)*9)/5)+32)) + ' °F'
        Wind5.innerHTML = 'Wind: ' + Math.round((data.list[37].wind.speed)*2.237) + ' MPH'
        Humidity5.innerHTML = 'Humidity: ' + data.list[37].main.humidity + ' %'

        return
    })
}

// Function for displaying past searched cities in local storage:

var displayPreviousSearches = function () {
    for (var i = 0; i < pastCitiesSearched.length; i++){
        var previousLocationBtn =  document.createElement('button')
        previousLocationBtn.setAttribute('class', 'btn btn-secondary')
        var cityName1 = pastCitiesSearched[i]
        previousLocationBtn.innerHTML = cityName1
        previousLocationBtn.onclick = function () {
            getWeather(this.textContent, false)
        }
        var recentSearches = document.querySelector('.recentSearches')
        recentSearches.appendChild(previousLocationBtn)
    }

}

displayPreviousSearches()

// event listeners

searchBtn.addEventListener('click', function () {
    var cityName = searchBar.value
    getWeather(cityName, true)
})
