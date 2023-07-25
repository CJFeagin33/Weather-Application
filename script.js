var lat = 44.34;
var lon = 10.99;

var Weather_API_Key = "7cf47c1dd3cac3c59e200954bea4d663";
var url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${Weather_API_Key}`



var responseText = document.querySelector(".card")

function getApi(url){
    console.log(url)
    fetch(url)
        .then(function (response){
            console.log(response);
            if (response.status === 200) {
                responseText.textContent = response.status;
            }
            return response.json();
    });
}

getApi(url)